import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import auth context
import {useAuth} from './authContext';
 
//import route pages
// public routes;
import HomePage from './pages/HomePage';
// user routes;
import ChatPage from './pages/chat/chatPage';
// error routes;
import UnauthorizedPage from './pages/UnauthorizedPage';

export default function Router (prop) {
	// get auth
	const user = useAuth();
	 
	//if user log in return element. else return unauthorized
	function OnlyUser(element){
		//check user token
		if(user){return element;}
		else{return (<UnauthorizedPage/>);}
	}
	
	return (
		<BrowserRouter>
			<Routes>
				{/*public links*/}
				<Route path="/" element={<HomePage/>}/>
				 
				{/*user links*/}
				<Route  path="/chat" element={OnlyUser(<ChatPage/>)}/>
			</Routes>
		</BrowserRouter>
	)
}
