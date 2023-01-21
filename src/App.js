import React, {useState} from 'react'


function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [indexes, setIndexes] = useState(0);
	const [newIndex, setNewIndex] = useState(0);
	
	const result = notes.map((note, index) => {
		return <p key={index}>{note}</p>;
	});

	const addNumber = () => setNotes([...notes, notes.length + 1]);

	const removeNumber = () => {
		let copy = Object.assign([], notes);
		copy = copy.splice(0, copy.length - 1);
		return setNotes(copy);
	}

	const changeConcreteNumber = () => {
		let copy = Object.assign([], notes);
		copy[indexes - 1] = newIndex;
		return setNotes(copy)
	}

	const reverseDataInArray = () => {
		let copy = Object.assign([], notes);
		return setNotes(copy.reverse())
	}

	const sortDataInArray = () => {
		let copy = Object.assign([], notes);
		return setNotes(copy.sort())
	}

	return <div>
		<input value={indexes} onChange={(event) => setIndexes(event.target.value)}></input><br />
		<input value={newIndex} onChange={event => setNewIndex(event.target.value)}></input>
		<button onClick={changeConcreteNumber}>Change concrete number</button><br />
		<button onClick={addNumber}>Add number</button>
		<button onClick={removeNumber}>Remove number</button><br />
		<button onClick={reverseDataInArray}>Reverse numbers</button>
		<button onClick={sortDataInArray} >Sort numbers</button>
		{result}
	</div>;
}

export default App

