import { sample, shuffle } from 'lodash';

import { TEAMS_RATES, TEAMS } from '../constants';

export interface IRandomTeams {
  rate: string;
  teams: string[];
}

export const randomize = (): IRandomTeams => {
  const selectedRate:
    | TEAMS_RATES.LOW
    | TEAMS_RATES.MEDIUM
    | TEAMS_RATES.HIGH = sample(Object.values(TEAMS_RATES));

  const shuffled: string[] = shuffle(TEAMS[selectedRate]);

  return {
    rate: selectedRate,
    teams: shuffled.splice(0, 2),
  };
};
