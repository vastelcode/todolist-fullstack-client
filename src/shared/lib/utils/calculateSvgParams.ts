export interface SvgParams {
  radius: number;
  circumference: number;
  progressOffset: number;
}

export const calculateSvgParams = (
  size: number,
  strokeWidth: number,
  value: number
): SvgParams => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference * (1 - value / 100);
  
  return { radius, circumference, progressOffset };
};