import React, { Component } from 'react';
import '../styles/About.css';

export class About extends Component {
    render() {
        return (
            <div className="center" id="aboutContainer">
                <p id="topPhrase">Learn to program on your smartphone.</p>
                <p>
                    Anybody can do it.
                </p>
                <p>
                    Few people have the resources to take classes or go back to college.
                </p>
                <p>
                    In just 15 minutes a day you can learn how to program like a professional.
                </p>
                <p>
                    Get exposure to industry leaders hiring programmers of all backgrounds.
                </p>
                <h2 id="bottomPhrase">Go code and get employed.</h2>
            </div>
        );
    }
}