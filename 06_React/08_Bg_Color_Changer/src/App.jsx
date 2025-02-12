import { useState, useEffect } from "react";

function App() {
	const [color, setColor] = useState("black");

	useEffect(() => {
		document.body.style.backgroundColor = color;
	}, [color]);

	return (
		<>
			<div className="btn-container">
				<button
					onClick={() => setColor("red")}
					style={{backgroundColor: "red"}}
				>Red</button>

				<button
					onClick={() => setColor("green")}
					style={{backgroundColor: "green"}}
				>Green</button>

				<button
					onClick={() => setColor("blue")}
					style={{backgroundColor: "blue"}}
				>Blue</button>

				<button
					onClick={() => setColor("olive")}
					style={{backgroundColor: "olive"}}
				>Olive</button>

				<button
					onClick={() => setColor("orange")}
					style={{backgroundColor: "orange"}}
				>Orange</button>

				<button
					onClick={() => setColor("purple")}
					style={{backgroundColor: "purple"}}
				>Purple</button>

				<button
					onClick={() => setColor("gray")}
					style={{backgroundColor: "gray"}}
				>Gray</button>

				<button
					onClick={() => setColor("indigo")}
					style={{backgroundColor: "indigo"}}
				>Indigo</button>

				<button
					onClick={() => setColor("lime")}
					style={{backgroundColor: "lime"}}
				>Lime</button>

				<button
					onClick={() => setColor("tomato")}
					style={{backgroundColor: "tomato"}}
				>Tomato</button>
			</div>

		</>
	);
}

export default App;