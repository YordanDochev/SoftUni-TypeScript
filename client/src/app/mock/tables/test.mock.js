export const energyHeader = [
  [
    {
      header_0: [
        { value: "Година", rowSpan: 2 },
        { value: "Коефициент" },
        { value: "Електроенергия" },
        { value: "Електроенергия" },
        { value: "Топлоенергия Природен газ" },
        { value: "Топлоенергия Природен газ" },
        { value: "Общо" },
        { value: "Общо" },
        { value: "Кондиционирана площ", rowSpan: 2 },
        { value: "Специфичен разход" },
        { value: "Коефициент" },
        { value: "Референтен разход" },
        { value: "Лв/ квтч ел", rowSpan: 2 },
        { value: "Лв/ квтч природен газ", rowSpan: 2 },
      ],
    },
    {
      header_1: [
        { value: "за региона" },
        { value: "kWh" },
        { value: "лв" },
        { value: "kWh" },
        { value: "лв" },
        { value: "kWh" },
        { value: "лв" },
        { value: "kWh/m2y" },
        { value: "DD" },
        { value: "kWh/m2y" },
      ],
    },
  ],
  [
    {
      header_0: [
        { value: "Природен газ" },
        { value: "" },
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "4" },
        { value: "5" },
        { value: "6" },
        { value: "7" },
        { value: "8" },
        { value: "9" },
        { value: "10" },
        { value: "11" },
        { value: "12" },
        { value: "Общо, kWh" },
      ],
    },
  ],
  [
    {
      header_0: [
        { value: "Ел. енергия" },
        { value: "" },
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "4" },
        { value: "5" },
        { value: "6" },
        { value: "7" },
        { value: "8" },
        { value: "9" },
        { value: "10" },
        { value: "11" },
        { value: "12" },
        { value: "Общо, kWh" },
      ],
    },
  ],
];

const windowHeader = [
  {
    header_0: [
      { value: "Тип", colSpan: 6, rowSpan: 2 },
      { value: "Фасада", colSpan: 8 },
      { value: "Обща площ", rowSpan: 2 },
    ],
  },
  {
    header_1: [
      { value: "C", colSpan: 2 },
      { value: "И", colSpan: 2 },
      { value: "Ю", colSpan: 2 },
      { value: "З", colSpan: 2 },
    ],
  },
  {
    header_2: [
      { value: "№" },
      { value: "m(a)" },
      { value: "m(b)" },
      { value: "m²" },
      { value: "U" },
      { value: "g" },
      { value: "бр." },
      { value: "m²" },
      { value: "бр." },
      { value: "m²" },
      { value: "бр." },
      { value: "m²" },
      { value: "бр." },
      { value: "m²" },
      { value: "m²" },
    ],
  },
];

