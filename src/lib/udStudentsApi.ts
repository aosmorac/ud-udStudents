export class UdStudentsApi
{
   userTest = {
    'uid': 'VOwhJzz7GtVGdVqm36e0PuxwXj52',
    'displayName': 'Abel Moreno',
    'email': 'moreno.abel@gmail.com',
    'photoURL': 'https://lh3.googleusercontent.com/-ScVvu1jIWfo/AAAAAAAAAAI/AAAAAAAAAIg/glOAcASSHFk/photo.jpg',
    'faculty': 'Ingeniería',
    'career': 'Ingeniería de sistemas'
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



}
