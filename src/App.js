import logo from './logo.svg';
import './App.css';
import Prograss from './Prograss';
import React,{useState,useEffect} from 'react';
function App(props) {
    const [percent,setPa]=useState(50);
    return ( 
    <div>
            <button onClick={ ()=>setPa(10)}>10</button><button onClick={()=>setPa(90)}>90</button>
            <Prograss percent={percent}></Prograss>
    </div>);
    }

    export default App;