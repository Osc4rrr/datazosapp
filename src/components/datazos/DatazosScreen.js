import React from 'react'

const DatazosScreen = () => {

    const toggleMenu = () => {
        let toggle = document.querySelector('.toggle'); 
        let navigation = document.querySelector('.dScreen_navigation'); 
        let main = document.querySelector('.dScreen__main'); 
        
        toggle.classList.toggle('active'); 
        navigation.classList.toggle('active'); 
        main.classList.toggle('active'); 
    }
    return (
        <div className="dScreen__container">
            <div className="dScreen_navigation">
                <ul>
                    <li>
                    <a href="#">
                        <span className="dScreen_icon">
                            <i className="fa fa-database" aria-hidden="true"></i>
                        </span>
                        <span className="dScreen_title"><h2>Datazos App</h2></span>
                    </a>

                    </li>

                    <li>
                        <a href="#">
                            <span className="dScreen_icon">
                                <i className="fa fa-comment" aria-hidden="true"></i>
                            </span>
                            <span className="dScreen_title">Message</span>
                        </a>
                    </li>

                    <li>
                        <a href="#"> 
                            <span className="dScreen_icon">
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                            </span>
                            <span className="dScreen_title">Help</span>
                        </a>

                    </li>

                    <li>
                        <a href="#">
                            <span className="dScreen_icon">
                                <i className="fa fa-cog" aria-hidden="true"></i>
                            </span>
                            <span className="dScreen_title">Settings</span>
                        </a>

                    </li>

                    <li>
                        <a href="#">
                            <span className="dScreen_icon">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                            <span className="dScreen_title">My Account</span>
                        </a>
  
                    </li>

                    <li>
                        <a href="#">
                            <span className="dScreen_icon">
                                <i className="fa fa-sign-out-alt" aria-hidden="true"></i>
                            </span>
                            <span className="dScreen_title">Sign out</span>
                        </a>
  
                    </li>
                </ul>
            </div>

            <div className="dScreen__main">
                <div className="dScreen_topBar">
                    <div className="toggle" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>

                    <div className="dScreen_search">
                        <label>
                            <input type="text" placeholder="Search Here"></input>
                            <i className="fas fa-search"></i>

                        </label>

                    </div>

                    
                    <div className="dScreen_user">
                        <img src="/"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DatazosScreen
