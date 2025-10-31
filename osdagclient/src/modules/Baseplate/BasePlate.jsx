/* eslint-disable no-unused-vars */
import React from "react";
import { EngineeringModule } from "../shared/components/EngineeringModule";
import FinPlateOutputDock from "./components/FinPlateOutputDock";
import { menuItems } from "../shared/utils/moduleUtils";
import { finPlateConfig } from "./configs/BasePlateConfig";
import { UI_STRINGS } from './configs/UIStrings';

function BasePlateConnection() {
  return (
    <EngineeringModule
      moduleConfig={finPlateConfig}
      OutputDockComponent={FinPlateOutputDock}
      menuItems={menuItems}
      title={UI_STRINGS.CONNECTING_MEMBERS}
    />
  );
}

export default BasePlateConnection;
