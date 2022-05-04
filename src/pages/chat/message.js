import {useEffect, useState} from 'react';
import {useAuth} from '../../authContext';
 
export default function Message(prop){
	const [user,] = useAuth();
	 
	const rightStyle={
		justifyContent: "flex-end",
		width: "100%"
	};
	const leftStyle={
		justifyContent: "flex-start",
		width: "100%"
	};
	const [currentStyle, setCurrentStyle] = useState(leftStyle);
	 
	useEffect(()=>{
		if(user.uid===prop.userId){
			setCurrentStyle(rightStyle);
		}
	},[user]);
	 
	useEffect(()=>{
		//
	},[])
	 
	return(
		<div className="div--flex div--fillWidth" style={currentStyle}>
			<div className="div--flexColumn div--messageElement">
			<div className=""><strong>{prop.senderName}</strong></div>
			<div className="">{prop.body}</div>
			</div>
		</div>
	)
}
