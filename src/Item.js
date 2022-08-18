import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <>
      {/* <div>
        <img src={props.image} alt="image"></img>
        <p>{props.name}</p>
      </div> */}
      <article class="MovieCard">
        <img
          src={props.image}
          alt="you didn't implement a valid image link"
          width="250px"
        />
        <span>{props.name}</span>
        <div class="starRating">
          {/* <div
            class="dv-star-rating starRatingComp"
            style="display: inline-block; position: relative;"
          >
            <input
              class="dv-star-rating-input"
              type="radio"
              name="movieRating"
              id="movieRating_5"
              value="5"
              checked=""
              style="display: none; position: absolute; margin-left: -9999px;"
            ></input>
            <label
              class="dv-star-rating-star dv-star-rating-full-star"
              for="movieRating_5"
              style="float: right; cursor: pointer; color: rgb(255, 180, 0);"
            >
              <i style="font-style: normal;">★</i>
            </label>
            <input
              class="dv-star-rating-input"
              type="radio"
              name="movieRating"
              id="movieRating_4"
              value="4"
              style="display: none; position: absolute; margin-left: -9999px;"
            ></input>
            <label
              class="dv-star-rating-star dv-star-rating-full-star"
              for="movieRating_4"
              style="float: right; cursor: pointer; color: rgb(255, 180, 0);"
            >
              <i style="font-style: normal;">★</i>
            </label>
            <input
              class="dv-star-rating-input"
              type="radio"
              name="movieRating"
              id="movieRating_3"
              value="3"
              style="display: none; position: absolute; margin-left: -9999px;"
            ></input>
            <label
              class="dv-star-rating-star dv-star-rating-full-star"
              for="movieRating_3"
              style="float: right; cursor: pointer; color: rgb(255, 180, 0);"
            >
              <i style="font-style: normal;">★</i>
            </label>
            <input
              class="dv-star-rating-input"
              type="radio"
              name="movieRating"
              id="movieRating_2"
              value="2"
              style="display: none; position: absolute; margin-left: -9999px;"
            ></input>
            <label
              class="dv-star-rating-star dv-star-rating-full-star"
              for="movieRating_2"
              style="float: right; cursor: pointer; color: rgb(255, 180, 0);"
            >
              <i style="font-style: normal;">★</i>
            </label>
            <input
              class="dv-star-rating-input"
              type="radio"
              name="movieRating"
              id="movieRating_1"
              value="1"
              style="display: none; position: absolute; margin-left: -9999px;"
            ></input>
            <label
              class="dv-star-rating-star dv-star-rating-full-star"
              for="movieRating_1"
              style="float: right; cursor: pointer; color: rgb(255, 180, 0);"
            >
              <i style="font-style: normal;">★</i>
            </label>
          </div>  */}
        </div>
      </article>
    </>
  );
}

export default Item;
