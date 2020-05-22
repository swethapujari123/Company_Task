import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            email:""


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successful`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            email: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." required /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." required/><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..."  required /><br />
                    {/*  <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option> 
                    </select><br />  */}
                     <label>email :</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="email..." required/><br />
                    <input type="submit" value="Submit" />
                </form>

           
            

            {/* <form onSubmit={this.handleSubmit}> */}
               {/*  <h1>Registration</h1> 
                <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." required /><br />
                
                <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..."  required /><br />
               
                
                <input type="submit" value="Submit" />
            </form> */}

            </div>
        )
                
    }
}

export default Form
