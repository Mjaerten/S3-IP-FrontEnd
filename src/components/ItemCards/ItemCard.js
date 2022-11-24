import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {

	return (
		<>
			{props.item.map((item, index) => (
                <div>
                    <div  key={index} style={{padding: 8}}>
                        <img src={item.imageURL} alt='movie' className='image'></img>
                    </div>
                </div>
				
			))}
		</>
	);
};

export default ItemCard;