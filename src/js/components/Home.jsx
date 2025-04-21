import React, { useEffect, useState } from "react";
import { Digit } from "./digit";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [timer, setTimer] = useState(0);
	const [active, setActive] = useState(true);


	useEffect(() => {
		if(active){
			setTimeout(() => {
				setTimer(value => value + 1)
			}, 1000)
		}

	}, [timer, active])

	const startStop = ()=>{
		setActive(value => !value)
	}
	
		const resetTimer =() =>{
			setTimer(value => 0);
		}

	return (
		<div className="text-center mt-4">
			<div className="counter">
				<Digit className="digit" number={<span className="fa-solid fa-clock" ></span>} />
				<Digit className="digit" number={Math.floor(timer / 100000) % 10} />
				<Digit className="digit" number={Math.floor(timer / 10000) % 10} />
				<Digit className="digit" number={Math.floor(timer / 1000) % 10} />
				<Digit className="digit" number={Math.floor(timer / 100) % 10} />
				<Digit className="digit" number={Math.floor(timer / 10) % 10} />
				<Digit className="digit" number={Math.floor(timer % 10)} />
			</div>
			<div className="mt-2">
				<button onClick={startStop} className="mx-1 btn btn-success">Start</button>
				<button onClick={startStop} className="mx1 btn btn-secondary">Stop</button>
				<button onClick={resetTimer} className="mx-1 btn btn-danger">Retset</button>
			</div>
		</div>
	);
};

export default Home;