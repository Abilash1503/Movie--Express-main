import React from 'react';
import './admin.styles.scss';
import signInComponent from '../sign-in/sign-in.component';
import { withRouter } from 'react-router-dom';

class Admin extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }
     
    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/admin',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(this.state)
        })
        .then(res => {
            console.log(res.status);
            if(res.status === 401){
                console.log(res.status);
                alert("ERROR: Invalid Email and/or Password combination!");
                window.location.reload();
            }
            else if(res.status === 400){
                
                alert("ERROR: Fill all the required fields");
            }
            else{
               
                    this.props.onAuthChange('true');
                    this.props.history.push('/');
                
                
            }
        })
        .catch(err => console.log(err));
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='admin-container'>
                
                <span>Admin Login</span>
                <div className='form-container'>
                    <form>
                        <input className='input' name='username' type='text' label='admin' placeholder='admin' value={this.state.username} onChange={this.handleChange} required />
                        <input className='input' name='password' type='password' label='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
                        <button className='button' type='submit' onClick={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Admin);