function enviaEmail(para, corpo){
    setTimeout(_ =>{
        console.log(`
            Para: ${para}
            ---------------------------------------------
            Corpo: ${corpo}
            ---------------------------------------------`
        );
    },5000);
}

console.log("Início do envio do email");
enviaEmail("fulano@ciclano.com","blá, blá, blá...");
console.log("Email enviado");
console.log("TUDO OK !");
