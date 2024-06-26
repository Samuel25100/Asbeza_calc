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
	const [calIn, setCalIn] = useState([]);
	const [final, setFinal] = useState("");
	const [result, setresult] = useState(0);

	function updatein(name, price) {
		setCalIn((prevCalin) => {
			const newCalIn = [...prevCalin];
			function containobj(array, obj) {
				for (let line of array) {
					if (line[name] === obj.name) {
						return (0);
					}
				}
				return (1);
			}

			if (containobj(newCalIn, {name: name, price: price})) {
				newCalIn.push({name: name, price: price});
			}
			let newFinal = "";
			for (let val of newCalIn) {
				if (newFinal !== "") {
					newFinal += " + ";
				}
				newFinal += `(${val.name}: ${val.price})`;
			}
			setFinal(newFinal);
			return (newCalIn);
		})
	}

	function clear() {
		setCalIn([]);
		setFinal("");
		setresult(0);
	}

	function del() {
		if (calIn.length !== 0 && final.length !== 0) {
			setCalIn((prevVal) => {
				if (prevVal.length !== 0) {
					if (prevVal.length === 1) {
						clear();
					}
					prevVal.pop();
					return (prevVal);
				}
			})
			setFinal((perfinal) => {
				if (perfinal.length !== 0) {
					if (perfinal.length <= 20) {
						clear();
					}
					return (perfinal.replace(/\s\+\s\([^)]+\)$/, ""));
				}
			})
		}
	}

	function calculate() {
		let relt = 0;
		for (let line of calIn) {
			relt += line.price;
		}
		setresult(relt);
	}

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
					<Calcbar final = {final} clear = {clear} del={del} calculate={calculate}/>
					<div className='popup' style={{ display: result === 0 ? 'none' : 'block' }}>
						<h2>Result:${result}</h2>
					</div>
					<ItemSec updatein = {updatein} />
				</div>
			</div>
		</>
	);
}

function ItemSec({ updatein }) {
	return (
		<div className='sec'>
			{data.map((items, i) => (
				<div className="items" key={i} onClick={() => {
					updatein(items.name, items.price);
					}}>
					<div className='images'>
						<img className='itemImage' src={items.imageid} alt={items.name}/>
					</div>
					<div className="description">
						<h2 className="item_name">{items.name}</h2>
						<h2 className="price">${items.price}</h2>
					</div>
				</div>
			))}
		</div>
	);
}

function Calcbar({ final, clear, del, calculate }) {
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
				<div className='inputval'>
					{final}
				</div>
			</div>
			<div className='calButton'>
				<button className='delete' onClick={() => {
					del();
				}}>Delete</button>
				<button className='clear' onClick={() => {
					clear();
				}}>Clear</button>
				<button className='cal' onClick={() => {
					calculate();
				}}>Calculate</button>
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