import React from 'react';


// creation d'une classe vpoiture
// on hérite de la classe Compnent définie dans React
class Voiture extends React.Component{
    // attributs
    
    //methodes
constructor(){
    super(); // il prend le compotement du parent, execution du constructor qui est définit React.Component

    // initialisation avec STATE
    this.state={color:"rouge", brand:"Peugeot", owner:"None", id:"WWWWWW"};
}
render(){
    
    return <h2>Couco, je suis la meilleure Voiture {this.props.brant} du monde et ma couleur est {this.props.color}, appartenant à {this.props.owner} et de plaque {this.props.id}</h2>
}
}

export default Voiture;