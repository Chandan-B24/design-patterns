import TableContent from "./TableContent"
import TableHeaders from "./TableHeaders"

type UserData = {
    [key : string]: any
}

type UserTableProps = {
    users: UserData[]
}


const UserTable = (props : UserTableProps) => {

    const {users} =props

  return (
    <div className="user-table-container">
        <table>
            <TableHeaders/>
           {users?.map((item) => <TableContent name={item.name} username={item.username} email={item.email} city={item.address.city} pincode={item.address.zipcode}/>)}
        </table>
    </div>
  )
}

export default UserTable