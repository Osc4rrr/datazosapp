import React from 'react'; 

import {AiOutlineLogin} from 'react-icons/ai'; 

const LoginScreen = () => {
    return (
        <>
            
            <div className="auth__login_container">

                <div className="auth__login_title">

                    Login
                    <AiOutlineLogin style={{ margin:'5px 5px -2px 6px'}}/>
                </div>

                <div className="auth__login_form">
                    <form>
                        <input 
                            type="text"
                            placeholder="email"
                            name="email"
                            className="auth__input"
                            autoComplete="off"
                        />
                        
                        <input 
                            type="password"
                            placeholder="password"
                            name="password"
                            className="auth__input"
                            autoComplete="off"
                        />

                        <button 
                            className="btn pointer btn-primary btn-block"  
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
