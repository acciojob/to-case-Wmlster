function toCase(text) {
  // write your code here

	let s1=text.toLowerCase();
	let s2=text.toUpperCase();

	let s="";
	s+=s1;
	s+="-";
	s+=s2;

	return s;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
