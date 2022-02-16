const router = require('express-promise-router')();         // utilisation du module pour la creation de routes


const { test, insertUtilisateur, deleteUtilisateur, selectAllUtilisateur, updateUtilisateur } =  require('../controller/index');


router
    .route('/')

router
    .route('/test')
    .get(test)
    .get(selectAllUtilisateur)

router
    .route('/user')
    .post(insertUtilisateur)
    .put(updateUtilisateur)
    
router
    .route('/user/:id')
    .delete(deleteUtilisateur)
    


module.exports = router; // export pour l'utiliser dans un autre fichier