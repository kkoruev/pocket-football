import {SportEnum} from './sport.enum';
import {PlayerPositionEnum} from './player-position.enum';
import {HidableData} from './hidable-data';

export interface User {
  id: string;
  userName: string;
  sportType: SportEnum;
  age: number;
  playedMatches: number;
  friends: number;
  image: string;
  playerPositions: PlayerPositionEnum[];
  email: HidableData;
  phoneNumber: HidableData;
}
