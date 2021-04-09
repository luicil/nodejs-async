function enviaEmail(para, corpo, fCallback){
    setTimeout(_ =>{
        // console.log(`
        //     Para: ${para}
        //     ---------------------------------------------
        //     Corpo: ${corpo}
        //     ---------------------------------------------`
        // );
        var deuErro = true;
        if(deuErro){
            fCallback("Deu Erro !");
        } else {
            fCallback();
        }
        
    },4000);
}

console.log("Início do envio do email");
enviaEmail("fulano@ciclano.com","blá, blá, blá...", (erro) =>{
    console.log(erro);
});
console.log("TUDO OK !");

