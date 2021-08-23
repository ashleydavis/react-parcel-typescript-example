import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        const msg = "Hello world!";

        return <div>{msg}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));