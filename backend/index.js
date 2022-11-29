// dependencies
const express = require('express')
const admin = require('firebase-admin')

// config - express
const app = express()


// config - firebase
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// endpoint - posts
app.get('/posts', (req, res) => {
    let posts = []
    db.collection('posts').get().then(snapshot => {
      snapshot.forEach((doc) => {
        posts.push(doc.data())
    });
    res.send(posts)
  }) 
})

// listen
app.listen(process.env.PORT || 3000)