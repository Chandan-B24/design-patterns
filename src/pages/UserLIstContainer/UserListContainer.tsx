import UserTable from "../../components/UserTable/UserTable"

type UserData = {
    [key : string]: any
}

type UserListContainerProps = {
    users: UserData[]
}


const UserListContainer = (props : UserListContainerProps) => {

    const { users } = props;
    

  return (
    <div>
      <h1>Rendering List of Users</h1>
      <UserTable users={users}/>
    </div>
  )
}

export default UserListContainer