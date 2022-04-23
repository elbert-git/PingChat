import {Link} from 'react-router-dom';
import {useAuth} from './authContext';

export default function Header(){
	const user = useAuth();
	 
	return(
		<div className="div--flexSpreadHorizontal">
		 <div>Ping</div>
		 
		{user ? <div>aaa</div> : <div>bbb</div>}
		</div>
	)
}
