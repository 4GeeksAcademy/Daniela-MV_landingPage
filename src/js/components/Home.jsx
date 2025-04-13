import React from "react";

//include images into your bundle

import Navbar from "./navbar";
import Jumbutron from "./jumbutron";
import CardImage from "./cards";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Navbar/>
			<Jumbutron/>
			<CardImage/>
			<CardImage/>
			<CardImage/>
			<CardImage/>

		</div>
	);
};

export default Home;