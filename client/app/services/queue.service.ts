import {Injectable} from 'angular2/core';
import {Http, Headers, Request, RequestMethod} from "angular2/http";
import {User} from '../interfaces/user';
import {Subject} from '../interfaces/subject';
import {Queue} from '../interfaces/subject';
import {authHeaders} from '../common/headers';

let SERVER_ADDRESS = 'http://localhost:3000';

@Injectable()
export class QueueService {

  subject: Subject;

  constructor(private http: Http) {}

  addQueueElement(users: User[]) {
    if (this.subject) {
      this.http.post(`api/subject/${this.subject.code}/queue`, JSON.stringify({users:users}), {
         headers: authHeaders()
       }).subscribe();
    } else {
      console.error('Subject not set in QueueService');
    }
  }

  deleteFromQueue() {
    this.http.delete(`api/subject/${this.subject.code}/queue`, {
       headers: authHeaders()
     }).subscribe();
  }

  removeQueueElement(element: any) {
    this.http.delete(`api/subject/${this.subject.code}/queue/${element._id}`, {
       headers: authHeaders()
     }).subscribe();
  }

  helpQueueElement(element: any) {
    this.http.put(`api/subject/${this.subject.code}/queue/${element._id}`, "", {
       headers: authHeaders()
     }).subscribe();
  }

  delayQueueElement(places: number) {
    console.error('Error: SubjectService.delayQueueElement not implemented!');
  }

  toggleQueueActive(active: boolean) {
    var json = {
      "activate": !active
    }
    this.http.put(`api/subject/${this.subject.code}/queue`, JSON.stringify(json), {
       headers: authHeaders()
     }).subscribe();
  }
}