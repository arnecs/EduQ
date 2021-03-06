import {User} from "./user";
import {Location} from "./location";

/** Subject */
export interface Subject  {
  _id?: string;
  code: string;
  name: string;
  broadcasts: Broadcast[];
  queue: Queue;
  tasks: Task[];
  requirements: Requirement[];
  locations: Location[];
  users?: SubjectUser[];
}

/** SubjectUser */
export interface SubjectUser {
  _id?: string;
  firstname: string;
  lastname: string;
  role: string;
  tasks?: any[];
}


/** Tasks */
export interface Task {
  _id?: string;
  number: number;
  title: string;
}

/** Requirement */
export interface Requirement {
  _id?: string;
  from: number;
  to: number;
  required: number;
}

/** Broadcast */
export interface Broadcast {
  _id?: string;
  author: User;
  title: string;
  content: string;
  created: Date;
}

/** Queue */
export interface Queue {
  _id?: string;
  active: boolean;
  list: QueueGroup[];
}

/** QueueGroup */
export interface QueueGroup {
  _id?: string;
  users: User[];
  helper?: User;
  timeEntered: Date;
  comment: string;
  position: number; // in queue
  location: Location;
}

/** Location */
export interface QueueGroupLocation {
  _id?: string;
  room: string;
  table: string;
}
