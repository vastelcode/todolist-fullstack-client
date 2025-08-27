export type PointsType = number;
export interface LevelI {
  name: string;
  threshold: number;
  description: string;
}
export interface UserLevelProgressProps {
  points: PointsType;
  levels: LevelI[];
}
export interface LevelInfoProps {
  currentLevel: LevelI;
  nextLevel: LevelI | undefined;
  progressToNextLevel: number;
} 

export interface ProgressDataI {
  icon: string;
  header: string;
  amount: number;
}