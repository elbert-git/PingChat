export default function Message(prop){
	console.log(prop.imageUrl);
	return(
		<div className="debug--red div--flex">
			<div>{prop.senderName}</div>
			<div>
				<img src={prop.imageUrl}/>
				<div>{prop.body}</div>
			</div>
		</div>
	)
}
