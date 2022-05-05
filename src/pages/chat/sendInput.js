export default function SendInput(prop){
	// on text field enter function
	function onTextFieldEnter(e){
		e.preventDefault();
		 
		if(e.key === 'Enter' || e.keycode === 13){
			prop.sendFunc(e);
		}
	}
	 
	return(
		<div className="div--flex div--chatInputParent">
			<input type="text" onKeyUp={onTextFieldEnter} placeholder="Type your message here" className="div--flexGrow div--chatInput" ref={prop.refHook} />
			<button onClick={prop.sendFunc} className="div--sendButton">Send</button>
		</div>
	)
}
