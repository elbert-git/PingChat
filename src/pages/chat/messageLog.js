import {useState, useEffect, useRef} from 'react';
import Message from './message';

export default function MessageLog(prop){
	// data from 
	return(
		<div className="div--messageLog div--flexGrow">
			{prop.messages.map(msg => {return <Message senderName={msg.userName} body={msg.body} key={msg.messageId} userId={msg.senderId} />})}
			<div style={{height: "0px"}} ref={prop.refHook}/>
		</div>
	)
}
