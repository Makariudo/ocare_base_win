const express = require('express');
const path = require('path');

const app = express();

// Sert les fichiers statiques du dossier react app build
app.use(express.static(path.join(__dirname, 'client/build')));

//dit d'utiliser le build si je suis en mode prod
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }

// Un endpoint api pour recuperer une liste d'items pour le front
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Toutes les routes vont à l'index.hmtl
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);