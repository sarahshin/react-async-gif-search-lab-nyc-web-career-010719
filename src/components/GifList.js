import React from "react"


const GifList = (props) => {

  const renderGifs = () => {
    return props.gifs.map(gif => {
      return <li><img key={gif.id} src={gif.images.original.url} alt="gif" /></li>
    })
  }
  return (
  <div className="">
    {renderGifs()}
  </div>
  )
}

export default GifList
