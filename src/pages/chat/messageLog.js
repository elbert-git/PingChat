import {useState, useEffect} from 'react';
import Message from './message';

export default function MessageLog(){
	// set chat state
	const [chat, setChat] = useState([]);
	 
	//load data from firebase
	useEffect(()=>{
		// load
		console.log("a");
	},[]);
	
	// data from 
	return(
		<div className="div--flexGrow">
			<Message senderName="Bob" body="This is a test"/>
			{chat.map(msg => {return <Message senderName={msg.senderName} body={msg.body} />})}
		</div>
	)
}
