import react, { Component } from "react";
import axios from "axios";
import "./Api.css";

export default class Api extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }
  getPost = async () => {
    let response = await axios.get("https://rickandmortyapi.com/api/character");
    this.setState({
      characters: response.data.results,
    });
  };
  componentDidMount(){
    this.getPost()
  }
  render() {
    let mappedCharacters = this.state.characters.map((character) =>
      Post(character)
    );
    return (
      <div className="main">
        <div className='banner'>Rick & Morty API</div>
        <div className="mapped-characters">{mappedCharacters}</div>
      </div>
    );
  }
}
function Post(results) {
  const { name, image, species, status, type, gender } = results;
  return (
    <div className="character">
      <h1 className="name">{name}</h1>
      <img className="img" src={image} />
      <h2 className="species">{species}</h2>
      <h2 className="species">{gender}</h2>
      <h2 className="species">{status}</h2>
    </div>
  );
}
