import { Friend } from './../../Friend';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-friend-row',
  templateUrl: './friend-row.component.html',
  styleUrls: ['./friend-row.component.css']
})
export class FriendRowComponent implements OnInit {
  @Input() friend!: Friend;
  
  constructor() { }

  ngOnInit(): void {
  }

  addFriend() {
    
  }

}
