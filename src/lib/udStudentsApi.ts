export class UdStudentsApi
{
   userTest = {
    'uid': 'VOwhJzz7GtVGdVqm36e0PuxwXj52',
    'displayName': 'Abel Moreno',
    'email': 'moreno.abel@gmail.com',
    'photoURL': 'https://lh3.googleusercontent.com/-ScVvu1jIWfo/AAAAAAAAAAI/AAAAAAAAAIg/glOAcASSHFk/photo.jpg',
    'phoneNumber': {
      'public': false,
      'number': '2301403'
    },
    'faculty': 'Ingeniería',
    'career': 'Ingeniería de sistemas',
    'status': 'Estudiante Matriculado',
    'pensum': '325'
  }

  pensumTest = {
     'faculty': 'Ingeniería',
     'career': 'Ingeniería de sistemas',
     'levels': {
       '1': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': true
       },
       '2': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': true
       },
       '3': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': true
       },
       '4': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': true
       },
       '5': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': true
       },
       '6': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': true
       },
       '7': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': false
       },
       '8': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': false
       },
       '9': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': false
       },
       '10': {
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': false
       }
     }
  }

  subjectsTest = {
     '1': {
       'code': '1',
       'name': 'CÁLCULO DIFERENCIAL',
       'creditos': 4,
       'type': {
         'code': 'OB',
         'name': 'Obligatorio Básico'
       },
       'completed': true
     },
    '403': {
      'code': '403',
      'name': 'LÓGICA',
      'creditos': 3,
      'type': {
        'code': 'OB',
        'name': 'Obligatorio Básico'
      },
      'completed': true
    },
    '2': {
      'code': '2',
      'name': 'PROGRAMACIÓN BÁSICA',
      'creditos': 3,
      'type': {
        'code': 'OB',
        'name': 'Obligatorio Básico'
      },
      'completed': true
    },
    '6': {
      'code': '6',
      'name': 'SEMINARIO DE INGENIERÍA',
      'creditos': 1,
      'type': {
        'code': 'OB',
        'name': 'Obligatorio Básico'
      },
      'completed': true
    },
    '4': {
      'code': '4',
      'name': 'CÁTEDRA FRANCISCO JOSÉ DE CALDAS',
      'creditos': 1,
      'type': {
        'code': 'OC',
        'name': 'Obligatorio Complementario'
      },
      'completed': true
    },
    '5': {
      'code': '5',
      'name': 'PRODUCCIÓN Y COMPRENSIÓN DE TEXTOS',
      'creditos': 2,
      'type': {
        'code': 'Oc',
        'name': 'Obligatorio Complementario'
      },
      'completed': true
    },
    '12': {
      'code': '12',
      'name': 'CÁTEDRA DEMOCRACIA Y CIUDADANÍA',
      'creditos': 1,
      'type': {
        'code': 'OC',
        'name': 'Obligatorio Complementario'
      },
      'completed': true
    },
    '40': {
      'code': '40',
      'name': 'CÁTEDRA DE CONTEXTO',
      'creditos': 1,
      'type': {
        'code': 'OC',
        'name': 'Obligatorio Complementario'
      },
      'completed': true
    },
    '16103': {
      'code': '16103',
      'name': 'FUNDAMENTOS DE PROCESAMIENTO DISTRIBUIDO Y DE ALTO DESEMPEÑO',
      'creditos': 1,
      'type': {
        'code': 'EE',
        'name': 'Electivas Extrinsecas'
      },
      'completed': true
    }
  }

  async saveUserGoogleId()
  {
    console.log('Save Id from google to validate later in login');
  }

  async getUserLogged(email, googleUserId):Promise<Object>
  {
    if (
      this.userTest.email == email &&
      this.userTest.uid == googleUserId
    ){

      return this.userTest;

    }else {

      return {
        'error': 'Email does not belong to a Student'
      }

    }

  }

  getUserPensum()
  {
      return this.pensumTest;

  }

  getPensumSubjects()
  {
    return this.subjectsTest;
  }



}
