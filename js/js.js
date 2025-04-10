/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du client
 * @param {string} email : l'email du client
 * @param {string} telephone :  le telephone du client
 * @param {string} objet :  l'objet du message
 * @param {string} message :  le message du client
 */
function afficherEmail(nom, email, telephone, objet, message) {
    let mailto = `mailto:?subject=${objet}&body=${nom}%0A${telephone}%0A${email}%0A${message}`;
    location.href = mailto;
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom 
 * @throws {Error}
 */
function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error("Le nom est trop court. ");
    }
}

/**
 * Cette fonction prend un prenom en paramètre et valide qu'il est au bon format
 * ici : dix caractères au minimum
 * @param {string} telephone 
 * @throws {Error}
 */
function validerTelephone(telephone) {
    if (telephone.length < 10) {
        throw new Error("Le téléphone n'a pas le bon format. ");
    }
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} objet 
 * @throws {Error}
 */
function validerObjet(objet) {
    if (objet.length < 2) {
        throw new Error("L'objet est trop court. ");
    }
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} message 
 * @throws {Error}
 */
function validerMessage(message) {
    if (message.length < 2) {
        throw new Error("Le message est trop court. ");
    }
}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @throws {Error}
 */
function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$");
    if (!emailRegExp.test(email)) {
        throw new Error("L'email n'est pas valide.");
    }
}

/**
 * Cette fonction affiche le message d'erreur passé en paramètre. 
 * Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
 * les messages d'erreurs. 
 * @param {string} messageerror 
 */
function afficherMessageErreur(messageerror) {
    
    let spanErreurMessage = document.getElementById("erreurMessage")

    if (!spanErreurMessage) {
        let popup = document.querySelector(".popup")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"
        
        popup.append(spanErreurMessage)
    }
    
    spanErreurMessage.innerText = messageerror
}

/**
 * Cette fonction permet de récupérer les informations dans le formulaire
 * d'envoie de message et d'appeler l'affichage de l'email avec les bons paramètres.
 * @param {string} scoreEmail 
 */
function gererFormulaire() {
    try {
        let baliseNom = document.getElementById("nom");
        let nom = baliseNom.value;
        validerNom(nom);
    
        let baliseEmail = document.getElementById("email");
        let email = baliseEmail.value;
        validerEmail(email);

        let baliseTel = document.getElementById("telephone");
        let telephone = baliseTel.value;
        validerTelephone(telephone);

        let baliseObjet = document.getElementById("objet");
        let objet = baliseObjet.value;
        validerObjet(objet);

        let baliseMessage = document.getElementById("message");
        let message = baliseMessage.value;
        validerMessage(message);

        afficherEmail(nom, email, telephone, objet, message);

    } catch(erreur) {
        afficherMessageErreur(erreur.message)
    }
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerMessage() {
    // Gestion de l'événement submit sur le formulaire de partage. 
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        gererFormulaire();
    });
}
