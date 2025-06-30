// ----- setAdmin.js -----
// Ce script attribue le rôle admin à un utilisateur via son UID

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const uid = "aeqjRSLiYdOFOLiLh6vo5LpwYIO2"; // Remplace ceci par l'UID de l'utilisateur

admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log("✅ Rôle admin attribué avec succès !");
  })
  .catch((error) => {
    console.error("❌ Erreur lors de l’attribution du rôle :", error);
  });