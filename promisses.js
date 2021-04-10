function envEmail(para, corpo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            var deuErro = true;
            if(deuErro){
                reject();
            } else {
                resolve({error: "deu erro"});
            }
        }, 4000);
    });
};


envEmail("a", "b").then(_ =>{
    console.log("email OK");
}).catch((error)=>{
    console.log(error);
});
console.log("EnvEmail");