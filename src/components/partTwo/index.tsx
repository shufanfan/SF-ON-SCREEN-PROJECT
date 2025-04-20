export default function PartTwo() {
  return (
    <div>
      <div style={{ marginTop: "40px" }}>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-7">
              <iframe
                width="100%"
                height="435"
                src="https://observablehq.com/embed/534e7aa0b66ee09c@984?cells=barchart4&banner=false"
              ></iframe>
            </div>
            <div className="col-md-5">
              <h3 style={{ fontStyle: "italic" }}>
                Spotlight on Neighborhoods: Discovering San Francisco’s Filming
                Hotspots
              </h3>

              <div
                style={{
                  marginTop: "15px",
                }}
              >
                <p>
                  Some neighborhoods shine brighter on screen than others. The
                  Financial District and South Beach lead by a wide margin,
                  having hosted more productions than any other
                  area—highlighting their cinematic versatility and iconic
                  skyline. North Beach, Chinatown, and Nob Hill follow closely,
                  each offering distinct cultural or historical character. The
                  top 10 list suggests a strong visual preference for northeast
                  neighborhoods, shaping how audiences worldwide come to imagine
                  San Francisco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <div className="container mt-4">
          <div className="row">
            <div>
              <iframe
                width="100%"
                height="749"
                src="https://observablehq.com/embed/534e7aa0b66ee09c@988?cells=heatmap1&banner=false"
              ></iframe>
            </div>
            <div>
              <h4 style={{ fontStyle: "italic", marginTop: "-40px" }}>
                Neighborhoods Through the Decades: Filming Hotspots Evolve
              </h4>

              <div
                style={{
                  marginTop: "40px",
                }}
              >
                <p>
                  In the early decades of filmmaking (1915–1968), filming
                  activity across San Francisco’s neighborhoods appeared largely
                  sporadic. In contrast, beginning in the 1990s and especially
                  during the 2010s, filming activity became more consistent and
                  concentrated. Neighborhoods like Chinatown, Financial
                  District/South Beach, North Beach, Mission, Russion Hill, Nob
                  Hill, and Tenderloin began to appear regularly and densely,
                  with multiple productions each year over sustained periods.
                  These areas form noticeable vertical clusters on the heatmap,
                  visually reinforcing their role as modern filming hubs. This
                  shift from sporadic representation to consistent cinematic
                  visibility suggests evolving production logistics, changing
                  aesthetic preferences, and possibly the emergence of
                  film-friendly zones within the city.
                </p>
                <h5 style={{ fontStyle: "italic" }}>
                  Take A Closer Look at Shoots By Year
                </h5>
                <iframe
                  width="100%"
                  height="337"
                  src="https://observablehq.com/embed/534e7aa0b66ee09c@997?cells=heatmap3&banner=false"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-7">
              <iframe
                width="100%"
                height="435"
                src="https://observablehq.com/embed/534e7aa0b66ee09c@991?cells=barchart5&banner=false"
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4 style={{ fontStyle: "italic" }}>
                Iconic Locations on Screen: San Francisco’s Most Filmed Sites
              </h4>

              <div
                style={{
                  marginTop: "40px",
                }}
              >
                <p>
                  Certain landmarks stand out as true cinematic icons. The
                  Golden Gate Bridge tops the list, unsurprisingly, followed by
                  City Hall, the Fairmont Hotel, and Treasure Island. These
                  places not only define the city visually but also anchor
                  memorable scenes in the minds of audiences. Religious and
                  cultural sites like Coit Tower and Palace of Fine Arts also
                  feature heavily, reinforcing San Francisco’s layered identity
                  through architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <div className="container mt-4">
          <div>
            <div>
              <iframe
                width="100%"
                height="349"
                src="https://observablehq.com/embed/534e7aa0b66ee09c@993?cells=heatmap2&banner=false"
              ></iframe>
            </div>
            <div>
              <h4 style={{ fontStyle: "italic", marginTop: "-40px" }}>
                A Century of Scenes: Popularity of San Francisco’s Top Locations
                Over Time
              </h4>

              <div
                style={{
                  marginTop: "40px",
                }}
              >
                <p
                  style={{
                    marginTop: "-30px",
                  }}
                >
                  The city’s most iconic landmarks—such as the Golden Gate
                  Bridge have maintained a relatively steady presence on screen
                  over the decades. Unlike neighborhoods, the filming frequency
                  for these top landmarks appears more evenly distributed across
                  time, with no single era dominating entirely. This reflects
                  their timeless visual appeal and their adaptability for a
                  variety of narrative settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
