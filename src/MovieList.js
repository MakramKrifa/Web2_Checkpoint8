import React, { useRef, useState } from 'react'
import BarNav from './BarNav';
import Item from './Item';
import AddMovie from './AddMovie';

function MovieList() {

  const [movies,setMovie]=useState(
    [
      {name:"John Wick 1",image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",rate:"3"},
      {name:"Creed",image:"https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",rate:"4"},
      {name:"Avengers Endgame",image:"https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SY445_.jpg",rate:"3"},
      {name:"Spiderman Homecoming",image:"https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",rate:"3"},
    ])
  var [filteredmovies,setFilter]=useState(movies)
return (
    <div >
        <BarNav filteredmovies={movies} setFilter={setMovie} ></BarNav>
      {movies.map((e) => (
        <Item name={e.name} image={e.image} rate={e.rate}></Item>
      ))}
      <AddMovie movies={movies} setMovie={setMovie} />
    </div>
  );
  console.log(movies)
}

export default MovieList;
