import UserListContainer from "./pages/UserLIstContainer/UserListContainer"
import { data } from "./constants/data"
import { useEffect, useState } from "react";


type UserData = {
  [key : string]:any;
}

const App = () => {

  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    data.then(userData => {
      setUsers(userData);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div className="main-container">
      <UserListContainer users={users}/>
    </div>
  )
}

export default App