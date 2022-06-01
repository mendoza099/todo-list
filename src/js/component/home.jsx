import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Formulario from "./Formulario.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h2>Todos</h2>
			<Formulario />
		</div>
	);
};

export default Home;
