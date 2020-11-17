import React from 'react';
import {
	BrowserRouter as Router,
    Switch,
	Route,
	Link
} from 'react-router-dom';

import NavBar from './NavBar';

import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/products">
						<Products />
					</Route>
					<Route path="/products/:id">
						<ProductDetail />
					</Route>
				</Switch>
			</Router>
			{/* /**
				* Challenge:
				* 
				* 1. Create a ProductDetail component
				* 2. Link each product name to a detail page of that product 
				*    under the route "/products/{insert product id here}" (e.g.: "/products/2")
				* 3. Clicking the product name should replace the product list page with
				*    the detail page of that component.
				* 
				* Hint: Check out the `useParams` lesson if you need a refresher.
				*/ }
		</div>
	);
}

export default App;
