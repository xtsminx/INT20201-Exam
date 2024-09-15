function isPalindrome(word){
    let splitword = word.split("")
    let reverseword = splitword.reverse() 
    let joinword = reverseword.join("")
    return word === joinword
}
console.log(isPalindrome("Hello"))
console.log(isPalindrome("madam"));