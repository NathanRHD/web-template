"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const random_number_1 = require("../../redux/duck-eggs/random-number");
exports.Home = react_redux_1.connect((state) => ({
    randomNumber: state.system.randomNumber
}), (dispatch) => ({
    getRandomNumber: () => { dispatch(random_number_1.getRandomNumber.create({})); }
}))(class extends React.Component {
    componentDidMount() {
        this.props.getRandomNumber();
    }
    render() {
        return React.createElement(React.Fragment, null,
            React.createElement("h2", null, "Home"),
            React.createElement("p", null,
                "Random Number: ",
                this.props.randomNumber));
    }
});
