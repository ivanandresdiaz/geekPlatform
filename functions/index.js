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
            description: data.description,
            students: [],
            assignedTeachers: [],
            active: true,
            choosingWeekStudent: false,
          }).then(() =>{
            db.collection("cortes").doc(data.nuevaCorte)
                .collection("classrooms").doc("sigloxxl").set({
                  salonId: "sigloxxl",
                  salonName: "Siglo XXI",
                  corteId: data.nuevaCorte,
                  salonImg: "https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/XXI.png?alt=media&token=f1c0d3e7-103d-40b4-bb35-65c357449240",
                  agendaTutorials: [],
                  groups: [],
                  sprints: [],
                });
            db.collection("cortes").doc(data.nuevaCorte)
                .collection("classrooms").doc("tecnico").set({
                  salonId: "tecnico",
                  salonName: "Tecnico",
                  salonImg: "https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/ST.png?alt=media&token=57f16ce5-a5d5-4d01-a50c-0526224263f5",
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
                  salonImg: "https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/DT.png?alt=media&token=bb4d47cf-1c9e-4319-8b3b-ebdb0b25cd5f",
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
                  salonImg: "https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/EMPL.png?alt=media&token=bb3ea435-e151-4306-aba0-98b7200e86e8",
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
    corteId: data.corteId,
    salonId: data.salonId,
    resourcePDF: data.resourcePDF,
    title: data.title,
    description: data.description,
    start: data.start,
    end: data.end,
    deliveryLink: data.deliveryLink,
    supportLink1: data.supportLink1,
    supportLink2: data.supportLink2,
    supportLink3: data.supportLink3,
    supportLink4: data.supportLink4,
    calificados: [],
    html: data.html,
    css: data.css,
    javascript: data.javascript,
    webpack: data.webpack,
    reactJs: data.reactJs,
    reactHooks: data.reactHooks,
    redux: data.redux,
    firebase: data.firebase,
    testing: data.testing,
    image: data.image,
  };
  return db
      .collection("cortes").doc(data.corteId)
      .collection("sprints").add(newSprint)
      .then(() => {
        return {message: "exito"};
      })
      .catch(()=> {
        return {message: "ha ocurrido un error"};
      });
});

exports.addGeekyPunto = functions.https.onCall((data, context)=> {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "solo usuarios autenticados puede votar"
    );
  }
  const user = admin.firestore().collection("students").doc(data.uid);
  return user.get().then((doc) => {
    return user.update({
      geekyPuntos: doc.data().geekyPuntos+1,
    }).then((result) => {
      admin.firestore().collection("students").doc(context.auth.uid)
          .update({voted: false});
      return result;
    });
  });
});

exports.addLike = functions.https.onCall((data, context)=> {
  // id , uid, corteId
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "solo usuarios autenticados pueden dar me gusta"
    );
  }

  const resource = admin.firestore().collection("cortes").doc(data.corteId)
      .collection("news").doc(data.id);
  return resource.get().then((doc) => {
    if (doc.data().likes.includes(context.auth.uid)) {
      throw new functions.https.HttpsError(
          "ya esta registrado tu like"
      );
    }
    return resource.update({
      likes: [...doc.data().likes, context.auth.uid],
    });
  });
});
exports.addLikeBlog = functions.https.onCall((data, context)=> {
  // id , uid, corteId
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "solo usuarios autenticados pueden dar me gusta"
    );
  }

  const resource = admin.firestore().collection("cortes").doc(data.corteId)
      .collection("blogs").doc(data.id);
  return resource.get().then((doc) => {
    if (doc.data().likes.includes(context.auth.uid)) {
      throw new functions.https.HttpsError(
          "ya esta registrado tu like"
      );
    }
    return resource.update({
      likes: [...doc.data().likes, context.auth.uid],
    });
  }).then(()=> {
    const user = admin.firestore().collection("students").doc(data.uid);
    return user.get().then((doc) => {
      return user.set({
        geekyPuntos: doc.data().geekyPuntos+1,
      });
    }, {merge: true});
  }).catch((err) => {
    return {message: err.message};
  });
});

exports.subtractLike = functions.https.onCall((data, context)=> {
  // id , uid, corteId
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "no estas autenticado"
    );
  }


  const resource = admin.firestore().collection("cortes").doc(data.corteId)
      .collection("news").doc(data.id);
  return resource.get().then((doc) => {
    if (doc.data().likes.includes(context.auth.uid)) {
      const newLikes= doc.data()
          .likes.filter((user) => user !==context.auth.uid);
      return resource.update({
        likes: [...newLikes],
      });
    } else {
      throw new functions.https.HttpsError(
          "no has dado like aun, al parecer hay un error. Informanos"
      );
    }
  });
});

exports.subtractLikeBlog = functions.https.onCall((data, context)=> {
  // id , uid, corteId
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "no estas autenticado"
    );
  }


  const resource = admin.firestore().collection("cortes").doc(data.corteId)
      .collection("blogs").doc(data.id);
  return resource.get().then((doc) => {
    if (doc.data().likes.includes(context.auth.uid)) {
      const newLikes= doc.data()
          .likes.filter((user) => user !==context.auth.uid);
      return resource.update({
        likes: [...newLikes],
      });
    } else {
      throw new functions.https.HttpsError(
          "no has dado like aun, al parecer hay un error. Informanos"
      );
    }
  }).then(()=> {
    const user = admin.firestore().collection("students").doc(data.uid);
    return user.get().then((doc) => {
      return user.set({
        geekyPuntos: doc.data().geekyPuntos-1,
      });
    }, {merge: true});
  }).catch((err) => {
    return {message: err.message};
  });
});

