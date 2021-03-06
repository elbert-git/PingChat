import {Link} from 'react-router-dom';
import {useAuth} from './authContext';
import AccountBadge from './AccoutnBadge';

export default function Header(){
	const user = useAuth();
	 
	return(
		<div className="div--flexSpreadHorizontal div--padding">
			<div className="div--mainLogo">
				<span>Ping</span>
			</div>
			 
			<AccountBadge/>
		</div>
	)
}
