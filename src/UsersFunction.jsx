import React, {useState, useEffect} from 'react';
import axios from 'axios';


const UsersFunction = () => {
    let myUsers = [];
    const [users, setUsers] = useState(myUsers);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then( responds => {
            console.log(responds);
            setUsers(responds.data)
        }).catch(err => {
            console.log(err);
        })

    })
    return (
        <>
        <div>
          <h1>All Users</h1>  
        </div>
        <hr />
        <div>
            {users.map(user => <div>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>

                <hr />
            </div>)}
        </div>
        </>
    
    );
}

export default UsersFunction;
