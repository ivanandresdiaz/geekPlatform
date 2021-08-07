const admin = require("firebase-admin");
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp();
const db = admin.firestore();
// crear usuaarios

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

exports.addStudentCorte = functions.https.onCall((data, context)=> {
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
            corteId: data.corteId,
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

// crear Corte

exports.createCorte = functions.https.onCall((data, context)=> {
  return db.doc(`cortes/${data.nuevaCorte}`).get()
      .then((doc) => {
        if (doc.exists) {
          throw new functions.https.HttpsError(
              "Este nombre ya existe"
          );
        } else {
          db.collection("cortes").doc(data.nuevaCorte).set({
            corteId: data.nuevaCorte,
            createBy: data.currentUser,
            students: [],
            assignedTeachers: [],
            active: true,
          }).then(() =>{
            db.collection("cortes").doc(data.nuevaCorte)
                .collection("classrooms").doc("sigloxxl").set({
                  salonId: "sigloxxl",
                  salonName: "Siglo XXI",
                  corteId: data.nuevaCorte,
                  agendaTutorials: [],
                  groups: [],
                  sprints: [],
                });
            db.collection("cortes").doc(data.nuevaCorte)
                .collection("classrooms").doc("tecnico").set({
                  salonId: "tecnico",
                  salonName: "Tecnico",
                  corteId: data.nuevaCorte,
                  agendaTutorials: [],
                  groups: [],
                  sprints: [],
                });
            db.collection("cortes").doc(data.nuevaCorte)
                .collection("classrooms").doc("designThinking").set({
                  salonId: "designThinking",
                  salonName: "Design Thinking",
                  corteId: data.nuevaCorte,
                  agendaTutorials: [],
                  groups: [],
                  sprints: [],
                });
            db.collection("cortes").doc(data.nuevaCorte)
                .collection("classrooms").doc("empleabilidad").set({
                  salonId: "empleabilidad",
                  salonName: "Empleabilidad",
                  students: [],
                  corteId: data.nuevaCorte,
                  agendaTutorials: [],
                  groups: [],
                  sprints: [],
                });
          }).then(() => {
            return {message: "La corte ha sido creada"};
          })
          ;
        }
      });
});

exports.createSprint = functions.https.onCall((data, context)=> {
  const newSprint ={
    title: data.title,
    description: data.description,
    startDate: data.startDate,
    deadline: data.deadline,
    deliveryLink: data.deliveryLink,
    supportLink1: data.supportLink1,
    supportLink2: data.supportLink2,
    supportLink3: data.supportLink3,
    supportLink4: data.supportLink4,
  };
  return db
      .collection("cortes").doc(data.corteId)
      .collection("classrooms").doc(data.salonId)
      .collection("sprints").add(newSprint)
      .then(() => {
        return {message: "exito"};
      })
      .catch(()=> {
        return {message: "ha ocurrido un error"};
      });
});