export const WINDOWS_TABLES = [
  {
    heading: "Сграда",
    header: windowHeader,
    data: [
      {
        data_0: [
          { value: 1 },
          { value: 0.8 },
          { value: 2.1 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 3 },
          { formula: true, operation: "northFacadeArea" },
          { value: 19 },
          { formula: true, operation: "eastFacadeArea" },
          { value: 13 },
          { formula: true, operation: "southFacadeArea" },
          { value: 24 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_1: [
          { value: 2 },
          { value: 1.2 },
          { value: 2.1 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 91 },
          { formula: true, operation: "northFacadeArea" },
          { value: 37 },
          { formula: true, operation: "eastFacadeArea" },
          { value: 59 },
          { formula: true, operation: "southFacadeArea" },
          { value: 76 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_2: [
          { value: 3 },
          { value: 0.6 },
          { value: 2.1 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 43 },
          { formula: true, operation: "northFacadeArea" },
          { value: 16 },
          { formula: true, operation: "eastFacadeArea" },
          { value: 29 },
          { formula: true, operation: "southFacadeArea" },
          { value: 38 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_3: [
          { value: 4 },
          { value: 1.6 },
          { value: 2.6 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: 1 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_4: [
          { value: 5 },
          { value: 13.92 },
          { value: 2.8 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: 1 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_5: [
          { value: 6 },
          { value: 6.72 },
          { value: 2.8 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: 1 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_6: [
          { value: 7 },
          { value: 6.72 },
          { value: 1.7 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: 1 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_7: [
          { value: 8 },
          { value: 1.8 },
          { value: 2.6 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: 2 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_8: [
          { value: 9 },
          { value: 8.06 },
          { value: 2.8 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: 1 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_9: [
          { value: 10 },
          { value: 0.75 },
          { value: 2.02 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: 1 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_10: [
          { value: 11 },
          { value: 1.8 },
          { value: 2.61 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 1 },
          { formula: true, operation: "northFacadeArea" },
          { value: 1 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_11: [
          { value: 12 },
          { value: 0.94 },
          { value: 2.02 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: "" },
          { formula: true, operation: "eastFacadeArea" },
          { value: 1 },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_12: [
          { value: 13 },
          { value: 1 },
          { value: 2.1 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: "" },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: 10 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_13: [
          { value: 14 },
          { value: 0.6 },
          { value: 0.5 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 15 },
          { formula: true, operation: "northFacadeArea" },
          { value: 15 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: 15 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_14: [
          { value: 15 },
          { value: 2.4 },
          { value: 0.5 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 15 },
          { formula: true, operation: "northFacadeArea" },
          { value: 15 },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: 15 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_15: [
          { value: 16 },
          { value: 1.2 },
          { value: 1.7 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 160 },
          { formula: true, operation: "northFacadeArea" },
          { value: 96 },
          { formula: true, operation: "eastFacadeArea" },
          { value: 108 },
          { formula: true, operation: "southFacadeArea" },
          { value: 60 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_16: [
          { value: 17 },
          { value: 0.6 },
          { value: 1.7 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 80 },
          { formula: true, operation: "northFacadeArea" },
          { value: 42 },
          { formula: true, operation: "eastFacadeArea" },
          { value: 54 },
          { formula: true, operation: "southFacadeArea" },
          { value: 30 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_17: [
          { value: 18 },
          { value: 1.2 },
          { value: 2.1 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 40 },
          { formula: true, operation: "northFacadeArea" },
          { value: "" },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_18: [
          { value: 19 },
          { value: 0.8 },
          { value: 1.7 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: 20 },
          { formula: true, operation: "northFacadeArea" },
          { value: 24 },
          { formula: true, operation: "eastFacadeArea" },
          { value: 54 },
          { formula: true, operation: "southFacadeArea" },
          { value: 72 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_19: [
          { value: 20 },
          { value: 1 },
          { value: 1.7 },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: "" },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: 30 },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_20: [
          { value: 21 },
          { value: "" },
          { value: "" },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: "" },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_21: [
          { value: 22 },
          { value: "" },
          { value: "" },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: "" },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
      {
        data_22: [
          { value: 23 },
          { value: "" },
          { value: "" },
          { formula: true, operation: "windowArea" },
          { value: 2.63 },
          { value: 0.51 },
          { value: "" },
          { formula: true, operation: "northFacadeArea" },
          { value: "" },
          { formula: true, operation: "eastFacadeArea" },
          { value: "" },
          { formula: true, operation: "southFacadeArea" },
          { value: "" },
          { formula: true, operation: "westFacadeArea" },
          { formula: true, operation: "totalArea" },
        ],
      },
    ],
  },
  { heading: "Сутерен", header: windowHeader, data: [] },
  { heading: "Покрив", header: windowHeader, data: [] },
];

const outterWallHeader = [
  {
    header_0: [
      { value: "Материал" },
      { value: "Дебелина" },
      { value: "Топлопроводност" },
      { value: "Ri" },
    ],
  },
  {
    header_1: [
      { value: "" },
      { value: "m" },
      { value: "W/(m.K)" },
      { value: "m2K/W" },
    ],
  },
];

const actualConditionHeader = [
  {
    header_0: [
      { value: "Тип", colSpan: 2 },
      { value: "Фасади", colSpan: 4 },
      { value: "" },
    ],
  },
  {
    header_1: [
      { value: "№" },
      { value: "-" },
      { value: "С" },
      { value: "И" },
      { value: "Ю" },
      { value: "З" },
      { value: "Общо" },
    ],
  },
];

export const WALLS_TABLES = [
  {
    heading: "Външна стена вид 1",
    type: "OutterWall",
    header: outterWallHeader,
    data: [
      {
        data_0: [
          {
            selectionKey: "plaster",
            type: "selection",
            value: "Варо-циментна мазилка ",
          },
          {
            value: 0.025,
          },
          {
            value: 0.87,
          },
          {
            formula: true,
            operation: "sumKelvinPerWatt",
          },
        ],
      },
      {
        data_1: [
          {
            selectionKey: "plaster",
            type: "selection",
            value: "Зидария тухла",
          },
          {
            value: 0.25,
          },
          {
            value: 0.87,
          },
          {
            formula: true,
            operation: "sumKelvinPerWatt",
          },
        ],
      },
      {
        data_2: [
          {
            selectionKey: "plaster",
            type: "selection",
            value: "Варо-пясъчна мазилкаs",
          },
          {
            value: 0.025,
          },
          {
            value: 0.87,
          },
          {
            formula: true,
            operation: "sumKelvinPerWatt",
          },
        ],
      },
      // {
      //   data_3: [{ value: "", colSpan: 4 }],
      // },
      {
        data_Rs: [{ value: "Rs" }, { value: 0.13 }],
      },
      {
        data_Rsi: [{ value: "Rsi" }, { value: 0.04 }],
      },
      {
        data_m2K: [
          { value: "U, W/m2K", locked: true },
          { formula: true, operation: "sumCoeff" },
        ],
      },
    ],
  },
  {
    heading: "Външна стена вид 2",
    type: "OutterWall",
    header: outterWallHeader,
    data: [
      {
        data_0: [
          { value: "Варовикови плочи" },
          { value: 0.03 },
          { value: 1.16 },
          {
            formula: true,
            operation: "sumKelvinPerWatt",
          },
        ],
      },
      {
        data_1: [
          { value: "Зидария тухла" },
          { value: 0.25 },
          { value: 0.87 },
          {
            formula: true,
            operation: "sumKelvinPerWatt",
          },
        ],
      },
      {
        data_2: [
          { value: "Варо-пясъчна мазилка" },
          { value: 0.025 },
          { value: 0.87 },
          {
            formula: true,
            operation: "sumKelvinPerWatt",
          },
        ],
      },
      {
        data_3: [{ value: "", colSpan: 4 }],
      },
      {
        data_Rs: [{ value: "Rs", locked: true }, { value: 0.13 }],
      },
      {
        data_Rsi: [{ value: "Rsi", locked: true }, { value: 0.04 }],
      },
      {
        data_m2K: [
          { value: "U, W/m2K", locked: true },
          { formula: true, operation: "sumCoeff" },
        ],
      },
    ],
  },
  {
    heading: "Актуално състояние",
    type: "ActualCondition",
    header: actualConditionHeader,
    data: [
      {
        data_0: [
          {
            value: "1",
            rowSpan: 2,
          },
          {
            value: "A, m2",
          },
          {
            formula: true,
            operation: "sumCleanAreaOne",
          },
          {
            formula: true,
            operation: "sumCleanAreaOne",
          },
          {
            formula: true,
            operation: "sumCleanAreaOne",
          },
          {
            formula: true,
            operation: "sumCleanAreaOne",
          },
          {
            formula: true,
            operation: "sumRow",
          },
        ],
      },
      {
        data_1: [
          {
            value: "U, W/m2K*",
          },
          {
            operation: "getSumCoeffFirstTable",
            formula: true,
          },
          {
            operation: "getSumCoeffFirstTable",
            formula: true,
          },
          {
            operation: "getSumCoeffFirstTable",
            formula: true,
          },
          {
            operation: "getSumCoeffFirstTable",
            formula: true,
          },
          {
            operation: "getSumCoeffFirstTable",
            formula: true,
          },
        ],
      },
      {
        data_2: [
          {
            value: "2",
            rowSpan: 2,
          },
          {
            value: "A, m2",
          },
          {
            formula: true,
            operation: "sumCleanAreaTwo",
          },
          {
            formula: true,
            operation: "sumCleanAreaTwo",
          },
          {
            formula: true,
            operation: "sumCleanAreaTwo",
          },
          {
            formula: true,
            operation: "sumCleanAreaTwo",
          },
          {
            formula: true,
            operation: "sumRow",
          },
        ],
      },
      {
        data_3: [
          {
            value: "U, W/m2K*",
          },
          {
            operation: "getSumCoeffSecondTable",
            formula: true,
          },
          {
            operation: "getSumCoeffSecondTable",
            formula: true,
          },
          {
            operation: "getSumCoeffSecondTable",
            formula: true,
          },
          {
            operation: "getSumCoeffSecondTable",
            formula: true,
          },
          {
            operation: "getSumCoeffSecondTable",
            formula: true,
          },
        ],
      },
      {
        data_4: [
          {
            value: "",
            colSpan: 7,
          },
        ],
      },
      {
        data_5: [
          {
            value: "Площи без прозорци",
            colSpan: 7,
          },
        ],
      },
      {
        data_6: [
          {
            value: "Дължина 1",
            colSpan: 2,
          },
          {
            value: 70.98,
          },
          {
            value: 65.72,
          },
          {
            value: 70.98,
          },
          {
            value: 65.72,
          },
        ],
      },
      {
        data_7: [
          {
            value: "Дължина 2",
            colSpan: 2,
          },
          {
            value: 21.6,
          },
          {
            value: 14.94,
          },
          {
            value: 21.6,
          },
          {
            value: 14.94,
          },
        ],
      },
      {
        data_8: [
          {
            value: "Дължина 3",
            colSpan: 2,
          },
          {
            value: 9.6,
          },
          {
            value: 21.6,
          },
          {
            value: 9.6,
          },
          {
            value: 21.6,
          },
        ],
      },
      {
        data_9: [
          {
            value: "Височина 1",
            colSpan: 2,
          },
          {
            value: 18,
          },
          {
            value: 18,
          },
          {
            value: 18,
          },
          {
            value: 18,
          },
        ],
      },
      {
        data_10: [
          {
            value: "Височина 2",
            colSpan: 2,
          },
          {
            value: 7,
          },
          {
            value: 7,
          },
          {
            value: 7,
          },
          {
            value: 7,
          },
        ],
      },
      {
        data_11: [
          {
            value: "---",
            colSpan: 7,
          },
        ],
      },
      {
        data_12: [
          {
            value: "Площ 1",
            colSpan: 2,
          },
          {
            formula: true,
            operation: "getAreaOne",
          },
          {
            formula: true,
            operation: "getAreaOne",
          },
          {
            formula: true,
            operation: "getAreaOne",
          },
          {
            formula: true,
            operation: "getAreaOne",
          },
        ],
      },
      {
        data_13: [
          {
            value: "Площ 2",
            colSpan: 2,
          },
          {
            formula: true,
            operation: "getAreaTwo",
          },
          {
            formula: true,
            operation: "getAreaTwo",
          },
          {
            formula: true,
            operation: "getAreaTwo",
          },
          {
            formula: true,
            operation: "getAreaTwo",
          },
        ],
      },
      {
        data_14: [
          {
            value: "Площ прозорци 1",
            colSpan: 2,
          },
          {
            formula: true,
            operation: "getWindowAreaTwo",
          },
          {
            formula: true,
            operation: "getWindowAreaTwo",
          },
          {
            formula: true,
            operation: "getWindowAreaTwo",
          },
          {
            formula: true,
            operation: "getWindowAreaTwo",
          },
        ],
      },
      {
        data_15: [
          {
            value: "Площ прозорци 2",
            colSpan: 2,
          },
          {
            formula: true,
            operation: "getWindowAreaOne",
          },
          {
            formula: true,
            operation: "getWindowAreaOne",
          },
          {
            formula: true,
            operation: "getWindowAreaOne",
          },
          {
            formula: true,
            operation: "getWindowAreaOne",
          },
        ],
      },
    ],
  },
];

export const SUMMARY_TABLES = [
  {
    data: [
      { data_0: [{ value: "ТИЙМ ЕКСПЕРТС ООД", colSpan: 7 }] },
      {
        data_1: [
          {
            value:
              "УДОСТОВЕРЕНИЕ ПО ЧЛ. 44, АЛ. 1 ОТ ЗЕЕ: 14-252-28.09.2021/00367 ",
            colSpan: 7,
          },
        ],
      },
      { data_2: [{ value: "ВАРНА team4experts@gmail.com", colSpan: 7 }] },
      { data_3: [{ value: "", colSpan: 7 }] },
      {
        data_4: [
          {
            value: "ДОКЛАД ОТ ОБСЛЕДВАНЕ ЗА ЕНЕРГИЙНА ЕФЕКТИВНОСТ",
            colSpan: 7,
            customStyle:
              "block w-full px-2 text-center rounded-lg text-l focus:ring-blue-500 focus:border-blue-500",
          },
        ],
      },
      { data_5: [{ value: "", colSpan: 7 }] },
      {
        data_6: [
          {
            value: "Обект:",
            colSpan: 1,
            customStyle:
              "block w-24 px-2 text-center rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500",
          },
          {
            value: "Многопрофилна болница за активно лечение - Добрич",
            colSpan: 6,
          },
        ],
      },
    ],
  },
  {
    data: [
      {
        data_0: [
          { value: "ВЪЗЛОЖИТЕЛ:", colSpan: 2 },
          {
            value: '"Многопрофилна болница за активно лечение -Добрич" АД',
            colSpan: 5,
          },
        ],
      },
      {
        data_1: [
          {
            value: "ИЗПЪЛНИТЕЛ:",
            colSpan: 2,
          },
          {
            value: '"Тийм експертс" ООД',
            colSpan: 5,
          },
        ],
      },
      { data_4: [{ value: "", colSpan: 7 }] },
      { data_5: [{ value: "", colSpan: 7 }] },
      { data_6: [{ value: "", colSpan: 7 }] },
      { data_7: [{ value: "", colSpan: 7 }] },
      {
        data_8: [
          {
            value: "Ръководител",
            colSpan: 2,
          },
        ],
      },
      {
        data_9: [
          { value: "", colSpan: 2 },
          { value: "инж. Т. Тонев, управител", colSpan: 5 },
        ],
      },
      { data_10: [{ value: "", colSpan: 7 }] },
      {
        data_11: [
          {
            value: "Дата:",
            colSpan: 1,
          },
          {
            value: "Ноември 2023",
            colSpan: 6,
          },
        ],
      },
    ],
  },
];

const roofActualStateHeader = [
  {
    header_0: [
      { value: "Тип", rowSpan: 2 },
      { value: "А1" },
      { value: "U1" },
      { value: "A2" },
      { value: "U2" },
      { value: "Aw" },
      { value: "Uw" },
      { value: "n" },
      { value: "h" },
      { value: "V" },
      { value: "Uекв." },
      { value: "Uреф." },
    ],
  },
  {
    header_1: [
      { value: "m2" },
      { value: "W.m2K" },
      { value: "m2" },
      { value: "W.m2K" },
      { value: "m2" },
      { value: "W.m2K" },
      { value: "1/h" },
      { value: "m" },
      { value: "m3" },
      { value: "W.m2K" },
      { value: "W.m2K" },
    ],
  },
];

const ceilingBorderingOutsideAirHeader = [
  {
    header_0: [
      { value: "ТАВАН - граничещ с външен въздух" },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

const ceilingPlateHeader = [
  {
    header_0: [
      { value: "Детайл на таванската плоча - ограждение 1" },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

const roofConstructionHeader = [
  {
    header_0: [
      { value: "Детайл на покривна конструкция - ограждение 2" },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

const roofHelpersHeader = [
  {
    header_0: [
      { value: "Rsi1" },
      { value: "Rsi2" },
      { value: "Rse1" },
      { value: "Rse2" },
      { value: "Rsiw" },
      { value: "Rsew" },
      { value: "θi" },
      { value: "θe" },
      { value: "θu" },
      { value: "θse1" },
      { value: "θsi2" },
      { value: "Pr" },
      { value: "v" },
      { value: "λ" },
      { value: "g" },
      { value: "β" },
      { value: "Gr" },
      { value: "λекв" },
      { value: "δвс" },
      { value: "εк" },
    ],
  },
];

export const ROOF_TABLES = [
  {
    heading: "Покрив - актуално състояние",
    header: roofActualStateHeader,
    data: [
      {
        data_0: [
          {
            value:
              "ТАВАН граничещ с под-покривно пространство с височина по-голяма от 30 cm.",
          },
          { value: 3971.14 },
          { value: "", formula: "calcU1" },
          { value: 3971.14 },
          { value: "", formula: "calcU2" },
          { value: 550.0 },
          { value: 1.94 },
          { value: 0.2 },
          { value: 1.6 },
          { value: "", formula: "calcVolume" },
          { value: "", formula: "calcActualHeathTransferCoefficient" },
          { value: "" },
        ],
      },
      {
        data_1: [
          { value: "ТАВАН - граничещ с външен въздух" },
          { value: 493.86 },
          { value: "-" },
          { value: "-" },
          { value: "-" },
          { value: "-" },
          { value: "-" },
          { value: "-" },
          { value: "-" },
          { value: "-" },
          { value: "", formula: "calcActualHeathTransferCoefficient2" },
          { value: "" },
        ],
      },
    ],
  },
  {
    heading: "Таван, граничещ с външен въздух",
    header: ceilingBorderingOutsideAirHeader,
    data: [
      {
        data_0: [
          { value: "хидроизолация" },
          { value: 1.0 },
          { value: 1050 },
          { value: 0.17 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "армирана замазка" },
          { value: 3 },
          { value: 1800 },
          { value: 0.45 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "топлоизолация" },
          { value: "" },
          { value: 20 },
          { value: 0.03 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "пароизолация" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_4: [
          { value: "изравнителна замазка" },
          { value: 2 },
          { value: 1800 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_5: [
          { value: "стомано-бетонова плоча" },
          { value: 15 },
          { value: 2500 },
          { value: 1.63 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_6: [
          { value: "замазка и шпакловка" },
          { value: 1 },
          { value: 1800 },
          { value: 0.41 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_7: [
          { value: "total", colSpan: 4 },
          { value: "", formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
  {
    heading: "Таванска плоча, ограждение 1",
    header: ceilingPlateHeader,
    data: [
      {
        data_0: [
          { value: "армирана замазка" },
          { value: 5 },
          { value: 1800 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "топлоизолация" },
          { value: "" },
          { value: 20 },
          { value: 0.033 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "пароизолация" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "изравнителна замазка" },
          { value: "" },
          { value: 1800 },
          { value: 0.87 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_4: [
          { value: "стомано-бетонова плоча" },
          { value: 15 },
          { value: 2500 },
          { value: 1.63 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_5: [
          { value: "замазка и шпакловка" },
          { value: 1 },
          { value: 1800 },
          { value: 0.41 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_6: [
          { value: "total", colSpan: 4 },
          { value: "", formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
  {
    heading: "Детайл на покривна конструкция - ограждение 2",
    header: roofConstructionHeader,
    data: [
      {
        data_0: [
          { value: "хидроизолация" },
          { value: 1 },
          { value: 1050 },
          { value: 0.17 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "изравнителна замазка" },
          { value: 5 },
          { value: 1800 },
          { value: 0.87 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "стомано-бетонова плоча" },
          { value: 10 },
          { value: 2 },
          { value: 1.63 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "total", colSpan: 4 },
          { value: "", formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
  {
    heading: "Помощна таблица за изчисления",
    header: roofHelpersHeader,
    data: [
      {
        data_0: [
          { value: 0.1 }, //Rsi1
          { value: 0.305883, formula: "calcU1andU2FirstStep" }, //Rsi2
          { value: 0.305883, formula: "calcU1andU2FirstStep" }, //Rse1
          { value: 0.04 }, //Rse2
          { value: 0.13 }, //Rsiw
          { value: 0.04 }, //Rsew
          { value: 21 }, //θi
          { value: -5 }, //θe
          { value: 7.4, formula: "calcθu" }, //θu
          { value: 11.09, formula: "calcθse1" }, //θse1
          { value: 1.97, formula: "calcθsi2" }, //θsi2
          { value: 0.7054 }, //Pr
          { value: 0.0000139839 }, //v
          { value: 0.025 }, //λ
          { value: 9.81 }, //g
          { value: 0.003564, formula: "calcβ" }, //β
          { value: 6675515500.64724 }, //Gr
          { value: 2.615379 }, //λекв
          { value: 1.6, formula: "calcδвс" }, //δвс
          { value: 104.7828 }, //εк
        ],
      },
    ],
  },
];

export const ENERGY_TABLES = [
  {
    heading: "Енергия(Изчисления)",
    header: energyHeader[0],
    type: "EnergyCalculations",
    data: [
      {
        data_0: [
          { value: 2021 },
          { value: "" },
          { formula: true, operation: "getEPKwhForYear" },
          { formula: true, operation: "getEPCostForYear" },
          { formula: true, operation: "getGASKwhForYear" },
          { formula: true, operation: "getGASCostForYear" },
          { formula: true, operation: "sumKWHTotal" },
          { formula: true, operation: "sumCostTotal" },
          { value: "" },
          { formula: true, operation: "sumSpecificCost" },
          { value: "" },
          { formula: true, operation: "sumReferenceCost" },
          { formula: true, operation: "getCostSquareEnergy" },
          { formula: true, operation: "getCostSquareGas" },
        ],
      },
      {
        data_1: [
          { value: 2022 },
          { value: "" },
          { formula: true, operation: "getEPKwhForYear" },
          { formula: true, operation: "getEPCostForYear" },
          { formula: true, operation: "getGASKwhForYear" },
          { formula: true, operation: "getGASCostForYear" },
          { formula: true, operation: "sumKWHTotal" },
          { formula: true, operation: "sumCostTotal" },
          { value: "" },
          { formula: true, operation: "sumSpecificCost" },
          { value: "" },
          { formula: true, operation: "sumReferenceCost" },
          { formula: true, operation: "getCostSquareEnergy" },
          { formula: true, operation: "getCostSquareGas" },
        ],
      },
      {
        data_2: [
          { value: 2023 },
          { value: "" },
          { formula: true, operation: "getEPKwhForYear" },
          { formula: true, operation: "getEPCostForYear" },
          { formula: true, operation: "getGASKwhForYear" },
          { formula: true, operation: "getGASCostForYear" },
          { formula: true, operation: "sumKWHTotal" },
          { formula: true, operation: "sumCostTotal" },
          { value: "" },
          { formula: true, operation: "sumSpecificCost" },
          { value: "" },
          { formula: true, operation: "sumReferenceCost" },
          { formula: true, operation: "getCostSquareEnergy" },
          { formula: true, operation: "getCostSquareGas" },
        ],
      },
    ],
  },
  {
    heading: "Природен газ",
    header: energyHeader[1],
    type: "EnergyData",
    data: [
      {
        data_0: [
          { value: 2021 },
          { value: "кВч" },
          { value: 749178 },
          { value: 723917 },
          { value: 700688 },
          { value: 512218 },
          { value: 54288 },
          { value: 45487 },
          { value: 49549 },
          { value: 47798 },
          { value: 42619 },
          { value: 242243 },
          { value: 448302 },
          { value: 732688 },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_1: [
          { value: 2021 },
          { value: "лв" },
          { value: 47524.38 },
          { value: 49692.11 },
          { value: 46626.14 },
          { value: 36506.98 },
          { value: 4163.69 },
          { value: 3901.34 },
          { value: 4527.42 },
          { value: 4806.76 },
          { value: 4889.45 },
          { value: 35162.36 },
          { value: 64346.27 },
          { value: 113201.27 },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_2: [
          { value: 2022 },
          { value: "кВч" },
          { value: 760716 },
          { value: 575680 },
          { value: 776850 },
          { value: 306390 },
          { value: 51919 },
          { value: 46624 },
          { value: 49739 },
          { value: 43310 },
          { value: 45678 },
          { value: 51984 },
          { value: 202052 },
          { value: 517403 },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_3: [
          { value: 2022 },
          { value: "лв" },
          { value: 146314.92 },
          { value: 94470.48 },
          { value: 131072 },
          { value: 62002.82 },
          { value: 11726.51 },
          { value: 9366.28 },
          { value: 11636.2 },
          { value: 15406.25 },
          { value: 19002.93 },
          { value: 14872.25 },
          { value: 33502.5 },
          { value: 98807.59 },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_4: [
          { value: 2023 },
          { value: "кВч" },
          { value: 515386 },
          { value: 626929 },
          { value: 162042 },
          { value: 415802 },
          { value: 50998 },
          { value: 44909 },
          { value: 46655 },
          { value: 46999 },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_5: [
          { value: 2023 },
          { value: "лв" },
          { value: 120066.23 },
          { value: 108474.15 },
          { value: 67189.29 },
          { value: 60854.34 },
          { value: 6236.69 },
          { value: 4917.84 },
          { value: 5164.54 },
          { value: 5251.31 },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { formula: true, operation: "sumPerYear" },
        ],
      },
    ],
  },
  {
    heading: "Ел. енергия",
    header: energyHeader[2],
    type: "EnergyData",
    data: [
      {
        data_0: [
          { value: 2021 },
          { value: "кВч" },
          { value: 156926 },
          { value: 134523 },
          { value: 151779 },
          { value: 129891 },
          { value: 102125 },
          { value: 102989 },
          { value: 112107 },
          { value: 113052 },
          { value: 102640 },
          { value: 148464 },
          { value: "" },
          { value: "" },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_1: [
          { value: 2021 },
          { value: "лв" },
          { value: 32400.12 },
          { value: 27863.48 },
          { value: 31388.29 },
          { value: 27083.74 },
          { value: 28863.95 },
          { value: 30634.74 },
          { value: 35567.53 },
          { value: 40979.32 },
          { value: 40480.87 },
          { value: 81636.86 },
          { value: "" },
          { value: "" },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_2: [
          { value: 2022 },
          { value: "кВч" },
          { value: 160129.44 },
          { value: 137454.94 },
          { value: 150275.64 },
          { value: 112806.78 },
          { value: 97404.94 },
          { value: 87831.16 },
          { value: 95874.78 },
          { value: 100652.54 },
          { value: 89626.4 },
          { value: 110296.98 },
          { value: 132382.16 },
          { value: 154190.24 },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_3: [
          { value: 2022 },
          { value: "лв" },
          { value: 89617.91 },
          { value: 75897.43 },
          { value: 105467.98 },
          { value: 59222.39 },
          { value: 57030.47 },
          { value: 55305.02 },
          { value: 87460.66 },
          { value: 116940.79 },
          { value: 94446.7 },
          { value: 70673.57 },
          { value: 91871.09 },
          { value: 119745.7 },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_4: [
          { value: 2023 },
          { value: "кВч" },
          { value: 151211.24 },
          { value: 142036.26 },
          { value: 141679.26 },
          { value: 123427.1 },
          { value: 112313.06 },
          { value: 92364.76 },
          { value: 103840.54 },
          { value: 105287.62 },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { formula: true, operation: "sumPerYear" },
        ],
      },
      {
        data_5: [
          { value: 2023 },
          { value: "лв" },
          { value: 73091.53 },
          { value: 68949.43 },
          { value: 56990.87 },
          { value: 47108.15 },
          { value: 39837.8 },
          { value: 31978.52 },
          { value: 36613.76 },
          { value: 37742.09 },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { formula: true, operation: "sumPerYear" },
        ],
      },
    ],
  },
];

export const BGV_TABLES = [
  {
    heading: "",
    type: "WaterHeatingData",
    header: [
      {
        header_0: [
          { value: "" },
          { value: "" },
          { value: "Нормализирано" },
          { value: "Актуално" },
        ],
      },
    ],
    data: [
      {
        data_0: [
          { value: "плътност на водата", colSpan: 1 },
          { value: "kg/m3", colSpan: 1 },
          { value: 989.855, colSpan: 1 },
          { value: 989.855, colSpan: 1 },
        ],
      },
      {
        data_1: [
          { value: "Специфичен топлинен капацитет на водата", colSpan: 1 },
          { value: "KJ/kgK", colSpan: 1 },
          { value: 4.1868, colSpan: 1 },
          { value: 4.1868, colSpan: 1 },
        ],
      },
      {
        data_2: [
          { value: "Обем на гореща вода", colSpan: 1 },
          { value: "m3/месец", colSpan: 1 },
          { formula: true, operation: "multiply", colSpan: 1 },
          { formula: true, operation: "multiply", colSpan: 1 },
        ],
      },
      {
        data_3: [
          { value: "Температура на горещата вода", colSpan: 1 },
          { value: "", colSpan: 1 },
          { value: 55, colSpan: 1 },
          { value: 55, colSpan: 1 },
        ],
      },
      {
        data_4: [
          { value: "Температура на студената вода", colSpan: 1 },
          { value: "", colSpan: 1 },
          { value: 20, colSpan: 1 },
          { value: 20, colSpan: 1 },
        ],
      },
      {
        data_5: [
          { value: "Брой стаи", colSpan: 1 },
          { value: "", colSpan: 1 },
          { value: 300, colSpan: 1 },
          { value: 300, colSpan: 1 },
        ],
      },
      {
        data_6: [
          { value: "Вода за стая на месец", colSpan: 1 },
          { value: "m3/година", colSpan: 1 },
          { formula: true, operation: "multiplyDivide", colSpan: 1 },
          { formula: true, operation: "multiplyDivide", colSpan: 1 },
        ],
      },
      {
        data_7: [
          { value: "Вода за стая на ден", colSpan: 1 },
          { value: "l/den", colSpan: 1 },
          { value: 50, colSpan: 1 },
          { value: 35, colSpan: 1 },
        ],
      },
      {
        data_8: [
          { value: "Работни дни", colSpan: 1 },
          { value: "", colSpan: 1 },
          { value: 305, colSpan: 1 },
          { value: 305, colSpan: 1 },
        ],
      },
      {
        data_9: [
          { value: "Енергия за БГВ за месец", colSpan: 1 },
          { value: "kWh", colSpan: 1 },
          { formula: true, operation: "multiplyDivideAll", colSpan: 1 },
          { formula: true, operation: "multiplyDivideAll", colSpan: 1 },
        ],
      },
      {
        data_10: [
          { value: "Отопляема площ", colSpan: 1 },
          { value: "m2", colSpan: 1 },
          { value: 28050.6, colSpan: 1 },
          { value: 28050.6, colSpan: 1 },
        ],
      },
      {
        data_11: [
          { value: "Специфичен разход", colSpan: 1 },
          { value: "l/m2a", colSpan: 1 },
          { formula: true, operation: "multiplyBy1000AndDivide", colSpan: 1 },
          { formula: true, operation: "multiplyBy1000AndDivide", colSpan: 1 },
          { formula: true, operation: "multiplyBy28000", colSpan: 1 },
        ],
      },
      {
        data_12: [
          { value: "Специфичен разход на енергия", colSpan: 1 },
          { value: "kWh/m2", colSpan: 1 },
          { formula: true, operation: "divide", colSpan: 1 },
          { formula: true, operation: "divide", colSpan: 1 },
        ],
      },
      {
        data_13: [
          { value: "Мощност БГВ", colSpan: 1 },
          { value: "W", colSpan: 1 },
          { value: 6000, colSpan: 1 },
          { value: 6000, colSpan: 1 },
        ],
      },
      {
        data_14: [
          { value: "Максимална едн. Мощност", colSpan: 1 },
          { value: "W/m2", colSpan: 1 },
          { formula: true, operation: "dividePower", colSpan: 1 },
          { formula: true, operation: "dividePower", colSpan: 1 },
        ],
      },
    ],
  },
  {
    heading: "С11 Мерки по системата за БГВ",
    type: "DescriptionOfConstructionAndAssemblyWorks",
    header: [
      {
        header_0: [
          { value: "No по ред" },
          { value: "Описание на строително-монтажни работи" },
          { value: "Ед. мярка" },
          { value: "Кол-во" },
          { value: "Ед. цена (лв.)" },
          { value: "Обща цена (лв.)" },
        ],
      },
      {
        header_1: [
          { value: "-" },
          { value: "-" },
          { value: "-" },
          { value: "-" },
          { value: "лв." },
          { value: "лв." },
        ],
      },
      {
        header_2: [{ value: "С11 Мерки по системата за БГВ", colSpan: 6 }],
      },
    ],
    data: [
      {
        data_0: [
          { value: 1, colSpan: 1 },
          {
            value:
              "Доставка и монтаж на нова трипроводна система за БГВ състоящяа се от централен бойлер, който се захранва от термопомпа, и, фитинги, връзки с ел. и ВиК инсталцията, за БГВ на отделните консуматори съгласно технически проект, по части ВиК, Ел, ОВК",
            colSpan: 1,
          },
          { value: "комплект", colSpan: 1 },
          { value: 1.0, colSpan: 1 },
          { value: 244000.0, colSpan: 1 },
          { formula: true, operation: "multiplyMoney" },
        ],
      },
      {
        data_1: [
          { value: "Общо", colSpan: 5 },
          { formula: true, operation: "sumAll", colSpan: 1 },
        ],
      },
    ],
  },
  {
    heading: "",
    type: "MeasuresForTheDHWSystem",
    data: [
      {
        data_0: [
          { value: "1", colSpan: 1 },
          { value: "Спестена крайна енергия от ел. енергия", colSpan: 1 },
          { value: "kWh", colSpan: 1 },
          { formula: true, operation: "multiplyBy02Coeff", colSpan: 1 },
          { value: 102264.095, colSpan: 1 },
        ],
      },
      {
        data_1: [
          { value: "2", colSpan: 1 },
          {
            value: "Спестена първична невъзобновяема енергия от ел. енергия",
            colSpan: 1,
          },
          { value: "kWh", colSpan: 1 },
          { formula: true, operation: "multiplyByCoeff", colSpan: 1 },
          { value: 2.3, colSpan: 1 },
        ],
      },
      {
        data_2: [
          { value: "3", colSpan: 1 },
          {
            value: "Спестена първична възобновяема енергия от ел. енергия",
            colSpan: 1,
          },
          { value: "kWh", colSpan: 1 },
          { formula: true, operation: "multiplyByCoeff", colSpan: 1 },
          { value: 0.2, colSpan: 1 },
        ],
      },
      {
        data_3: [
          { value: "4", colSpan: 1 },
          { value: "Спестени емисии от ел. енергия", colSpan: 1 },
          { value: "tCO2", colSpan: 1 },
          { formula: true, operation: "multiplyByCoeffDivide", colSpan: 1 },
          { value: 0.486, colSpan: 1 },
        ],
      },
      {
        data_4: [
          { value: "5", colSpan: 1 },
          { value: "Спестени средства/година от ел. енергия", colSpan: 1 },
          { value: "ЛВ.", colSpan: 1 },
          { formula: true, operation: "multiplyByCoeff", colSpan: 1 },
          { value: 0.4, colSpan: 1 },
        ],
      },
      {
        data_5: [
          { value: "6", colSpan: 1 },
          { value: "Спестена крайна енергия от природен газ", colSpan: 1 },
          { value: "kWh", colSpan: 1 },
          { formula: true, operation: "multiplyBy08Coeff", colSpan: 1 },
        ],
      },
      {
        data_6: [
          { value: "7", colSpan: 1 },
          {
            value: "Спестена първична невъзобновяема енергия от природен газ",
            colSpan: 1,
          },
          { value: "kWh", colSpan: 1 },
          { formula: true, operation: "multiplyByCoeffPrev", colSpan: 1 },
          { value: 1.1, colSpan: 1 },
        ],
      },
      {
        data_7: [
          { value: "8", colSpan: 1 },
          {
            value: "Спестена първична възобновяема енергия от природен газ",
            colSpan: 1,
          },
          { value: "kWh", colSpan: 1 },
          { formula: true, operation: "multiplyByCoeffPrev2", colSpan: 1 },
          { value: 0, colSpan: 1 },
        ],
      },
      {
        data_8: [
          { value: "9", colSpan: 1 },
          { value: "Спестени емисии от природен газ", colSpan: 1 },
          { value: "tCO2", colSpan: 1 },
          {
            formula: true,
            operation: "multiplyByCoeffPrevDivideBy1000",
            colSpan: 1,
          },
          { value: 0.22, colSpan: 1 },
        ],
      },
      {
        data_9: [
          { value: "10", colSpan: 1 },
          { value: "Спестени средства/година от природен газ", colSpan: 1 },
          { value: "ЛВ.", colSpan: 1 },
          { formula: true, operation: "multiplyByCoeffPrevDivide", colSpan: 1 },
          { value: 0.2, colSpan: 1 },
        ],
      },
      {
        data_10: [
          { value: "11", colSpan: 1 },
          { value: "Срок на откупуване", colSpan: 1 },
          { value: "год", colSpan: 1 },
          { formula: true, operation: "divideBySum", colSpan: 1 },
          { formula: true, operation: "sum" },
        ],
      },
    ],
  },
];

export const LIGHTING_TABLES = [
  {
    data: [
      {
        data_0: [
          {
            value: "LED 18 W",
          },
          {
            value: 18,
          },
          {
            value: 1906,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.5,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_1: [
          {
            value: "КЛЛ 36W",
          },
          {
            value: 36,
          },
          {
            value: 6815,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.5,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_2: [
          {
            value: "Луна 70W",
          },
          {
            value: 70,
          },
          {
            value: 1250,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.5,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_3: [
          {
            value: "ЛНЖ 60W",
          },
          {
            value: 60,
          },
          {
            value: 1354,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.4,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_4: [
          {
            value: "КЛЛ 26 W",
          },
          {
            value: 26,
          },
          {
            value: 2192,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.1,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
    ],
    heading: "Осветление преди ЕСМ",
    header: [
      {
        header_0: [
          {
            value: "Тип консуматор",
          },
          {
            value: "Единична инсталирана мощност",
          },
          {
            value: "Брой",
          },
          {
            value: "Обща инсталирана мощност",
          },
          {
            value: "Коефициент на едновременност",
          },
          {
            value: "Работна мощност",
          },
        ],
      },
      {
        header_1: [
          {
            value: "-",
          },
          {
            value: "W",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
        ],
      },
    ],
    type: "Consumator",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Кондиционирана площ",
          },
          {
            value: 28050.6,
          },
        ],
      },
    ],
    heading: "Кондиционирана площ",
    header: [],
    type: "ACArea",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Едновременна мощност, актуално",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "actualWorkingPowerPerArea",
          },
        ],
      },
      {
        data_1: [
          {
            value: "Едновременна мощност, нормализирано",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "normalisedWorkingPowerPerArea",
          },
        ],
      },
      {
        data_2: [
          {
            value: "Работен режим, актуално",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 45,
          },
        ],
      },
      {
        data_3: [
          {
            value: "Работен режим, нормализирано",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 10,
          },
        ],
      },
    ],
    heading:
      "Едновременна мощност и работен режим - актуално и нормализирано преди ЕСМ",
    header: [],
    type: "SimPowOpMode",
  },
  {
    data: [
      {
        data_0: [
          {
            colSpan: 6,
            value: "С12 Мерки по системите за осветление",
          },
        ],
      },
      {
        data_1: [
          {
            value: 1,
          },
          {
            value:
              "Демонтаж на стари осветителни тела и доставка и монтаж на нови LED  лампи съгласно технически проект, труд и материали, включително и Изкърпване след демонтаж на стари осветителни тела и двукратно боядисване на тавани преди монтаж на нови осветителни тела, също и монтаж в окачен таван и Събиране, пренасяне, натоварване, извозване и депониране на стари съоръжения и строителни отпадъци, съглано технически проект по част Ел, и ПУСО",
          },
          {
            value: "брой",
          },
          {
            value: 11611,
          },
          {
            value: 45,
          },
          {
            formula: true,
            operation: "sumLampMoney",
          },
        ],
      },
      {
        data_2: [
          {
            colSpan: 5,
            value: "Общо",
          },
          {
            formula: true,
            operation: "totalLampTableMoney",
          },
        ],
      },
    ],
    heading: "Описание на строително-монтажни работи след ЕСМ",
    header: [
      {
        header_0: [
          {
            value: "No по ред",
          },
          {
            value: "Описание на строително-монтажни работи",
          },
          {
            value: "Ед. мярка",
          },
          {
            value: "Кол-во",
          },
          {
            value: "Ед. Цена",
          },
          {
            value: "Обща цена",
          },
        ],
      },
      {
        header_1: [
          {
            value: "-",
          },
          {
            value: "-",
          },
          {
            value: "-",
          },
          {
            value: "-",
          },
          {
            value: "лв.",
          },
          {
            value: "лв.",
          },
        ],
      },
    ],
    type: "ConAndEnEff",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "С12 Мерки по системите за осветление",
          },
          {
            value: " ",
          },
          {
            value: " ",
          },
          {
            value: " ",
          },
        ],
      },
      {
        data_1: [
          {
            value: "Спестена крайна енергия",
          },
          {
            value: "kWh",
          },
          {
            value: 145470.412,
          },
          {
            value: "",
          },
        ],
      },
      {
        data_2: [
          {
            value: "Спестена първична невъзобновяема енергия",
          },
          {
            value: "kWh",
          },
          {
            formula: true,
            operation: "savedNonRenewableEnergy",
          },
          {
            value: 2.3,
          },
        ],
      },
      {
        data_3: [
          {
            value: "Спестена първична възобновяема енергия",
          },
          {
            value: "kWh",
          },
          {
            formula: true,
            operation: "savedRenewableEnergy",
          },
          {
            value: 0.2,
          },
        ],
      },
      {
        data_4: [
          {
            value: "Спестена първична енергия общо",
          },
          {
            value: "kWh",
          },
          {
            formula: true,
            operation: "totalEnergySaved",
          },
          {
            value: " ",
          },
        ],
      },
      {
        data_5: [
          {
            value: "Спестени емисии",
          },
          {
            value: "tCO2",
          },
          {
            formula: true,
            operation: "savedEmissions",
          },
          {
            value: 0.486,
          },
        ],
      },
      {
        data_6: [
          {
            value: "Спестени средства/година",
          },
          {
            value: "ЛВ.",
          },
          {
            formula: true,
            operation: "savedMoneyPerYear",
          },
          {
            value: 0.4,
          },
        ],
      },
      {
        data_7: [
          {
            value: "Срок на откупуване",
          },
          {
            value: "год.",
          },
          {
            formula: true,
            operation: "buyoutPeriod",
          },
          {
            value: " ",
          },
        ],
      },
    ],
    heading: "С12 Мерки по системите за осветление",
    header: [],
    type: "ConAndEnEffSub",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "LED 18 W",
          },
          {
            value: 18,
          },
          {
            value: 1906,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.33,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_1: [
          {
            value: "LED 18 W",
          },
          {
            value: 18,
          },
          {
            value: 6815,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_2: [
          {
            value: "LED 18 W",
          },
          {
            value: 18,
          },
          {
            value: 1250,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.15,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_3: [
          {
            value: "LED 18 W",
          },
          {
            value: 18,
          },
          {
            value: 1354,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.1,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_4: [
          {
            value: "LED 18 W",
          },
          {
            value: 18,
          },
          {
            value: 2192,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.1,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
    ],
    heading: "Осветление след ЕСМ",
    type: "Consumator",
    header: [
      {
        header_0: [
          {
            value: "Тип консуматор",
          },
          {
            value: "Единична инсталирана мощност",
          },
          {
            value: "Брой",
          },
          {
            value: "Обща инсталирана мощност",
          },
          {
            value: "Коефициент на едновременност",
          },
          {
            value: "Работна мощност",
          },
        ],
      },
      {
        header_1: [
          {
            value: "-",
          },
          {
            value: "W",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
        ],
      },
    ],
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Кондиционирана площ",
          },
          {
            value: 28050.6,
          },
        ],
      },
    ],
    heading: "Кондиционирана площ",
    header: [],
    type: "ACArea",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Едновременна мощност, актуално",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "actualWorkingPowerPerArea",
          },
        ],
      },
      {
        data_1: [
          {
            value: "Едновременна мощност, нормализирано",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "normalisedWorkingPowerPerArea",
          },
        ],
      },
      {
        data_2: [
          {
            value: "Работен режим, актуално",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 45,
          },
        ],
      },
      {
        data_3: [
          {
            value: "Работен режим, нормализирано",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 10,
          },
        ],
      },
    ],
    heading:
      "Едновременна мощност и работен режим - актуално и нормализирано след ЕСМ",
    workingPower: 57.88,
    header: [],
    type: "SimPowOpMode",
    coeff: 2.64,
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Пералня",
          },
          {
            value: 2000,
          },
          {
            value: 10,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_1: [
          {
            value: "Сушилня",
          },
          {
            value: 2000,
          },
          {
            value: 10,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_2: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 2000,
          },
          {
            value: 20,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.7,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_3: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 1000,
          },
          {
            value: 25,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_4: [
          {
            value: "Кафе машина",
          },
          {
            value: 3600,
          },
          {
            value: 50,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_5: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 9000,
          },
          {
            value: 70,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_6: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 8000,
          },
          {
            value: 65,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.8,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_7: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 6500,
          },
          {
            value: 90,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.7,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_8: [
          {
            value: "Пералня",
          },
          {
            value: 7000,
          },
          {
            value: 86,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.8,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_9: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 3000,
          },
          {
            value: 20,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_10: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 980,
          },
          {
            value: 35,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.8,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_11: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 350,
          },
          {
            value: 60,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_12: [
          {
            value: "Персонален компютър",
          },
          {
            value: 600,
          },
          {
            value: 120,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_13: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 11000,
          },
          {
            value: 65,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.7,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_14: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 350,
          },
          {
            value: 240,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_15: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 4000,
          },
          {
            value: 95,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.8,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_16: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 17500,
          },
          {
            value: 25,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.4,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_17: [
          {
            value: "Микровълнова фурна",
          },
          {
            value: 300,
          },
          {
            value: 25,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_18: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 9000,
          },
          {
            value: 35,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.6,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_19: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 800,
          },
          {
            value: 350,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.8,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_20: [
          {
            value: "Телевизор",
          },
          {
            value: 250,
          },
          {
            value: 55,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_21: [
          {
            value: "Медицинско оборудване",
          },
          {
            value: 150,
          },
          {
            value: 400,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.3,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
    ],
    heading: "Уреди влиящи на баланса преди ЕСМ",
    header: [
      {
        header_0: [
          {
            value: "Тип консуматор",
          },
          {
            value: "Единична инсталирана мощност",
          },
          {
            value: "Брой",
          },
          {
            value: "Обща инсталирана мощност",
          },
          {
            value: "Коефициент на едновременност",
          },
          {
            value: "Работна мощност",
          },
        ],
      },
      {
        header_1: [
          {
            value: "-",
          },
          {
            value: "W",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
        ],
      },
    ],
    type: "Consumator",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Кондиционирана площ",
          },
          {
            value: 28050.6,
          },
        ],
      },
    ],
    heading: "Кондиционирана площ",
    header: [],
    type: "ACArea",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Едновременна мощност, актуално",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "actualWorkingPowerPerArea",
          },
        ],
      },
      {
        data_1: [
          {
            value: "Едновременна мощност, нормализирано",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "normalisedWorkingPowerPerArea",
          },
        ],
      },
      {
        data_2: [
          {
            value: "Работен режим, актуално",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 35,
          },
        ],
      },
      {
        data_3: [
          {
            value: "Работен режим, нормализирано",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 35,
          },
        ],
      },
    ],
    heading:
      "Едновременна мощност и работен режим - актуално и нормализирано преди ЕСМ",
    workingPower: 3113.02,
    header: [],
    type: "SimPowOpMode",
    coeff: 8.3,
  },
  {
    data: [
      {
        data_0: [
          {
            colSpan: 6,
            value: "D13 Подмяна уреди и/или оборудване",
          },
        ],
      },
      {
        data_1: [
          {
            value: 1,
          },
          {
            value:
              "Демонтаж на стари уреди и доставка и монтаж на нови уреди съгласно технологичен проект, труд и материали, включително Събиране, пренасяне, натоварване, извозване и депониране на стари съоръжения и строителни отпадъци, съглано технически проект по част Технология Ел, и ПУСО",
          },
          {
            value: "брой",
          },
          {
            value: "",
          },
          {
            value: "",
          },
          {
            formula: true,
            operation: "sumUnitsMoney",
          },
        ],
      },
      {
        data_2: [
          {
            colSpan: 5,
            value: "Общо",
          },
          {
            formula: true,
            operation: "totalUnitsTableMoney",
          },
        ],
      },
    ],
    heading: "Описание на допустимите дейности след ЕСМ",
    header: [
      {
        header_0: [
          {
            value: "No по ред",
          },
          {
            value: "Описание на допустимите дейности",
          },
          {
            value: "Ед. мярка",
          },
          {
            value: "Кол-во",
          },
          {
            value: "Ед. Цена (без ДДС)",
          },
          {
            value: "Обща цена (без ДДС)",
          },
        ],
      },
      {
        header_1: [
          {
            value: "-",
          },
          {
            value: "-",
          },
          {
            value: "-",
          },
          {
            value: "-",
          },
          {
            value: "лв.",
          },
          {
            value: "лв.",
          },
        ],
      },
    ],
    type: "ConAndEnEff",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "D13 Подмяна уреди и/или  оборудване",
          },
          {
            value: " ",
          },
          {
            value: " ",
          },
          {
            value: " ",
          },
        ],
      },
      {
        data_1: [
          {
            value: "Спестена крайна енергия",
          },
          {
            value: "kWh",
          },
          {
            value: 0,
          },
          {
            value: "",
          },
        ],
      },
      {
        data_2: [
          {
            value: "Спестена първична невъзобновяема енергия",
          },
          {
            value: "kWh",
          },
          {
            formula: true,
            operation: "savedNonRenewableEnergy",
          },
          {
            value: 0,
          },
        ],
      },
      {
        data_3: [
          {
            value: "Спестена първична възобновяема енергия",
          },
          {
            value: "kWh",
          },
          {
            formula: true,
            operation: "savedRenewableEnergy",
          },
          {
            value: 0,
          },
        ],
      },
      {
        data_4: [
          {
            value: "Спестена първична енергия общо",
          },
          {
            value: "kWh",
          },
          {
            formula: true,
            operation: "totalEnergySaved",
          },
          {
            value: "",
          },
        ],
      },
      {
        data_5: [
          {
            value: "Спестени емисии",
          },
          {
            value: "tCO2",
          },
          {
            formula: true,
            operation: "savedEmissions",
          },
          {
            value: 0,
          },
        ],
      },
      {
        data_6: [
          {
            value: "Спестени средства/година",
          },
          {
            value: "ЛВ.",
          },
          {
            formula: true,
            operation: "savedMoneyPerYear",
          },
          {
            value: 0,
          },
        ],
      },
      {
        data_7: [
          {
            value: "Срок на откупуване",
          },
          {
            value: "год.",
          },
          {
            formula: true,
            operation: "buyoutPeriod",
          },
          {
            value: "",
          },
        ],
      },
    ],
    heading: "D13 Подмяна уреди и/или  оборудване",
    header: [],
    type: "ConAndEnEffSub",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Външно осветление",
          },
          {
            value: 60,
          },
          {
            value: 160,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.33,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_1: [
          {
            value: "АСАНСЬОР",
          },
          {
            value: 8000,
          },
          {
            value: 6,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.9,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
    ],
    heading: "Уреди невлиящи на баланса преди ЕСМ",
    header: [
      {
        header_0: [
          {
            value: "Тип консуматор",
          },
          {
            value: "Единична инсталирана мощност",
          },
          {
            value: "Брой",
          },
          {
            value: "Обща инсталирана мощност",
          },
          {
            value: "Коефициент на едновременност",
          },
          {
            value: "Работна мощност",
          },
        ],
      },
      {
        header_1: [
          {
            value: "-",
          },
          {
            value: "W",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
        ],
      },
    ],
    type: "Consumator",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Кондиционирана площ",
          },
          {
            value: 28050.6,
          },
        ],
      },
    ],
    heading: "Кондиционирана площ",
    header: [],
    type: "ACArea",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Едновременна мощност, актуално",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "actualWorkingPowerPerArea",
          },
        ],
      },
      {
        data_1: [
          {
            value: "Едновременна мощност, нормализирано",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "normalisedWorkingPowerPerArea",
          },
        ],
      },
      {
        data_2: [
          {
            value: "Работен режим, актуално",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 35,
          },
        ],
      },
      {
        data_3: [
          {
            value: "Работен режим, нормализирано",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 70,
          },
        ],
      },
    ],
    heading:
      "Едновременна мощност и работен режим - актуално и нормализирано преди ЕСМ",
    workingPower: 46.37,
    header: [],
    type: "SimPowOpMode",
    coeff: 10,
  },
  {
    data: [
      {
        data_0: [
          {
            colSpan: 6,
            value: "D14 Други мерки за ЕЕ",
          },
        ],
      },
      {
        data_1: [
          {
            value: 1,
          },
          {
            value:
              "Демонтаж на стари осветителни тела и доставка и монтаж на нови LED  лампи съгласно технически проект, труд и материали, включително и Събиране, пренасяне, натоварване, извозване и депониране на стари съоръжения и строителни отпадъци, съглано технически проект по част Ел, и ПУСО",
          },
          {
            value: "брой",
          },
          {
            value: "",
          },
          {
            value: "",
          },
          {
            formula: true,
            operation: "sumUnitsMoney",
          },
        ],
      },
      {
        data_2: [
          {
            value: 2,
          },
          {
            value:
              "Демонтаж и доставка и монтаж на нов асаснсьор със всички съпътсващи дейности до въвеждане в експлатация Събиране, пренасяне, натоварване, извозване и депониране на стари съоръжения и строителни отпадъци, съглано технически проект по част Ел, и ПУСО",
          },
          {
            value: "брой",
          },
          {
            value: "",
          },
          {
            value: "",
          },
          {
            formula: true,
            operation: "sumUnitsMoney",
          },
        ],
      },
      {
        data_3: [
          {
            colSpan: 5,
            value: "Общо",
          },
          {
            formula: true,
            operation: "totalUnitsTableMoney",
          },
        ],
      },
    ],
    heading: "Описание на допустимите стойности след ЕСМ",
    header: [
      {
        header_0: [
          {
            value: "No по ред",
          },
          {
            value: "Описание на допустимите дейности",
          },
          {
            value: "Ед. мярка",
          },
          {
            value: "Кол-во",
          },
          {
            value: "Ед. Цена (без ДДС)",
          },
          {
            value: "Обща цена (без ДДС)",
          },
        ],
      },
      {
        header_1: [
          {
            value: "-",
          },
          {
            value: "-",
          },
          {
            value: "-",
          },
          {
            value: "-",
          },
          {
            value: "лв.",
          },
          {
            value: "лв.",
          },
        ],
      },
    ],
    type: "ConAndEnEff",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Външно осветление",
          },
          {
            value: 60,
          },
          {
            value: 66,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.33,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
      {
        data_1: [
          {
            value: "АСАНСЬОР",
          },
          {
            value: 8000,
          },
          {
            value: 2,
          },
          {
            formula: true,
            operation: "totalPower",
          },
          {
            value: 0.4,
          },
          {
            formula: true,
            operation: "workingPower",
          },
        ],
      },
    ],
    heading: "Уреди невлиящи на баланса след ЕСМ",
    header: [
      {
        header_0: [
          {
            value: "Тип консуматор",
          },
          {
            value: "Единична инсталирана мощност",
          },
          {
            value: "Брой",
          },
          {
            value: "Обща инсталирана мощност",
          },
          {
            value: "Коефициент на едновременност",
          },
          {
            value: "Работна мощност",
          },
        ],
      },
      {
        header_1: [
          {
            value: "-",
          },
          {
            value: "W",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
          {
            value: "-",
          },
          {
            value: "kW",
          },
        ],
      },
    ],
    type: "Consumator",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Кондиционирана площ",
          },
          {
            value: 28050.6,
          },
        ],
      },
    ],
    heading: "Кондиционирана площ",
    header: [],
    type: "ACArea",
  },
  {
    data: [
      {
        data_0: [
          {
            value: "Едновременна мощност, актуално",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "actualWorkingPowerPerArea",
          },
        ],
      },
      {
        data_1: [
          {
            value: "Едновременна мощност, нормализирано",
          },
          {
            value: "W/m²",
          },
          {
            formula: true,
            operation: "normalisedWorkingPowerPerArea",
          },
        ],
      },
      {
        data_2: [
          {
            value: "Работен режим, актуално",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 35,
          },
        ],
      },
      {
        data_3: [
          {
            value: "Работен режим, нормализирано",
          },
          {
            value: "ч/седмично",
          },
          {
            value: 10,
          },
        ],
      },
    ],
    heading:
      "Едновременна мощност и работен режим - актуално и нормализирано след ЕСМ",
    workingPower: 7.71,
    header: [],
    type: "SimPowOpMode",
    coeff: 10,
  },
];

export const floorActualStateHeader = [
  {
    header_0: [
      { value: "Тип", rowSpan: 2 },
      { value: "Ag" },
      { value: "z" },
      { value: "p" },
      { value: "h" },
      { value: "n" },
      { value: "V" },
      { value: "Uf" },
      { value: "Uекв." },
    ],
  },
  {
    header_1: [
      { value: "m2" },
      { value: "m" },
      { value: "m" },
      { value: "m" },
      { value: "1/h" },
      { value: "m3" },
      { value: "W.m2K" },
      { value: "W.m2K" },
    ],
  },
];

export const mezzanineSlabHeader = [
  {
    header_0: [
      { value: "Междуетажна плоча" },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

export const basementWallAboveGround = [
  {
    header_0: [
      { value: "Стена на сутерена (надземна)" },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

export const floorOverPassage = [
  {
    header_0: [
      { value: "Под над проход" },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

export const floorOverHeatedAreaAboveGround = [
  {
    header_0: [
      {
        value:
          "Под върху земя на отопляем надземен етаж (без изолация по периферията)",
      },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

export const floorUnderGroundPlate = [
  {
    header_0: [
      { value: "Елементи на подова плоча Rbf" },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

export const aboveGroundWall = [
  {
    header_0: [
      { value: "Елементи на подземната стена" },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

export const underGroundWall = [
  {
    header_0: [
      { value: "Елементи на надземна стена" },
      { value: "дебелина/б/см" },
      { value: "плътност/ρ" },
      { value: "коеф.на топлопроводност λ" },
      { value: "термично съпротивление" },
    ],
  },
];

export const FLOOR_TABLES = [
  {
    heading: "Под - актуално състояние",
    header: floorActualStateHeader,
    data: [
      {
        data_0: [
          {
            value: "Под на отопляем обем над не отопляем подземен етаж",
          },
          { value: 3971.1 },
          { value: 2 },
          { value: 346 },
          { value: 0.95 },
          { value: 0.3 },
          { value: 11714.86 },
          { value: 3.01 },
          { value: 0.652 },
        ],
      },
      {
        data_1: [
          {
            value: "Под над проход",
          },
          { value: 493.9 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 3.537 },
        ],
      },
      {
        data_2: [
          {
            value:
              "Под върху земя на отопляем надземен етаж (без изолация по периферията)",
          },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
        ],
      },
      {
        data_3: [
          { value: "Kоефициент на топлопреминаване за отопляем подземен етаж" },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
        ],
      },
    ],
  },
  {
    heading: "Под на отопляем обем над не отопляем подземен етаж",
    header: mezzanineSlabHeader,
    data: [
      {
        data_0: [
          { value: "теракот" },
          { value: 0.08 },
          { value: 1800 },
          { value: 1.05 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "лепило и изравняваща замазка" },
          { value: 1.5 },
          { value: 1800 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "стоманобетонова плоча" },
          { value: 16 },
          { value: 2500 },
          { value: 1.63 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "топлоизолация: експандиран полистирен EPS" },
          { value: 0 },
          { value: 17 },
          { value: 0.038 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_4: [
          { value: "вароциментова мазилка, вътрешна" },
          { value: 0.5 },
          { value: 1800 },
          { value: 0.7 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_5: [
          { value: "total", colSpan: 4 },
          { value: 0, formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
  {
    header: basementWallAboveGround,
    data: [
      {
        data_0: [
          { value: "вътрешна мазилка" },
          { value: 2 },
          { value: 1800 },
          { value: 0.7 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "стоманобетон" },
          { value: 30 },
          { value: 1960 },
          { value: 1.63 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "топлоизолация: екструдиран полистирен XPS" },
          { value: 0 },
          { value: 30 },
          { value: 0.038 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "външна мазилка:  армирана с мрежа" },
          { value: 3 },
          { value: 1800 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_4: [
          { value: "каменна облицовка (варовик)" },
          { value: 0 },
          { value: 1700 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_5: [
          { value: "total", colSpan: 4 },
          { value: 0, formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
  {
    heading: "Под над проход",
    header: floorOverPassage,
    data: [
      {
        data_0: [
          { value: "мозайка" },
          { value: 0.01 },
          { value: 1050 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "армирана замазка" },
          { value: 0 },
          { value: 1800 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "топлоизолация" },
          { value: 0 },
          { value: 20 },
          { value: 0.03 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "пароизолация - фолио" },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_4: [
          { value: "изравнителна замазка" },
          { value: 2 },
          { value: 1800 },
          { value: 0.87 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_5: [
          { value: "стомано-бетонова плоча" },
          { value: 16 },
          { value: 2500 },
          { value: 1.63 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_6: [
          { value: "замазка и шпакловка външна" },
          { value: 2 },
          { value: 1800 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_7: [
          { value: "total", colSpan: 4 },
          { value: 0, formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
  {
    heading:
      "Под върху земя на отопляем надземен етаж (без изолация по периферията)",
    header: floorOverHeatedAreaAboveGround,
    data: [
      {
        data_0: [
          { value: "почвен слой (пясъчлив)" },
          { value: 320 },
          { value: 1800 },
          { value: 2 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "насипна сгурия (чакъл)" },
          { value: 10 },
          { value: 1000 },
          { value: 0.29 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "стоманобетонова плоча" },
          { value: 10 },
          { value: 2500 },
          { value: 1.63 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "изравнителна замазка" },
          { value: 2 },
          { value: 1050 },
          { value: 0.87 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_4: [
          { value: "лепило за теракот" },
          { value: 0.5 },
          { value: 1800 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_5: [
          { value: "теракот" },
          { value: 0.6 },
          { value: 1800 },
          { value: 1.05 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_6: [
          { value: "total", colSpan: 4 },
          { value: 0, formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
  {
    heading: "Kоефициент на топлопреминаване за отопляем подземен етаж",
    header: floorUnderGroundPlate,
    data: [
      {
        data_0: [
          { value: "гранит" },
          { value: 2.5 },
          { value: 1800 },
          { value: 1.05 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "циментова замазка (лепило)" },
          { value: 2 },
          { value: 1800 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "бетонова плоча" },
          { value: 18 },
          { value: 2400 },
          { value: 1.45 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "насипна сгурия (чакъл)" },
          { value: 10 },
          { value: 1000 },
          { value: 0.29 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_4: [
          { value: "почвен слой (пясъчлив)" },
          { value: 320 },
          { value: 1800 },
          { value: 2 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_5: [
          { value: "total", colSpan: 4 },
          { value: 0, formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
  {
    header: aboveGroundWall,
    data: [
      {
        data_0: [
          { value: "вътрешна мазилка и шпакловка" },
          { value: 1.5 },
          { value: 1050 },
          { value: 0.7 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "стена стоманобетонова" },
          { value: 25 },
          { value: 2500 },
          { value: 1.63 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "пароизолация - горещо положен битум" },
          { value: 0 },
          { value: 1050 },
          { value: 0.17 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "топлоизолация XPS (фибран)" },
          { value: 5 },
          { value: 20 },
          { value: 0.03 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_4: [
          { value: "хидроизолация - битомна самозалепваща" },
          { value: 0.8 },
          { value: 1050 },
          { value: 0.17 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_5: [
          { value: "циментова замазка (лепило)" },
          { value: 2 },
          { value: 1800 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_6: [
          { value: "каменна облицовка (варовикова)" },
          { value: 2.5 },
          { value: 1700 },
          { value: 0.93 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_7: [
          { value: "total", colSpan: 4 },
          { value: 0, formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
  {
    header: underGroundWall,
    data: [
      {
        data_0: [
          { value: "вътрешна мазилка и шпакловка" },
          { value: 1.5 },
          { value: 1050 },
          { value: 0.7 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_1: [
          { value: "стена стоманобетонова" },
          { value: 25 },
          { value: 2500 },
          { value: 1.63 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_2: [
          { value: "пароизолация - горещо положен битум" },
          { value: 0 },
          { value: 1050 },
          { value: 0.17 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_3: [
          { value: "топлоизолация XPS (фибран)" },
          { value: 5 },
          { value: 20 },
          { value: 0.03 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_4: [
          { value: "хидроизолация - битомна самозалепваща" },
          { value: 0.8 },
          { value: 1050 },
          { value: 0.17 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_5: [
          { value: "насипна сгурия (чакъл)" },
          { value: 10 },
          { value: 1000 },
          { value: 0.29 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_6: [
          { value: "почвен слой (пясъчлив)" },
          { value: 100 },
          { value: 1800 },
          { value: 2 },
          { value: 0, formula: "calcThermalConductivity" },
        ],
      },
      {
        data_7: [
          { value: "total", colSpan: 4 },
          { value: 0, formula: "calcTotalLayerResistance" },
        ],
      },
    ],
  },
];

const zonesPopulatedAreaHeader = [
  {
    header_0: [
      { value: "№", rowSpan: 3 },
      { value: "Населено място", rowSpan: 3 },
      { value: "Брой отопли-телни дни t H" },
      { value: "Денградуси DD	при:" },
      { value: "Брой отопли-телни дни t H" },
      { value: "Денградуси DD	при:" },
    ],
  },
  {
    header_1: [
      { value: "θe  ≤	12	°С", colSpan: 2 },
      { value: "θe  ≤	12	°С", colSpan: 2 },
    ],
  },
  {
    header_2: [
      { value: "θ i,H  =	19	°С", colSpan: 2 },
      { value: "θ i,H  =	17	°С", colSpan: 2 },
    ],
  },
  {
    header_3: [
      { value: "I" },
      { value: "II" },
      { value: "III" },
      { value: "IV" },
      { value: "V" },
      { value: "VI" },
    ],
  },
];

const zonesClimaticHeader = [
  {
    header_0: [
      {
        value: "Отоплителни месеци, средна месечна температура и влжност",
        colSpan: 4,
      },
      {
        value:
          "Среден интензитет на пълното слънчево греене по вертикални повърхности, W/m²",
        colSpan: 5,
      },
    ],
  },
  {
    header_1: [
      { value: "Месец" },
      { value: "Брой дни" },
      { value: "Средна Т°С" },
      { value: "Средна месечна влажност, %" },
      { value: "Север" },
      { value: "Изток" },
      { value: "Запад" },
      { value: "Юг" },
      { value: "Хоризонтално" },
    ],
  },
];

export const ZONES_TABLES = [
  {
    heading:
      "Данни за продължителността на отоплителният период и за денградусите (DD) по населени места",
    header: zonesPopulatedAreaHeader,
    data: [
      {
        data_0: [
          { value: 1 },
          { value: "Айтос" },
          { value: 175 },
          { value: 2400 },
          { value: 175 },
          { value: 2030 },
        ],
      },
      {
        data_1: [
          { value: 2 },
          { value: "Ардино" },
          { value: 180 },
          { value: 2500 },
          { value: 180 },
          { value: 2140 },
        ],
      },
      {
        data_2: [
          { value: 3 },
          { value: "Асеновград" },
          { value: 170 },
          { value: 2400 },
          { value: 167 },
          { value: 2060 },
        ],
      },
      {
        data_3: [
          { value: 4 },
          { value: "Блачик" },
          { value: 180 },
          { value: 2400 },
          { value: 180 },
          { value: 2040 },
        ],
      },
      {
        data_4: [
          { value: 5 },
          { value: "Белоградчик" },
          { value: 195 },
          { value: 3000 },
          { value: 195 },
          { value: 2610 },
        ],
      },
      {
        data_5: [
          { value: 6 },
          { value: "Берковица" },
          { value: 195 },
          { value: 3000 },
          { value: 195 },
          { value: 2610 },
        ],
      },
      {
        data_6: [
          { value: 7 },
          { value: "Благоевград" },
          { value: 170 },
          { value: 2400 },
          { value: 167 },
          { value: 2060 },
        ],
      },
      {
        data_7: [
          { value: 8 },
          { value: "Бойчиновци" },
          { value: 180 },
          { value: 2800 },
          { value: 180 },
          { value: 2440 },
        ],
      },
      {
        data_8: [
          { value: 9 },
          { value: "Ботевград" },
          { value: 190 },
          { value: 2400 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_9: [
          { value: 10 },
          { value: "Брезник" },
          { value: 210 },
          { value: 3200 },
          { value: 210 },
          { value: 2780 },
        ],
      },
      {
        data_10: [
          { value: 11 },
          { value: "Бургас" },
          { value: 170 },
          { value: 2300 },
          { value: 170 },
          { value: 1960 },
        ],
      },
      {
        data_11: [
          { value: 12 },
          { value: "Бяла" },
          { value: 175 },
          { value: 2700 },
          { value: 175 },
          { value: 2350 },
        ],
      },
      {
        data_12: [
          { value: 13 },
          { value: "Бяла Слатина" },
          { value: 175 },
          { value: 3000 },
          { value: 175 },
          { value: 2650 },
        ],
      },
      {
        data_13: [
          { value: 14 },
          { value: "Варна" },
          { value: 180 },
          { value: 2400 },
          { value: 180 },
          { value: 2040 },
        ],
      },
      {
        data_14: [
          { value: 15 },
          { value: "Велинград" },
          { value: 200 },
          { value: 3300 },
          { value: 200 },
          { value: 2860 },
        ],
      },
      {
        data_15: [
          { value: 16 },
          { value: "Видин" },
          { value: 185 },
          { value: 2800 },
          { value: 185 },
          { value: 2430 },
        ],
      },
      {
        data_16: [
          { value: 17 },
          { value: "Враца" },
          { value: 180 },
          { value: 2700 },
          { value: 180 },
          { value: 2340 },
        ],
      },
      {
        data_17: [
          { value: 18 },
          { value: "Габрово" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_18: [
          { value: 19 },
          { value: "Генерал Тошево" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_19: [
          { value: 20 },
          { value: "Годеч" },
          { value: 200 },
          { value: 3100 },
          { value: 200 },
          { value: 2700 },
        ],
      },
      {
        data_20: [
          { value: 21 },
          { value: "Горна Оряховица" },
          { value: 180 },
          { value: 2700 },
          { value: 180 },
          { value: 2340 },
        ],
      },
      {
        data_21: [
          { value: 22 },
          { value: "Гоце Делчев" },
          { value: 180 },
          { value: 2600 },
          { value: 180 },
          { value: 2240 },
        ],
      },
      {
        data_22: [
          { value: 23 },
          { value: "Горни Чифлик" },
          { value: 185 },
          { value: 2500 },
          { value: 185 },
          { value: 2130 },
        ],
      },
      {
        data_23: [
          { value: 24 },
          { value: "Грудово (Средец)" },
          { value: 175 },
          { value: 2400 },
          { value: 175 },
          { value: 2050 },
        ],
      },
      {
        data_24: [
          { value: 25 },
          { value: "Девин" },
          { value: 210 },
          { value: 3000 },
          { value: 210 },
          { value: 2580 },
        ],
      },
      {
        data_25: [
          { value: 26 },
          { value: "Димитровград" },
          { value: 175 },
          { value: 2400 },
          { value: 175 },
          { value: 2050 },
        ],
      },
      {
        data_26: [
          { value: 27 },
          { value: "Добрич" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_27: [
          { value: 28 },
          { value: "Дряново" },
          { value: 185 },
          { value: 2700 },
          { value: 185 },
          { value: 2330 },
        ],
      },
      {
        data_28: [
          { value: 29 },
          { value: "Дулово" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_29: [
          { value: 30 },
          { value: "Дупница" },
          { value: 190 },
          { value: 2700 },
          { value: 190 },
          { value: 2320 },
        ],
      },
      {
        data_30: [
          { value: 31 },
          { value: "Елена" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_31: [
          { value: 32 },
          { value: "Елин Пелин" },
          { value: 195 },
          { value: 2900 },
          { value: 195 },
          { value: 2510 },
        ],
      },
      {
        data_32: [
          { value: 33 },
          { value: "Елхово" },
          { value: 175 },
          { value: 2400 },
          { value: 175 },
          { value: 2050 },
        ],
      },
      {
        data_33: [
          { value: 34 },
          { value: "Златарица" },
          { value: 185 },
          { value: 2700 },
          { value: 185 },
          { value: 2430 },
        ],
      },
      {
        data_34: [
          { value: 35 },
          { value: "Ивайловград" },
          { value: 170 },
          { value: 2300 },
          { value: 170 },
          { value: 1960 },
        ],
      },
      {
        data_35: [
          { value: 36 },
          { value: "Исперих" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_36: [
          { value: 37 },
          { value: "Ихтиман" },
          { value: 195 },
          { value: 3400 },
          { value: 195 },
          { value: 3100 },
        ],
      },
      {
        data_37: [
          { value: 38 },
          { value: "Казанлък" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_38: [
          { value: 39 },
          { value: "Карлово" },
          { value: 180 },
          { value: 2600 },
          { value: 180 },
          { value: 2240 },
        ],
      },
      {
        data_39: [
          { value: 40 },
          { value: "Карнобат" },
          { value: 175 },
          { value: 2400 },
          { value: 175 },
          { value: 2050 },
        ],
      },
      {
        data_40: [
          { value: 41 },
          { value: "Кнежа" },
          { value: 190 },
          { value: 3000 },
          { value: 190 },
          { value: 2620 },
        ],
      },
      {
        data_41: [
          { value: 42 },
          { value: "Копривщица" },
          { value: 250 },
          { value: 4000 },
          { value: 250 },
          { value: 3500 },
        ],
      },
      {
        data_42: [
          { value: 43 },
          { value: "Котел" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_43: [
          { value: 44 },
          { value: "Крумовград" },
          { value: 175 },
          { value: 2400 },
          { value: 175 },
          { value: 2050 },
        ],
      },
      {
        data_44: [
          { value: 45 },
          { value: "Кубрат" },
          { value: 185 },
          { value: 2800 },
          { value: 185 },
          { value: 2430 },
        ],
      },
      {
        data_45: [
          { value: 46 },
          { value: "Кула" },
          { value: 190 },
          { value: 3000 },
          { value: 190 },
          { value: 2620 },
        ],
      },
      {
        data_46: [
          { value: 47 },
          { value: "Кърджали" },
          { value: 175 },
          { value: 2400 },
          { value: 175 },
          { value: 2050 },
        ],
      },
      {
        data_47: [
          { value: 48 },
          { value: "Кюстендил" },
          { value: 190 },
          { value: 2700 },
          { value: 190 },
          { value: 2320 },
        ],
      },
      {
        data_48: [
          { value: 49 },
          { value: "Ловеч" },
          { value: 180 },
          { value: 2700 },
          { value: 180 },
          { value: 2340 },
        ],
      },
      {
        data_49: [
          { value: 50 },
          { value: "Лом" },
          { value: 180 },
          { value: 2700 },
          { value: 180 },
          { value: 2340 },
        ],
      },
      {
        data_50: [
          { value: 51 },
          { value: "Луковит" },
          { value: 180 },
          { value: 2600 },
          { value: 180 },
          { value: 2240 },
        ],
      },
      {
        data_51: [
          { value: 52 },
          { value: "Мадан" },
          { value: 210 },
          { value: 3000 },
          { value: 210 },
          { value: 2580 },
        ],
      },
      {
        data_52: [
          { value: 53 },
          { value: "Малко Търново" },
          { value: 170 },
          { value: 2200 },
          { value: 170 },
          { value: 1860 },
        ],
      },
      {
        data_53: [
          { value: 54 },
          { value: "Момчилград" },
          { value: 180 },
          { value: 2500 },
          { value: 180 },
          { value: 2140 },
        ],
      },
      {
        data_54: [
          { value: 55 },
          { value: "Монтана" },
          { value: 180 },
          { value: 2800 },
          { value: 180 },
          { value: 2440 },
        ],
      },
      {
        data_55: [
          { value: 56 },
          { value: "Никопол" },
          { value: 175 },
          { value: 2600 },
          { value: 175 },
          { value: 2250 },
        ],
      },
      {
        data_56: [
          { value: 57 },
          { value: "Нова Загора" },
          { value: 175 },
          { value: 2400 },
          { value: 175 },
          { value: 2050 },
        ],
      },
      {
        data_57: [
          { value: 58 },
          { value: "Нови Пазар" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_58: [
          { value: 59 },
          { value: "Омуртаг" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_59: [
          { value: 60 },
          { value: "Оряхово" },
          { value: 175 },
          { value: 2600 },
          { value: 175 },
          { value: 2250 },
        ],
      },
      {
        data_60: [
          { value: 61 },
          { value: "Павликени" },
          { value: 180 },
          { value: 2700 },
          { value: 180 },
          { value: 2340 },
        ],
      },
      {
        data_61: [
          { value: 62 },
          { value: "Пазарджик" },
          { value: 175 },
          { value: 2500 },
          { value: 175 },
          { value: 2150 },
        ],
      },
      {
        data_62: [
          { value: 63 },
          { value: "Панагюрище" },
          { value: 195 },
          { value: 3000 },
          { value: 195 },
          { value: 2610 },
        ],
      },
      {
        data_63: [
          { value: 64 },
          { value: "Перник" },
          { value: 195 },
          { value: 3000 },
          { value: 195 },
          { value: 2610 },
        ],
      },
      {
        data_64: [
          { value: 65 },
          { value: "Петрич" },
          { value: 155 },
          { value: 2000 },
          { value: 155 },
          { value: 1690 },
        ],
      },
      {
        data_65: [
          { value: 66 },
          { value: "Пещера" },
          { value: 165 },
          { value: 3000 },
          { value: 165 },
          { value: 2270 },
        ],
      },
      {
        data_66: [
          { value: 67 },
          { value: "Пирдоп" },
          { value: 180 },
          { value: 3100 },
          { value: 180 },
          { value: 2740 },
        ],
      },
      {
        data_67: [
          { value: 68 },
          { value: "Плевен" },
          { value: 180 },
          { value: 2700 },
          { value: 180 },
          { value: 2340 },
        ],
      },
      {
        data_68: [
          { value: 69 },
          { value: "Пловдив" },
          { value: 175 },
          { value: 2500 },
          { value: 175 },
          { value: 2150 },
        ],
      },
      {
        data_69: [
          { value: 70 },
          { value: "Поморие" },
          { value: 170 },
          { value: 2300 },
          { value: 170 },
          { value: 1960 },
        ],
      },
      {
        data_70: [
          { value: 71 },
          { value: "Попово" },
          { value: 185 },
          { value: 2800 },
          { value: 185 },
          { value: 2430 },
        ],
      },
      {
        data_71: [
          { value: 72 },
          { value: "Преслав" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_72: [
          { value: 73 },
          { value: "Провадия" },
          { value: 180 },
          { value: 2600 },
          { value: 180 },
          { value: 2240 },
        ],
      },
      {
        data_73: [
          { value: 74 },
          { value: "Първомай" },
          { value: 180 },
          { value: 2600 },
          { value: 180 },
          { value: 2240 },
        ],
      },
      {
        data_74: [
          { value: 75 },
          { value: "Радомир" },
          { value: 185 },
          { value: 3000 },
          { value: 185 },
          { value: 2630 },
        ],
      },
      {
        data_75: [
          { value: 76 },
          { value: "Разград" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_76: [
          { value: 77 },
          { value: "Разлог" },
          { value: 220 },
          { value: 3300 },
          { value: 220 },
          { value: 2860 },
        ],
      },
      {
        data_77: [
          { value: 78 },
          { value: "Русе" },
          { value: 175 },
          { value: 2600 },
          { value: 175 },
          { value: 2250 },
        ],
      },
      {
        data_78: [
          { value: 79 },
          { value: "Самоков" },
          { value: 220 },
          { value: 3300 },
          { value: 220 },
          { value: 2860 },
        ],
      },
      {
        data_79: [
          { value: 80 },
          { value: "Сандански" },
          { value: 160 },
          { value: 2100 },
          { value: 160 },
          { value: 1780 },
        ],
      },
      {
        data_80: [
          { value: 81 },
          { value: "Свиленград" },
          { value: 165 },
          { value: 2200 },
          { value: 165 },
          { value: 1870 },
        ],
      },
      {
        data_81: [
          { value: 82 },
          { value: "Свищов" },
          { value: 175 },
          { value: 2600 },
          { value: 175 },
          { value: 2250 },
        ],
      },
      {
        data_82: [
          { value: 83 },
          { value: "Своге" },
          { value: 195 },
          { value: 3000 },
          { value: 195 },
          { value: 2610 },
        ],
      },
      {
        data_83: [
          { value: 84 },
          { value: "Севлиево" },
          { value: 185 },
          { value: 2800 },
          { value: 185 },
          { value: 2430 },
        ],
      },
      {
        data_84: [
          { value: 85 },
          { value: "Силистра" },
          { value: 180 },
          { value: 2700 },
          { value: 180 },
          { value: 2340 },
        ],
      },
      {
        data_85: [
          { value: 86 },
          { value: "Сливен" },
          { value: 175 },
          { value: 2400 },
          { value: 175 },
          { value: 2050 },
        ],
      },
      {
        data_86: [
          { value: 87 },
          { value: "Сливница" },
          { value: 200 },
          { value: 3100 },
          { value: 200 },
          { value: 2700 },
        ],
      },
      {
        data_87: [
          { value: 88 },
          { value: "Смолян" },
          { value: 240 },
          { value: 3600 },
          { value: 240 },
          { value: 3120 },
        ],
      },
      {
        data_88: [
          { value: 89 },
          { value: "София" },
          { value: 190 },
          { value: 2900 },
          { value: 190 },
          { value: 2520 },
        ],
      },
      {
        data_89: [
          { value: 90 },
          { value: "Созопол" },
          { value: 160 },
          { value: 2100 },
          { value: 160 },
          { value: 2780 },
        ],
      },
      {
        data_90: [
          { value: 91 },
          { value: "Стара Загора" },
          { value: 170 },
          { value: 2300 },
          { value: 170 },
          { value: 1960 },
        ],
      },
      {
        data_91: [
          { value: 92 },
          { value: "Тервел" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_92: [
          { value: 93 },
          { value: "Тетевен" },
          { value: 195 },
          { value: 3000 },
          { value: 195 },
          { value: 2610 },
        ],
      },
      {
        data_93: [
          { value: 94 },
          { value: "Тополовград" },
          { value: 170 },
          { value: 2400 },
          { value: 170 },
          { value: 2600 },
        ],
      },
      {
        data_94: [
          { value: 95 },
          { value: "Троян" },
          { value: 195 },
          { value: 3000 },
          { value: 195 },
          { value: 2610 },
        ],
      },
      {
        data_95: [
          { value: 96 },
          { value: "Трън" },
          { value: 220 },
          { value: 3500 },
          { value: 220 },
          { value: 3060 },
        ],
      },
      {
        data_96: [
          { value: 97 },
          { value: "Трявна" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_97: [
          { value: 98 },
          { value: "Тутракан" },
          { value: 180 },
          { value: 2700 },
          { value: 180 },
          { value: 2340 },
        ],
      },
      {
        data_98: [
          { value: 99 },
          { value: "Търговище" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_99: [
          { value: 100 },
          { value: "Велико Търново" },
          { value: 180 },
          { value: 2600 },
          { value: 180 },
          { value: 2240 },
        ],
      },
      {
        data_100: [
          { value: 101 },
          { value: "Харманли" },
          { value: 170 },
          { value: 2300 },
          { value: 170 },
          { value: 1960 },
        ],
      },
      {
        data_101: [
          { value: 102 },
          { value: "Хасково" },
          { value: 175 },
          { value: 2300 },
          { value: 175 },
          { value: 1950 },
        ],
      },
      {
        data_102: [
          { value: 103 },
          { value: "Хисаря" },
          { value: 175 },
          { value: 2500 },
          { value: 175 },
          { value: 2150 },
        ],
      },
      {
        data_103: [
          { value: 104 },
          { value: "Царево" },
          { value: 160 },
          { value: 2100 },
          { value: 160 },
          { value: 1780 },
        ],
      },
      {
        data_104: [
          { value: 105 },
          { value: "Чепеларе" },
          { value: 250 },
          { value: 3800 },
          { value: 250 },
          { value: 3300 },
        ],
      },
      {
        data_105: [
          { value: 106 },
          { value: "Чирпан" },
          { value: 180 },
          { value: 2600 },
          { value: 180 },
          { value: 2240 },
        ],
      },
      {
        data_106: [
          { value: 107 },
          { value: "Шумен" },
          { value: 190 },
          { value: 2800 },
          { value: 190 },
          { value: 2420 },
        ],
      },
      {
        data_107: [
          { value: 108 },
          { value: "Ямбол" },
          { value: 180 },
          { value: 2500 },
          { value: 180 },
          { value: 2140 },
        ],
      },
    ],
    type: "PopulatedAreas",
  },
  {
    header: zonesClimaticHeader,
    data: [
      {
        data_0: [
          { value: "I" },
          { value: 31 },
          { value: 1.9 },
          { value: 71 },
          { value: 22.9 },
          { value: 40.4 },
          { value: 40.4 },
          { value: 72.7 },
          { value: 50.1 },
        ],
      },
      {
        data_1: [
          { value: "II" },
          { value: 28 },
          { value: 2.7 },
          { value: 72 },
          { value: 34.8 },
          { value: 59.2 },
          { value: 59.2 },
          { value: 95.9 },
          { value: 81.9 },
        ],
      },
      {
        data_2: [
          { value: "III" },
          { value: 31 },
          { value: 5.1 },
          { value: 73 },
          { value: 47.7 },
          { value: 68.4 },
          { value: 68.4 },
          { value: 87.5 },
          { value: 109.0 },
        ],
      },
      {
        data_3: [
          { value: "IV" },
          { value: 30 },
          { value: 10.2 },
          { value: 69 },
          { value: 63.6 },
          { value: 85.5 },
          { value: 85.5 },
          { value: 83.7 },
          { value: 149.7 },
        ],
      },
      {
        data_4: [
          { value: "V" },
          { value: 31 },
          { value: 15.6 },
          { value: 78 },
          { value: 77.7 },
          { value: 108.3 },
          { value: 108.3 },
          { value: 90.5 },
          { value: 194.1 },
        ],
      },
      {
        data_5: [
          { value: "VI" },
          { value: 30 },
          { value: 20.2 },
          { value: 75 },
          { value: 84.3 },
          { value: 122.0 },
          { value: 122.0 },
          { value: 97.4 },
          { value: 218.0 },
        ],
      },
      {
        data_6: [
          { value: "VII" },
          { value: 31 },
          { value: 23.7 },
          { value: 69 },
          { value: 83.7 },
          { value: 126.4 },
          { value: 126.4 },
          { value: 104.9 },
          { value: 226.5 },
        ],
      },
      {
        data_7: [
          { value: "VIII" },
          { value: 31 },
          { value: 22.3 },
          { value: 70 },
          { value: 75.9 },
          { value: 126.2 },
          { value: 126.2 },
          { value: 126.5 },
          { value: 219.7 },
        ],
      },
      {
        data_8: [
          { value: "IX" },
          { value: 30 },
          { value: 19.0 },
          { value: 74 },
          { value: 60.7 },
          { value: 104.5 },
          { value: 104.5 },
          { value: 133.7 },
          { value: 166.5 },
        ],
      },
      {
        data_9: [
          { value: "X" },
          { value: 31 },
          { value: 13.8 },
          { value: 77 },
          { value: 40.9 },
          { value: 68.0 },
          { value: 68.0 },
          { value: 104.3 },
          { value: 97.2 },
        ],
      },
      {
        data_10: [
          { value: "XI" },
          { value: 30 },
          { value: 9.0 },
          { value: 83 },
          { value: 26.1 },
          { value: 45.8 },
          { value: 45.8 },
          { value: 80.6 },
          { value: 58.3 },
        ],
      },
      {
        data_11: [
          { value: "XII" },
          { value: 31 },
          { value: 4.3 },
          { value: 74 },
          { value: 20.2 },
          { value: 36.6 },
          { value: 36.6 },
          { value: 67.8 },
          { value: 43.9 },
        ],
      },
      {
        data_startHeating: [
          { value: "Начало отоплителен сезон", colSpan: 3 },
          { value: 21 },
        ],
      },
      {
        data_endHeating: [
          { value: "Край отполителен сезон", colSpan: 3 },
          { value: 25 },
        ],
      },
      {
        data_temperature: [
          { value: "Изчислителна външна температура °С", colSpan: 3 },
          { value: 15 },
        ],
      },
      {
        data_dengradusi: [
          {
            value: "Денградуси при средна температура на сградата 19°С",
            colSpan: 3,
          },
          { value: 2800 },
        ],
      },
    ],
    heading: "СЕВЕРНО ЧЕРНОМОРИЕ",
    type: "ClimaticZones",
  },
];
