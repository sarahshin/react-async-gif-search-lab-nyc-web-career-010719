import React from "react";

class GifSearch extends React.Component {

  state={
    query: ""
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    },() => console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
    e.target.reset()
  }


  render() {
    return (
      <div>
        <form id="searchForm" onSubmit={this.handleSubmit}>
          <label>
            Enter a Search Term:
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default GifSearch
