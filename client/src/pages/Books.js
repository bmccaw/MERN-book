import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Books extends Component {
  state = {
    books: [],
    title: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getHarryPotter()
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
  };

  handleChange = async name => event => {
    this.setState({title: event.target.value})
  }

  handleClick = async () => {
    const books = await API.searchForBook(this.state.title);
    this.setState({books:books});
}

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search for a Book</h1>
              <input type="text" onChange={this.handleChange}/><button type="submit" onClick={this.handleClick}>Search</button>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <img src={book.volumeInfo.imageLinks.thumbnail}/>
                    <a href={book.volumeInfo.previewLink} target="_blank">
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors.join(", ")}
                      </strong>
                    </a>
                    <p>{book.volumeInfo.description}</p>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
