import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create state object
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  componentDidMount() {
    // this will be called after render method. We will calling the API CALLS in this method
    console.log("ComponentDidmount");
  }
  render() {
    return (
      <>
        <h1>Profile class component {this.props.name}</h1>
        <h5>count :{this.state.count}</h5>

        <button
          onClick={() =>
            // WE DON'T MUTATE (MODIFY) THE STATE DIRECTLY
            // NEVER DO THIS this.state.count = something
            this.setState({ count: 1 })
          }
        >
          Set count to 1
        </button>
      </>
    );
  }
}

export default Profile;
