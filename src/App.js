import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
   Popover,
   PopoverHeader,
   PopoverBody,
   Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
  Container, Row, Col,
   Nav, NavItem, NavLink
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FaRegHeart, FaHeart } from "react-icons/fa";



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
        <Button id="Popover1" type="button">
          11 films
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Derniers films ajoutés</PopoverHeader>
          <PopoverBody>The Adventure of Tintin, Die Hard, Robocop....</PopoverBody>
        </Popover>
      </div>
    );
  }
}





class App extends Component {
  render() {

    var heartRed = {
      color: 'red',
      position: 'absolute',
      top: 10,
      right: 10,
      fontSize: 20
    };

    var heart = {
      position: 'absolute',
      top: 10,
      right: 10,
      background: "transparent",
      fontSize: 20
    };

    return (
      <Container>
        <Row className="App-header">
              <img className = "Logo" src="logo.png"/>
              <p className = "ActiveNav"> Last releases</p>
              <p className = "InactiveNav"> My movies </p>
              <BtnPopover/>
        </Row>
        <Row>
        <Col xs="12"  sm="6" md="4" lg="3">
          <Card>
            <FaRegHeart style={heart}/>
            <CardImg top width="100%" src="malefique.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Maleficient</CardTitle>
              <CardText>Une petite conne a enlevé la princesse, il faut la libérer !</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12"  sm="6" md="4" lg="3">
          <Card>
            <FaHeart style={heartRed}/>
            <CardImg top width="100%" src="pi.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Life of Pi</CardTitle>
              <CardText>Un indien se bat contre un tigre, dépêchez vous de regarder pour sauver ce petit fdp.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12"  sm="6" md="4" lg="3">
          <Card>
            <FaHeart style={heartRed}/>
            <CardImg top width="100%" src="tintin.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Les aventures de Tintin</CardTitle>
              <CardText>Vive ce bon vieux Tintin</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12"  sm="6" md="4" lg="3">
          <Card>
            <FaHeart style={heartRed}/>
            <CardImg top width="100%" src="thumb.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Drive Hard</CardTitle>
              <CardText>Conduire vite sans mourir</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12"  sm="6" md="4" lg="3">
          <Card>
            <FaRegHeart style={heart}/>
            <CardImg top width="100%" src="tintin.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Les aventures de Tintin</CardTitle>
              <CardText>Vive ce bon vieux Tintin</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12"  sm="6" md="4" lg="3">
          <Card>
            <FaRegHeart style={heart}/>
            <CardImg top width="100%" src="thumb.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Drive Hard</CardTitle>
              <CardText>Conduire vite sans mourir</CardText>
            </CardBody>
          </Card>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
