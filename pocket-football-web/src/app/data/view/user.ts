import {SportEnum} from './sport.enum';
import {PlayerPositionEnum} from './player-position.enum';
import {HidableData} from './hidable-data';
import {PlayerStats} from './player-stats';
import {PlayerLevelEnum} from './player-level.enum';

export interface User {
  id: string;
  userName: string;
  sportType: SportEnum;
  age: number;
  friends: number;
  image: string;
  playerPositions: PlayerPositionEnum[];
  email: HidableData;
  phoneNumber: HidableData;
  stats: PlayerStats;
  playerLevel: PlayerLevelEnum;
  responseTime: number;
}
