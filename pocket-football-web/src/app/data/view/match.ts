export interface Match {
  id: string;
  title: string;
  host: string; // will check if ID or Name, or User object
  place: string; // or Place object
  currentParticipants: number;
  allowedParticipants: number;
  image: string;
}
