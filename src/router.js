import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
 
//import route pages
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

export default function Router (prop) {
	return (
		<BrowserRouter>
			<Routes>
				{/*links*/}
				<Route path="/register" element={<RegisterPage/>}/>
				<Route path="/login" element={<LoginPage/>}/>
			</Routes>
		</BrowserRouter>
	)
}
