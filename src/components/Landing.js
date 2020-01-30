import React from "react";

import { UserSession } from "blockstack";
import { appConfig } from "../config/constants";

import { Button } from "reactstrap";

import background from "../assets/web-bg.png"
import "../styles/Landing.css"
import NavBar from "./NavBar";

const Landing = props => {

    const userSession = new UserSession({appConfig});

    const signIn = (e) => {
        e.preventDefault();
        userSession.redirectToSignIn();
    }

    return (
        <div data-testid="landingTestID" className="landing-body" style={{
            backgroundImage: `url(${background})`}}>
            <NavBar data-testid="navbarID"/>
            <div className="button-wrapper" data-testid="button-wrapper">
                <h5 className="landing-text" data-testid="h5">Welcome to</h5>
                <h1 className="landing-text" data-testid="h1">Blockstack Boilerplate</h1>
                <p className="landing-text" data-testid="p">Some statement text explaining the application to everyone</p>
                <Button onClick={e => signIn(e)} color="success" className="landing-button" data-testid="signin">Sign In</Button>
                <Button outline onClick={e => signIn(e)} className="landing-button" data-testid="moreinfo">More Info</Button>
            </div>
        </div>
    )
}

export default Landing;