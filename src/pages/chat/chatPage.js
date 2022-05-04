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
	const elScrollDiv = useRef();
	// user auth context
	const [user,] = useAuth();
	
	//scroll to empty div
	function scrollDown(){
		elScrollDiv.current.scrollIntoView();
	}
	 
	// --- chat data listener
	//load data from fireBase
	useEffect(()=>{ 
		//scroll down
		scrollDown();
		 
		// chat listener creation
		const unsubscribe = onSnapshot(queryCall, (querySnapshot)=>{
			let finalArray = []
			querySnapshot.forEach(doc => {
				finalArray.push({...doc.data(), id: doc.id})
			});
			setChatData(finalArray.reverse());
		});
	},[]);
	//scroll down on chat data change
	useEffect(()=>{
		scrollDown();
	},[chatData])
	 
	 
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
			senderId: user.uid,
			messageId: Math.random(),
			timeStamp: serverTimestamp(),
			userName: user.displayName
		}
		 
		// send message object to firebase
		addDoc(chatCollection, messageObject);
		 
		// reset text field
		elChatTextField.current.value = null;
		 
		//scroll to empty div
		scrollDown();
	}
	 
	return(
		<div style={{height: "10px"}} className="div--flexGrow div--flexColumn">
			<MessageLog messages={chatData} refHook={elScrollDiv}/>
			<SendInput sendFunc={sendMessage} refHook={elChatTextField}/>
		</div>
	)
}
