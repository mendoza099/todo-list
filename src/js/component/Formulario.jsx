import React, { useState } from "react";

const Formulario = () => {
	const [input, setInput] = useState("");

	return (
		<>
			<form className="todo-form">
				<input
					type="text"
					placeholder="Lista de tareas"
					className="todo-input"
				/>
				<button className="todo-butom"></button>
			</form>
		</>
	);
};

export default Formulario;
