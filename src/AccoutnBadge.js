import {useAuth} from './authContext';
import {firebaseLogIn, firebaseLogOut} from './firebase';
import {onAuthStateChanged, getAuth} from 'firebase/auth';
 
export default function AccountBadge(prop){
	const [user, setUser] = useAuth();
	
	onAuthStateChanged(getAuth(), (user) => {setUser(user)});
	 
	// --- firebase auth stuff
	function clicked(){
		if(user){
			//log out
			firebaseLogOut();
		}
		else{
			//log in
			firebaseLogIn();
		}
	}
	 
	return(
		<div className="div--accountBadge" onClick={clicked}>
			<img src="" />
			<div>{user ? user.displayName : "Log In"}</div>
		</div>
	)
}
