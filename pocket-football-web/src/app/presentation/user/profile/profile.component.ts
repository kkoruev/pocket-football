import {Component, OnInit} from '@angular/core';
import {User} from '../../../data/view/user';
import {SportEnum} from '../../../data/view/sport.enum';
import {PlayerPositionEnum} from '../../../data/view/player-position.enum';
import {PlayerLevelEnum} from '../../../data/view/player-level.enum';

const TEST_USER: User = {
  age: 23,
  friends: 2,
  id: '12',
  sportType: SportEnum.FOOTBALL,
  userName: 'ChrisRb28',
  image: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
  playerPositions: [PlayerPositionEnum.DEFENDER, PlayerPositionEnum.GOALKEEPER],
  email: {dataField: 'k.koruev@pocket-football.com', isHidden: false},
  phoneNumber: {dataField: '+ 359 893 12 12 12', isHidden: true},
  playerLevel: PlayerLevelEnum.BEGINNER,
  responseTime: 12,
  stats: {playedMatches: 12, starPlayer: 1, organizedMatches: 5},
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
