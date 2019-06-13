import React from 'react';

function UserGreeting(props){
    return <h1>Bienvenue sur ce merveilleux site</h1>;
}
function GuestGreeting(props){
    return <h1>Bienvenue. Merci de vous inscrire sur ce merveilleux site</h1>;
}
function Greeting(props){
    const isLoggedIn= props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: false
            
        }
        // Bind permet de passer "le contexte" défini dans le père au fils, pour que c soit toujours fonctionnel. ReactJS hérite celà de JavaScript... Faire des recherches en JS pour mieuc comprendre
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        })
    }

    render(){
        const isLoggedIn= this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else{
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;