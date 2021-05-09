import React from 'react'; 
import {AiOutlineUserAdd} from 'react-icons/ai'; 

const RegisterScreen = () => {
    return (
        <>
        <div className="auth__login_container">

        <div className="auth__login_title">

            Register
            <AiOutlineUserAdd style={{ margin:'5px 5px -2px 6px'}}/>
        </div>

        <div className="auth__login_form">
            <form>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />
                
                <input 
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="email"
                    placeholder="email"
                    name="Email"
                    className="auth__input"
                    autoComplete="off"
                />
                

                <input 
                    type="password"
                    placeholder="Password"
                    name="password1"
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                />

                <button 
                    className="btn pointer btn-primary btn-block"  
                >
                    Register
                </button>
            </form>
        </div>
    </div>
    </>
    )
}

export default RegisterScreen
