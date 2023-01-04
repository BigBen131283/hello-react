// import React, { Fragment } from 'react';
// import ReactDom from 'react-dom';
// import {createRoot} from 'react-dom/client';

// const content = <div>Hello world!</div>;
// const div = document.getElementById('app');
// ReactDom.render(content, div);

// const Greetings = props => {
//     return (
//         <span>
//             Bonjour <strong>{props.name}</strong> !
//         </span>
//     );
// }

// const Greetings = ({ name }) => {
//     return (
//         <span>
//             Bonjour <strong>{name}</strong> !
//         </span>
//     );
// }

// const App = () => <Greetings name="Benjamin" />;

// const App = () => {
//     const name = 'Patoche';
//     const fruits = ['Pomme', 'Pêche', 'Poire', 'Abricot'];
//     const renderedFruits = fruits.map((fruit) => 
//         <li key={fruit}>{fruit}</li>
//     );

//     return <>
//                 <Greetings name={name}/>
//                 <ul>{renderedFruits}</ul>
//             </>

// }
// const container1 = document.getElementById('app');
// const root1 = createRoot(container1);
// root1.render(<App />);

// Afficher une liste :

// const fruits = ['Pomme', 'Pêche', 'Poire', 'Abricot'];
// const renderedFruits = fruits.map((fruits) => 
//     <li key={fruits}>{fruits}</li>
// );

// const container2 = document.getElementById('list');
// const root2 = createRoot(container2)
// root2.render(<ul>{renderedFruits}</ul>)

import React from "react";
// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import App from "./App";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);


