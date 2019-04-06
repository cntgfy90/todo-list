import React from "react";
import ListItem from "./ListItem";

export default class List extends React.Component {
	state = {
		todoList: [],
	};

	componentDidMount() {

	}

	get list() {
		return this.state.todoList.map(listItem => <ListItem key={listItem.id} listItem={listItem} />)
	}

	render() {
		return (
			<div>
				{this.list}
			</div>
		);
	}
};