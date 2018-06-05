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
  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
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
        {this.state.isHidden ? 
          <section className='mainApp'>
          <h1>Choose a character!</h1>
          <CharacterList id="characterList" allEpisodes={this.state.episodes} characterData={this.state.data}/>
          <div id="buttonDiv">
            <button onClick={this.currentApiPage.bind(this, this.state.prevUrl)}>Previous</button>
            <h4><small>Wubba-lubba-dub-dub</small></h4>
            <button onClick={this.currentApiPage.bind(this, this.state.nextUrl)}>Next</button>
          </div>
        </section> : <section className='splash'>
        <h1 className='splashTitle'>Welcome to *burp* to m-my website!</h1>
        <p className='description'>Wow! Y-y-ya know what? I was actually looking for Morty- but you're here instead. He must be on a Different website. I-i-if you know what I mean. What are you staring at me like that for? Oh, right! The website! This isn't just any ordinary website Mor- I mean whoever you are. This website id being routed through interdimensional servers I made that let you see a website from a totally new dimension! I found a dimension where me and Morty's lives are actually a cartoon! With This website, you'll be able to search through the episodes us and everyone we know are in, all by ckicking on their picture. Now people can find episodes even with obscure characters even if they can't remember their name! Ah, shit. Jerry found the Mr. Meeseeks box again. Click that button to enter the app- Gotta Go! </p>
        <button className='splashButton' onClick= {() => this.toggleHidden()}>Go To App!</button>
      </section>}   
        <Footer id="characterList" characterData={this.state.data}/>
      </main>
    )
  }
}

export default App