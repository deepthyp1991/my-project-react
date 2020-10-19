import React, { Component } from 'react'
import './Forms.css'

class Forms extends Component{
 constructor(){
     super()
     this.state = {
        firstName: '',
        lastName: '',
        emailId: '',
        phoneNo: '',
        message: ''
     }

     this.handleChange = this.handleChange.bind(this)
 }

 handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
       
 }

 handleClick(){
    alert("Message submitted")
} 
 render(){
     return (
         <form>
             <div className = 'App'>
             <div className = 'form-control'>
             <h1>Contact Us</h1> <br />
             <input type = 'text' 
            name = 'firstName'
            placeholder = 'First Name'
            onChange = {this.handleChange}/><br /><br />

            <input type = 'text' 
            name = 'lastName'
            placeholder = 'Last Name'
            onChange = {this.handleChange}/><br /><br />

            <input type = 'email' 
            name = 'emailId'
            placeholder = 'Your email Id'
            onChange = {this.handleChange}/><br /><br />

            <input type = 'tel' 
            name = 'phoneNo'
            placeholder = 'Your phone number'
            onChange = {this.handleChange}/><br /><br />

            <input type = 'text' 
            name = 'message'
            placeholder = 'Message'
            onChange = {this.handleChange}/><br /><br />

            <button onClick = {this.handleClick}>Submit</button>
           
            </div>
            </div>
         </form>

     )
 }
}

export default Forms