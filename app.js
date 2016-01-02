var value = 42;

if (value >= 53){
	value = value + 42;
} else {
	value = value - 13;
};

var newString = "11";
value = (value + newString);

var newArray = [];

for (var i = 0; i < value.length; i++) {
	newArray[i] = value.charAt(i);
};

newArray.shift();
newArray.pop();

var backwards = "";

for (var i = 1; i >= 0; i--) {
	backwards += newArray[i];
};

value = parseInt(value);
backwards = parseInt(backwards);

value = (value + backwards); 

if (value < 60) {
	value = 14;
} else if (value === 2930) {
	value = 27;
} else {
	value = 2;
}

var count = 10;
while (count > 0) {
	value++;
	count--;
}

var myFunction = function(val) {
	val = val.toString();
	if (val.length > 1) {
		val = val.slice(1);
	} 
	return val;
	}

value = myFunction(value);
console.log(value);