export function defineCancelApiObject(apiObject) {
    // un objet qui contiendra un gestionnaire d'annulation associé à chaque nom de propriété API dans l'objet API apiObject
    const cancelApiObject = {};

    //chaque propriété de l'API apiObject est associée à une fonction qui définit un appel API

    //cette boucle itère sur chaque nom de propriété API
    Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
        const cancellationControllerObject = {
            controller: undefined
        };

        //associer le gestionnaire d'annulation de demande au nom de propriété de l'API
        cancelApiObject[apiPropertyName] = {
            handleRequestCancellation: () => {
                //Si le contrôleur existe déjà, la demande est annulée.
                if(cancellationControllerObject.controller){
                    //annuler la demande et renvoyer ce message personnalisé
                    cancellationControllerObject.controller.abort();
                }

                //générer un nouveau contrôleur avec AbortController
                cancellationControllerObject.controller = new AbortController();

                return cancellationControllerObject.controller;
            }
        }
    })
}