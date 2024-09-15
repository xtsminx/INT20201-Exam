function generateUsername(firstName, lastName, birthYear){
    let charTwofirstName = firstName.substring(0,2)
    let charTwolastName = lastName.substring(0,2)
    let charTwobirthYear = birthYear.toString().substring(2)
    return charTwofirstName+charTwolastName+charTwobirthYear
}
console.log(generateUsername("John", "Doe", 1995)); // Expected Output: "JoDo95"