/*
LeftBar -  is the left menu handler component to make http request based on each button and its function is:
    fetcher - make http request to fetch data based on input value 'type' could be (grocery, hotels, tools ...)
*/
import leftMenuPNG from "./assets/leftMenu.png"
import groceryPNG from "./assets/grocery.png"
import housePNG from "./assets/house.png"
import vehiclePNG from "./assets/vehicle.png"
import hotelPNG from "./assets/hotel.png"
import toolsPNG from "./assets/tools.png"


export default function LeftBar({setdataget, setdatatype}) {
    async function fetcher(type) {
        const url = `https://www.techmaker.tech/api/cal/${type}`;
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

	return (
		<>
			<div className='leftmenu' onClick={() => {
				/*  */
			}}>
				<img className='leftmenuIcon' src={leftMenuPNG} alt='Menu' />
			</div>
			<div className='grocery' onClick={() => {
				fetcher('grocery');
			}}>
				<img className='groceryIcon' src={groceryPNG} alt='Grocery' />

			</div>
			<div className='house' onClick={() => {
				fetcher('houses');
			}}>
				<img className='houseIcon' src={housePNG} alt='Houses' />

			</div>
			<div className='vehicle' onClick={() => {
				fetcher('vehicles');
			}}>
				<img className='vehicleIcon' src={vehiclePNG} alt='Vehicles' />
			</div>
			<div className='hotel' onClick={() => {
				fetcher('hotels');
			}}>
				<img className='hotelIcon' src={hotelPNG} alt='Hotels' />

			</div>
			<div className='tools' onClick={() => {
				fetcher('tools');
			}}>
				<img className='toolIcon' src={toolsPNG} alt='Tools' />

			</div>
		</>
	)
}