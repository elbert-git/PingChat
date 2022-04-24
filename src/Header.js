import {Link} from 'react-router-dom';
import {useAuth} from './authContext';
import AccountBadge from './AccoutnBadge';

export default function Header(){
	const user = useAuth();
	 
	return(
		<div className="div--flexSpreadHorizontal">
			<div>
				<span>Ping</span>
				{user ? (<> <span>chat</span> <span>profile</span></>) : null}
			</div>
			 
			<AccountBadge/>
		</div>
	)
}
