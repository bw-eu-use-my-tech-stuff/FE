import React, {useState} from 'react';
import '../styles/tachyon.css';

const Register = (props) => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeHandler = event => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        props.addUser(user)
        // props.history.push('/protected');
          console.log('reg: ',props.history)
      }

return(
    <div className="pa4 black-80">
            <form className="ba b--transparent ph0 mh0">
                <div className='pa4 black-80'>
                    <p className='db fw4 lh-copy f6'>
                        <label>Username</label>
                        <input type="text" name="username" onChange={changeHandler} value={user.username} required /></p>
                    <p className='db fw4 lh-copy f6'>
                        <label>Email</label>
                        <input type="email" name="email" onChange={changeHandler} value={user.email} required/></p>
                    <p className='db fw4 lh-copy f6'>
                        <label>Password</label>
                        <input type="password" name="password" onChange={changeHandler} value={user.password} required/>
                    </p>
                    <p className='db fw4 lh-copy f6'>
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" onChange={changeHandler} value={user.confirmPassword} required/>
                    </p>
                    <p></p>
                    <div className='checkbox'>
                        <input type='checkbox' name='tos' />
                        <p>I agree to the Terms and Conditions</p>
                    </div>
                    <button type='submit' onClick={handleSubmit} >Join</button>
            </div>
        </form>
    </div>
)
}
export default Register;