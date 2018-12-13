import {UdStudentsApi} from '../lib/udStudentsApi';
import {Subjects} from "./subjects";

export class Schedule
{
  schedule: object;
  subjects;
  api;

  constructor()
  {
    this.api = new UdStudentsApi();
    this.subjects = new Subjects();
  }

  async downloadStudentSchedule(): Promise<boolean>
  {
    try {

      this.schedule = this.api.getStudentSchedule();
      return await this.subjects.downloadSubjects();

    } catch(err) {

      console.log(err);
      return false;

    }
  }

  getScheduleByDay(weekDay)
  {
    // @ts-ignore
    let subjectsByDay = JSON.parse(JSON.stringify(this.schedule.week[weekDay]));
    for (let key in subjectsByDay) {
      let value = subjectsByDay[key];
      subjectsByDay[key].subject = this.subjects.getSubjectById(value.subject);
    }
    return subjectsByDay;
  }

}
