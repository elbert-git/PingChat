import React from 'react';
import ReactDom from 'react-dom';
import {Outlet} from "react-router-dom";
import {useAuth} from './authContext';

export default function ProtectedTest(){
	const user = useAuth();
	console.log(user);
	return(
		<div>
			{user.user=="boom" ?  (<Outlet/>) : ("no user")}
		</div>
	)
}
