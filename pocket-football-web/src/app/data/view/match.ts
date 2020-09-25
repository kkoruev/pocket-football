export class Match {
  id: string;
  title: string;
  host: string; // will check if ID or Name, or User object
  place: string; // or Place object
  currentParticipants: number;
  allowedParticipants: number;
  image: string;


  constructor(id: string, title: string, host: string, place: string, currentParticipants: number,
              allowedParticipants: number, image: string) {
    this.id = id;
    this.title = title;
    this.host = host;
    this.place = place;
    this.currentParticipants = currentParticipants;
    this.allowedParticipants = allowedParticipants;
    this.image = image;
  }

  isMatchFull(): boolean {
    return (this.allowedParticipants - this.currentParticipants) === 0;
  }

}
