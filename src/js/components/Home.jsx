import React from "react";

//include images into your bundle

import Navbar from "./navbar";
import Jumbutron from "./jumbutron";
import CardImage from "./cards";
import Footer from "./footer"



//create your first component
const Home = () => {
	 let propiedades = [
	 	{imagen: "https://rpas-drones.com/wp-content/uploads/2021/10/ehang-216.jpg", titulo: "La nueva tecnología", descripcion: "Ya no estamos tan lejos de poder tener autos voladores"},
	 	{imagen:"https://spanishrevolution.net/wp-content/uploads/2025/01/Captura-de-pantalla-2025-01-28-072702.png",titulo: "Crisis mundial", descripcion: "Ahora cada vez más votantes que estaban a favor de Trump se encuentran arrepentidos"},
	 	{imagen:"https://bolsainmobiliaria.pe/storage/blog/YlIjmdPACNsdITDiH9qZJLCZpvPkAUBPNGpf264l.jpeg",titulo: "Los milennials no pueden adquirir una casa", descripcion: "Cada vez son más los jóvenes a los que no les queda otra opción más que vivir en casa de sus padres debido a la inflación"},
		{imagen:"https://i0.wp.com/farmarunning.com/wp-content/uploads/2021/01/descarga-1.jpg?resize=282%2C179&ssl=1",titulo: "El envejecimiento saludable", descripcion: "El envjecimiento no está dado por la edad si no por la falta de movimiento. Si quieres un envejecimiento saludable ¡Muévete!"}
	]
	return (
		<div className="text-center">
            <Navbar/>
			<Jumbutron/>
			<div className="row">
			{propiedades.map((item, index)=>(
				<CardImage key={index} imagen={item.imagen} titulo={item.titulo} descripcion={item.descripcion}/>
				))}
			</div> 
			<Footer/>

		</div>
	);
};

export default Home;