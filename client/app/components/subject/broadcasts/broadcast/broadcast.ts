import {Component} from 'angular2/core';
import {Broadcast} from '../../../../interfaces/subject';

@Component({
  selector: 'broadcast',
  templateUrl: 'app/components/subject/broadcasts/broadcast/broadcast.html',
  inputs: ['broadcast']
})

export class BroadcastDetailComponent {
  broadcast: Broadcast;
}