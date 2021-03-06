const pool = require('../config/database');


module.exports = {
    // test: async (req, res) =>{
        
    //     let connection;                                     // creation variable connection

    //     try {                                               

    //         connection = await pool.getConnection();                                // pool.getConnection fonction de connection (methode de js(getConnection))
    //         const result = await connection.query('SELECT * FROM utilisateur;');    // query = methode de js
    //         console.log(result);                                                    // afficher resultat
    //         return res.status(200).json( { success: result } );                     // retourner resultat success

    //     } catch (error) {
            
    //         return res.status(400).json( {error: error.message});                   // retourner resultat erreur

    //     } finally {
    //         if (connection) connection.end()                                        // fin connection
    //     }
    // },

    insertUtilisateur : async (req, res) =>{

        let connection;
        const { nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd } = req.body
        
        try {
            connection = await pool.getConnection();
            
            const result = await connection.query('CALL insert_utilisateur (?,?,?,?,?,?,?,?,?,?,?);', [nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd]);

            return res.status(200).json ( { success: result } );


        } catch (error) {

            return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
    },

    
    updateUtilisateur : async (req, res) =>{
        
        let connection;
        
        try {
            const { id, nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd } = req.body
            connection = await pool.getConnection();
            
            const result = await connection.query('CALL update_utilisateur (?,?);', [id, sexe]);

            return res.status(200).json ( { success: result } );
            
        } catch (error) {
            
            return res.status(400).json( {error: error.message});                   
            
        } finally {
            if (connection) connection.end()                                        
        }
    },
    
    deleteUtilisateur : async (req, res) => {
        
        const { id } = req.params
        
        let connection;
        
        try {

            connection = await pool.getConnection();
            
            const result = await connection.query('CALL delete_utilisateur(?);', [ id ]);
            
            return res.status(200).json( {success : result });
            
        } catch (error) 
        
        {return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
        
    },
    getAllUtilisateur : async ( _ , res) => {
        
        let connection;
        
        try {

            connection = await pool.getConnection();
            
            const result = await connection.query('CALL get_all_utilisateur();');
            
            return res.status(200).json( {success : result });
            
        } catch (error) 
        
        {return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
        
    },

    insertCommentaire : async (req, res) =>{

        const { commentaire } = req.body;
        let connection;
        
        try {
            connection = await pool.getConnection();
            
            const result = await connection.query('CALL insert_commentaire (?);', [commentaire]);

            return res.status(200).json ( { success: result } );


        } catch (error) {

            return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
    },

    getAllCommentaire : async ( _ , res) => {
        
        let connection;
        
        try {

            connection = await pool.getConnection();
            
            const result = await connection.query('CALL get_all_commentaire();');
            
            return res.status(200).json( {success : result });
            
        } catch (error) 
        
        {return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
    },

    deleteCommentaire : async (req, res) => {
        
        const { id } = req.params
        
        let connection;
        
        try {

            connection = await pool.getConnection();
            
            const result = await connection.query('CALL delete_commentaire(?);', [ id ]);
            
            return res.status(200).json( {success : result });
            
        } catch (error) 
        
        {return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
        
    },

    updateCommentaire : async (req, res) =>{
        
        let connection;
        
        try {
            const { id_commentaire, commentaire } = req.body
            connection = await pool.getConnection();
            
            const result = await connection.query('CALL update_commentaire (?,?);', [id_commentaire, commentaire]);

            return res.status(200).json ( { success: result } );
            
        } catch (error) {
            
            return res.status(400).json( {error: error.message});                   
            
        } finally {
            if (connection) connection.end()                                        
        }
    },

    insertDateTest : async (req, res) =>{

        const { date, id_coach } = req.body;
        let connection;
        
        try {
            connection = await pool.getConnection();
            
            const result = await connection.query('CALL insert_date_test (?,?);', [ date, id_coach ]);

            return res.status(200).json ( { success: result } );


        } catch (error) {

            return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
    },

    insertUtilisateurSeanceTest : async (req, res) =>{

        const { id, nom, prenom, id_seance_test } = req.body;
        let connection;
        
        try {
            connection = await pool.getConnection();
            
            const result = await connection.query('CALL insert_utilisateur_seance_test (?,?,?,?);', [id, nom, prenom, id_seance_test]);

            return res.status(200).json ( { success: result } );


        } catch (error) {

            return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
    },

}