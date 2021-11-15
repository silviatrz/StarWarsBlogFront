import React, { Component } from "react";
import PropTypes from "prop-types";

export const Footer = props => (
	<footer className={props.class}>
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);

Footer.propTypes = {
	class: PropTypes.string
};
