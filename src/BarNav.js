import React,{useRef,useState} from "react";
import './App.css';

function BarNav(props) {
  const changeColor = (e) => {
    var rating = [document.getElementById("defaultColor").style.color,
    document.getElementById("defaultColor").style.color, 
    document.getElementById("defaultColor").style.color, 
    document.getElementById("defaultColor").style.color, 
    document.getElementById("defaultColor").style.color];
    //var rating = rating.map((x) => "#333333");
    for (let i = 0; i <= Number(e.target.id); i++) {
      rating[i] = "#ffb400";
    }

    for (let i = 0; i < rating.length; i++) {
      document.getElementById(i).style.color = rating[i];
    }
  };
  const Search = useRef()
  

 const search=()=>{
 var  filtre = props.filteredmovies.filter((element)=>element.name.toLowerCase().includes(Search.current?.value));
    props.setFilter(filtre)
  }
  
  return (
    <div className="BarNav_container">
      <ul className="No_puce_list">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Movies</a>
        </li>
        <li>
          <a>Reviews</a>
        </li>
      </ul>
      <div className="searchBar">
        <p id="defaultColor"></p>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="0"></i>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="1"></i>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="2"></i>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="3"></i>
        <i className="fa-solid fa-star rating" onClick={changeColor} id="4"></i>
        <input ref={Search} placeholder="search.." type={"search"}></input>
        <button onClick={search} >search</button>
      </div>
    </div>
  );
}

export default BarNav;
