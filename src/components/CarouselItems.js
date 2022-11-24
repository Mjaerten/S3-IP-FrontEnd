import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from "./carousel/Carousel";
import ItemListHeading from "./ItemListHeading";
import Popup from './popup/Popup';

const CarouselItems = (props) =>{

    const [items, setItems] = useState([]);

    const loadItems = async ()=>{
      const result= await axios.get(`http://localhost:8080/get/items/genre/${props.Genre.id}`);
      setItems(result.data);
      console.log(items);
    }
  
    useEffect(()=>{
      loadItems();
    },[])

    const shownumber = (props) => {
        if(props.length < 4){
            return props.length;
        }
        else{
            return 4;
        }
    }

    
    if(items.length > 0){
        return (
            <>
                <ItemListHeading heading = {props.Genre.genre}/>
                <Carousel
                show={shownumber(items)}
                infiniteLoop={true}
                >
                {items.map((item, index) => (
                        <div>
                            <div  key={index} style={{padding: 8}}  onClick={() => props.popupTrigger(item)}>
                                <img src={item.imageURL} alt='movie' className='image'></img>
                            </div>
                            
                        </div>
                    ))} 
    
                </Carousel>
            </>
        );
    }
    else{
        return (
            <>
            </>
        );
    }

    
}

export default CarouselItems;