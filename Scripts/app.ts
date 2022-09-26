"use strict";
// IIFE: Immediately Invoked Function Expression
// AKA "Self Executing Function"
(function () {
	/**
	 * This function loads data Asynchronously from a URL.
	 * It calls the callback function when the data loading is complete
	 *
	 * @param {string} method
	 * @param {string} url
	 * @param {function} callback
	 */
	function LoadData(method: string, url: string, callback: Function) {
		//Create an empty XHR object
		let XHR = new XMLHttpRequest();

		//Compose the Request
		XHR.open(method, url);

		//Send the request to the server
		XHR.send();

		//Set up an event listener
		XHR.addEventListener("readystatechange", function () {
			if (XHR.status == 200 && XHR.readyState == 4) {
				callback(XHR.responseText);
			}
		});
	}
	//First method of using functions: Named functions
	// function Start() {
	// 	console.log("App Started!");
	// }

	//Second method of using functions: Variable? functions
	// let Start = function() {
	// 	console.log("App Started!");
	// }

	//Third method of using functions: Arrow functions
	// let Start = () => {
	// 	console.log("App Started!");
	// 	LoadData("GET", "./Data/contacts.json", function (XHR) {
	// 		console.log(XHR);
	// 	});
	// };

	// jQuery method
	function Start() {
		console.log("App Started!");
		$.getJSON("./Data/contacts.json", function (DataSource) {
			console.log(DataSource.ContactList[0]);
		});
	}
	window.addEventListener("load", Start);
})();
