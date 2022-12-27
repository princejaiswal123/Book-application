import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            “The more that you read, the more things you will know. ... “Books
            are a uniquely portable magic.” - ... “Today a reader, tomorrow a
            leader.” - ... “The best advice I ever got was that knowledge is
            power and to keep reading.” - ... “Reading is to the mind what
            exercise is to the body.” -
          </h1>
        </div>
        <div className="row2">
          <h2 style={{ color: "red", fontWeight: "bolder" }}>
            Find Your Favourite Book
          </h2>
          <div className="search">
            <input
              type="text"
              placeholder="Fill Your Book Name And Press Enter"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>

      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};
export default Main;
