import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Accueil extends Component {
  render() {
    return (
    <div className="App">
      <h1>Notre projet</h1>
      {/* Link to List.js */}
      <Link to={'./Appli'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Accueil;