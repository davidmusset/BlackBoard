import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
   Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
  Container, Row, Col,
   Collapse
  } from 'reactstrap';

// Carte Movie

class Movie extends Component {

  render(){
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

    return(
      <Col xs="12"  sm="6" md="4" lg="3">
      <Card>
        <FaRegHeart style={heart}/>
        <CardImg top width="100%" src={this.props.movieImg} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.movieName}</CardTitle>
          <CardText>{this.props.movieDesc}</CardText>
        </CardBody>
      </Card>
      </Col>
    )
  }

}

export default Movie;
