import { useState } from 'react';
import './App.css'
import './more.css'
//import add from './click.jsx'

const data = [
	{ "name": "Onion", "price": 30, "imageid": "src/assets/onion.png" },
	{ "name": "Carrot", "price": 35, "imageid": "src/assets/carrot.png" },
	{ "name": "Potato", "price": 40, "imageid": "src/assets/potato.png" },
	{ "name": "Cabbage", "price": 40, "imageid": "src/assets/cabbage.png" },
	{ "name": "Pumpkin", "price": 40, "imageid": "src/assets/pumpkin.png" },
	{ "name": "ChiliPepper", "price": 40, "imageid": "src/assets/chili-pepper.png" },
	{ "name": "Olive Oil", "price": 48, "imageid": "src/assets/olive-oil.png" },
	{ "name": "Tomato", "price": 43, "imageid": "src/assets/tomato.png" },
	{ "name": "PeaNut Butter", "price": 46, "imageid": "src/assets/peanut-butter.png" },
	{ "name": "Spinach", "price": 50, "imageid": "src/assets/spinach.png" },
	{ "name": "Tea", "price": 46, "imageid": "src/assets/tea.png" },
	{ "name": "Pasta", "price": 50, "imageid": "src/assets/pasta.png" },
	{ "name": "Oil", "price": 50, "imageid": "src/assets/oil.png" },
	{ "name": "Berberea", "price": 50, "imageid": "src/assets/berberea.png" },
	{ "name": "Rice", "price": 50, "imageid": "src/assets/rice.png" },
	{ "name": "Sugar", "price": 50, "imageid": "src/assets/sugar.png" },
	{ "name": "Coffee", "price": 50, "imageid": "src/assets/coffee.png" },
	{ "name": "Bread", "price": 50, "imageid": "src/assets/bread.png" },
	{ "name": "Cucumber", "price": 50, "imageid": "src/assets/Cucumber.png" },
	{ "name": "Pasta", "Orange": 50, "imageid": "src/assets/orange.png" },
	{ "name": "Mango", "price": 50, "imageid": "src/assets/mango.png" },
	{ "name": "Avocado", "price": 50, "imageid": "src/assets/avocado.png" },
];

export default function App() {

	return (
		<>
			<div className='body'>
				<div className='leftBar'>
					<LeftBar />
				</div>
				<div className="one">
					<div className='logo'>
						<h1>Asbeza</h1>
						<div className='logoIcon'>
							<img className='logoIcon' src='src/assets/cart.png' alt='Cart' />
						</div>
					</div>
					<Calcbar />
					<div className='sec'>
						{data.map((items, i) => (
							<div className="items" key={i}>
								<div className='images'>
									<img className='itemImage' src={items.imageid} alt={items.name}
									/>

								</div>
								<div className="description">
									<h2 className="item_name">{items.name}</h2>
									<h2 className="price">${items.price}</h2>
								</div>
							</div>
						))}

					</div>

				</div>
			</div>
		</>
	);
}

function Calcbar() {

	return (
		<section className='top'>
			<div className="clcbar">
				<div className='monthYear'>
					<select className='monthly'>
						<option value="monthly">
							Monthly
						</option>
						<option value="yearly">
							Yearly
						</option>
					</select>
					
				</div>

			</div>
			<div className='calButton'>
				<button>Calculate</button>
			</div>
		</section>
	)
}

function LeftBar() {
	return (
		<>
			<div className='leftmenu'>
				<img className='leftmenuIcon' src='src/assets/leftMenu.png' alt='ICON' />
			</div>
			<div className='grocery'>
				<img className='groceryIcon' src='src/assets/grocery.png' alt='ICON' />

			</div>
			<div className='house'>
				<img className='houseIcon' src='src/assets/house.png' alt='ICON' />

			</div>
			<div className='vehicle'>
				<img className='vehicleIcon' src='src/assets/vehicle.png' alt='ICON' />
			</div>
			<div className='hotel'>
				<img className='hotelIcon' src='src/assets/hotel.png' alt='ICON' />

			</div>
			<div className='tools'>
				<img className='toolIcon' src='src/assets/tools.png' alt='ICON' />

			</div>
		</>
	)
}