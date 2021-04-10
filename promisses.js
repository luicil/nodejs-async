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


envEmail("a", "b").then((ret) =>{
    console.log(ret);
}).catch((error)=>{
    console.log(error);
});
console.log("EnvEmail");