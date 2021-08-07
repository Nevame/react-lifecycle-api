import React, { Component } from 'react';

class UserClass extends Component {
    constructor (props) {
        super(props);

        this.state = {
            user: []
        }
    }

    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((responds) => responds.json())
        .then(users =>{
            console.log("users:", users)
            this.setState({user: users })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Users</h1> 
                <hr />
                <div>
                    {this.state.user.map(user => <div>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>

                        <hr />
                    </div>)}
                </div>
            </div>
        );
    }
}

export default UserClass;
