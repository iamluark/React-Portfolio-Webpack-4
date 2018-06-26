/*
=========================================================
Main JSS Style / Variables
=========================================================
Copyright 2018 Clark Dwain Luna (http://iamluark.com)
*/

const containerFluid = {
	paddingRight: "15px",
	paddingLeft: "15px",
	marginRight: "auto",
	marginLeft: "auto",
	width: "100%"
};

const container = {
	...containerFluid,
	"@media (min-width: 576px)": {
		maxWidth: "540px"
	},
	"@media (min-width: 768px)": {
		maxWidth: "720px"
	},
	"@media (min-width: 992px)": {
		maxWidth: "960px"
	},
	"@media (min-width: 1200px)": {
		maxWidth: "1140px"
	}
};

const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

export {
	containerFluid,
	container,
	primaryColor,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
	grayColor,
};