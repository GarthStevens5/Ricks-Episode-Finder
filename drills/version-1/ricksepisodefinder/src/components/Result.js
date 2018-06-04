import React from 'react'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  render () {   
    return(
      <ul id="episodeList">
        <h4>(Episodes)</h4>
      </ul>
    )
  }
}

export default Result