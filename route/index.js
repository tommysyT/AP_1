const router = require('express-promise-router')();         // utilisation du module pour la creation de routes


const { test, insertUtilisateur, deleteUtilisateur, updateUtilisateur, getAllUtilisateur, insertCommentaire, getAllCommentaire, deleteCommentaire, updateCommentaire, insertUtilisateurSeanceTest, insertDateTest } =  require('../controller/index');


router
    .route('/')

router
    .route('/test')
    // .get(test)
    
    router
    .route('/user')
    .post(insertUtilisateur)
    .put(updateUtilisateur)
    .get(getAllUtilisateur)
    .post(insertUtilisateurSeanceTest)
    
router
    .route('/user/:id')
    .delete(deleteUtilisateur)

router
    .route('/commentaire')
    .post(insertCommentaire)
    .get(getAllCommentaire)
    .put(updateCommentaire)

router
    .route('/commentaire/:id')
    .delete(deleteCommentaire)
    
router
    .route('/date')
    .post(insertDateTest)




module.exports = router; // export pour l'utiliser dans un autre fichier