import React, { Component } from 'react';
import "./app.css";
import { Palette } from './Palette';
import { Store } from './Store';
import { Canvas } from './Canvas';
import { Dot } from './paint';


// TODO: define a "page" enum type for all of the possible app pages
type Page = {kind: "directory"} | {kind: "store"} | {kind: "palette"} | {kind: "canvas"};

type AppProps = {};  // no props

type AppState = {
  // TODO: create state to track page and any other data
  // that need to be communicated between components
  currentPage: Page;
  paintInventory: number[];
  canvasDots: Dot[];
};


/** Top-level component that displays the entire UI. */
export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    // TODO: initialize state you create
    this.state = {
      currentPage: {kind: "directory"},
      paintInventory: [0, 0, 0, 0, 0, 0],
      canvasDots: []
    };
  }

  render = (): JSX.Element => {
    // TODO: update to return the correct component depending on which
    // page the app should render
    
    // In the meantime, feel free to uncomment and return just the component the app needs
    const p = this.state.currentPage.kind;
    if (p === "directory") {
      return this.renderDirectory();
    }
    if (p === "store") {
      return <Store 
        paintInventory={this.state.paintInventory}
        onBackClick={this.doStoreBackClick}
      />;
    } else if (p === "palette") {
      return <Palette 
        paintInventory={this.state.paintInventory}
        onBackClick={this.doPaletteBackClick}
      />;
    } else {
      return <Canvas 
        paintInventory={this.state.paintInventory}
        onBackClick={this.doCanvasBackClick}
        dots={this.state.canvasDots}
      />;
    }
  };

  renderDirectory = (): JSX.Element => {
    // TODO: add onClick properties to each of these <a> links
    // that cause the App to switch to the appropriate page view
    return <div>
      <h1>Directory</h1>
      <p><a href="#" onClick={this.doStoreClick}>Paint Store</a></p>
      <p><a href="#" onClick={this.doPaletteClick}>Paint Mixing Palette</a></p>
      <p><a href="#" onClick={this.doCanvasClick}>Canvas</a></p>
    </div>;
  }

  doStoreClick = (): void => {
    this.setState({ currentPage: { kind: "store" } });
  }

  doPaletteClick = (): void => {
    this.setState({ currentPage: { kind: "palette" } });
  }

  doCanvasClick = (): void => {
    this.setState({ currentPage: { kind: "canvas" } });
  }

  // TODO: create onBackClick handler functions for each of <Store> <Canvas> and <Palette>
  // - switch the page view to go 'back'
  // - store any needed information from components in App state
  doStoreBackClick = (newInventory: number[]): void => {
    this.setState({ 
      currentPage: { kind: "directory" },
      paintInventory: newInventory
    });
  }

  doPaletteBackClick = (newInventory: number[]): void => {
    this.setState({ 
      currentPage: { kind: "directory" },
      paintInventory: newInventory
    });
  }

  doCanvasBackClick = (newInventory: number[], newDots: Dot[]): void => {
    this.setState({ 
      currentPage: { kind: "directory" },
      paintInventory: newInventory,
      canvasDots: newDots
    });
  }
}