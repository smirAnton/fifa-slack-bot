export enum TEAMS_RATES {
  LOW = '4',
  MEDIUM = '4.5',
  HIGH = '5',
}

export const TEAMS = {
  [TEAMS_RATES.LOW]: [
    'Spartak Moscow',
    'RB Leipzig',
    'Shakhtar',
    'OGC Nice',
    'Torino',
    'Zenit',
    'Atalanta',
    'SL Benfica',
    'Real Sociedad',
    'West Ham Utd',
    'Olym. Marseille',
    '1899 Hoffenheim',
    'Celta Vigo',
    "Bor. M'gladbach",
    'Fiorentina',
    'Espanyol',
    'Newcastle',
  ],
  [TEAMS_RATES.MEDIUM]: [
    'Inter Milano',
    'Liverpol',
    'Napoli',
    'Everton',
    'Monaco',
    'Arsenal',
    'Borussia Dortmund',
    'AC Milan',
    'Sevilla',
    'Schalke',
    'Roma',
    'FC Porto',
    'Villarreal CF',
    'Athletic Club',
  ],
  [TEAMS_RATES.HIGH]: [
    'Real Madrid',
    'Bavaria',
    'Juventus',
    'Barcelona',
    'Manchester City',
    'PSG',
    'Atletico Madrid',
    'Manchester United',
    'Chelsea',
    'Tottenham',
  ],
};