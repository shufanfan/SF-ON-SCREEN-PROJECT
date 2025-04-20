import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <div
      style={{
        border: "4px dashed #a5d6a7",
        borderRadius: "8px",
        padding: "10px",
        display: "inline-block",
        backgroundColor: "#f0f8ff",
      }}
    >
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            href="#/Components/partOne"
            className={`nav-link ${
              pathname.includes("partOne") ? "active" : ""
            }`}
          >
            📖 Part One
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#/Components/partTwo"
            className={`nav-link ${
              pathname.includes("partTwo") ? "active" : ""
            }`}
          >
            🔍 Part Two
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#/Components/partThree"
            className={`nav-link ${
              pathname.includes("partThree") ? "active" : ""
            }`}
          >
            🎬 Part Three
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#/Components/partFour"
            className={`nav-link ${
              pathname.includes("partFour") ? "active" : ""
            }`}
          >
            🌐 Part Four
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#/Components/EndingContinuing"
            className={`nav-link ${
              pathname.includes("EndingContinuing") ? "active" : ""
            }`}
          >
            📜Conclusion & 🌟Acknowledgments & 🌊Development Process &
            🔁Feedback Incorporation
          </a>
        </li>
      </ul>
    </div>
  );
}
