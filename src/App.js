import { useEffect, useState } from "react";
import Routing from "./Config/Routing";
import { getUser } from "./api/authApi";


function App() {
  const [user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    if (!isMounted) {
      getUser()
        .then(result => {
          setUser(result)
          setLoggedIn(true)
          setIsMounted(true)
        })
        .catch(err => {
         setIsMounted(true)
        })
      
    }
  }, [])

  if(!isMounted ){
    return <div>Loading...</div>
  }


  return (
    <div>
      <Routing user={user} auth={loggedIn}/>
    </div>
  );
}

export default App;