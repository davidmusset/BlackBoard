import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
   Popover,
   PopoverHeader,
   PopoverBody,
   UncontrolledPopover,
  Container, Row, Col
  } from 'reactstrap';
import Movie from './Components/Movie';
import BtnPopover from './Components/Popover';



// rendu du site

class App extends Component {

  render() {

    var moviesData= [
      {
        name : "L'Odyssée de Pi",
        desc: "Après que leur bateau est victime d'une violente tempête et coule au fond du Pacifique, un adolescent et un tigre du Bengale …",
        img : "/pi.jpg"
      },
      {
        name : "Maléfique",
        desc: "Poussée par la vengeance et une volonté farouche de protéger les terres qu'elle préside, Maléfique place ...",
        img : "/malefique.jpg",
      },
      {
        name : "Les Aventures de Tintin",
        desc: "Parce qu'il achète la maquette d'un bateau appelé la Licorne, Tintin, un jeune reporter, se retrouve entraîné dans une fantastique aventure...",
        img : "/tintin.jpg"
      },
      {
        name : "L'Odyssée de Pi",
        desc: "Après que leur bateau est victime d'une violente tempête et coule au fond du Pacifique, un adolescent et un tigre du Bengale …",
        img : "/pi.jpg"
      },
      {
        name : "Maléfique",
        desc: "Poussée par la vengeance et une volonté farouche de protéger les terres qu'elle préside, Maléfique place ...",
        img : "/malefique.jpg",
      },
      {
        name : "Les Aventures de Tintin",
        desc: "Parce qu'il achète la maquette d'un bateau appelé la Licorne, Tintin, un jeune reporter, se retrouve entraîné dans une fantastique aventure...",
        img : "/tintin.jpg"
      }
    ];

    var moviesNameList= moviesData.map(function(movies,i){
      return(movies.name)
    });

    var moviesCount = moviesNameList.length;


    if (moviesCount == 0 ){var moviesLast = "Aucun film sélectionné"}
    else {
        var moviesLast = moviesNameList.slice(moviesCount -3, moviesCount).reverse();

        if (moviesCount>1){ moviesLast[0] = moviesLast[0] + ", "}
        if (moviesCount>2){ moviesLast[1] = moviesLast[1] + ", "}
        if (moviesCount>3){ moviesLast[2] = moviesLast[2] + "..."}
    }



    var MovieList= moviesData.map(function(movie,i){
      return(<Movie movieName={movie.name} movieDesc={movie.desc} movieImg={movie.img} />)
    });


    return (


      <Container>
        <Row className="App-header">
              <img className = "Logo" src="logo.png"/>
              <p className = "ActiveNav"> <a href="#" style={{color:"#FFF"}}>Last releases</a></p>
              <p className = "InactiveNav"><a href="#" style={{color:"#FFF"}} >My movies </a></p>
              <BtnPopover moviesLast = {moviesLast} moviesCount = {moviesCount}/>
        </Row>
        <Row id="listmov">
          {MovieList}
        </Row>
      </Container>
    );
  }
}


export default App;
