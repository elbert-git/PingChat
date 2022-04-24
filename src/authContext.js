import  React, {useEffect, useState, useContext} from 'react'

//create context element
export const authContext = React.createContext();

//create context hook
export function useAuth(){
  return useContext(authContext);
}

export default function AuthProvider ({children}) {
	const [user, setUser] = useState({});
	 
	// put context handling code here
	return (
		<authContext.Provider value={[user, setUser]}>
			{children}
		</authContext.Provider>
	)
}
