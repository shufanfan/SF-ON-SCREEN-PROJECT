export default function AudiencePrefer() {
  return (
    <div style={{ marginTop: "40px" }}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div>
              Please enter the number of movies you want in the box below👇:
            </div>
            <iframe
              width="100%"
              height="607"
              src="https://observablehq.com/embed/f4ebf45fc1b37aa7@93?cells=viewof+inputNumber%2Cbarchart"
            ></iframe>
          </div>
          <div className="col-md-4">
            <h4 style={{ fontStyle: "italic" }}>
              What Genres Make Up the IMDB Top Movies🎞️?
            </h4>
            <ul
              style={{
                display: "block",
                fontStyle: "italic",
                fontSize: "0.9em",
                marginTop: "30px",
              }}
            >
              <li>
                <b>Drama</b>, <b>Crime & Drama</b>, and{" "}
                <b>Action & Adventure & Drama</b> dominate the IMDB Top 20
                Movies.
              </li>

              <li>
                Niche genres like <b>Western</b> also appears in the IMDB Top 20
                Movies.
              </li>
            </ul>
            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p>
                The IMDB Top 20 movies are rich with genres like Drama, Crime &
                Drama, and Action & Adventure & Drama. These emotionally charged
                and intricately woven narratives clearly capture the hearts of
                audiences, showcasing their enduring appeal.
              </p>
              <p>
                {" "}
                While less frequent, niche genres like Western maintain cultural
                and artistic significance, showcasing their lasting impact
                despite limited appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
