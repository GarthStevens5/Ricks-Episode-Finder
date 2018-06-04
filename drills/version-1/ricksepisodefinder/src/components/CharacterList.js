import React from 'react'

class CharacterList extends React.Component {
  getEpisodeId(character){

    var episodeIds = character.episode.filter(episode => {
      var newId = episode.match(/[0-9]+$/)
      console.log(newId[0])
      
      return newId[0]
    })
    console.log(this.props.allEpisodes, "<== this.props.allEpisodes")
    this.props.allEpisodes.forEach(episode => {
      // console.log(episode)
    })

    return episodeIds
  }

  

  render () {
    return(
      <section>
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