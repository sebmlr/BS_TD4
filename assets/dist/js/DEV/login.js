var cpt = 0;
const MDPMEM = "123456";
const EMAIL = "test@test.com";
var ct = 10;

var essai = 3;


//exemple de script js tiré de Bootstrap pour tester la validation des champs d'un formulaire
(function () {
    'use strict';

    //  AJOUT D'UN EVENT LISTENER SUR L'ACTION 'load' D'UN DOCUMENT :
    window.addEventListener('load', function () {
        // Récupération des formulaires auxquels appliquer des styles de validation Bootstrap personnalisés
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {

            //  AJOUT D'UN EVENT LISTENER SUR L'ACTION 'SUBMIT' 
            form.addEventListener('submit', function (event) {

                //  SI FORM VALIDATION KO
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                //  SI FORM VALIDATION OK

                /*************   TON CODE   *************/
                if (EssaiMdp() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                /*************   TON CODE   *************/

                // AJOUT D'UNE CLASSE PERMETTANT DE 'PASSER AU VERT' LES CHAMPS DU FORMULAIRE
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


/*fonction pour contrôler le nombre d'essai et verrouillé le compte si le nombre
d'essai est atteint et renvoie sur une autre page si l'identification a réussi*/
function EssaiMdp() {

    var mdp = document.getElementById("inputPassword").value;
    var log = document.getElementById("inputEmail").value;

    if (mdp==="" || log===""){
        return false; 
    }
    if (mdp === MDPMEM && log === EMAIL) {
        form.addClass('was-validated');
        cpt = 0;
        return true;
    }
    else {
        if (parseInt(cpt) < parseInt(essai)) {
            document.getElementById("errorMsg").style.display = "";
            document.getElementById("errorMsg").innerHTML = "Mot de passe incorrect, il vous reste " + (parseInt(essai) - parseInt(cpt)) + " essai(s)";
            cpt++;
        }
        else {
            document.getElementById("errorMsg").style.display = "none";
            decompte();
        }
        return false;
    }
}    

function decompte()
{
    var sec = "";

    if(ct>0)
    {
       //permet de gérer l’affichage singulier/pluriel de secondes
        if(ct>1)
        {
            sec = " secondes.";
        } else {
            sec = " seconde.";
        }
        //activation du champ chrono et affichage du message
        document.getElementById("chrono").style.display = "";
        document.getElementById("chrono").innerHTML = " Compte bloqué durant " + ct + sec + "<BR>&nbsp;" ;
       //désactivation du bouton Valider
        document.getElementById("btnSubmit").disabled=true;
     //décompte 10……..
        ct--;
     //permet d’avoir l’affichage de façon dynamique dans la page   
     setTimeout("decompte()", 1000) ;
    }
    else    
    {
        //désactivation du champ chrono
        document.getElementById("chrono").innerHTML="";
       //rechargement de la page
        window.location.reload();
    }
}