import { db, auth } from './firebase';

// User API

export const doCreateUser = (id, nombre, apellido, email, telefono, matricula, pacientes, dietas, recetas, agenda, nutriologo) =>
  db.ref(`users/${id}`).set({
    nombre,
    apellido,
    pacientes,
    email,
    telefono,
    matricula,
    dietas,
    pacientes,
    agenda,
    nutriologo
  });


  const uid = () => auth.currentUser.uid

export const onceGetUsers = () =>

  db.ref('users/nutriologos/').once('value', snapshot => {

    return(
        snapshot.val()

    )
  })

