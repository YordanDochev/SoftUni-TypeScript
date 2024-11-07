import { useState } from "react";
import {
  Windows,
  Walls,
  Roof,
  Summary,
  Lighting,
  Energy,
  Zones,
  Floor,
  ECM,
} from "../Tables/";
import { Tabs } from "../Tabs/Tabs";
import { useSelector } from "react-redux";
import { BGV } from "../Tables/BGV";

const Calculator = () => {
  const tables = useSelector((state) => {
    return state?.tables || {};
  });

  const tabs = [
    "Прозорци",
    "Стени",
    "Покрив",
    "Под",
    "БГВ",
    "Осветление и уреди",
    "ЕСМ",
    "Енергия",
    "Пари",
    "Данни",
    "Зони",
  ];
  const [currentTab, setCurrentTab] = useState(0);

  if (!tables) {
    return null;
  }

  return (
    <div className="border rounded-lg p-4 m-0 bg-white">
      <Tabs tabs={tabs} selected={currentTab} selectTab={setCurrentTab} />
      {tabs[currentTab] === "OEE" && <Summary tables={tables?.summary} />}
      {tabs[currentTab] === "Прозорци" && (
        <Windows
          tables={
            Array.isArray(tables?.windows) ? tables.windows : [tables.windows]
          }
        />
      )}
      {tabs[currentTab] === "Стени" && (
        <Walls
          tables={Array.isArray(tables?.walls) ? tables.walls : [tables.walls]}
        />
      )}
      {tabs[currentTab] === "Покрив" && <Roof tables={tables?.roof} />}
      {tabs[currentTab] === "Осветление и уреди" && (
        <Lighting tables={tables?.lighting} />
      )}
      {tabs[currentTab] === "Енергия" && (
        <Energy
          tables={
            Array.isArray(tables?.energy) ? tables.energy : [tables.energy]
          }
        />
      )}
      {tabs[currentTab] === "БГВ" && <BGV tables={tables?.bgv} />}
      {tabs[currentTab] === "Зони" && (
        <Zones
          tables={Array.isArray(tables?.zones) ? tables.zones : [tables.zones]}
        />
      )}
      {tabs[currentTab] === "ЕСМ" && (
        <ECM
          tables={Array.isArray(tables?.ecm) ? tables.ecm : [tables.ecm]}
        />
      )}
      {tabs[currentTab] === "Под" && <Floor tables={tables?.floor} />}
    </div>
  );
};

export default Calculator;
