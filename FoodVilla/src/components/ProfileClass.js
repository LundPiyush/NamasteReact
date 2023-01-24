import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create state object
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };

    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };
    console.log("child - constructor" + this.props.name);
  }
  async componentDidMount() {
    // this will be called after render method. We will calling the API CALLS in this method
    const data = await fetch("https://api.github.com/users/LundPiyush");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(this.state);
    console.log("child - ComponentDidmount " + this.props.name);
  }
  render() {
    console.log("child - render" + this.props.name);
    return (
      <>
        <h1>Profile class component {this.props.name}</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Username :{this.state.userInfo.name}</h3>
        <h3>Location:{this.state.userInfo.location}</h3>
        {/* <h5>count :{this.state.count}</h5>

        <button
          onClick={() =>
            // WE DON'T MUTATE (MODIFY) THE STATE DIRECTLY
            // NEVER DO THIS this.state.count = something
            this.setState({ count: 1 })
          }
        >
          Set count to 1
        </button> */}
      </>
    );
  }
  componentDidUpdate() {
    // This will be called after every render
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // This will be called when data removes from the DOM => when we go to other page
    console.log("componentWillUnmount");
  }
}

export default Profile;
