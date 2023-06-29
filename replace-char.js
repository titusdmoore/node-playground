function replace_char(raw_string, char_index, char) {
	raw_string[char_index] = char;
}

let original = "################";

console.log(original);

replace_char(original, 0, "A");

console.log(original);

