export default function SendInput(prop){
	// on text field enter function
	function onTextFieldEnter(e){
		e.preventDefault();
		 
		if(e.key == 'enter' || e.keycose === 13){
			console.log("aaa")
		}
	}
	 
	return(
		<div className="div--flex div--chatInputParent">
			<input type="text" placeholder="Type your message here" className="div--flexGrow div--chatInput" ref={prop.refHook} />
			<button onClick={prop.sendFunc} className="div--sendButton">Send</button>
		</div>
	)
}
