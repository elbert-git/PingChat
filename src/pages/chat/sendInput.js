export default function SendInput(prop){
	// on text field enter function
	function onTextFieldEnter(e){
		e.preventDefault();
		 
		if(e.key == 'enter' || e.keycose === 13){
			console.log("aaa")
		}
	}
	 
	return(
		<div className="div--flex">
			<input type="text" className="div--flexGrow" ref={prop.refHook} />
			<button onClick={prop.sendFunc}>Send</button>
		</div>
	)
}
