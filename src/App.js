import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Carousel from "./components/carousel/Carousel";
import MovieListHeading from "./components/ItemListHeading";
import ItemCard from "./components/ItemCards/ItemCard";
import CarouselItems from './components/CarouselItems';
import Popup from './components/popup/Popup';

//OOIT TRANSITION VAN POPUP!!!!
const App = () => {

  const [genres, setGenres] = useState([]);
  const [specificItem, setSpecificItem] = useState([]);

  const loadGenres = async ()=>{
    const result= await axios.get("http://localhost:8080/get/genres");
    setGenres(result.data);
  }

  useEffect(()=>{
    loadGenres();
  },[])

  const [buttonPopup, setButtonPopup] = useState(false);

  const openPopup = (itemprops) =>{
    setSpecificItem(itemprops);
    setButtonPopup(true);
  }

  return (
    <>
      <div>
        {genres.map((genre, index) =>(
          <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <CarouselItems
            Genre={genre}
            popupTrigger={openPopup}
            />
          </div>
        ))}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          {console.log(specificItem)}
          <h3>PopupTest</h3>
          <h3>{specificItem.name}</h3>
          <h3>{specificItem.id}</h3>
          <h3>{specificItem.imageURL}</h3>
        </Popup> 
      </div>
      
      
    </>
    
    
    );
}

export default App;
