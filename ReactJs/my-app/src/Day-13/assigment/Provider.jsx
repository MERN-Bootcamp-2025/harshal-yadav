import React,{createContext} from 'react'
const UserContext= createContext();

const Provider = ({ children }) => {
  const value123="Harshal yadav"
  return (
    <UserContext.Provider value={value123}>
      {children}
    </UserContext.Provider>
  )
}

export default Provider;