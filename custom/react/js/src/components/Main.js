import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import dotenv from "dotenv";
dotenv.config();
import env from "react-dotenv";

const Main = () => {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    let arr = [];
    await axios
      .get(
        `https://api.thecatapi.com/v1/images/search?header=YOUR_API_KEY_HERE`
      )
      .catch((err) => {
        console.log("Error:", err);
      })
      .then((res) =>
        res.data.map((image) => {
          arr.push(image);
        })
      );
    setList(arr);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) return <div>...fetching cats</div>;
  else
    return (
      <div className="image-grid galleryContainer">
        <h2>
          Hello! Welcome to my Drupal portfolio! I fetched cat pictures with
          React because its so convenient and easy and wonderful. The Drupal
          backend is doing nothing (apart from taking space) in my app atm.
          Thank you! Enjoy!
        </h2>
        {list.map((image) => {
          return <img key={image.id} src={image.url}></img>;
        })}
      </div>
    );
};

export default Main;
