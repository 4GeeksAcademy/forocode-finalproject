import React, { useContext, createElement } from "react";
import { Context } from "../store/appContext";

import AsideTrending from "../components/trending.jsx";
import AsideFourGeeks from "../components/4geeks.jsx";
import { TextEditor } from "../components/TextEditor/text-editor.jsx";

// IMPORT ICONS
import Icon from "../components/icons/icon.jsx";

import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

// ICON CATEGORIES

export const Home = () => {
	const { store, actions } = useContext(Context);

	const categories = store.categories;

	return (
		<div className="container">
			<div className="row">
				{/* <div className="mb-8">
					<TextEditor />
				</div> */}
				<div className="col-md-8 mb-3 mb-md-0">
					{/* CATEGORIAS */}
					<div className="shadow-sm rounded-3 mb-4 p-3">
						<div className="">
							<h4 className="mb-4">Categorías</h4>
						</div>
						<Categories />
					</div>
				</div>
				<div className="col-md-4">
					{/* TRENDING */}
					<AsideTrending />
					{/* 4GEEKS */}
					<AsideFourGeeks />
				</div>
			</div>
		</div>
	);
};

const Categories = () => {
	const { store, actions } = useContext(Context);

	const categories = store.categories;

	return (
		<div className="row">
			{categories.map((category, index) => {
				return (
					<div key={index} className="col-md-12">
						<Link
							to={`/threads/${category.name.toLowerCase()}`}
							style={{
								textDecoration: "none",
								color: "currentColor",
							}}>
							<div className="d-flex flex-row align-items-center gap-2 p-0">
								<Icon
									name={category.icon}
									size="25"
									stroke="1"
								/>
								<p className="p-0 m-0">{category.name}</p>
							</div>
						</Link>
						<hr className="hr"></hr>
					</div>
				);
			})}
		</div>
	);
};
