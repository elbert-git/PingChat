import {useState, useEffect} from 'react';
import Message from './message';

export default function MessageLog(prop){
	// data from 
	return(
		<div className="div--flexGrow">
			{prop.messages.map(msg => {return <Message senderName={msg.userName} body={msg.body} key={msg.messageId} imageUrl={msg.displayPicture} />})}
		</div>
	)
}
