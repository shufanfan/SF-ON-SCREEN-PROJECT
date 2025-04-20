import PartOne from "./partOne";
import PartTwo from "./partTwo";
import PartThree from "./partThree";
import PartFour from "./partFour";
import EndEnd from "./endEnd";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";

export default function Components() {
  return (
    <div>
      <TOC />
      <Routes>
        <Route path="partOne" element={<PartOne />} />
        <Route path="partTwo" element={<PartTwo />} />
        <Route path="partThree" element={<PartThree />} />
        <Route path="partFour" element={<PartFour />} />
        <Route path="EndingContinuing" element={<EndEnd />} />
      </Routes>
    </div>
  );
}
