import { Friend } from './../../Friend';
import { FriendService } from './../../services/friend.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  @Input() friend!: Friend;
  title: string = "Friends";

  friends: Friend[] = [];

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendService.getFriends().subscribe((friends) => this.friends = friends);
  }

}

