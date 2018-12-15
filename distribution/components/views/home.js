"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const random_number_1 = require("../../redux/duck-eggs/random-number");
var RandomNumber;
(function (RandomNumber) {
    const mapStateToProps = (state) => ({
        randomNumber: state.system.randomNumber
    });
    const mapDispatchToProps = (dispatch) => ({
        getRandomNumber: () => dispatch(random_number_1.getRandomNumber.create({}))
    });
    RandomNumber.Component = react_redux_1.connect(mapStateToProps, mapDispatchToProps)((props) => {
        // the second parameter specifies which props changing should trigger the effect to run again;
        // as no props are provided, the effect will only run once, on the initial render
        // this is the equivalent of componentWillMount
        React.useEffect(props.getRandomNumber, []);
        return React.createElement("div", { className: "random-number" },
            React.createElement("p", null,
                "Random Number: ",
                props.randomNumber));
    });
})(RandomNumber || (RandomNumber = {}));
exports.Counter = () => {
    // adding state to your functional components, using some sort of wizard magick
    // pass in initial state, and the function returns a tuple of the current state and a setter
    const [counter, setCounter] = React.useState(0);
    return React.createElement("div", { className: "counter" },
        React.createElement("p", null,
            "Counter: ",
            counter),
        React.createElement("button", { onClick: () => setCounter(counter + 1) }, "Increment counter"));
};
exports.Home = () => React.createElement("div", { className: "home" },
    React.createElement(RandomNumber.Component, null),
    React.createElement(exports.Counter, null));
