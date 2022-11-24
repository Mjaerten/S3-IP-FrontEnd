import React from 'react';

const ItemListHeading = (props) => {
	return (
		<div className='col'>
			<h1 style={{ color: '#FFF' }}>{props.heading}</h1>
		</div>
	);
};

export default ItemListHeading;