import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage';
import { connect } from 'react-redux';
import Homepage from './pages/HomePage'

class App extends React.Component{


    render(){
        console.log(this.props.userstate)
        return(
            
                <Router>
                    <div>
                        <Route component={ WelcomePage } exact path="/" /> 
                        <Route component={ LoginPage } exact path="/login"  />
                        <Route component={ SignUpPage } exact path="/signup" /> 
                        <Route component={ ProfilePage }  exact path="/profile" /> 
                        <Route component={ Homepage }  exact path="/home" /> 

                    </div>
                </Router>
            
        )
    };
}

const mapStateToProps = state =>({
    userDataAuthenticated: state.user.authState,
    userstate: state.user
})

export default connect(mapStateToProps)(App)