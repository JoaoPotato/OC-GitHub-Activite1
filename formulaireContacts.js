//Prototype contact
var Contact = {
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
     decrire: function () {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
};

//Tableau initial des contacts
var contacts = [];

var caroleLevisse = Object.create(Contact);
caroleLevisse.init("Carole", "Lévisse");
var melodieNelsonne = Object.create(Contact);
melodieNelsonne.init("Mélodie", "Nelsonne");

contacts.push(caroleLevisse);
contacts.push(melodieNelsonne);

//Interface d'accueil
console.log("Bienvenue dans le gestionnaire des contacts !");
var ListeOptions = "1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter";
console.log(ListeOptions);

//Interactions avec l'utilisateur
var choixOption = Number(prompt("Choisissez une option"));
while (choixOption !== 0) {
    if (choixOption === 1) {
        //Lister les contacts
        console.log("Voici la liste de tous vos contacts :");
        contacts.forEach(function(contact) {
        console.log(contact.decrire());
        });
        console.log("\n" + ListeOptions);
        choixOption = Number(prompt("Choisissez une option"));
    } else if (choixOption === 2) {
        //Ajoute un contact
        var nomAjoute = prompt("Entrez le nom du nouveau contact :");
        var prenomAjoute = prompt("Entrez le prenom du nouveau contact :");
        var contactAjoute = Object.create(Contact);
        contactAjoute.init(prenomAjoute, nomAjoute);
        contacts.push(contactAjoute);
        console.log("Le nouveau contact a été ajouté");
        console.log("\n" + ListeOptions);
        choixOption = Number(prompt("Choisissez une option"));
    } else {
        alert("Option " + choixOption + " non reconnue");
        choixOption = Number(prompt("Choisissez une option"));
    }
}
console.log("\nAu revoir !")
