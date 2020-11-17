import React from 'react';
import { Link } from 'react-router-dom';

import products from './productsData';

function Products() {
	return (
		<>
			<div>
				{products.map(product => (
					<div key={product.id}>
						<Link to={`/products/${product.id}`}>
							<h2>{product.name}</h2>
						</Link>
						{/* <p>Price: {product.price}</p>
						<p>{product.description}</p> */}
						<hr />
					</div>
				))}
			</div>
		</>
	)
}

export default Products;
