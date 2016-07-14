// Do your work here
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];
for (var i = 0; i < presidents.length; i++) {
	console.log("Value of i is: " + i);
	console.log("Value at Index is: " + presidents[i]);
}

function printContent(array){
	for (var i = 0; i < presidents.length; i++) {
		console.log("Value of i is: " + i);
		console.log("Value at Index is: " + array[i]);
	}
}
printContent(presidents);
console.log();

var stringOfNumbers = '';
for (var i = 10; i <= 20; i++) {
	stringOfNumbers = stringOfNumbers + i;
}
console.log(stringOfNumbers);
function appendToString(string) {
	for (var i = 10; i <= 20; i++) {
		string = string + i;
	}
	return string;	
}
console.log(appendToString(''));
console.log();

var evenNumberArray = [];
for (var i = 0; i <= 100; i +=2) {
	evenNumberArray.push(i);
}
console.log(evenNumberArray);

var oopsArray = [ 'turn', , 'down', , 'for', , 'what'];
for (var i = 1; i < oopsArray.length; i +=2) {
	oopsArray[i] = 'nope';
}
console.log(oopsArray);

for (var i = oopsArray.length - 1; i >=0; i--) {
	console.log(oopsArray[i]);
}

var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];
function nap(schedule) {
	if (schedule) {
		console.log("ZzZzZzZz");
	} else {
		console.log("Gotta get to work!");
		isNapTime = true;
	}
}
for (var i = 0; i < napSchedule.length; i++) {
	nap(napSchedule[i]);
}

var copyOfValuesArray = [];
var valuesArray = [99, 66, 829, 1941, 8, 76];
function copyArray(originArray, destinationArray) {
	for (var i = 0; i < originArray.length; i++) {
		destinationArray.push(originArray[i]);
	}	
}
copyArray(valuesArray, copyOfValuesArray);
console.log(valuesArray);
console.log(copyOfValuesArray);

var miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush'];
function generateArrayOfStrings(storage) {
	var array = [];
	for (var i = 0; i < storage.length; i++) {
		if (typeof(storage[i]) === typeof "") {
			array.push(storage[i]);
		} 
	}	
	return array;
}
console.log(generateArrayOfStrings(miscStorage));

var currentClass = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];
function graduateAndSetNewClass(class1) {
	for (var i = 0; i < class1.length; i++) {
		var student = class1[i];
		if (class1[i].enrolled === true) {
			class1[i].graduated = true;
		} else  if (class1[i].enrolled === false) {
			class1[i].enrolled = true;
		}
	}
	return class1;
}
console.log(graduateAndSetNewClass(currentClass));
