import {useEffect, useState, useRef} from 'react';
import {onSnapshot, addDoc, serverTimestamp} from 'firebase/firestore';
import {db, chatCollection, queryCall} from '../../firebase'
import {useAuth} from '../../authContext';
import SendInput from './sendInput';
import MessageLog from './messageLog';

 
export default function ChatPage(){
	// --- variables
	//create chat state
	const [chatData, setChatData] = useState([]);
	//create input ref hook
	const elChatTextField = useRef();
	// user auth context
	const [user,] = useAuth();
	//firestore variales
	 
	// --- chat data listener
	//load data from fireBase
	useEffect(()=>{ 
		// chat listener creation
		const unsubscribe = onSnapshot(queryCall, (querySnapshot)=>{
			let finalArray = []
			querySnapshot.forEach(doc => {
				finalArray.push({...doc.data(), id: doc.id})
			});
			setChatData(finalArray);
		});
	},[]);
	 
	// --- sending chat stuff
	function sendMessage(e){
		e.preventDefault();
		 
		//prevent empty message
		if(elChatTextField.current.value === ''){
			return null
		}
		 
		//create message object
		const messageObject = {
			body: elChatTextField.current.value,
			displayPicture: user.photoURL,
			senderId: user.uid,
			messageId: Math.random(),
			timeStamp: serverTimestamp(),
			userName: user.displayName
		}
		 
		// send message object to firebase
		addDoc(chatCollection, messageObject);
		 
		// reset text field
		elChatTextField.current.value = null;
	}
	 
	return(
		<div className="debug--red div--flexGrow div--flexColumn">
			<MessageLog messages={chatData}/>
			<SendInput sendFunc={sendMessage} refHook={elChatTextField}/>
		</div>
	)
}
