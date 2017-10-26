import React, { Component } from 'react';
//import { Experiment, Variant } from 'react-ab';

import { LeadForm } from "./components/LeadForm";
import { About } from "./components/About";

//import Background from './res/images/RIOT2_StockSnap_A.jpg'
import './App.css';

// TODO: Change button and logo to correct colors
class App extends Component {
    render() {
        return (
            <div id="app">
                <div id="appWrapper">
                    <img src={require('./res/images/GoCode_Logo.gif')} alt="GoCode" align="middle"/>

                    <LeadForm/>

                    <h1 className="center">Become a Programmer</h1>
                    <h2 className="center">the unconventional way</h2>

                    <About/>
                    {/*<span id="cmd">gocode@home:~$ </span>*/}
                </div>
            </div>
        );
    }
}

export default App;
