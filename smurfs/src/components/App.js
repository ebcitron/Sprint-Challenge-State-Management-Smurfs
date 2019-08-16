import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';
import SmurfList from "./SmurfList";
import {getSmurfs, addSmurf} from './actions';
import SmurfForm from './SmurfForm';



class App extends React.Component{
  constructor(props){
    super(props);
  
  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  render(){
    console.log('APPprops', this.props);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList smurfs = {this.props.smurfs} />
        <SmurfForm form = {this.props.form} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, {getSmurfs})(App);
