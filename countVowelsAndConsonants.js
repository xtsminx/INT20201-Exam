function countVowelsAndConsonants(str){
    let vowels = 0
    let consonants = str.length
    let space = 0
    let splitstr = str.toLowerCase().split("")
    for(let i = 0 ; i<str.length ; i++){
    switch(splitstr[i]){
        case "a": vowels++
            break
        case "e": vowels++
            break
        case "i": vowels++
            break
        case "o": vowels++
            break    
        case "u": vowels++
            break
        case " " : space++
            break                                   
    }
}
    consonants = consonants - (vowels + space)
    return "vowels:"+ vowels + ", " + "consonants: " + consonants
}
console.log(countVowelsAndConsonants("ChatGPT is awesome!")); // Expected Output: { vowels: 6, consonants: 8 }