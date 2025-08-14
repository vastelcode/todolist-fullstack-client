interface LevelI {
  name: string;
  threshold: number;
  description: string;
}


export const getCurrentLevel = (points: number, levels: LevelI[]) => {
  return levels.reduce(
  (current, level) => 
    points >= level.threshold 
    ? level 
    : current
  )
}

export const getNextLevel = (points: number, levels: LevelI[]) => {
  const current = getCurrentLevel(points, levels);

  return levels.find(level => level.threshold > current.threshold);
}

export const getProgressToNextLevel = (points: number, levels: LevelI[]) => {
  const current = getCurrentLevel(points, levels);
  const next = getNextLevel(points, levels);

  if(!next) return 0; // максимальный уровень достигнут

  return next.threshold - points;
}


export const getWidth = (value: number) => {
  return value <= 1000 ? value / 3.16 + 'px' : '316px';
}