import { ChartData, ChartOptions } from "chart.js";

export const getOptions = (
  fontFamily: string,
  colorGridY: string
) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        displayColors: false,
        bodyAlign:'center',
        bodyFont: {
          family: `'${fontFamily}', sans-serif`,
          size: 12
        },
        titleFont: {
          family: `'${fontFamily}', sans-serif`,
          size: 12
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // убираем сетку по оси X
        },
        ticks: {
          font: {
            family: `'${fontFamily}', sans-serif`,
            size: 10
          },
          color: '#768396' // цвет текста
        }
      },
      y: {
        grid: {
          color: colorGridY, // цвет сетки
        },
        ticks: {
          font: {
            family: `'${fontFamily}', sans-serif`,
            size: 10
          },
          color: '#768396', // цвет текста
        }
      }
    }
  } as ChartOptions<'line'>;
};

export const getData = (
  labels: string[],
  data: number[]
) => {
  return {
    labels: labels,
    datasets: [
      {
        data: data,
        borderColor: '#5051F9', // цвет линии
        backgroundColor: 'rgba(80, 81, 249, 0.1)', // цвет заливки под линией
        pointBackgroundColor: '#FFFFFF', // цвет внутренней части точки
        pointBorderColor: '#5051F9', // цвет границы точки
        pointBorderWidth: 2, // толщина границы точки
        tension: 0.5,
        borderWidth: 2,
        hoverBorderWidth: 3,
        fill: true // включаем заливку под линией
      }
    ]
  } as ChartData<'line'>;
}