import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book</div>
        }

        return (
            <div>
                <h3>Details for: </h3>
                <div><label>Title:</label> {this.props.book.title}</div>
                <div><label>Pages:</label> {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
