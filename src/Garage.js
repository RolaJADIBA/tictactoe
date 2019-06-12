import React from 'react';
import Voiture from './Voiture';


class Garage extends React.Component{

// atributs



// methods
render(){
    const def="grise";
    const voit = {color:"rouge", brand:"Renault", owner:"None", id:"WWWWWW"};
    // on ouvre les parentheses pour injecter de l'html via l'annotation JSX JavaScript xml
    // c'est ici que l'on defini le contenu html affichable à l'appel de la balise <Garage/> dans index.js
    return (

        <div>
            <h1>Quelles sont les voitures que j'ai dans mon garage?</h1>
            <Voiture color='verte' brand="Mustang" owner="Sylvain" id="NZ78w2"/><br/>
            <Voiture color='rouge' brand="Mercedes" owner="Jean" id="A788w2"/><br/>
            <Voiture color='yellow' brand="Ford" owner="Dalida" id="QZ88w2"/><br/>
            <Voiture color='black' brand="Citroen" owner="Lucile" id="RG5124"/><br/>
            <Voiture color={voit.color} brand={voit.color} owner={voit.color} id={voit.color}/>

        </div>

    );
}

}

export default Garage;