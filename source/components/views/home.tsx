import * as React from "react"
import { connect } from "react-redux";
import { State } from "../../redux/state";
import { Dispatch } from "redux";
import { getRandomNumber } from "../../redux/duck-eggs/random-number";

namespace RandomNumber {
    interface Props {
        randomNumber: State["system"]["randomNumber"];
        getRandomNumber: () => void;
    }

    const mapStateToProps = (state: State) => ({
        randomNumber: state.system.randomNumber
    });
    
    const mapDispatchToProps = (dispatch: Dispatch) => ({
        getRandomNumber: () => dispatch(getRandomNumber.create({}))
    });

    export const Component = connect(mapStateToProps, mapDispatchToProps)
        ((props: Props) => {
            // the second parameter specifies which props changing should trigger the effect to run again;
            // as no props are provided, the effect will only run once, on the initial render
            // this is the equivalent of componentWillMount
            React.useEffect(props.getRandomNumber, []);

            return <div className="random-number">
                <p>Random Number: {props.randomNumber}</p>
            </div>;
        });
}

export const Counter = () => {
    // adding state to your functional components, using some sort of wizard magick
    // pass in initial state, and the function returns a tuple of the current state and a setter
    const [counter, setCounter] = React.useState<number>(0);

    return <div className="counter">
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
    </div>
}

export const Home = () => <div className="home">
    <RandomNumber.Component />
    <Counter />
</div>;