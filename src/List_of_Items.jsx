
export default function ItemSec({ dataget, datatype, itemSize, setItemSize, setCalIn, setFinal, calIn}) {
    
    function HandleInput({typ, name, itemSize, calIn}) {

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

	function ForGrocery({ dataget }) {
	
		return (
			<>
			{dataget.map((items, i) => (
				<div className="items" key={i} onClick={() => {
					updatein(items.name, items.price, );
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
						<HandleInput typ={items.size} name={items.name} itemSize = {itemSize} setItemSize={setItemSize} calIn={calIn}/>
					</div>
				</div>
			))}
			</>
		)
	}

	function ForOther({ dataget }) {
		const arrangment = {justifyContent : 'flex-start'};
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
			{datatype == "grocery" ? <ForGrocery dataget={dataget} HandleInput={HandleInput}/> : <ForOther dataget={dataget}/>}
		</div>
	)
}