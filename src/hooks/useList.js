import { useState } from "react";

const useList = () => {
	const [list, setList] = useState([]);

	const push = (newItem) => {
		if (newItem === "") return;
		let newList = [...list, newItem];
		console.log(newList);
		setList(newList);
	};

	const pop = (removeIndex) => {
		let newList = list.filter((item, index) => index != removeIndex);
		console.log(newList);
		setList(newList);
	};
	return {
		list: list,
		push: push,
		pop: pop,
	};
};

export default useList;
