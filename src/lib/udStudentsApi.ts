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
  };

  pensumTest = {
     'faculty': 'Ingeniería',
     'career': 'Ingeniería de sistemas',
     'credits': 205,
     'levels': [
       {
         'name': '1',
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': true
       },
       {
         'name': '2',
         'subjects': [
           1, 2, 12, 16103, 5, 403, 40, 6
         ],
         'completed': true
       },
       {
         'name': '3',
         'subjects': [
           4, 1, 2, 12, 16103, 5, 403
         ],
         'completed': true
       },
       {
         'name': '4',
         'subjects': [
           12, 16103, 5, 403, 40, 6
         ],
         'completed': true
       },
       {
         'name': '5',
         'subjects': [
           4, 1, 2, 12, 16103
         ],
         'completed': true
       },
       {
         'name': '6',
         'subjects': [
           5, 403, 40, 6
         ],
         'completed': true
       },
       {
         'name': '7',
         'subjects': [
           4, 1, 2
         ],
         'completed': false
       },
       {
         'name': '8',
         'subjects': [
           40, 6
         ],
         'completed': false
       },
       {
         'name': '9',
         'subjects': [
           4
         ],
         'completed': false
       },
       {
         'name': '10',
         'subjects': [
           16103, 5
         ],
         'completed': false
       }
     ]
  };

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
      'completed': false
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
      'completed': false
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
      'completed': false
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
  };

  scheduleTest = {
    'year': 2018,
    'period': 3,
    'week': {
      'Monday': {
        '09:00:00': {
          'subject': 12,
          'start': '09:00:00',
          'finish': '11:00:00'
        },
        '12:00:00': {
          'subject': 2,
          'start': '12:00:00',
          'finish': '14:00:00'
        },
        '16:00:00': {
          'subject': 4,
          'start': '16:00:00',
          'finish': '18:00:00'
        }
      },
      'Tuesday': {
        '07:00:00': {
          'subject': 12,
          'start': '07:00:00',
          'finish': '09:00:00'
        },
        '12:00:00': {
          'subject': 2,
          'start': '12:00:00',
          'finish': '14:00:00'
        },
        '16:00:00': {
          'subject': 4,
          'start': '16:00:00',
          'finish': '18:00:00'
        }
      },
      'Wednesday': {
        '09:00:00': {
          'subject': 12,
          'start': '09:00:00',
          'finish': '11:00:00'
        },
        '12:00:00': {
          'subject': 2,
          'start': '12:00:00',
          'finish': '14:00:00'
        },
        '16:00:00': {
          'subject': 4,
          'start': '16:00:00',
          'finish': '18:00:00'
        }
      },
      'Thursday': {
        '09:00:00': {
          'subject': 12,
          'start': '09:00:00',
          'finish': '11:00:00'
        },
        '12:00:00': {
          'subject': 2,
          'start': '12:00:00',
          'finish': '14:00:00'
        },
        '16:00:00': {
          'subject': 4,
          'start': '16:00:00',
          'finish': '18:00:00'
        }
      },
      'Friday': {
        '09:00:00': {
          'subject': 12,
          'start': '09:00:00',
          'finish': '11:00:00'
        },
        '12:00:00': {
          'subject': 2,
          'start': '12:00:00',
          'finish': '14:00:00'
        },
        '16:00:00': {
          'subject': 4,
          'start': '16:00:00',
          'finish': '18:00:00'
        }
      },
      'Saturday': {
        '09:00:00': {
          'subject': 12,
          'start': '09:00:00',
          'finish': '11:00:00'
        },
        '12:00:00': {
          'subject': 2,
          'start': '12:00:00',
          'finish': '14:00:00'
        },
        '16:00:00': {
          'subject': 4,
          'start': '16:00:00',
          'finish': '18:00:00'
        }
      },
      'Sunday': {
      },
    }
  };

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

  getStudentSchedule()
  {
    return this.scheduleTest;
  }



}
