import { Component, OnInit } from '@angular/core';
import {User} from '../../../data/view/user';
import {SportEnum} from '../../../data/view/sport.enum';
import {PlayerPositionEnum} from '../../../data/view/player-position.enum';

const TEST_USER: User = {
  age: 23,
  friends: 2,
  id: '12',
  playedMatches: 29,
  sportType: SportEnum.FOOTBALL,
  userName: 'ChrisRb28',
  image: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
  playerPositions: [PlayerPositionEnum.DEFENDER, PlayerPositionEnum.GOALKEEPER],
  email: {dataField: 'k.koruev@pocket-football.com', isHidden: false},
  phoneNumber: {dataField: '+ 359 893 12 12 12', isHidden: true}
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = TEST_USER;

  constructor() { }

  ngOnInit(): void {
  }

}
