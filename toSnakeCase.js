function toSnakeCase(str){
    if(str === "") return ""
    if(typeof(str) !== "string") throw new Error("Not string type")
    let splitstr = str.toLowerCase().split("")
    let arrstr = []
    for (const char of splitstr) {
        arrstr.push(char)
    }
    for(let i=0 ; i<arrstr.length ; i++){
        if(arrstr[i] === " "){
            arrstr[i] = "_"
        }
    }
    return arrstr.join("")
}
console.log(toSnakeCase("Hello World This Is Snake Case")) // Expected Output: "hello_world_this_is_snake_case"