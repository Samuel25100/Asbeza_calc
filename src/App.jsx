import { useState } from 'react';
import './App.css'
import './more.css'
import './landingPg.css'
//import add from './click.jsx'

const data = [
	{ "name": "Onion", "price": 30, "size":"kg", "imageid": "src/assets/onion.png" },
	{ "name": "Carrot", "price": 35, "size":"kg", "imageid": "src/assets/carrot.png" },
	{ "name": "Potato", "price": 40, "size":"kg", "imageid": "src/assets/potato.png" },
	{ "name": "Cabbage", "price": 40, "size":"kg", "imageid": "src/assets/cabbage.png" },
	{ "name": "Pumpkin", "price": 40, "size":"kg", "imageid": "src/assets/pumpkin.png" },
	{ "name": "ChiliPepper", "price": 40, "size":"kg", "imageid": "src/assets/chili-pepper.png" },
	{ "name": "Olive Oil", "price": 48, "size":"lt", "imageid": "src/assets/olive-oil.png" },
	{ "name": "Tomato", "price": 43, "size":"kg", "imageid": "src/assets/tomato.png" },
	{ "name": "PeaNut Butter", "price": 46, "size":"piece", "imageid": "src/assets/peanut-butter.png" },
	{ "name": "Spinach", "price": 50, "size":"kg", "imageid": "src/assets/spinach.png" },
	{ "name": "Tea", "price": 46, "size":"piece", "imageid": "src/assets/tea.png" },
	{ "name": "Oil", "price": 50, "size":"lt", "imageid": "src/assets/oil.png" },
	{ "name": "Berberea", "price": 50, "size":"kg", "imageid": "src/assets/berberea.png" },
	{ "name": "Rice", "price": 50, "size":"kg", "imageid": "src/assets/rice.png" },
	{ "name": "Sugar", "price": 50, "size":"kg", "imageid": "src/assets/sugar.png" },
	{ "name": "Coffee", "price": 50, "size":"kg", "imageid": "src/assets/coffee.png" },
	{ "name": "Bread", "price": 50, "size":"piece", "imageid": "src/assets/bread.png" },
	{ "name": "Cucumber", "price": 50, "size":"kg", "imageid": "src/assets/Cucumber.png" },
	{ "name": "Pasta", "price": 50, "size":"piece", "imageid": "src/assets/orange.png" },
	{ "name": "Mango", "price": 50, "size":"kg", "imageid": "src/assets/mango.png" },
	{ "name": "Avocado", "price": 50, "size":"kg", "imageid": "src/assets/avocado.png" },
];
export default function App() {
	const [calIn, setCalIn] = useState([]);
	const [final, setFinal] = useState("");
	const [result, setresult] = useState(0);
	const [dataget, setdataget] = useState(data);
	const [datatype, setdatatype] = useState("grocery")
	const [itemSize, setItemSize] = useState({});
	const [timeline, setTimeSize] = useState("");
	const [month, setMonth] = useState(0);
	const [landingPage, setLanding] = useState(true);


	function updatein(name, price) {
		setCalIn((prevCalin) => {
			const newCalIn = [...prevCalin];
			function containobj(array, obj) {
				for (let line of array) {
					if (line.name == obj.name && line.price == obj.price) {
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
				newFinal += `(${val.name}: \$${val.price})`;
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
			if (itemSize[line.name] !== undefined) {
				relt += (itemSize[line.name] * line.price);
			}
			else {
				relt += line.price;
			}
			if (month !== 0) {
				if (timeline == "yearly")  {
					relt *= 12;
				} else {
					relt *= month;
				}
				console.log("value of month:", month);
			}
		}

		setresult(relt);
	}

	async function fetcher(type) {
		const url = `http://100.25.157.103/api/cal/${type}`;
		setdatatype(type);
		
		try {
            const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
            	setdataget(data);
			}
        } catch (error) {
            console.error("Error fetching data:", error);
        }
	}

	function HandleInput({typ, name}) {

		const handler = (event) => {
			setItemSize((prevItemSize) => ({...prevItemSize, [name]: event.target.value}));
		};
		if (itemSize[name] > 1) {
			let newFinal = "";
			for (let val of calIn) {
				if (newFinal !== "") {
					newFinal += " + ";
				}
				if (itemSize[val.name] > 1) {
					newFinal += `(${val.name}: \$${val.price} * ${itemSize[val.name]} ${typ})`;
				} else {
					newFinal += `(${val.name}: \$${val.price})`;
				}
			}
			setFinal(newFinal);
		}
		if (typ === "kg" || typ === "lt") {

			return (
				<>
				<input className='sizeInput' type='number'  step='0.5' min='0' value={itemSize[name] || "1"}  onChange={(event)=> (setItemSize((prevItemSize) => ({...prevItemSize, [name]: event.target.value})))}></input>
				<span> {typ}</span>
				</>
			);
		} else if (typ === "piece") {
			return (
				<>
				<input className='sizeInput' type='number' min='1' value={itemSize[name] || "1"}  onChange={handler}></input>
				<span> {typ}</span>
				</>
			);
		}
	}
	if (landingPage) {
		return (
			<div className='LandingBody'>
				<div className='Image'>
					<img className='topLanding' src='src/assets/LandingPage/TopLandingPage.png' alt='Top-Landing-Page'/>
				</div>
				<div className='describe'>
					<h1 className='topFont'>AsbezaCalc</h1>
					<p className='LandingDescri'>Welcome to AsbezaCalc – your go-to web app for effortlessly calculating the cost of living in Addis Ababa, Ethiopia! Whether you’re a tourist planning your next adventure or someone considering settling in this vibrant city, our app is designed to provide you with accurate and detailed expense estimates.

With AsbezaCalc, you can easily calculate the costs for essential categories such as groceries, hotels, housing, and vehicle rentals. <br/> Our app also covers tools and tech products, ensuring you have a comprehensive understanding of the expenses you might encounter.

Navigate through our user-friendly interface to input your preferences and requirements, and receive tailored estimates that help you budget effectively.
Let AsbezaCalc be your trusted companion in making informed financial decisions in one of Africa’s most dynamic cities. Start planning today and embrace the beauty and opportunities that Addis Ababa has to offer!</p>
					<button className='getSt' onClick={() => (
						setLanding(false)
						)}>Get Started</button>
					<button className='getSt' onClick={() => {
						window.open('https://github.com/Samuel25100/Asbeza_calc', '_blank');
					}}>About</button>
				</div>
				
			</div>
		)
	} else {
		return (
			<>
				<div className='body'>
					<div className='leftBar'>
						<LeftBar fetcher={fetcher}/>
					</div>
					<div className="one">
						<div className='logo' onClick={() => (setLanding(true))}>
							<h1>AsbezaCalc</h1>
							<div className='logoIcon'>
								<img className='logoIcon' src='src/assets/cart.png' alt='Cart' />
							</div>
						</div>
						<Calcbar final = {final} clear = {clear} del={del} calculate={calculate} timeline={timeline} setTimeSize={setTimeSize}  month={month}setMonth={setMonth}/>
						<div className='popup' style={{ display: result === 0 ? 'none' : 'block' }}>
							<h2>Result:${result}</h2>
						</div>
						<ItemSec updatein = {updatein} dataget = {dataget}  datatype = {datatype} HandleInput = {HandleInput}/>
					</div>
				</div>
			</>
		);
	}
}

function ItemSec({ updatein, dataget, HandleInput, datatype }) {

	function ForGrocery({ dataget, HandleInput, updatein }) {
	
		return (
			<>
			{dataget.map((items, i) => (
				<div className="items" key={i} onClick={() => {
					updatein(items.name, items.price);
					}}>
					<div className='icons'>
					<div className='images'>
						<img className='itemImage' src={items.imageid} alt={items.name}/>
					</div>
					<div className="description">
						<h2 className="item_name">{items.name}</h2>
						<h2 className="price">${items.price}</h2>
					</div>
					</div>
					<div className='items_input'>
						<HandleInput typ={items.size} name={items.name}/>
					</div>
				</div>
			))}
			</>
		)
	}

	function ForOther({ dataget, datatype }) {
		const arrangment = {justifyContent : 'flex-start'};
		/* if (datatype === "") {
		} */
		return (
			<>
			{dataget.map((items, i) => (
				<div className="items" key={i} onClick={() => {
					updatein(items.name, items.price);
					}} style={arrangment}>
					<div className='icons'>
					<div className='images'>
						<img className='itemImage' src={items.imageid} alt={items.name}/>
					</div>
					<div className="description">
						<h4 className="item_name">{items.name}</h4>
						<h4 className="item_name">{items.size}</h4>
						<h4 className="item_name">{items.type}</h4>
						<h2 className="price"> ${items.price}</h2>
					</div>
					</div>
				</div>
			))}
			</>
		)
	}

	return (
		<div className='sec'>
			{datatype == "grocery" ? <ForGrocery dataget={dataget} updatein={updatein} HandleInput={HandleInput}/> : <ForOther dataget={dataget} updatein={updatein} datatype={datatype}/>}
		</div>
	)
}


function Calcbar({ final, clear, del, calculate, timeline,	setTimeSize, month, setMonth }) {
	const handleTime = (event) => {
		setTimeSize(event.target.value);
	}
	function TimeLenght() {
		const handleMonth = (event) => {
			if (timeline == "monthly") {
				setMonth(event.target.value);
			}
		}
		if (timeline == "monthly") {
			return (
				<div className='numMonth'>
					<input type="number" min="1" max="11" value={month} onChange={handleMonth}/>
				</div>
			);
		}
	}

	return (
		<section className='top'>
			<div className="clcbar">
				<div className='monthYear'>
					<select className='monthly' onChange={handleTime}>
						<option value="">
							Time
						</option>
						<option value="monthly">
							Monthly
						</option>
						<option value="yearly">
							Yearly
						</option>
					</select>	
				</div>
				<TimeLenght/>
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

function LeftBar({fetcher}) {
	return (
		<>
			<div className='leftmenu' onClick={() => {
				/*  */
			}}>
				<img className='leftmenuIcon' src='src/assets/leftMenu.png' alt='ICON' />
			</div>
			<div className='grocery' onClick={() => {
				fetcher('grocery');
			}}>
				<img className='groceryIcon' src='src/assets/grocery.png' alt='ICON' />

			</div>
			<div className='house' onClick={() => {
				fetcher('houses')
			}}>
				<img className='houseIcon' src='src/assets/house.png' alt='ICON' />

			</div>
			<div className='vehicle' onClick={() => {
				fetcher('vehicles')
			}}>
				<img className='vehicleIcon' src='src/assets/vehicle.png' alt='ICON' />
			</div>
			<div className='hotel' onClick={() => {
				fetcher('hotels')
			}}>
				<img className='hotelIcon' src='src/assets/hotel.png' alt='ICON' />

			</div>
			<div className='tools' onClick={() => {
				fetcher('tools')
			}}>
				<img className='toolIcon' src='src/assets/tools.png' alt='ICON' />

			</div>
		</>
	)
}