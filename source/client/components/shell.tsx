import * as React from "react"
import { Component } from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { store } from "../redux/store"
import { Home } from "./views/home"

export class Shell extends Component<{}, {}> {
    render() {
        return <Provider store={store}>
            <BrowserRouter>
                <>
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
            </BrowserRouter>
        </Provider>
    }
}

if (window) {
    render(<Shell />, document.getElementById("root"))
}