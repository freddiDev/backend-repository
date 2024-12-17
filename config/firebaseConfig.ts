const admin = require("firebase-admin");
const credential = require("../firebase-creds.json");


admin.initializeApp({
  credential: admin.credential.cert(credential),
});
export const db = admin.firestore();