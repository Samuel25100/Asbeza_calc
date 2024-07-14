import { useEffect, useState } from 'react';
import landingPagePNG from "./assets/LandingPage/TopLandingPage.png"
import './App.css'
import './more.css'
import './landingPg.css'
import cartPNG from "./assets/cart.png"

import {Calcbar} from './CalcUpdate.jsx'
import ItemSec from './List_of_Items.jsx'
import LeftBar from './LeftMenus.jsx';

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


	
	if (landingPage) {
		return (
			<div className='LandingBody'>
				<div className='Image'>
					<img className='topLanding' src={landingPagePNG} alt='Top-Landing-Page'/>
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
						<LeftBar setdatatype={setdatatype} setdataget={setdataget}/>
					</div>
					<div className="one">
						<div className='logo' onClick={() => (setLanding(true))}>
							<h1>AsbezaCalc</h1>
							<div className='logoIcon'>
								<img className='logoIcon' src={cartPNG} alt='Cart' />
							</div>
						</div>
						<Calcbar timeline={timeline} itemSize={itemSize} setTimeSize={setTimeSize} month={month} setMonth={setMonth} final={final} setFinal={setFinal} setCalIn={setCalIn} calIn={calIn} setresult={setresult}/>
						<div className='popup' style={{ display: result === 0 ? 'none' : 'block' }}>
							<h2>Result:${result}</h2>
						</div>
						<ItemSec dataget={dataget}  datatype={datatype} itemSize={itemSize} setItemSize={setItemSize} setCalIn={setCalIn} setFinal={setFinal} calIn={calIn}/>
					</div>
				</div>
			</>
		);
	}
}
