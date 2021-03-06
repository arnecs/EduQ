import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from "../interfaces/user";
import {Subject, Task} from "../interfaces/subject";
import {authHeaders} from "../common/headers";

@Injectable()
export class QueueService {

  subject: Subject;

  constructor(private http: Http) {}

  addQueueElement(users: User[], task: Task, location: any) {
    let json = {
      "users": users,
      "comment": "Not implemented",
      "task": task,
      "location": location
    };
    if (this.subject) {
      this.http.post(`api/subject/${this.subject.code}/queue`, JSON.stringify(json), {
         headers: authHeaders()
       }).subscribe();
    } else {
      console.error("Subject not set in QueueService");
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

  delayQueueElement(element: any, places: number) {
    let json = {
      "delay": places
    };
    this.http.post(`api/subject/${this.subject.code}/queue/${element._id}/delay`, JSON.stringify(json), {
      headers: authHeaders()
    }).subscribe();
    console.log(json);
  }

  toggleQueueActive(active: boolean) {
    let json = {
      "activate": !active
    };
    this.http.put(`api/subject/${this.subject.code}/queue`, JSON.stringify(json), {
       headers: authHeaders()
     }).subscribe();
  }

  acceptQueueElement(users: User[], task: number) {
    let json = {
      "users" : users,
      "task": task
    };
    return this.http.post(`api/subject/${this.subject.code}/task`, JSON.stringify(json), {
      headers: authHeaders()
    });
  }

}
