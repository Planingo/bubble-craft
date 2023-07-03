import {useState, useContext, createContext, useMemo} from 'react'

const UserContext = createContext(null)

export function UserProvider({children}) {
  const [user, setUser] = useState(undefined)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <UserContext.Provider value={value} >
      { children }
    </UserContext.Provider>
  )
}

export function useUser() {
  const { user } = useContext(UserContext)
  return user
}

export function useSetUser() {
  const { setUser } = useContext(UserContext)
  return setUser
}