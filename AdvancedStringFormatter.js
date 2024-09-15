function StringFormatter(str,formatter){
    if(str === "") return ""
    if(typeof(str) !== "string") throw new Error("Not string type")
    if(formatter !== "lowercase" && formatter !== "uppercase" && formatter !== "capitalize") throw new Error("Invalid formatter type")
    switch(formatter){
        case "lowercase" : 
            return str.toLowerCase()
        case "uppercase" : 
            return str.toUpperCase()
        case "capitalize" : 
            let splitstr = str.split("") 
            let arrstr = []
            for (const char of splitstr) {
                arrstr.push(char);
            }
            arrstr[0] = arrstr[0].toUpperCase();
            for (let i = 1; i < arrstr.length; i++) {
                if (arrstr[i-1] === " ") {
                    arrstr[i] = arrstr[i].toUpperCase()
                }
            }    
            return arrstr.join("") 
    }
}