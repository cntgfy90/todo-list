import { Box, Title } from "bloomer";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledBox = styled(Box)`
	background-color: #fff;
	height: 75px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledTitle = styled(Title)`
	font-size: 50px;
	color: #a5543a;
`;

const Header = () => {
	return (
		<StyledBox>
			<StyledTitle>
				{this.props.children}
			</StyledTitle>
		</StyledBox>
	);
};

Header.propTypes = {
	children: PropTypes.node,
};

Header.defaultProps = {
	 children: null,
};

export default Header;