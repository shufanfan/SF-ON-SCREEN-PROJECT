export default function MentalHealthCondition() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <iframe
              width="100%"
              height="1069"
              src="https://observablehq.com/embed/408a2ec7d52b9812@170?cells=svg%2Csvg2"
            ></iframe>
          </div>
          <div className="col-md-4">
            <h4 style={{ fontStyle: "italic" }}>
              How many people stay silent about mental health challenges?
            </h4>
            <h4 style={{ fontStyle: "italic" }}>
              {" "}
              How many severe mental health issues are being hidden?
            </h4>

            <ul
              id="part1-insights"
              style={{
                display: "block",
                fontStyle: "italic",
                fontSize: "0.9em",
                marginTop: "30px",
              }}
            >
              <li>
                A significant proportion <b>(50.20%)</b> of individuals with
                mental health challenges do not report their conditions.
              </li>
              <li>
                Among those who do not report, over <b>64%</b> exhibit medium to
                high severity levels.
              </li>
            </ul>
            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p>
                The hesitance to open up about mental health struggles,
                especially for those grappling with severe challenges, reveals a
                crucial gap in accessing timely help. This highlights the
                potential of alternative pathways for connection and
                relief—recreational activities like movie-watching could offer
                not just comfort but also a meaningful boost to mental
                well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
