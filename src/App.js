import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";



function App() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const initialUrl ="https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) =>{
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
      setCharacters(data.results);
      setInfo(data.info)
    })
    .catch((error)=> console.log(error))
  };

  const onPrevious = () =>{
    fetchCharacters(info.prev)
  }

  const onNext = () =>{
    fetchCharacters(info.next)
  }

  useEffect(()=>{
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
        <Navbar brand="Rick and Morty App"/>

        <div className="container mt-5 bg-dark">
          <SearchBar/>
          <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
          <Characters characters={characters}/>
          <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
          <Pagination/>
        </div>
    </>
  );
}

export default App;
