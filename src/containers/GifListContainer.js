import React from "react";

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state={
    gifs: []
  }

  componentDidMount(){
    this.fetchGifs()
  }

  fetchGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        gifs: json.data
      }, () => console.log(this.state))
    })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch fetchGifs={this.fetchGifs}/>
      </div>
    )
  }
}
export default GifListContainer
