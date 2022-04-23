import React from 'react'
import { useContext } from 'react';

let userData = {user: "asdf"}

export const authContext = React.createContext();

export function useAuth(){
  return useContext(authContext);
}

export default function AuthProvider ({children}) {
	// put context handling code here
	return (
		<authContext.Provider value={userData}>
			{children}
		</authContext.Provider>
	)
}
