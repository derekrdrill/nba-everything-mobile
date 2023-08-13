import { NBAArena } from './NBAArena';

export type NBATeam = {
  _id: string;
  id: number;
  arena: NBAArena;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
};
