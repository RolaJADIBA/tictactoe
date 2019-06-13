import React from 'react';


class Clock extends React.Component{

    //première fonction qui s'execute pour CREER le compsant --->c'est celle qui le construit 
    // Constructor = constructor
    constructor(propos){
        super(propos);
        this.state={
            date: new Date()
        };
    }
    render(){
        return(
            <div>
                <h1>Heure locale</h1>
                <h2>Il est actuellement {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
    // une fois que l'affichage (render) a lieu, la fonction suivente s'execute directement
    // ComponentDidMount = Le composant vient de se mettre en place 
    componentDidMount(){
        this.timerID = setInterval(()=>this.ticktac(),1000)
    }
    // Voici une fonction qui permet de mettre à jour la date de l'etat (this.state.date)
    // ATT: qui dit mise à jour de l'état dit : setState
    ticktac(){
        this.setState({
            date: new Date()
        });
    }

    // juste avant de finir un lifecycle et de quitter le composant, nous effaçons le contenu de l'intervalle de temps

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

}

export default Clock;