export default function EndEnd() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h3>📜 Conclusion</h3>
      <div>
        <p>
          Through detailed visualizations, this project highlights San
          Francisco’s dynamic role as a cinematic setting, illustrating how the
          city’s neighborhoods and landmarks have both shaped—and been shaped
          by—film and television productions. While iconic sites like the Golden
          Gate Bridge remain timeless cinematic symbols, neighborhood-level
          trends reveal evolving patterns that reflect shifts in aesthetic
          preferences and production logistics over time. The well-known filming
          locations can serve as a unique selling point for productions,
          attracting audiences through familiar or picturesque settings. In
          turn, the visibility and reach of these films and shows promote the
          featured locations themselves—creating a positive feedback loop
          between media exposure and urban recognition.
        </p>
        <p>
          The project also expose contrasting storytelling strategies: some
          productions fully immerse viewers in the city’s urban fabric through
          extensive location usage, while others employ symbolic backdrops to
          convey meaning more economically.
        </p>
        <p>
          Moreover, genre-based analyses underscore San Francisco’s narrative
          versatility, showing how a wide range of genres—from romance and
          biography to thriller and mystery—continue to find expressive space in
          the city’s diverse environments.
        </p>
        <p>
          In the end, these patterns reveal more than media trends—they trace
          how film and city continuously shape each other, blurring the line
          between fiction and place, and transforming San Francisco into both a
          storyteller and a story.
        </p>
        <h3>🌟 Acknowledgments</h3>
        <ul>
          <li>
            Data Source:
            <ul>
              <li>
                <a
                  href="https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am/about_data"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Film Locations in San Francisco dataset from San Francisco
                  Open Data
                </a>
              </li>
              <li>
                <a
                  href="https://developer.imdb.com/non-commercial-datasets/#imdb-non-commercial-datasets"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  IMDb Non-Commercial Datasets
                </a>
              </li>
            </ul>
          </li>
          <li>
            The Photos used in the introduction were taken by myself.{" "}
            <a
              href="https://www.flickr.com/photos/201350817@N04/albums/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Here
            </a>{" "}
            are my albums.
          </li>
          <li>
            IMDb rating categories references:
            <ul>
              <li>
                <a
                  href="https://www.reddit.com/r/movies/comments/g4hptn/why_do_imdb_movie_ratings_usually_fall_in_the_7s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Why do IMDB movie ratings usually fall in the 7's?
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/movies/comments/9sv5lo/at_what_rating_point_is_an_imdb_rating_considered/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  At what rating point is an IMDB rating considered bad?
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://observablehq.com/d/a5712431cedf88c1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              My original observable notebook
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shufanfan/SF-ON-SCREEN-PROJECT"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Code for building the website(my personal GitHub repository)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shufanfan/Film-Locations-In-SF-Project"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Code for data processing(my personal GitHub repository)
            </a>
          </li>
        </ul>
        <h3>🔁 Feedback Incorporation</h3>
        <p>
          Several pieces of feedback helped me improve the project’s clarity and
          flow. One recurring suggestion was about scale and readability—for
          example, the year labels on the heatmap were a bit cramped, and the
          IMDb rating chart showed a 0–9 axis even though IMDb scores go from 1
          to 10. I adjusted both of those: the heatmap now has better spacing
          for the years, and the rating chart reflects the full 1–10 scale so
          it’s easier to read and interpret.
        </p>
        <p>
          Another helpful comment pointed out that the line chart which shows
          the over time activities felt out of place between the neighborhood
          and location-based visuals. I ended up moving it so that all the
          spatial-focused charts are grouped together, which made the layout
          feel more cohesive. I also made sure that genre colors and
          neighborhood references stayed consistent across graphs, and I added a
          tooltip on the map to make it clear that the timeline runs from 1915
          to 2023.
        </p>
        <p>
          Lastly, a few feedback suggested making things more interactive, like
          filtering by year or neighborhood. While full filtering wasn’t
          possible due to tool limitations, I added selective interactivity to
          the heatmap so viewers can better explore patterns across time.
        </p>
        <h3>🌊 Development Process</h3>
        <p>I followed a 5 weeks timeline to develop this project:</p>
        <ul>
          <li>
            Week 1(3.16 - 3.23): Brainstormed the project theme and searched for
            relevant datasets.
          </li>
          <li>
            Week 2(3.23 - 3.30): Chosed the final dataset to be used for the
            project, and performed the initial data processing.{" "}
          </li>
          <li>
            Week 3(3.30 - 4.6): Started working on the visualization, and
            performed the data processing by the development process.
          </li>
          <li>
            Week 4(4.6-4.13): Delivered the first version for peer feedback.
          </li>
          <li>
            Week 5(4.13-4.20): Incorporated peer feedback, and added write-up
            for the project.
          </li>
        </ul>
      </div>
    </div>
  );
}
