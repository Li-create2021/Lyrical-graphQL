import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <ul className="collection">
        <div>{this.renderSongs()}</div>
      </ul>
    );
  }
}

//What data do we need? In this case only the songs' title
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
