import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Styled from 'styled-components';
import NavBar from './components/NavBar';
import Search from './components/Search';
import BookList from './components/BookList';

export default function App() {

  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   const bestSellers = await.API.getBestSellers();
  // }, []);

  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={() => <BookList />} />
            <Route exact path='/search' component={() => <Search />} />
            {/* <Route exact path='/saved' component={} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );



};
