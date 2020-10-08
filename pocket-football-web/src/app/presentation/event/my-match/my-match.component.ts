import {Component, OnInit} from '@angular/core';
import {Match} from '../../../data/view/match';
import {User} from '../../../data/view/user';
import {SportEnum} from '../../../data/view/sport.enum';
import {PlayerPositionEnum} from '../../../data/view/player-position.enum';
import {HostActionEnum} from '../../../data/view/host-action.enum';


const MATCH_DATA: Match[] = [
  new Match('12', 'Semi-pro football event', 'Kris', 'Minifutbol Rakovski', 12, 12, 'https://assets.materialup.com/uploads/64b950a7-a032-4fe4-b849-d4cb2626f90a/preview.jpg', 'John', HostActionEnum.NONE),
  new Match('13', 'Amateur football event', 'Stoyan', 'Minifutbol Rakovski', 10, 12, 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg', 'Kris', HostActionEnum.ACCEPTED),
  new Match('13', 'Amateur football event', 'Stoyan', 'Minifutbol Rakovski', 10, 12, 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg', 'Kris', HostActionEnum.ACCEPTED),
  new Match('13', 'Amateur football event', 'Stoyan', 'Minifutbol Rakovski', 10, 12, 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg', 'Kris', HostActionEnum.REJECTED),
  new Match('13', 'Amateur football event', 'Stoyan', 'Minifutbol Rakovski', 10, 12, 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg', 'Kris', HostActionEnum.ACCEPTED),
  new Match('13', 'Amateur football event', 'Stoyan', 'Minifutbol Rakovski', 10, 12, 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg', 'Kris', HostActionEnum.NONE),
  new Match('13', 'Amateur football event', 'Stoyan', 'Minifutbol Rakovski', 10, 12, 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg', 'Kris', HostActionEnum.MAYBE)
];

const TEST_USER: User = {
  age: 23,
  friends: 2,
  id: '12',
  playedMatches: 29,
  sportType: SportEnum.FOOTBALL,
  userName: 'ChrisRb28',
  image: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
  playerPositions: [PlayerPositionEnum.DEFENDER, PlayerPositionEnum.GOALKEEPER]
};


@Component({
  selector: 'app-my-match',
  templateUrl: './my-match.component.html',
  styleUrls: ['./my-match.component.css']
})

export class MyMatchComponent implements OnInit {

  dataSource: Match[] = MATCH_DATA;
  currentUser: User = TEST_USER;

  constructor() { }

  ngOnInit(): void {
  }

  isMatchAccepted(match: Match) {
    return HostActionEnum.NONE === match.hostAction || HostActionEnum.ACCEPTED === match.hostAction;
  }

  isMatchRejected(match: Match){
    return HostActionEnum.NONE === match.hostAction || HostActionEnum.REJECTED === match.hostAction;
  }

  isMatchMaybe(match: Match) {
    return HostActionEnum.NONE === match.hostAction || HostActionEnum.MAYBE === match.hostAction;
  }

  accept(match: Match): void {
    if (HostActionEnum.NONE === match.hostAction) {
      match.hostAction = HostActionEnum.ACCEPTED;
      match.currentParticipants = match.currentParticipants + 1;
      return;
    }
    match.hostAction = HostActionEnum.NONE;
  }

  reject(match: Match): void {
    if (HostActionEnum.NONE === match.hostAction) {
      match.hostAction = HostActionEnum.REJECTED;
      match.currentParticipants = match.currentParticipants - 1;
      return;
    }
    match.hostAction = HostActionEnum.NONE;
  }

  maybe(match: Match): void {
    if (HostActionEnum.NONE === match.hostAction) {
      match.hostAction = HostActionEnum.MAYBE;
      return;
    }
    match.hostAction = HostActionEnum.NONE;
  }
}
