/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../../helpers/commonFunctions";

//customhooks file name start with use keyword
const Todo = () => {
	const [data, setData] = useState(""); //states are local
	const [items, setItems] = useState(getData()); //boolean null props backendvalues constants
	const [isEdit, setIsEdit] = useState(null);
	const [toggle, setToggle] = useState(true);
	useEffect(() => {
		localStorage.setItem("todolist", JSON.stringify(items)); // because only strings can go to local storage
	}, [items]);

	// useEffect(() => {
	// 	const storedData = getData();
	// 	setItems(storedData);
	// }, []);
	//comments are good to write

	//why should we use usecallback
	//refrential and equality  edit
	const handleNameChange = (e) => {
		console.log(e.target.value, "i m e");
		setData(e.target.value);
	};

	const handleClick = (id) => {
		if (!data) {
			alert("plz fill the data");
		} else if (data && !toggle) {
			setItems(
				items.map((item) => {
					if (item.id === isEdit) {
						return { ...item, name: data };
					}
					return item;
				})
			);
		} else {
			const InputData = { id: new Date().getTime().toString(), name: data };
			setItems((oldItem) => {
				return [...oldItem, InputData];
			});
			setData("");
		}
	};

	const deleteItem = (id) => {
		const updatedItems = items.filter((elem) => {
			return id !== elem.id;
		});
		setItems(updatedItems);
	};
	const EditItem = (e) => {
		let newItem = items.find((item) => {
			return e.id === item.id;
		});
		setData(newItem.name);
		setIsEdit(e.id);
		setToggle(false);
		// items.map((item) => {
		// 	return console.log(item, "item");
		// });
	};

	return (
		//react hookform
		//switch onblur
		<>
			<div className='flex justify-center h-auto w-auto mt-10 mb-3 '>
				<input
					className='border border-grey w-2/5 ml-3'
					type='text'
					placeholder=' Add Something'
					value={data}
					onChange={handleNameChange}
				/>
				<button
					className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
					onClick={handleClick}>
					+
				</button>
			</div>
			<div>
				{items.map((element, index) => {
					console.log(element, "elememt");
					return (
						<div
							className='flex justify-center h-auto w-auto mt-10 mb-3 '
							key={element.id}>
							<input
								className='border border-grey w-2/5 ml-3'
								type='text'
								value={element.name}
							/>

							<button
								className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-3'
								onClick={() => EditItem(element)}>
								edit
							</button>
							<button
								className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-1'
								onClick={() => deleteItem(element.id)}>
								Delete
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Todo;
