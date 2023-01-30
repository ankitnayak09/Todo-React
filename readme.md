# TODO App

[![Demo of Application](./src/assets/demo.gif)](https://todo-react91.netlify.app/)

## Features

-   Create Todo
-   Remove Todo
-   Message on Empty Input Submit
-

### Languages and Tools:

<p align="left"><a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://img.icons8.com/color/50/000000/css3.png" alt="css" width="40" height="40"/> </a>
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
 <a href="https://reactjs.org/" target="_blank"> <img src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" alt="ReactJS" width="40" height="40"/> </a></p>

### Installation

```sh
$ cd Todo-React
$ npm i
$ npm start
```

### Custom Hook (**useList**)

```javascript
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
```
