import SendInput from './sendInput';
import MessageLog from './messageLog';
 
export default function ChatPage(){
	return(
		<div className="debug--red div--flexGrow div--flexColumn">
			<MessageLog/>
			<SendInput/>
		</div>
	)
}
