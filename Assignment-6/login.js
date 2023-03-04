$(document).ready(function() {

	$('#Login').submit(function(event) {
		event.preventDefault();
		$('#error').empty();
		let Email = $('#email').val();
		let UserName = $('#username').val();
		let Password = $('#password').val();
		let EmailRegex = /@northeastern\.edu$/;
		if (!EmailRegex.test(Email)) {
			$('#error').text('Please enter correct Northeastern email-address.');
			return;
		}
		if (Password.length < 6) {
			$('#error').text('Password must be at least 6 characters long.');
			return;
		}
		if (!/^[a-zA-Z0-9_]+$/.test(UserName)) {
			$('#error').text('It can only contain letters and numbers');
			return;
		}
	// CALLING/LINKING THE OTHER HTML PAGE FOR THE CALCULATOR PAGE...................
		window.location.href = 'index2.html?username=' + UserName;

	});
    $('#calculatorForm').submit(function(event) {
		event.preventDefault();
	});
	$('#Addition').click(() => {
		calculate('add');
	});
	$('#Subtraction').click(() => {
		calculate('subtract');
	});
	$('#Multiplication').click(() => {
		calculate('multiply');
	});
	$('#Division').click(() => {
		calculate('divide');
});

function calculate(operation) {
	$('#result').empty();
	$('#error').empty();
	var num1 = $('#num1').val();
	var num2 = $('#num2').val();
	if (!$.isNumeric(num1)) {
		$('#error').text('The first number which you entered must be a valid number.');
		return;
	}
	if (!$.isNumeric(num2)) {
		$('#error').text('The secound number which you entered must be a valid number.');
		return;
	}
	var result;
	switch (operation) {
		case 'add':
			result = +num1 + +num2;
			break;
		case 'subtract':
			result = num1 - num2;
			break;
		case 'multiply':
			result = num1 * num2;
			break;
		case 'divide':
			if (num2 == 0) {
				$('#error').text('Cannot divide by zero.');
				return;
			}
			result = num1 / num2;
			break;
		default:
			return;
	}
	$('#result').text(result);
}
var params = new URLSearchParams(window.location.search);
var UserName = params.get('username');
if (UserName) {
	$('#username').text(UserName);
}
});
