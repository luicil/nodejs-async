function retUsuarios(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve([
                {name: "luicil", linguagem: "VB"},
                {name: "Fernandes", linguagem: "C#"}
            ]);                
        }, 1000);
    });
};

async function main(){
    var usuarios = await retUsuarios();
    console.log(usuarios);
}
console.log("inicio");
main();
console.log("fim");

