import axios from "axios"
import React from "react"


export default class Users extends React.Component{
    state = {
        userid: '',
        email: ''
    };

    componentDidMount(){
        axios.get('http://localhost:5000/api/users/bc88cfeb-cf66-4920-975b-493c418940d1')
        .then(result => {
            console.log(result)
            this.setState({
                userid: result.data.userId,
                email: result.data.email
            })
        })
    }
}