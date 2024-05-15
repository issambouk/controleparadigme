const DNAStrand = (dna) => {
    const char1 = "A";
    const char2 = "T";
    const char3 = "C";
    const char4 = "G";

    const replaceChar = (char) => {
        if (char === char1) {
            return char2;
        } else if (char === char2) {
            return char1;
        } else if (char === char3) {
            return char4;
        } else if (char === char4) {
            return char3;
        } else {
            return char;
        }
    };
 return dna.split('').map(replaceChar).join('');
};	
	
	
	
	
	
console.log(DNAStrand("ATTGC")); // -> "TAACG"
console.log(DNAStrand("GTAT"));  // -> "CATA"
console.log(DNAStrand("AAAA"));  // -> "TTTT"