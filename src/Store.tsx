import React, { Component } from 'react';
import { Color, RED, YELLOW, BLUE, COLORS } from './paint';
import { PaintPot } from './PaintPot';

type StoreProps = {
  // TODO: initialize with needed props
  paintInventory: number[];
  onBackClick: (newInventory: number[]) => void;
};

type StoreState = {
  // Error string to display is an op is invalid
  err: string,

  // Quantities of each color of paint available
  //   colors are identified by their index in colors[]
  paintInventory: number[];
};


/** Store component that displays a store to buy colors. */
export class Store extends Component<StoreProps, StoreState> {
  constructor(props: StoreProps) {
    super(props);

    this.state = {
      err: "",
      paintInventory: this.props.paintInventory
    };
  }

  render = (): JSX.Element => {
    return <div>
      <h1>Store</h1>
      <p>Click on a Paint Pot to Buy 60 Units of that Paint:</p>
      {this.renderPaints()}
      <p>{this.state.err}</p>

      <br></br>
      <button onClick={this.doBackClick}>Back to Directory</button>
    </div>;
  };

  renderPaints = (): JSX.Element => {
    return <div className="paints">
      <PaintPot color={RED} size="s" full={true} selected={false}
        onPaintClick={this.doPaintChange}></PaintPot>
      {this.state.paintInventory[0]}

      <PaintPot color={YELLOW} size="s" full={true} selected={false}
        onPaintClick={this.doPaintChange}
      ></PaintPot>
      {this.state.paintInventory[2]}

      <PaintPot color={BLUE} size="s" full={true} selected={false}
        onPaintClick={this.doPaintChange}
      ></PaintPot>
      {this.state.paintInventory[4]}
    </div>
  }

  doPaintChange = (color: Color): void => {
    const colorIdx: number = COLORS.indexOf(color);
    const colorToBuy: number = this.state.paintInventory[colorIdx];
    const paintInv: number[] = this.state.paintInventory;
    const newInventory: number[] =
      paintInv.slice(0, colorIdx).concat(
        [colorToBuy + 60].concat(
          paintInv.slice(colorIdx + 1)
        )
      );
    this.setState({ paintInventory: newInventory });
  }

  doBackClick = (): void => {
    // TODO: fill this in to use callback passed from App
    this.props.onBackClick(this.state.paintInventory);
  }
}
