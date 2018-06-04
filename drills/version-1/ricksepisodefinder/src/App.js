import React, { Component } from 'react'
import Header from './components/Header.js'
import CharacterList from './components/CharacterList.js'
import Footer from './components/Footer.js'
import cachedFetch from './cachedFetch.js'
import './App.css'

const characterUrl = "https://rickandmortyapi.com/api/character"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  allEpisodes(){
    cachedFetch('https://rickandmortyapi.com/api/episode')
      .then(data => {
        this.setState({
          episodes: data.results 
        })
      })
  }

  currentApiPage(url){
    cachedFetch(url)
      .then(data => {
        this.setState(
          {data: data.results,
           nextUrl: data.info.next,
           prevUrl: data.info.prev
          }
        )
      }) 
  }
  componentDidMount(){
    this.currentApiPage(characterUrl)
    this.allEpisodes()
  }
  
  render() {
    return (
      <main>
        <Header/>
        <h1>Choose a character!</h1>
        <CharacterList id="characterList" allEpisodes={this.state.episodes} characterData={this.state.data}/>
        <div id="buttonDiv">
          <button onClick={this.currentApiPage.bind(this, this.state.prevUrl)}>Previous</button>
          <h4><small>Wubba-lubba-dub-dub</small></h4>
          <button onClick={this.currentApiPage.bind(this, this.state.nextUrl)}>Next</button>
        </div>

        <Footer id="characterList" characterData={this.state.data}/>
      </main>
    )
  }
}

export default App