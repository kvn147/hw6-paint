import React, { Component } from 'react';
import "./app.css";
// import { Palette } from './Palette';
// import { Store } from './Store';
// import { Canvas } from './Canvas';


// TODO: define a "page" enum type for all of the possible app pages

type AppProps = {};  // no props

type AppState = {
  // TODO: create state to track page and any other data
  // that need to be communicated between components
};


/** Top-level component that displays the entire UI. */
export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    // TODO: initialize state you create
  }

  render = (): JSX.Element => {
    // TODO: update to return the correct component depending on which
    // page the app should render

    // In the meantime, feel free to uncomment and return just the component the app needs

    return this.renderDirectory();

    // <Store></Store>;

    // <Palette></Palette>;

    // <Canvas></Canvas>;
  };

  renderDirectory = (): JSX.Element => {
    // TODO: add onClick properties to each of these <a> links
    // that cause the App to switch to the appropriate page view
    return <div>
      <h1>Directory</h1>
      <p><a href="#">Paint Store</a></p>
      <p><a href="#">Paint Mixing Palette</a></p>
      <p><a href="#">Canvas</a></p>
    </div>;
  }

  // TODO: create onBackClick handler functions for each of <Store> <Canvas> and <Palette>
  // - switch the page view to go 'back'
  // - store any needed information from components in App state
}