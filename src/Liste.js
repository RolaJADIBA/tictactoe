import React from 'react';

function Liste(props){
    // numbers contient un tableau de chiffres envoyée par le pere [1,2,3,4,5]
    const numbers= props.numbers;
    const listItems= numbers.map((number) =>
    <li key={number.toString()}>
         {number}
    </li>
    );
    return (
<ul>{listItems}</ul>
    );
}

export default Liste;