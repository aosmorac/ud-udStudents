import {UdStudentsApi} from '../lib/udStudentsApi';

export class Subjects
{
  subjects: object;
  api;


  constructor()
  {
    this.api = new UdStudentsApi();
  }


  async downloadSubjects(): Promise<boolean>
  {
    try {

      return this.api.getPensumSubjects().then(data => {
        this.subjects = data;
        return true;
      });

    } catch(err) {

      console.log(err);
      return false;

    }
  }

  getSubjects()
  {
    return this.subjects;
  }


}
