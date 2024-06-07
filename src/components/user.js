/*const User = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    </div>
  );
};

export default User;

//props -> Properties/parameters
*/

/*import React from "react";
class User extends React.Components {
  constructor(props) {
    super (props);
    this.state = {
      planet: "earth"
    };
    console.log("hey i am from constructor");
  }
  componentDidMount() {
    this.setState({planet: "Jupiter"});
    console.log("Hey i am componentDidMount");
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("Hey i am from shouldComponentUpdate");
    console.log({
      nextProp,
      nextState
    });
    return true;
  }
getSnapshotBeforeUpdate(prevProp, prevState) {
  console.log("I am from getSnapshotBeforeUpdate");
  console.log({
    prevProp,
    prevState
  });
  return true;
}

componentDidUpdate() {
  console.log(this.state);
}




  render() {//logic
    console.log("hey i am from rendered");
    return (
      <div>
      <h1>{this.props.name}</h1>
      <p>{this.props.description}</p>
      //<h4>{this.state.planet}/</h4>
      </div>
    );
  }
}
//State-> a set at data that an individual component holds
export default User;
*/
//LIFE CYCLE METHODS
//1. MOUNT-> the component is initially rendered in a dom
//1.a.Constructor, b. render , c. componentDidMount- sideeffects(get explore repos, activities,links)
//2. UPDATE-> component is being updated
//2. a. Constructor
//2. b. shouldComponentUpdate(nextProp, nextState)-> true or false
//2. c. render()
//2. d.getSnapshotBeforeUpdate(prevProp,prevState)-> true or false
//2. e. componentDidUpdate()
//3. UNMOUNT-> component is removed from dom
//componentWillUnmount

//State
//React 16
//Hooks-> Power to your functional components
//userState()


import React, {useState,useEffect} from "react";

const User = (props) => {
  //value
  //the function to update the State
  const [planet,setPlanet] = userState("earth");

//componentDidMount
  userEffect (() => {
    setPlanet("Jupiter");
console.log("Component Mounting");
}, []);

//componentDidUpdate
useEffect(() => {
  console.log("Planet Changes");
}, [planet]);

console.log(planet);
return (
  <div>
  <h1>{props.name}</h1>
  <p>{props.description}</p>
  //<h1>{planet}</h1>
  <button onClick={()=> setPlanet ("Pluto")}>{planet}</button>
  <div>
);
}
export default User;
