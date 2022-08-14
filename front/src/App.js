import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import CryptoJS from 'crypto-js';
import Hero from './Hero';
import "./App.css";
import Detail from './Detail';

function App() {
  const hash = CryptoJS.MD5("16ddf354bb0c291d84cae4674c836f073721e3d5c67aeb338106d0778a46018b0b22397cf")
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=67aeb338106d0778a46018b0b22397cf&hash=${hash}`
  const [herolist, setHeroList] = useState([])
  const [ComicsList, setComicsList] = useState([])
  const [inputvalue, setInputValue] = useState("")
  const [isHomePage, setIsHomePage] = useState(true)
  const [HeroId, setHeroId] = useState(0)
  const [HeroDesc, setHeroDesc] = useState("")
  const [HeroName, setHeroName] = useState("")
  const [HeroImg, setHeroImg] = useState("")

  useEffect(() => {
    fetch(url, { method: "GET" }).then(
      response => response.json()
    ).then(
      dataresponse => {
        setHeroList(dataresponse.data.results)
      }
    ).catch(error => console.log(error));
  }, [])

  useEffect(() => {
    if (inputvalue !== "") {
      fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${inputvalue}&ts=1&apikey=67aeb338106d0778a46018b0b22397cf&hash=${hash}`, { method: "GET" }).then(
        response => response.json()
      ).then(
        dataresponse => {
          setHeroList(dataresponse.data.results)
        }
      ).catch(error => console.log(error));
    }
    else {
      fetch(url, { method: "GET" }).then(
        response => response.json()
      ).then(
        dataresponse => {
          setHeroList(dataresponse.data.results)
        }
      ).catch(error => console.log(error));
    }
  }, [inputvalue])

  useEffect(() => {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${HeroId}/comics?ts=1&apikey=67aeb338106d0778a46018b0b22397cf&hash=${hash}`, { method: "GET" }).then(
      response => response.json()
    ).then(
      dataresponse => {
        setComicsList(dataresponse.data.results)
      }
    ).catch(error => console.log(error));
  }, [HeroId])

  return (
    <div className="parent">
      <div className="searchbar_pos">
        <input type="text" placeholder="Search.." className="searchbar" onChange={(e) => setInputValue(e.target.value)}></input>
      </div>
      <TopBar />
      {
        isHomePage ?
          <div>
            {herolist.map((hero, i) => {
              return <Hero key={i} id={hero.id} img={hero.thumbnail.path + ".jpg"} name={hero.name} desc={hero.description} changePage={setIsHomePage} changeId={setHeroId} changeName={setHeroName} changeDesc={setHeroDesc} changeImg={setHeroImg}/>
            })}
          </div>
          :
          <div>
            <Detail name={HeroName} desc={HeroDesc} img={HeroImg} changePage={setIsHomePage} comicsList={ComicsList}/>
          </div>
      }
    </div>
  )
}

export default App;
