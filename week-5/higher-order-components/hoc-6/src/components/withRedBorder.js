import React, { Component } from "react"; //Import Component here, so I don't have to specify React.Component on line 4

const withRedBorder = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <div style={{ border: "5px red solid" }}>
                    <WrappedComponent />
                </div>
            );
        }
    } //Returns class component because some lifecycle methods are needed
}

export default withRedBorder;