import React from "react";

//include images into your bundle

import Navbar from "./navbar";
import Jumbutron from "./jumbutron";
import CardImage from "./cards";



//create your first component
const Home = () => {
	let cards = [
		{título: "La nueva tecnología", descripcion: "Ya no estamos tan lejos de poder tener autos voladores"}
		{título: "Crisis mundial", descripcion: "Ahora cada vez más votantes que estaban a favor de Trump se encuentran arrepentidos"}
		{título: "Los milenials no pueden adquirir una casa", descripcion: "Cada vez son más los jóvenes a los que no les queda otra opción más que vivir en casa de sus padres debido a la inflación"}
		
	]
	return (
		<div className="text-center">
            <Navbar/>
			<Jumbutron/>
			<div>
				<cards
			</div>

		</div>
	);
};

export default Home;