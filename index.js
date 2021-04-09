function enviaEmail(para, corpo, fCallback){
    setTimeout(_ =>{
        console.log(`
            Para: ${para}
            ---------------------------------------------
            Corpo: ${corpo}
            ---------------------------------------------`
        );
        fCallback("Email enviado",5,4);
    },4000);
}

console.log("Início do envio do email");
enviaEmail("fulano@ciclano.com","blá, blá, blá...", (retorno, qtd, tempo) =>{
    console.log(retorno);
});
console.log("TUDO OK !");

