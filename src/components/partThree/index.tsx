export default function PartThree() {
  return (
    <div style={{ marginTop: "40px" }}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <img
              src="/images/SVG.PNG"
              alt="pie chart"
              style={{
                width: "100%",
              }}
            />
          </div>
          <div className="col-md-5">
            <h3 style={{ fontStyle: "italic" }}>
              Stories in the Streets: Connecting Iconic Places and Memorable
              Films
            </h3>
            <h4 style={{ fontStyle: "italic" }}>
              How Good Are They? IMDb Ratings Overview
            </h4>
            <p>
              IMDb uses a 10-point user rating system to evaluate films and TV
              shows. Although IMDb does not officially define what constitutes a
              “good” or “bad” score, general patterns have emerged based on how
              viewers rate content.
            </p>
            <p>
              According to user consensus and the typical distribution of
              ratings, the following guideline is commonly used:
            </p>

            <ul
              style={{
                display: "block",
                fontStyle: "italic",
                fontSize: "0.9em",
                marginTop: "30px",
              }}
            >
              <li>
                8.5 – 10.0: Masterpieces — widely acclaimed and often considered
                cinematic classics.
              </li>
              <li>
                7.0 – 8.4: Good to very good — well-received by audiences and
                generally worth watching.
              </li>
              <li>
                6.0 – 6.9: Average or mixed reviews — may appeal to some viewers
                but often have notable flaws.
              </li>
              <li>
                5.0 – 5.9: Below average — less favorable reception, with
                criticism of plot, acting, or production.
              </li>
              <li>
                Below 5.0: Poor — generally not recommended due to negative
                feedback.
              </li>
              <li>0: Unrated.</li>
            </ul>
            <div
              style={{
                marginTop: "-10px",
              }}
            >
              <p>
                A rating of 7.0 or higher is typically considered a “good” score
                and suggests that the film or show was positively received by
                the majority of IMDb users.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <div className="container mt-4">
          <div>
            <div>
              <h3 style={{ fontStyle: "italic" }}>
                Which productions have the most filming locations in San
                Francisco?
              </h3>
              <p>
                <b>
                  Please enter the number(1-312) of works you want to check in
                  the box below:
                </b>
              </p>
              <iframe
                width="100%"
                height="400"
                style={{ overflowY: "scroll" }}
                src="https://observablehq.com/embed/534e7aa0b66ee09c@1005?cells=viewof+inputNumber1%2Cbartchart0&banner=false"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "10px" }}>
        <div className="container mt-4">
          <div>
            <div>
              <h3 style={{ fontStyle: "italic" }}>
                What are the Top-Rated Productions Filmed in San Francisco?
              </h3>
              <p>
                <b>
                  Please enter the number(1-312) of works you want to check in
                  the box below:
                </b>
              </p>
              <iframe
                width="100%"
                height="400"
                style={{ overflowY: "scroll" }}
                src="https://observablehq.com/embed/534e7aa0b66ee09c@1006?cells=viewof+inputNumber%2Cbarchart&banner=false"
              ></iframe>
              <p>
                Some productions don’t just pass through San Francisco—they live
                in it. As seen in the "The Most Extensively Filmed Productions
                in San Francisco" chart, television series like Looking, Chance,
                and Murder in the First were filmed across dozens—even over a
                hundred—locations throughout the city. These are not fleeting
                appearances, but immersive engagements with San Francisco’s
                urban fabric. Interestingly, these extensively filmed works tend
                to maintain solid IMDb scores, mostly above 7.0, suggesting that
                high location usage and narrative quality are not mutually
                exclusive—in fact, they may enhance each other.
              </p>
              <p>
                On the other hand, the "IMDb Top Rating works shot in San
                Francisco" chart reveals that the highest-rated works filmed in
                San Francisco—such as Forrest Gump, The Matrix, and This Is
                Us—typically used only one or a fewlocations. These titles may
                have captured iconic landmarks or singular narrative moments,
                but their relationship with the city is more symbolic than
                immersive. This contrast points to two storytelling strategies:
                one where San Francisco is a main character, and another where
                it serves as a supporting cameo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
