function envEmail(para, corpo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            var deuErro = false;
            if(deuErro){
                reject("Deu erro");
            } else {
                resolve("EMAIL OK !");
            }
        }, 4000);
    });
};

function retID(id) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            var deuErro;
            if(!deuErro){
                resolve(id);
            } else {
                reject("ID não encontrado !");
            }
        }, 2000);
    });
};

function buscaBanco(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            var deuErro = true;
            if(!deuErro){
                resolve("Achou o email");
            } else {
                reject ("Email não encontrado");
            }
        }, 1000);
    });
}
// EVITE ANINHAR PROMISSES
retID(5).then(_ =>{
    buscaBanco(5).then(_ =>{
        envEmail("a", "b").then((ret) =>{
            console.log(ret);
        }).catch((error)=>{
            console.log(error);
        });
    }).catch((error) =>{
        console.log(error);    
    });
}).catch((error) =>{
    console.log(error);
});

console.log("EnvEmail");