import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputeValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);


	return (
	<div className="container">
		<h1>My Todos </h1>
		<ul>
			<li>
				<input 
				type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputeValue}
				onKeyUp={(e) => {
					if (e.key === "Enter") {
						setTodos(todos.concat(inputeValue));
						setInputValue("")
					}
				}}
				placeholder="Input Task"></input>
			</li>
			{todos.map((item, index) => (
			<li key = {index}>
				{item}{" "}
				<i className="fa-solid fa-trash-can"
				onClick={() =>
				setTodos(
					todos.filter(
						(t,currentIndex) =>
						index != currentIndex
					)
				)
				}></i>
				</li>
				))}
		</ul>
<div>{todos.length}</div>
	</div>
	);
};

export default Home;
