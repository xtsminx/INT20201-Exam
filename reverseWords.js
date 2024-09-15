function reverseWords(sentence){
    if (sentence === "") return "";
    let wordsArray = sentence.split(" ");
    let reversedArray = wordsArray.reverse();
    return reversedArray.join(" ");
}
console.log(reverseWords("Hello World This Is A Test")); // Expected Output: "Test A Is This World Hello"