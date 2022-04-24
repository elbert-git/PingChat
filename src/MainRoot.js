import Router from './router';
import Header from './Header';

export default function MainRoot(){
	return(
		<div className="main-root div--fillHeight div--flexColumn">
			{/*Header*/}
			<Header/>
			{/*router*/}
			<Router/>
		</div>
	)
}
 
