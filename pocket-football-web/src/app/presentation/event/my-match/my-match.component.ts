import {Component, OnInit} from '@angular/core';
import {Match} from '../../../data/view/match';
import {User} from "../../../data/view/user";
import {SportEnum} from "../../../data/view/sport.enum";
import {PlayerPositionEnum} from "../../../data/view/player-position.enum";


const MATCH_DATA: Match[] = [
  { id: '12',
    host: 'Kris',
    currentParticipants: 12,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Semi-pro football event',
    image: 'https://assets.materialup.com/uploads/64b950a7-a032-4fe4-b849-d4cb2626f90a/preview.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  },
  { id: '13',
    host: 'Stoyan',
    currentParticipants: 5,
    allowedParticipants: 12,
    place: 'Minifutbol Rakovski',
    title: 'Amateur football event',
    image: 'https://i.pinimg.com/originals/4e/5d/b6/4e5db6eb94842ecca62ecf28a59267f0.jpg'
  }
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

}
