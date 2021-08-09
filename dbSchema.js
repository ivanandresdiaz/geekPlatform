const db = {
  //Students
  students: [
    {
      userId: 'dh23ggj5h32g543j5gf43', // muchas cosas
      email: 'user@email.com', //login
      fullName: 'user', //muchas cosas
      password: '', //
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh', // foto de perfil
      bio: 'Hello, my name is user, nice to meet you', // breve presentacion no mayor a 150 caracteres
      website: 'https://user.com', // portafolio
      location: 'Fortul, Arauca', // opcional, tal vez se puedan reunir y formar lazos en pueblos cercanos
      whatsapp: '3214866178', // opcional
      skills: [
        'Html',
      ], // que habilidades conoce, opcional
      github: '', // opcional
      facebook: '', //opcional
      twitter: '', //opcional
      instagram: '', //opcional
      linkedin: '', //opcional
      geekyPuntos: '', //ranking
      sprintsAssigned: [
        {
          sprintId: 'sprintasdfa',
          score: 'calificacion hecha por el profesor',
          title: '', //
          description: '',
          startDate: '03/02/2021', // fecha de inicio,
          deadline: '03/02/2021', //fehca de entrega
          deliveryLink: '',
          links: [
            {
              title: '',
              type: 'supportedLink',
              ulr: '',
            },
          ],

        },
      ], // lista de trabajos entregados
      active: 'true', // activo o desertado
      graduated: 'false',
      tutorialsRequired: [],
      codelingoChallengesDone: [],
      wakatime: [],
      role: 'student',
      corteId: 'asdffadsf', // Tipo de cortes
    },
  ],
  posts: [
    {
      postId: 'asdfasdf', //
      corteId: 'asdffadsf',
      imageUrl: '', // opcional si el recursos lo permite
      category: 'memes', // clasificar el newsFeed
      description: 'Mira esta libreria fantastica para manejar el estado', //
      fullName: 'user', // mostrar quien lo hizo
      userId: 'user123', //poder adicionar geekypuntos
      link: '', //opcional
      createdAt: '2019-03-15T10:59:52.798Z', // es mejor tenerlo
      geekyLikes: '9', //suma de geekypuntos
      commentCount: 3, // mostrar un preview de comentarios
    },
  ],
  comments: [
    {
      fullName: 'user',
      userId: 'usesdfr',
      postId: 'kdjsfgdksuufhgkdsufky', //poder asignar el comentario al post correcto
      comment: 'nice one mate!', //comentario
      createdAt: '2019-03-15T10:59:52.798Z', //es mejor tenerlo
    },
  ],

  //Profesores
  teachers: [
    {
      userId: 'dh23ggj5h32g543j5gf43', // muchas cosas
      email: 'user@email.com', //login
      fullName: 'user', //muchas cosas
      password: '', //
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh', // foto de perfil
      bio: 'Hello, my name is user, nice to meet you', // breve presentacion no mayor a 150 caracteres
      website: 'https://user.com', // portafolio
      location: 'Fortul, Arauca', // opcional, tal vez se puedan reunir y formar lazos en pueblos cercanos
      whatsapp: '3214866178', // opcional
      skills: [], // que habilidades conoce, opcional
      github: '', //sugerido
      facebook: '', //opcional
      twitter: '', //opcional
      instagram: '', //opcional
      linkedin: '', //opcional
      personalizedTutorials: [], // lista de trabajos entregados
      sprintsToScore: [], //
      codelingoChallegencesToScore: [],
      academicResourcesToScore: [],
      role: 'teacher',
      active: 'true', // activo o desertado
    },
  ],
  //sprint created
  sprints: [
    {
      sprintId: 'sprintasdfa',
      studentId: 'todos los estudiantes reciben un copia que asiga en myDeliveryJob', // esto aplica cuando se mueve la data
      score: 'calificacion hecha por el profesor',
      title: '', //
      description: '',
      salonName: '',
      salonId: '3214321', //Poder relacionarlo
      startDate: '03/02/2021', // fecha de inicio,
      deadline: '03/02/2021', //fehca de entrega
      deliveryLink: '',
      requiremensLink: [
        {
          title: '',
          ulr: '',
        },
      ],
      supportLinks: [
        {
          title: '',
          ulr: '',
        },
      ],
    },
  ],
  //cortes
  cortes: [],
  //Corte
  corte: {
    corteId: '',
    corteName: 'siglo XXl',
    createBy: '',
    students: [],
    assignedTeachers: [],
    active: true,
  },
  //Corte
  //Salones
  classrooms: [
    // las funciones como
    {
      classroomId: '',
      classroomName: '',
      students: [
        {
          userId: 'dh23ggj5h32g543j5gf43', // muchas cosas
          email: 'user@email.com', //login
          fullName: 'user', //muchas cosas
          imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh', // foto de perfil
          whatsapp: '3214866178', // opcional
          active: 'true', // activo o desertado
          geekyPuntos: 100,
        },
      ],
      corteId: '',
      agendaTutorials: [
        {
          idAgendaAvaliableTutorial: '31431',
          date: 'martes, Julio',
          avaliable: true,
        },
      ],
      groups: [
        {
          idGroup: 'idGroupasdfa',
          members: [
            {
              idStudent: 'StudentIdadsfasd',
              name: 'Geraldine',
            },
          ],
          salonId: 'salonId',
          salonName: 'asdf',
        },
      ],
      sprints: [
        {
          sprintId: 'sprintasdfa',
          studentId: 'todos los estudiantes reciben un copia que asiga en myDeliveryJob', // esto aplica cuando se mueve la data
          title: '', //
          description: '',
          salonName: '',
          salonId: '3214321', //Poder relacionarlo
          startDate: '03/02/2021', // fecha de inicio,
          deadline: '03/02/2021', //fehca de entrega
          deliveryLink: '',
          requiremensLink: [
            {
              title: '',
              ulr: '',
            },
          ],
          supportLinks: [
            {
              title: '',
              ulr: '',
            },
          ],
        },
      ],
    },
  ],
  //Retos de CodeLingo
  codelingoChallenges: [
    {
      idCodelingoChallenge: 'addfa',
      link: '',
      description: '',
      geekyPuntos: 10,
    },
  ],
  requiredTutorials: [
    {
      idTutorial: 'adsfasdf', //
      student: 'adsf', //
      studentId: 'ADFASDF',
      teacherName: '',
      teacherId: 'ASDADF',
      done: false,
    },
  ],
  notifications: [
    {
      receiver: 'students', // las notificaciones de un estudiantes y un administrador son totalmente diferentes
      sender: 'john', // quien genero la notificacion
      read: 'true | false', //ya fue leido ?
      postId: 'kdjsfgdksuufhgkdsufky', // poder redireccionar al comentario
      type: 'geekyLike | comment | reporte',
      createdAt: '2019-03-15T10:59:52.798Z', //es mejor tenerlo
    },
  ],
  academicResourcesBank: [
    //las funciones del banco de recursos academicos son:
    {

      resources: [
        {
          postId: 'asdfasdf', //poder eliminar, agregar y sugerir que se elimine determinado comentario
          category: 'asdfasdf',
          subCategory: 'api', //clasificar por categoria
          title: 'title', //titulo el cual debe ser especifico para el buscador
          link: '', //link
          format: 'video', //para clasificar y saber de antemano que tipo de link, y utilizar en el buscador
          level: 'basic|| intermediate|| advanced', //Permite tener recursos para todo tipo estudiante y clasificar en su busqueda
          english: 'false', //permite clasificar por idioma
          description: 'This is a sample scream', //permite espeficar un poco mas el link
          recommendedBy: 'user3', //permite mostrar el nombre de quien recomendo
          userId: 'useradsfasd23', //permite sumar geekypuntos al ponente
          createdAt: '2019-03-15T10:59:52.798Z', //permite clasificar recursos por mas nuevos
          score: 5, //votar y calificar el recursos.votar mejores recursos por medio de estrellas de 1 a 5
          active: true, //leer solo los recursos autorizados y ver cuales estan pendientes
        },
      ],
    },

  ],
  //administrador
  managers: [
    {
      userId: 'dh23ggj5h32g543j5gf43', // muchas cosas
      email: 'user@email.com', //login
      fullName: 'user', //muchas cosas
      password: '', //
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh', // foto de perfil
      bio: 'Hello, my name is user, nice to meet you', // breve presentacion no mayor a 150 caracteres
      whatsapp: '3214866178', // opcional
      linkedin: '', //opcional
      role: 'admin',
    },
  ],
};

//Potenciar el networking
//Incentivar la cooperacion y premiar el liderazgo.
//Incentivar la compentencia con codeLingo
//presentar la informacion estructurada para estudiantes, profesores y administradores
//sacarle Provecho a la comunidad alimentando el banco de Links
//Informacion actualizada del desempeño de estudiante, asistencia, desercion, tutorias personalizadas extras.
//fomentar la mejora de resultados de los estudiantes.
