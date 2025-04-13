import React from "react";

//include images into your bundle

import Navbar from "./navbar";
import Jumbutron from "./jumbutron";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Navbar/>
			<Jumbutron/>

			
		</div>
	);
};

export default Home;