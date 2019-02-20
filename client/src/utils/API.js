import axios from "axios";
require('dotenv').config();

const GOOGLEAPIKEY = process.env.GOOGLEAPIKEY;

export default {
  // Gets all books
  async getHarryPotter () {
    console.log('retrieving Harry Potter');
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&key=AIzaSyCVDcVmQJ0rX1BJ1hHjZAZzu9ayfsg8EqI`);
    return res;  
},

  async searchForBook (query) {
    console.log("search for" + query);
    const concatQuery = query.replace(' ', '+');
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${concatQuery}&key=AIzaSyCVDcVmQJ0rX1BJ1hHjZAZzu9ayfsg8EqI`);
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
