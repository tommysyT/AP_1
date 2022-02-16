require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env`})

const express = require('express');             // import d'express
const app = express();                          // rappel de express par app

const index = require ('./route/index');


// app.use(express.json());                        // middleware utilisation de app par json pour modifier l'instruction

// ----------------------------------------------------

app.use(express.json());                        // utilisation de express.json par app.use

app.get('/api', ( _ , res) => {                  // app.get pour recuperer info de 2 parametres (req et res) res done la réponse demandé

    res.status(200).json({
        success: 'API', 
    });
});

// ---------------------------------------------------------

app.use('/api', index);

// port d'ecoute du serveur
app.listen(process.env.PORT, () => {
    console.log(`le server ecoute sur le port ${ process.env.PORT}`);
})