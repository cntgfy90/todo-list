import React from "react";
import { Field, Label, Control, Button, Input } from "bloomer";

export default class Form extends React.Component {
	state = {
		data: {},
	};

	handleDataChange = (key, value) => {
		this.setState(prevState => ({
			data: {
				...prevState.data,
				[key]: value,
			},
		}));
	}

	handleSubmit = () => {

	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Field>
					<Label>Task label</Label>
					<Control>
						<Input
							type="text"
							placeholder="..."
							onChange={value => this.handleDataChange("label", value)}
						/>
					</Control>
				</Field>
				<Field>
					<Control>
						<Button type="submit">Create</Button>
					</Control>
				</Field>
			</form>
		);
	}
}