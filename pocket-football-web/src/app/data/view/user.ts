import {SportEnum} from './sport.enum';
import {PlayerPositionEnum} from './player-position.enum';

export interface User {
  id: string;
  userName: string;
  sportType: SportEnum;
  age: number;
  playedMatches: number;
  friends: number;
  image: string;
  playerPositions: PlayerPositionEnum[];
}
