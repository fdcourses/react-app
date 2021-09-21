import { Component } from 'react';
 
class SelectedUsersList extends Component{
    render(){
const {users} = this.props
const selectedUsers = users.filter((users)=>users.isSelected)
const selectedUsfullName = selectedUsers.map((selectedUser)=>( `${selectedUser.name} ${selectedUser.surName}`))

return (
            <ul>Selected Users
                <li key={users.id}>{`${selectedUsfullName} `}</li>
            </ul>
        )
    }
}
export default SelectedUsersList;
