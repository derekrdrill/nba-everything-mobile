import { NBAPlayer } from './NBAPlayer';

export type NBAGameStatLeader = {
  player: NBAPlayer;
  total: number;
  type: 'pts' | 'ast' | 'reb' | 'stl' | 'blk' | 'turnover';
};
