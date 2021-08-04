const admin = require("firebase-admin");
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp();

// exports.addAdminRole = functions.https.onCall((data, context) => {
//   admin
//       .auth()
//       .createUser({
//         email: "user@example.com",
//         emailVerified: false,
//         phoneNumber: "+11234567890",
//         password: "secretPassword",
//         displayName: "John Doe",
//         photoURL: "http://www.example.com/12345678/photo.png",
//         disabled: false,
//       })
//       .then((userRecord) => {
//         // See the UserRecord reference doc for the contents of userRecord.
//         console.log("Successfully created new user:", userRecord.uid);
//       })
//       .catch((error) => {
//         console.log("Error creating new user:", error);
//       });
// });

exports.addAdminRole = functions.https.onCall((data, context)=> {
  // crear usuario
  return admin
      .auth()
      .createUser({
        email: data.email,
        password: data.password,
        displayName: data.fullName,
      })
      .then(() => {
        return admin.auth().getUserByEmail(data.email).then((user) => {
          return admin.auth().setCustomUserClaims(user.uid, {
            admin: true,
          });
        }).then(() => {
          return admin.auth().getUserByEmail(data.email).then((user) => {
            return user;
          });
        });
      }
      ).catch((error) => {
        return {
          message: error,
        };
      });
});

exports.addStudentRole = functions.https.onCall((data, context)=> {
  // crear usuario
  return admin
      .auth()
      .createUser({
        email: data.email,
        password: data.password,
        displayName: data.fullName,
      })
      .then(() => {
        return admin.auth().getUserByEmail(data.email).then((user) => {
          return admin.auth().setCustomUserClaims(user.uid, {
            student: true,
          });
        }).then(() => {
          return admin.auth().getUserByEmail(data.email).then((user) => {
            return user;
          });
        });
      }
      ).catch((error) => {
        return {message: error};
      });
});
exports.addTeacherRole = functions.https.onCall((data, context)=> {
  // crear usuario
  return admin
      .auth()
      .createUser({
        email: data.email,
        password: data.password,
        displayName: data.fullName,
      })
      .then(() => {
        return admin.auth().getUserByEmail(data.email).then((user) => {
          return admin.auth().setCustomUserClaims(user.uid, {
            teacher: true,
          });
        }).then(() => {
          return admin.auth().getUserByEmail(data.email).then((user) => {
            return user;
          });
        });
      }
      ).catch((error) => {
        return {
          message: error,
        };
      });
});
