import React from "react";
import { useEffect } from "react";
import "./App.css";
import Components from "./components";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  useEffect(() => {
    document.body.style.fontFamily = "Gill Sans, sans-serif";
    document.body.style.backgroundColor = "#fff0f5";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    return () => {
      document.body.style.fontFamily = "";
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
    };
  }, []);
  return (
    <HashRouter>
      <div
        style={{
          backgroundColor: "#fffff0",
          maxWidth: "1450px",
          margin: "auto",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>
          Where the Stories✨ Happen:
          <span
            style={{ display: "block", fontStyle: "italic", fontSize: "0.7em" }}
          >
            Exploring San Francisco Through Its On-Screen Locations
          </span>
        </h1>
        <div
          id="intro"
          style={{
            marginTop: "20px",
          }}
        >
          <div style={{ fontStyle: "italic" }}>
            This is a data visualization project made by{" "}
            <a
              href="https://www.linkedin.com/in/shufanfan/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Shufan Chai🎀
            </a>{" "}
            from Northeastern University for the course CS7250: Information
            Visualization Theory and Applications Spring 2025.{" "}
          </div>
          <div>
            <h2
              style={{
                marginTop: "50px",
              }}
            >
              Introduction📝
            </h2>
            <p>
              <b>
                Film and television do more than entertain—they play a role in
                shaping how we perceive the world, influencing both cultural
                identity and community development.
              </b>
            </p>
            <p>
              <b>
                "Where the Stories Happen: Exploring San Francisco Through Its
                On-Screen Locations"
              </b>{" "}
              is a data visualization project designed to highlight how media
              exposure impacts San Francisco’s neighborhoods and iconic
              landmarks. By visually mapping where and how often different parts
              of the city appear on screen, this project leverages an intuitive
              and interactive approach to reveal patterns and relationships that
              are otherwise hidden in raw data.
            </p>
            <p>
              Through this deliberate choice of visualization techniques—such as
              <b>
                &nbsp;geographic maps, heatmaps, interactive timelines,
                bixplots, and network analysis
              </b>
              —complex issues like cultural identity, community pride, and
              socioeconomic disparities become accessible and engaging to a
              broader audience.
            </p>
            <p>
              Moreover, this visualization-based exploration underscores
              critical realities: neighborhoods frequently featured in films may
              experience economic prosperity and increased tourism, yet at the
              same time face challenges such as rising housing costs and
              displacement. By transforming abstract numbers into visual
              stories, the project sparks meaningful conversations about the gap
              between San Francisco's on-screen image and residents' lived
              experiences.
            </p>
            <p>
              Ultimately, this visual storytelling not only helps the audiences
              better understand these dynamics but also encourages critical
              thinking and dialogue about media's role in fostering or
              fracturing community cohesion and urban equity.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <img
                src="/images/SF3.JPG"
                alt="San Francisco"
                style={{
                  width: "33%",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1)80%, rgba(0,0,0,0)100%)",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1)80%, rgba(0,0,0,0)100%)",
                }}
              />
              <img
                src="/images/SF.JPG"
                alt="San Francisco"
                style={{
                  width: "33%",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1)80%, rgba(0,0,0,0)100%)",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1)80%, rgba(0,0,0,0)100%)",
                }}
              />
              <img
                src="/images/SF2.JPG"
                alt="Another view"
                style={{
                  width: "33%",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1)80%, rgba(0,0,0,0)100%)",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1)80%, rgba(0,0,0,0)100%)",
                }}
              />
            </div>

            <h3>Data Overview📊</h3>
            <div>
              <p>This project draws from two primary datasets:</p>
              <ul>
                <li>
                  The
                  <a
                    href="https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am/about_data"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    San Francisco Film Locations dataset
                  </a>{" "}
                  provided by the San Francisco government open data portal,
                  which includes the information of 312 productions.
                </li>
                <li>
                  The{" "}
                  <a
                    href="https://developer.imdb.com/non-commercial-datasets/#imdb-non-commercial-datasets"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    IMDb Non-Commercial Datasets
                  </a>
                  , which include structured information about film and
                  television productions worldwide.
                </li>
              </ul>
              <p>
                The San Francisco dataset offers historical records of filming
                locations within the city, spanning various types of productions
                such as movies, TV episodes, and shorts. Key attributes include
                the title of the production, release year(1915 - 2023), and
                specific filming locations (e.g., streets, landmarks, or
                neighborhoods).
              </p>
              <p>
                The IMDb dataset supplements this with metadata such as average
                user ratings, genres, and production types.
              </p>
              <p>
                During preprocessing, both datasets were cleaned and merged by
                matching film titles and release years. Duplicates and
                incomplete entries were removed. Numerical fields like IMDb
                average rating were normalized and binned into qualitative
                rating tiers (e.g., "Masterpiece", “Good”, “Average”, “Below
                Average”, "Poor", and "Not Rated") to facilitate visual
                storytelling. Click{" "}
                <a
                  href="https://github.com/shufanfan/Film-Locations-In-SF-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  here
                </a>{" "}
                to view the preprocessing code.
              </p>
              <p>
                Notably, early exploration of the merged dataset revealed that
                certain neighborhoods, such as the Financial District,
                Chinatown, and North Beach appear disproportionately often in
                on-screen content. Additionally, filming locations tend to
                cluster around the northeastern part of San Francisco. These
                spatial and qualitative imbalances suggest a pattern of
                representational concentration that may have implications for
                cultural visibility, tourism, and real estate perception. This
                processed dataset provides a meaningful foundation for visual
                analysis of how media representations shape the narrative of San
                Francisco’s urban landscape.
              </p>
            </div>
            <h3>Visualization Design🌁</h3>
            <h5>The Design Rationale</h5>
            <p>
              This visualization project aims to reveal the intricate
              relationship between the representations of San Francisco in
              audiovisual works and their real-world impacts on cultural
              identity, community dynamics, and urban development. Each
              visualization was deliberately chosen to progressively build a
              compelling narrative—from broad trends to detailed analyses—while
              remaining accessible, engaging, and informative.
            </p>
            <p>
              <b>The line chart</b> was chosen to effectively illustrate
              temporal trends clearly, allowing viewers to quickly identify
              peaks, declines, and overall patterns in film production
              activities. A bar chart was considered as an alternative but
              rejected due to visual clutter over the extended timeline.{" "}
              <b>A scatter map</b> was used to convey geographic distribution
              and concentration of filming locations, providing an intuitive
              spatial overview. While heatmaps were initially considered, they
              were ultimately deemed less precise for identifying specific
              filming locations clearly. <b>The horizontal bar charts</b>{" "}
              visually rank items clearly, facilitating quick comparisons. Pie
              charts were evaluated as an alternative but rejected due to
              difficulty accurately comparing multiple categories
              simultaneously. <b>Heatmaps</b> effectively communicate shifts and
              continuity in filming trends across neighborhoods over decades,
              highlighting dynamic temporal patterns. Individual line charts for
              each neighborhood were explored but discarded as overly complex
              and visually overwhelming. <b>The pie chart</b> provides a clear
              and immediate understanding of overall film quality distribution
              at a glance. A histogram was considered as an alternative but
              found less effective in quickly conveying proportional
              relationships. <b>The stacked bar chart</b> effectively displays
              proportional genre diversity within neighborhoods, highlighting
              cultural nuances. Separate pie charts per neighborhood were
              considered but rejected due to potential visual fragmentation.{" "}
              <b>The network graph</b> visually illustrates complex
              relationships between genres, clarifying how film types
              interconnect. Matrix charts were considered but found to be less
              intuitive for the general audience. <b>The box plot</b> conveys
              distribution, central tendency, and variability of IMDb ratings
              across genres, enhancing comparative analysis. Violin plots were
              explored as an alternative but rejected due to concerns over
              interpretive ease and audience familiarity.
            </p>
            <p>
              Aside from this, I carefully used <b>color hue</b> as an encoding
              channel to visualize categorical attributes. In this project,
              values for the ‘Type’ attribute share a{" "}
              <b>consistent color scheme</b>. The same principle applies to
              ‘Neighborhood’ and ‘Location’: each location shares the same color
              as its corresponding neighborhood. Similarly, genres are also
              represented using a unified color palette. These design choices
              aim to enhance readability and reduce cognitive load.
            </p>
            <p>
              <b>Now begin your journey by unfolding each module below ⬇️</b>
            </p>
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="Components" />} />
            <Route path="/Components/*" element={<Components />} />
          </Routes>
        </div>

        <footer
          style={{
            marginTop: "80px",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          <p>
            <b>
              ✨Your suggestions are valuable. Please send them to{" "}
              <a
                href="https://www.linkedin.com/in/shufanfan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                me
              </a>
              ✨
            </b>
          </p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
