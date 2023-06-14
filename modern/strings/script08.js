let x;

const name = 'Ezrie';
const age = 24;

x = 'Hello my name is ' + name + ' and I am ' + age + ' years old';

// template literals
x = `Hello my name is ${name} and I am ${age} years old`;

// string properties and methods
const s = new String('Hello World');

x = typeof s;

x = s.length; 

// access value by key
x = s[1];

x = s._proto_;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);
x = s.indexOf('e');

x = s.substring(2, 5);

x = s.substring(7);

x = s.slice(-11, -6);

x = '     Hello World';

x = s.trim();

x = s.replace('World', 'Ezrie');
x = s.includes('Hell')

x = s.valueOf();

x = s.split('');

console.log(x);