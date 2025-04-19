import MentalHealthCondition from "./mentalHealthCondition";
import PersonalityTraits from "./persoanlityTraits";
import GenreConnection from "./genreConnection";
import AudiencePrefer from "./audiencePrefer";
import EndEnd from "./endEnd";
import SourceCode from "./sourceCode";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";

export default function Components() {
  return (
    <div>
      <TOC />
      <Routes>
        <Route path="mentalHealth" element={<MentalHealthCondition />} />
        <Route path="Personality" element={<PersonalityTraits />} />
        <Route path="IMDB1000GenreConnection" element={<GenreConnection />} />
        <Route path="IMDB1000TopRating" element={<AudiencePrefer />} />
        <Route path="EndingContinuing" element={<EndEnd />} />
        <Route path="sourceCode" element={<SourceCode />} />
      </Routes>
    </div>
  );
}
