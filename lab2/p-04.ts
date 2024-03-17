var CreatePerson = (name: string, ci: string, email: string) =>{
    let persona = {
        name: name,
        ci: ci,
        email: email
    };

    return persona; 
}


console.log(CreatePerson("jose fernandez","13000000","joigfema@gmail.com"))