import React, { Component } from 'react';
import {
  Button,
   Popover,
   PopoverHeader,
   PopoverBody,
   UncontrolledPopover,
  } from 'reactstrap';


// Bouton Popover

class BtnPopover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }


  render() {
    return (
      <div>

        <Button id="PopoverFocus" type="button">
          {this.props.moviesCount} films
        </Button>

        <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
          <PopoverHeader>Derniers films ajoutés</PopoverHeader>
          <PopoverBody>{this.props.moviesLast}</PopoverBody>
        </UncontrolledPopover>

      </div>
    );
  }
}

export default BtnPopover;
