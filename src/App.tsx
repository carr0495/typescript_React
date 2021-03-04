import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

const initialState = {
  name: "aiden",
  message: "state message",
};

type State = Readonly<typeof initialState>;

class App extends Component<any, State> {
  //#region first lesson
  // let firstValue: string = "Aiden";
  // let firstValue: number[] = [2, 4, 5, 6, 9];
  // let firstValue: boolean = true;

  // //tuple
  // let aTuple: [string, number] = ["Aiden", 24];
  // //enumsm
  // enum Codes {
  //   first = 1,
  //   second,
  // }
  // //any (dont use it)
  // let firstName: any = "aiden"; //only for prototyping
  // //void
  // const warning = (): void => {
  //   console.log("Warning");
  // };
  //#endregion

  //#region component mounting (const/desc)
  // componentWillMount() {
  //   //runs first
  //   //like constructor
  // }

  // componentDidMount() {
  //   //runs second
  //   //like deconstructor?
  // }
  //#endregion

  readonly state: State = initialState;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name={this.state.name} message={this.state.message} />
        </header>
      </div>
    );
  }
}

export default App;
