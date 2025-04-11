import React from "react";

import {useState, useEffect} from "react";


const Home = () => {
	const [list, setList] = useState([])
	const [text, setText] = useState("")
	const [boxClass, setBox] = useState("")

	// hice este efecto con la animación sólo para usar de alguna manera el useEffect
	// box es una animación que añadí en index.css cogida de https://csslab.app/animations/wobble
	useEffect(()=>{
		setBox("box")
		setTimeout(() => {
			setBox("")
		  }, 200);
	},[list])

	// se consigue un random y se verifica que ese random no exista ya en la lista
	const getRandom = () => {
		let actual = Math.random() * 999999
		let found = false
		list.map((el) => {
			if(el.id == false)
				found = true
			})
		if(found)
			actual = getRandom()

		return actual
	}
	
	const addItem = (e) => {
		e.preventDefault()
		setList([...list,{label: text, id: getRandom()}])
		setText("")
	}

	const deleteItem = (e) => {
		console.log("vaya")
		let aux = list.filter((el)=>el.id != e)
		setList(aux)
	}

	return (
		<div className="container text-center">
			<form onSubmit={addItem} className="mt-5">
				<input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="What needs to be done?" className="form-text form-control form-control-lg"/>
				<input type="submit" value="" hidden/>
			</form>
			<ul className={boxClass + " lista mt-2 list-group list-group-flush d-inline-flex bg-transparent"}>
				{list.length > 0 ? list.map((el)=>
					<li className="lista-item d-flex justify-content-start align-items-center list-group-item fs-4 bg-transparent" key={el.id}>
						<span className="text-break me-auto">{el.label}</span>
						<span className="papelera ms-3" onClick={e=>deleteItem(el.id)}><i className="fa-solid fa-trash"></i></span>
					</li>) : <li className="list-group-item fs-2" key="empty">There are no tasks, add some</li>}
			</ul>
		</div>
	);
};

export default Home;