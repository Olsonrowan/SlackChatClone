import React from 'react';
import { 
    HashRouter as Router,
    Route,
} from 'react-router-dom'

import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

class App extends React.Component{

    render(){

        return(
            <Router>
                <div>
                    <Route component={ LoginPage } exact path="/login"  />
                    <Route component={ SignUpPage } exact path="/signup" /> 
                    <Route component={ WelcomePage } exact path="/" /> 

                </div>
            </Router>
            
        )
    };
}

export default App