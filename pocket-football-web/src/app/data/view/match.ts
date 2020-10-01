import {HostActionEnum} from "./host-action.enum";

export class Match {
  id: string;
  title: string;
  host: string; // will check if ID or Name, or User object
  place: string; // or Place object
  currentParticipants: number;
  allowedParticipants: number;
  image: string;

  // user related
  invitedBy: string;
  hostAction: HostActionEnum;


  constructor(id: string, title: string, host: string, place: string, currentParticipants: number,
              allowedParticipants: number, image: string, invitedBy: string, hostAction: HostActionEnum) {
    this.id = id;
    this.title = title;
    this.host = host;
    this.place = place;
    this.currentParticipants = currentParticipants;
    this.allowedParticipants = allowedParticipants;
    this.image = image;
    this.invitedBy = invitedBy;
    this.hostAction = hostAction;
  }

  isMatchFull(): boolean {
    return (this.allowedParticipants - this.currentParticipants) === 0;
  }

}
