import React from "react";
import Form from "./Form";
import List from "./List";
import { Box } from "bloomer";
import styled from "styled-components";

const StyledContent = styled(Box)`
	width: 80%;
	margin: 0 auto;
	background-color: #461260;
`;

export default class Content extends React.Component {
	render() {
		return (
			<StyledContent>
				<Form />
				<List />
			</StyledContent>
		);
	}
}