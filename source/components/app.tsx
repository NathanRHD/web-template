import * as React from "react"
import { Component } from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Route, Switch } from "react-router-dom"

import { Home } from "./views/home"
import { Store } from "redux";
import { State } from "../redux/state";

export const App = (props: {}) => <>
    <div className="header">
        <h1>Header</h1>
    </div>
    <nav></nav>
    <div className="page">
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </div>
    <div className="footer">
        <p>Footer</p>
    </div>
</>