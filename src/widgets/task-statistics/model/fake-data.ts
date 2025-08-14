import { ChartData } from "chart.js";

import { getOptions, getData } from "./helpers.ts";








export const DATA_DAY: ChartData<'line'> = getData(
  ['04.08','05.08','06.08',
    '07.08','08.08','09.08','10.08',
    '11.08','12.08','13.08','14.08','15.08'
  ],
  [65, 59, 80, 81, 56, 158, 23,10, 74, 56, 89, 45 ]
);

export const DATA_WEEK: ChartData<'line'> = getData(
  ['28.07','04.08','11.08',
    '18.08','25.08','01.09'
  ],
  [324, 478, 252, 336,105,563]
);

export const DATA_MONTH: ChartData<'line'> = getData(
  ['01.06','01.07','01.08'],
  [1207, 1345, 1025]
);

export const OPTIONS_CHART = () => getOptions;