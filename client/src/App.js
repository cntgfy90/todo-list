import { Container } from "bloomer";
import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";

export default () => (
	<Container isFluid>
		<Header>ToDo application</Header>
		<Content />
	</Container>
);
