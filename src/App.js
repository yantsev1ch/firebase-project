import React from "react";
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="login_block">
                    <input type="text" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="submit"/>
                </div>
            </div>
        )
    }
}
