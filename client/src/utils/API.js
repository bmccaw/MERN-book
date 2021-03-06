import axios from "axios";
import APIKEY from "./keys";

export default {
  // Gets starter books
  async getLOTR () {
    console.log('retrieving Lord of the Rings');
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Lord+of+the+Rings&key=${APIKEY}`);
    return res;  
},
  // Searches for books by Title
  async searchForBook (query) {
    console.log("search for " + query);
    const concatQuery = query.replace(' ', '+');
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${concatQuery}&key=${APIKEY}`);
    return res;
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
