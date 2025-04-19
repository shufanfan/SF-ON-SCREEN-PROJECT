export default function GenreConnection() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>
        Genre Connectivity
        <span style={{ fontStyle: "italic", fontSize: "0.7em" }}>
          - by IMDB Top 1000 Movies
        </span>
      </h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <iframe
              width="100%"
              height="1408"
              frameBorder="0"
              src="https://observablehq.com/embed/e8ffc286a9ee33bc@391?cells=viewof+useEdgeBundling%2Cviewof+useForceInABox%2Cviewof+aspectRatio%2Cviewof+selectedGenres%2Cchart%2Cchart1"
            ></iframe>
          </div>
          <div className="col-md-4">
            <h4 style={{ fontStyle: "italic" }}>How Do Genres Intertwine?</h4>
            <h6 style={{ fontStyle: "italic" }}>- by IMDB Top 1000 Movies</h6>
            <ul
              style={{
                display: "block",
                fontStyle: "italic",
                fontSize: "0.9em",
                marginTop: "30px",
              }}
            >
              <li>
                Genres such as <b>Drama</b>, <b>Comedy</b>, and <b>Romance</b>{" "}
                frequently co-occur, suggesting their centrality in creating
                multi-genre films that resonate widely!
              </li>
              <li>
                <b>Comedy</b> is able to connect with almost all other genres!
              </li>
            </ul>
            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p>
                Genres like Drama, Comedy, and Romance stand at the heart of
                multi-genre storytelling, weaving together narratives that
                captivate and resonate with audiences far and wide.
              </p>
              <p style={{ fontStyle: "italic" }}>
                <b>
                  Feel free to dive deeper into the GenreNet and uncover even
                  more fascinating
                  insights!🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
