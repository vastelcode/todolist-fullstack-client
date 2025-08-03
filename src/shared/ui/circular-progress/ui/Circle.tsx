import { CSSProperties } from 'react';
import { useAnimatedProgress } from '@/shared/lib/hooks/useAnimatedValue.ts';
import { calculateSvgParams } from '@/shared/lib/utils/calculateSvgParams.ts';
import styles from './Circle.module.scss';

type VariationsT = 'completed' | 'in-progress' | 'not-started';

interface CircularProgressProps {
  value: number;
  variation: VariationsT;
}

const labelText: Record<VariationsT, string> = {
  'completed': 'Выполнено',
  'in-progress': 'В процессе',
  'not-started': 'Не начато'
};

export const CircularProgress = ({
  value = 0,
  variation
}: CircularProgressProps) => {

  const size = 100;
  const strokeWidth = 12;
  const duration = 500;

  const progressColor = 
  variation === 'completed' ? '#05A301' :
  variation === 'in-progress' ? '#0225FF' : '#F21E1E'  ;

  const animatedValue = useAnimatedProgress(value, duration);
  const { radius, circumference, progressOffset } = calculateSvgParams(
    size,
    strokeWidth,
    animatedValue
  );


  const containerStyle: CSSProperties = {
    position: 'relative'
  };

  return (
    <div className={styles['circular-progress']} style={containerStyle}>
      <svg
        className={styles['progress-svg']}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className={styles.track}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={'#D9D9D9'}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          className={styles.progress}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="butt"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div
          className={styles['progress-text']}
          style={{
            position: 'absolute',
            top: '43%',
            left: '52%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
          }}
        >
          {Math.round(animatedValue)}%
        </div>
      <div className="flex items-center gap-1.5">
        <div
        className={`${styles['label-circle']}`}
        style={{
          backgroundColor: progressColor
        }}
        ></div>

        <p className={`${styles['label-text']}`}>
          {labelText[variation]}
        </p>

      </div>
    </div>
  );
};