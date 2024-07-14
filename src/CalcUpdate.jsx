/*
Calcbar - handle the calculation of the data and delete, clear and calculate button functions.
it have following functions:
    clear - clear all user input data, will be called on click of 'Clear' button
    del - delete one user selected item from display and to be calculated data, will be called on click of 'Delete' button
    calculate - calculated result from inserted data, will be called on click of 'Calculate' button
    TimeLenght - handle the number of month inputed by user for time option
*/



export function Calcbar({ final, timeline, itemSize, setTimeSize, month, setMonth, setCalIn, calIn, setresult, setFinal}) {

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
        }
        if (month >= 1 && timeline == "monthly") {
            relt *= month;
        } else if (timeline == "yearly") {
            relt *= 12;
        }
    
        setresult(relt);
    }


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
					<input type="number" id="numInput" min="1" max="11" value={month} onChange={handleMonth}/>
				</div>
			);
		}
	}

	return (
		<section className='top'>
			<div className="clcbar">
				<div className='monthYear'>
					<select className='monthly' id="time" onChange={handleTime}>
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