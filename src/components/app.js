/**
 * Created by marek on 29/12/2016.
 */
import React, { Component } from 'react';
import BookList from './../containers/booklist';
import BookDetail from './../containers/book-detail';

class App extends Component {
    render() {
        return (
            <div>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}

export default App;
