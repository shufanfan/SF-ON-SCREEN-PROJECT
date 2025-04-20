export default function PartFour() {
  return (
    <div style={{ marginTop: "40px" }}>
      <div>
        <h3 style={{ fontStyle: "italic" }}>
          Genres and Journeys: Exploring San Francisco’s Cinematic Identity
        </h3>

        <iframe
          width="100%"
          height="835"
          src="https://observablehq.com/embed/534e7aa0b66ee09c@1007?cells=stackbarchart&banner=false"
        ></iframe>
        <p style={{ marginTop: "-40px" }}>
          San Francisco’s neighborhoods aren’t just filming locations—they are
          genre playgrounds. The Financial District, North Beach, and Chinatown
          emerge as the most genre-diverse areas, with over 20 distinct genres
          represented. These central neighborhoods serve as chameleonic
          backdrops for everything from crime thrillers to romantic comedies,
          suggesting both architectural variety and narrative flexibility. In
          contrast, peripheral areas like Seacliff, Japantown and Oceanview
          exhibit lower genre diversity, often reflecting more specialized or
          culturally specific cinematic portrayals.
        </p>
      </div>

      <div>
        <h3 style={{ fontStyle: "italic" }}>
          Genre Networks: How Productions Genres Interconnect in San Francisco
        </h3>

        <iframe
          width="100%"
          height="1228"
          src="https://observablehq.com/embed/534e7aa0b66ee09c@1011?cells=swatches2%2Cchart1&banner=false"
        ></iframe>
        <p style={{ marginTop: "-90px" }}>
          This genre network reveals which types of stories tend to travel
          together. In this visualization, each node represents a genre, and its
          size indicates how frequently that genre appears in the dataset—larger
          nodes mean more commonly used genres. The lines (edges) between nodes
          represent how often two genres co-occur in the same production, with
          thicker lines indicating stronger or more frequent connections. At the
          center, we see large, heavily connected nodes like Drama, Comedy, and
          Romance—the building blocks of mainstream cinematic narratives. These
          genres co-occur frequently with others, serving as narrative glue
          across a wide range of films. In contrast, genres like Game-Show,
          Western, and War are more isolated, often appearing as standalone
          categories with fewer narrative partners. The structure reflects the
          interconnected nature of popular genres and highlights how blending
          familiar tropes (e.g., comedy + romance or crime + thriller) is a
          dominant strategy in San Francisco-based storytelling.
        </p>
      </div>

      <div>
        <h3 style={{ fontStyle: "italic" }}>
          Which Genres Score Best? IMDb Ratings by Genre for Films Shot in San
          Francisco
        </h3>
        <iframe
          width="100%"
          height="553"
          src="https://observablehq.com/embed/534e7aa0b66ee09c@1013?cells=boxplot&banner=false"
        ></iframe>
        <p style={{ marginTop: "-40px" }}>
          This boxplot reveals how IMDb ratings vary across different genres in
          films shot in San Francisco. Genres like History and Mystery stand out
          for having relatively high median scores and tightly clustered data
          points, indicating strong critical reception and consistent audience
          appreciation. Other genres such as Biography and Sci-Fi also maintain
          relatively high ratings with less variability. In contrast, Reality-TV
          and Game-Show show lower medians, reflecting audiences’ lesser
          preference. Though Drama appears frequently, its wide range—from low
          to high scores—underscores both its narrative flexibility and
          inconsistency in execution.
        </p>
      </div>
    </div>
  );
}
