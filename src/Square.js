import React from 'react';

class Square extends React.Component{

    constructor(propos){
        super(propos);
        this.state={valure:null,
         }
    }
    render(){
        return(
            <button className="square" onClick={()=>
                this.props.onClick()}> 
                {this.props.valeur}
            </button>
        );
    }

}

export default Square;