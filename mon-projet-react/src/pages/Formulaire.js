
import { useState } from "react";
import "./formulaire.css";

function Formulaire() {
    // DECLARATION DU STATE DU FORMULAIRE (données dans un tableau d'objets)

    const [donnee, setDonnee] = useState({
        nom: "",
        prenom: "",
        isChecked: false
    })
    //state pour la longueur du nom 
    //const [longueurNom, setLongueurNom ] = useState(0)


    //UTILISATION DE USEEFFECT POUR AFFICHER LE NOMBRE DE CARACTERE DU NOM

    // useMemo pour remplacer le useEffect
    //const longueurNom = useMemo( () => donnee.nom.length, [donnee.nom]);


    // useEffect(() => {

    // // code qui sera effectué après le rendu du DOM
    //   setLongueurNom(donnee.nom.length);
    // }, [donnee.nom]);   //[donne.nom] correspond à la dépendance de l'effet c'est après le changement de cette donnée que le useEffect régiera


    // COMPORTEMENTS DES CHANGEMENTS

    //soumission du formulaire => event.preventDefault() évite le rafraichissement de toute la page
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    //changement lorsque l'on change la valeur des inputs

    const handleChange = (event) => {
        // const target = event.target; //je stocke event.target dans la variable target pour la suite
        // const name = target.name;
        // const value = target.value;
        // const type = target.type;
        // const checked = target.checked;

        //Clonage de l'objet donnee pour ne pas changer les valeurs par référence 
        let copyDonnee = structuredClone(donnee);


        // Destructuration 
        const { name, value, type, checked } = event.target;

        // Mettre à jour la clé "name" en fonction du type du champ
        if (type === "checkbox") {
            copyDonnee[name] = checked;
        } else {
            copyDonnee[name] = value;
        }

        // Mettre à jour l'état donnee avec le nouvel objet
        setDonnee(copyDonnee);
    }

    //-------------------AVANT---------------------//
    //--Initialiation du state pour les inputs--//
    // const [nom, setNom] = useState("");
    // const [prenom, setPrenom] = useState("");
    //--Initialisation de la case à cocher--//
    // const [isChecked, setIsChecked] = useState(false); 

    //--Récupérer le changement--//
    // const handleChange = (event) => {
    //   const { name, value } = event.target;
    //   if (name === 'nom') {
    //     setNom(value);
    //   } else if (name === 'prenom') {
    //     setPrenom(value);
    //   } 
    // }

    // const handleCheck = (event) => {
    //     const { checked } = event.target;
    //     setIsChecked(checked); // Met à jour l'état isChecked en fonction de la case à cocher
    //   }
    //----------------------------------------------------------------------------------------------//

    // Affichage
    return (
        <div>
            <h1>Formulaire</h1>

            {/* Formulaire en JSX */}
            <form onSubmit={handleSubmit}>
                <div className="blocFormulaire">
                    <h2> Entrées </h2>
                    <label>Nom :</label><br/>
                    <input type="text" name="nom" value={donnee.nom} onChange={handleChange} /><br /><br />
                    <label>Prénom :</label><br/>
                    <input type="text" name="prenom" value={donnee.prenom} onChange={handleChange} /><br /><br />
                    <label>Case à cocher :</label>
                    <input type="checkbox" name="isChecked" checked={donnee.isChecked} onChange={handleChange} />
                </div>
            </form>
            <div className="sectionReponse">
                <div className="blocFormulaire">
                    <h2>Sorties </h2>
                    <p>Nom : {donnee.nom}</p>
                    <p>Prénom : {donnee.prenom}</p>
                    <p>{donnee.isChecked ? 'La case est cochée' : 'La case n\'est pas cochée'}</p>

                    <p>Longueur du nom : {donnee.nom.length}</p>
                </div>
            </div>
        </div>
    );
}




export default Formulaire;