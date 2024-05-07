import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddHarvestData from "./HISupervisor/addharvest";
import ViewHarvest from "./HISupervisor/viewHarvestData";
import EditHarvest from "./HISupervisor/edit";
import DashboardHISupervisor from "./HISupervisor/dashboard";

import UpdateHarvest from "./HarvestAndInventoryManager/updateHarvest";
import ViewAcceptedData from "./HarvestAndInventoryManager/viewAcceptHarvestData";
import EditHarvestPageManager from "./HarvestAndInventoryManager/editHarvestData";
import ViewRejectData from "./HarvestAndInventoryManager/viewRejectedData";
import EditRejectedHarvestPageManager from "./HarvestAndInventoryManager/editReject";
import AddDeliveryData from "./HarvestAndInventoryManager/addDelivereddata";
import ViewDelivery from './HarvestAndInventoryManager/viewDeliveryData';
import EditDeliveryData from "./HarvestAndInventoryManager/editDeliveryData";
import InventoryDifference from "./HarvestAndInventoryManager/inventory";
import HIDashboard from "./HarvestAndInventoryManager/dashboard";
import PickersTable from "./HarvestAndInventoryManager/pickerdetails";

import HIWelcomePage from "./HIWelcome/welcomepage";
import HIViewInvwntory from "./HIOtherManagers/viewIenventory";
import LayoutWithHeader from "./HarvestAndInventoryManager/LayoutWithHader";
import LayoutWithHeaderHISupervisor from "./HISupervisor/LayoutWithHader";
import DifferenceQuantity from "./HIOtherManagers/viewIenventory";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/AddHarvestData" element={<LayoutWithHeaderHISupervisor><AddHarvestData /></LayoutWithHeaderHISupervisor>} />
      <Route path="/ViewHarvest" element={<LayoutWithHeaderHISupervisor><ViewHarvest /></LayoutWithHeaderHISupervisor>} />
      <Route path="/editHarvest/:id" element={<LayoutWithHeaderHISupervisor><EditHarvest /></LayoutWithHeaderHISupervisor>} />
      <Route path="/DashboardHISupervisor" element={<LayoutWithHeaderHISupervisor><DashboardHISupervisor /></LayoutWithHeaderHISupervisor>} />


        <Route path="/UpdateHarvest" element={<LayoutWithHeader><UpdateHarvest /></LayoutWithHeader>} />
        <Route path="/ViewAcceptedData" element={<LayoutWithHeader><ViewAcceptedData /></LayoutWithHeader>} />
        <Route path="/EditHarvestPageManager/:id" element={<LayoutWithHeader><EditHarvestPageManager /></LayoutWithHeader>} />
        <Route path="/ViewRejectData" element={<LayoutWithHeader><ViewRejectData /></LayoutWithHeader>} />
        <Route path="/EditRejectedHarvestPageManager/:id" element={<LayoutWithHeader><EditRejectedHarvestPageManager /></LayoutWithHeader>} />
        <Route path="/AddDeliveryData" element={<LayoutWithHeader><AddDeliveryData /></LayoutWithHeader>} />
        <Route path="/viewdelivery" element={<LayoutWithHeader><ViewDelivery /></LayoutWithHeader>} />
        <Route path="/EditDeliveryData/:id" element={<LayoutWithHeader><EditDeliveryData /></LayoutWithHeader>} />
        <Route path="/InventoryDifference" element={<LayoutWithHeader><InventoryDifference /></LayoutWithHeader>} />
        <Route path="/dashboard" element={<LayoutWithHeader><HIDashboard /></LayoutWithHeader>} />
        <Route path="/PickersTable" element={<LayoutWithHeader><PickersTable /></LayoutWithHeader>} />

        <Route path="/HIWelcomePage" element={<HIWelcomePage />} />
        <Route path="/HIViewInvwntory" element={<HIViewInvwntory />} />
        <Route path="/DifferenceQuantity" element={<DifferenceQuantity />} />


      </Routes>
    </Router>
  );
}

export default App;
