import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_TRACKS':
      return {
        ...state,
        track_list: action.payload,
        heading: 'Search Results',
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      track_list: [],
      heading: 'Top 10 Tracks',
      dispatch: (action) => this.setState((state) => reducer(state, action)),
    };
  }

  componentDidMount() {
    axios
      .get('/api/tracks')
      .then((res) => {
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
