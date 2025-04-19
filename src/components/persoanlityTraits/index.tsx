export default function PersonalityTraits() {
  return (
    <div>
      <div style={{ marginTop: "40px" }}>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <iframe
                width="100%"
                height="513"
                src="https://observablehq.com/embed/9edc351a46209a85@505?cells=groupedBar1"
              ></iframe>
            </div>
            <div className="col-md-4">
              <h4 style={{ fontStyle: "italic" }}>
                What Can Personality Traits Reveal About Movie-Watching Habits?
              </h4>
              <h4 style={{ fontStyle: "italic" }}>
                —and Their Role in Coping?
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
                  People with medium levels of conscientiousness, extraversion,
                  and neuroticism dominate the “less than once a month” group,
                  indicating limited engagement with movies.
                </li>
                <li>
                  The ‘several times a week’ group shows a more balanced
                  distribution of personality traits compared to other groups,
                  suggesting a broader appeal and potential stress-relief
                  benefits for individuals with diverse psychological profiles.
                </li>
              </ul>
              <div
                style={{
                  marginTop: "40px",
                }}
              >
                <p>
                  Frequent movie-watching, reflected in the balanced
                  distribution of personality traits, might act as a universal
                  balm—offering both a coping mechanism and a source of joy for
                  people across a spectrum of mental states. It highlights the
                  potential of movies to serve as a self-healing tool, bringing
                  comfort and connection to those navigating diverse
                  psychological landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <iframe
                width="100%"
                height="539"
                frameBorder="0"
                src="https://observablehq.com/embed/9edc351a46209a85@420?cells=viewof+personalityTrait%2Cboxplot"
              ></iframe>
            </div>
            <div className="col-md-4">
              <h4 style={{ fontStyle: "italic" }}>
                How Do Our Personality Traits Shape Our Movie Genre Preferences?
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
                  <b>Extraversion</b>: Genres like <b>War</b> have higher median
                  scores, indicating preference among extroverted individuals.
                </li>
                <li>
                  <b>Conscientiousness</b>: <b>Historical</b> genres appeal to
                  highly conscientious individuals.
                </li>
                <li>
                  <b>Neuroticism</b>: <b>Drama</b> is preferred by individuals
                  with higher neuroticism levels, potentially due to its
                  emotional depth.
                </li>
              </ul>
              <div
                style={{
                  marginTop: "40px",
                }}
              >
                <p>
                  <b>Take the Extraversion dimension as an example:</b>
                </p>
                <p>
                  Certain genres, such as <b>Comedy</b> and <b>Horror</b>,
                  captivate individuals across the spectrum of extraversion,
                  from the most reserved to the most outgoing, showcasing their
                  wide emotional appeal. For instance, Comedy appeals broadly to
                  both introverted and extroverted individuals, reflecting its
                  ability to resonate with diverse emotional needs. Similarly,
                  Horror attracts audiences with varying levels of extraversion,
                  likely due to its intense emotional engagement and
                  thrill-seeking qualities.
                </p>

                <p>
                  On the other hand, genres like <b>War</b>,&nbsp;{" "}
                  <b>Animation</b>,&nbsp;
                  <b>Drama</b> and <b>Sci-Fi</b> exhibit distinct preferences,
                  with War appealing predominantly to highly extroverted
                  individuals and Drama drawing in those with more introverted
                  tendencies.
                </p>

                <p>
                  This highlights the dynamic ways personality traits shape
                  genre preferences, underlining the diverse and therapeutic
                  possibilities that movies can offer to audiences across
                  different psychological profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
