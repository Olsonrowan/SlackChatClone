import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage';
import { connect } from 'react-redux';
import Homepage from './pages/HomePage'
import './styles/styles.css'
class App extends React.Component{


    render(){
        return(
                <Router>

                       {this.props.userDataAuthenticated ? (
                           <Switch>
                                <Route component={ ProfilePage }  exact path="/profile" /> 
                                <Route component={ Homepage }  exact path="/home" /> 
                           </Switch>
                       ) : (
                            <Switch>
                                <Route component={ WelcomePage } exact path="/" />
                                <Route component={ LoginPage } exact path="/login"  />
                                <Route component={ SignUpPage } exact path="/signup" /> 
                            </Switch>
                       )}

                </Router>
            
        )
    };
}

const mapStateToProps = state =>({
    userDataAuthenticated: state.user.authState,
    userstate: state.user
})

export default connect(mapStateToProps)(App)