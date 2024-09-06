
const inputTel=document.getElementById("inputTel");
const NomUser=document.getElementById("NomUser");
const EmailUser=document.getElementById("EmailUser");
const PrenomUser=document.getElementById("PrenomUser");
const TelUser=document.getElementById("TelUser");
const totalDette=document.getElementById("totalDette");
const totalVerse=document.getElementById("totalVerse");
const Img=document.getElementById("Img");
const btn_Val=document.getElementById("btn_Val");


btn_Val.addEventListener("click") = () =>{
    fetch(`http://localhost:8200/clients`)
    .then(reponse => reponse.json())
    .then(data =>{
        console.log(data);
        const tel = inputTel.value;
        const client = data.clients.find(client => client.telephone === tel);
        if (client) {
            NomUser.textContent = client.nom;
            PrenomUser.textContent = client.prenom;
            TelUser.textContent = client.telephone;
            EmailUser.textContent = client.email;
            Img.src = "../public/assets/" + client.photo;

            const totalDettes = client.dettes.reduce((total, dette) => total + dette.montant, 0);
            const totalVerse = client.dettes.reduce((total, dette) => total + dette.verse   , 0);
            const totalDu = totalDettes - totalVerse;
            
            totalDette.textContent = totalDettes;
            totalVerse.textContent = totalVerse;
            totalDu.textContent = totalDu;
        } else {
            alert("Client non trouvé");
        }
    });
}