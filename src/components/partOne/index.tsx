export default function PartOne() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <iframe
              width="100%"
              height="540"
              src="https://observablehq.com/embed/534e7aa0b66ee09c@969?cells=linechart&banner=false"
            ></iframe>
          </div>
          <div className="col-md-5">
            <h3 style={{ fontStyle: "italic" }}>
              Lights, Camera, City: <br />
              San Francisco’s On-Screen Story
            </h3>
            <h5 style={{ fontStyle: "italic" }}>
              {" "}
              San Francisco on Screen: Filming Activity Over Time (1915–2023)
            </h5>

            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p>
                From a quiet cinematic beginning, San Francisco’s presence on
                screen grew gradually—until 1994, when it crossed a new
                threshold with over ten productions in a single year. Though the
                early 2000s brought a dip, 2014 lit up the timeline as the
                city’s most filmed year to date. Despite recent fluctuations,
                San Francisco continues to inspire stories, its iconic streets
                and skyline ever ready for the next scene.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <iframe
              width="100%"
              height="569"
              src="https://observablehq.com/embed/534e7aa0b66ee09c@966?cells=bartchart3&banner=false"
            ></iframe>
          </div>
          <div className="col-md-5">
            <h4 style={{ fontStyle: "italic" }}>
              {" "}
              What Types of Productions Prefer San Francisco?
            </h4>

            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p>
                <b>Movies and TV series</b> dominate the filming landscape in
                San Francisco, accounting for the overwhelming majority of
                recorded locations. Movies alone contribute over 1,200 filming
                spots, while TV series follow with over 600—highlighting the
                city’s versatility for both big-screen blockbusters and
                long-form storytelling. Shorts and TV episodes appear far less
                frequently, suggesting that productions tend to invest more
                heavily in San Francisco for full-length narratives. This
                distribution points to the city’s strong appeal for larger, more
                immersive projects.
              </p>
              <p style={{ fontStyle: "italic" }}>
                Note: The “movie” category refers to feature-length films
                released in theaters or on streaming platforms. “Short” includes
                short films, usually under 40 minutes, often created by
                independent or student filmmakers. “tvEpisode” represents
                individual episodes within a television series, while “tvMovie”
                refers to full-length movies made specifically for television
                broadcast. “tvSeries” captures productions at the series level,
                indicating that at least part of the show was filmed in San
                Francisco, without specifying individual episodes. Lastly,
                “video” includes other media types such as music videos, reality
                TV segments, promotional content, or online-only releases.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <iframe
              width="100%"
              height="1226"
              src="https://observablehq.com/embed/534e7aa0b66ee09c@974?cells=ledgend1%2Cchart&banner=false"
            ></iframe>
          </div>
          <div className="col-md-5">
            <h4 style={{ fontStyle: "italic" }}>
              {" "}
              Mapping Stories: San Francisco's Filming Hotspots
            </h4>

            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p>
                The map reveals a striking concentration of filming locations in{" "}
                <b>the northeastern neighborhoods of San Francisco</b>,
                particularly around downtown, Chinatown, North Beach, and the
                Embarcadero. These areas are not only visually iconic but also
                offer diverse architectural and cultural backdrops. In contrast,
                the southwestern and western neighborhoods appear sparsely used.
                This spatial imbalance suggests that cinematic representation of
                San Francisco tends to spotlight certain districts while leaving
                others largely unseen, shaping how global audiences come to
                visualize the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
