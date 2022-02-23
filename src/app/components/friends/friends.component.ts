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
  filteredFriends: Friend[] = [];
  searchString!: string;

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendService.getFriends().subscribe((friends) => {
      this.friends = friends;
      this.searchFriends(this.searchString);
    });
  }

  searchFriends(searchStr: string) {
    this.searchString = searchStr;
    this.filteredFriends = this.searchByStr(this.friends, searchStr);
  }

  searchByStr(friends: Friend[], searchStr: string) {
    if (!friends || !searchStr) {
      return friends;
    }

    const searchText = searchStr.toLocaleLowerCase();
    return friends.filter(it => {
      return (it.name.toLowerCase().includes(searchText))
    })
  }

}

