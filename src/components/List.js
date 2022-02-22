import React from "react";
import {Table, Button} from 'react-bootstrap'

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        bookAuthor: "",
        bookName: "",
        read: "No",
        books: [],
    };
}  

changeHandler = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({
        [nam]: val,
    });
};

submitHandler = (event) => {
    event.preventDefault();
    const bookNameVal = this.state.bookName;
    const bookAuthorVal = this.state.bookAuthor;
    const readVal = this.state.read;
    if (bookNameVal && bookAuthorVal) {
      this.setState(
        (prevState) => ({
          books: [
            ...prevState.books,
            {
              bookName: bookNameVal,
              bookAuthor: bookAuthorVal,
              read: readVal,
            },
          ],
        })
      );
}};

removeBook = (index) => {
    const booksArr = [...this.state.books];
    if (booksArr) {
        this.setState(
        {
            books: booksArr.filter((book, bookIndex) => {
                return bookIndex !== index;
            }),
        });
    }
};

render() {
    let books = this.state.books;
    return (
        <div>
            <form className="bookForm" onSubmit={this.submitHandler}>
                <label for="bookName">Book Name</label>
                <input
                    id="bookName"
                    name="bookName"
                    type="text"
                    placeholder="Book Title"
                    maxLength="40"
                    onChange={this.changeHandler}
                    required
                />
                <label for="bookAuthor">Author</label>
                <input
                    id="bookAuthor"
                    name="bookAuthor"
                    type="text"
                    placeholder="Book Author"
                    maxLength="30"
                    onChange={this.changeHandler}
                    required
                />
                <label for="read">Read?</label>
                <select
                    id="read"
                    name="read"
                    onChange={this.changeHandler}
                    value={this.state.read}
                >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <input id="submit" type="submit" value="Add new book" />
            </form>
            <Table bordered>
                    <tr>
                        <th>Author Name</th>
                        <th>Book Name</th>
                        <th>Was it read? (Yes/No)</th>
                        <th colSpan={2}>Settings</th>
                    </tr>
            {
                books.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.bookAuthor}</td>
                            <td>{item.bookName}</td>
                            <td>{item.read}</td>
                            <td id="settings">
                                <Button onClick={() => {
                                    item.read === "Yes"
                                        ? (item.read = "No")
                                        : (item.read = "Yes");
                                    this.forceUpdate();
                                }}>
                                    {item.read === "Yes" ? "Still reading" : "Finished"}
                                </Button>
                                <Button onClick={() => {
                                    this.removeBook(index);
                                }}>
                                    Remove</Button>
                                </td>
                        </tr>
                    );
                })
            }
            </Table>
        </div>
    );
  }
}