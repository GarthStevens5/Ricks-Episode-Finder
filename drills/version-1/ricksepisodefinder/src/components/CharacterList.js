import React from 'react'
class CharacterList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  getEpisodeId(character){
    const episodeList = this.props.allEpisodes
    const episodeIds = character.episode.map(episode => {
      return Number(episode.match(/[0-9]+$/)[0])
    })
    var finishedProduct = episodeList.filter(episode => {return (episodeIds.includes(episode.id))})
    this.setState({
      data: finishedProduct
    })
  }
   episodeFilter (char, episodeList) {
    return episodeList.filter(episode => {return (episode.id === char)})
  }
  render () {
    return(
      <section>
        {this.state.data.map(episode => {
          return(
            <ul className='episodeList'>
              <li className='singleEpisode' key={episode.id}>
                <small className='name'>{episode.name}</small>
                <small className='episode'>{episode.episode}</small>
              </li>
            </ul>
          )
        })}
        <ul id="characters">
        {this.props.characterData.map((character, i) => {
          return(
            <li onClick={()=> this.getEpisodeId(character)}id="character" key={character.id}> 
              <h4>{character.name}</h4>
              <img src={character.image} alt=""/>
              <small>{character.species}</small>
            </li>
          )
        })}
        </ul>
      </section>
    )
  }
}

export default CharacterList