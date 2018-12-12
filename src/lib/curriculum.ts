import {UdStudentsApi} from '../lib/udStudentsApi';
import {Subjects} from "./subjects";

export class Curriculum
{
  curriculum: object;
  subjects: Subjects;
  api;


  constructor()
  {
    this.api = new UdStudentsApi();
    this.subjects = new Subjects();
  }


  async downloadCurriculum(): Promise<boolean>
  {
    try {

      this.curriculum = this.api.getUserPensum();
      return await this.subjects.downloadSubjects();

    } catch(err) {

      console.log(err);
      return false;

    }
  }

  getPensum()
  {
    return this.curriculum;
  }

  getSubjects()
  {
    return this.subjects.getSubjects();
  }


}
