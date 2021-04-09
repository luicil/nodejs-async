function enviaEmail(para, corpo, fCallback){
    setTimeout(_ =>{
        console.log(`
            Para: ${para}
            ---------------------------------------------
            Corpo: ${corpo}
            ---------------------------------------------`
        );
        fCallback();
    },4000);
}

console.log("Início do envio do email");
enviaEmail("fulano@ciclano.com","blá, blá, blá...", () =>{
    console.log("Email enviado");
});
console.log("TUDO OK !");

