import * as React from "react"
import { connect } from "react-redux";
import { State } from "../../redux/state";
import { Dispatch } from "redux";
import { getRandomNumber } from "../../redux/duck-eggs/random-number";

export const Home = connect(
    (state: State) => ({
        randomNumber: state.system.randomNumber
    }),
    (dispatch: Dispatch) => ({
        getRandomNumber: () => { dispatch(getRandomNumber.create({})) }
    })
)(class extends React.Component<{
    randomNumber: State["system"]["randomNumber"]
    getRandomNumber: () => void
}, {}> {
    componentDidMount() {
        this.props.getRandomNumber()
    }
    render() {
        return <>
            <h2>Home</h2>
            <p>Random Number: {this.props.randomNumber}</p>
        </>
    }
})