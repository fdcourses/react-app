import React, { Component } from 'react';

class NotebookLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notebooks: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    fetch('/notebooks.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          notebooks: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false,
        });
      });
  }

  render() {
    const { notebooks, isLoading, error } = this.state;

    if (isLoading) {
      return <div>LOADING ...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <ul>
        {notebooks.map((book) => (
          <li key={book.id}>
            <h2>{book.name}</h2>
            <p>COST: {book.price} $</p>
            </li>
        ))}
      </ul>
    );
  }
}

export default NotebookLoader;
