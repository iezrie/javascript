let amount = '99.5';

// convert string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// convert number to string
amount = amount.toString();
amount = String(amount);

// convert string to decimal
amount = parseFloat(amount);

// convert number to boolean
amount = Boolean(amount);

console.log(amount, typeof amount);