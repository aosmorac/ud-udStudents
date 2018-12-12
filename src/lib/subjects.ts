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

      this.subjects = this.api.getPensumSubjects();
      return true;

    } catch(err) {

      console.log(err);
      return false;

    }
  }

  getSubjects(ids)
  {
    let subjectsFiltered = [];

    ids.forEach(id => {
      subjectsFiltered.push(this.subjects[id]);
    });
    return subjectsFiltered;
  }

  getAllSubjects()
  {
    return this.subjects;
  }


}
