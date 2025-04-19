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
          Exploring Movies🎞️ as a Self-Healing Tool:
          <span
            style={{ display: "block", fontStyle: "italic", fontSize: "0.7em" }}
          >
            A Data-Driven Perspective
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
              href="https://observablehq.com/user/@shufan-chai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Shufan Chai🎀
            </a>{" "}
            from Northeastern University for the course CS7295: Information
            Visualization Fall 2024 under the guidance of Professor{" "}
            <a
              href="https://johnguerra.co/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              John Alexis Guerra Gómez
            </a>{" "}
            .
          </div>
          <div>
            <h2
              style={{
                marginTop: "50px",
              }}
            >
              Overview📌
            </h2>
            <p>
              Similar to listening to music, watching movies is a common mental
              activity in people’s daily lives, providing varying degrees of
              psychological comfort to different individuals through different
              types of films. Music therapy has been applied as a clinical
              psychotherapy method, whereas film therapy has yet to be explored.{" "}
            </p>
            <p>
              This project aims to investigate the potential of movies to serve
              as a self-healing tool, particularly for individuals with mental
              health challenges. With mental health issues becoming increasingly
              prevalent, understanding the intersection between personality
              traits, movie preferences, and audience engagement offers a unique
              opportunity to explore personalized and therapeutic avenues.
            </p>
            <h3>Study Scope🎯</h3>
            <div>
              <p>
                <b>
                  <i>The Big Five Personality Test</i>
                </b>{" "}
                is a psychological assessment tool that measures an individual’s
                personality across five broad dimensions: Openness,
                Conscientiousness, Extraversion, Agreeableness, and Neuroticism.
                Each dimension represents a spectrum, with individuals scoring
                somewhere along the continuum for each trait.
              </p>
              <p>
                In this project, we only focus on the following three
                personality dimensions:
              </p>
              <ul>
                <li>
                  <b>
                    <i>Conscientiousness</i>
                  </b>{" "}
                  indicates a tendency for self-discipline, carefulness, and
                  dependability.
                </li>
                <li>
                  <b>
                    <i>Extraversion</i>
                  </b>{" "}
                  measures sociability, enthusiasm, and assertiveness in social
                  situations.
                </li>
                <li>
                  <b>
                    <i>Neuroticism</i>
                  </b>{" "}
                  captures emotional stability and the tendency to experience
                  negative emotions such as anxiety and moodiness.
                </li>
              </ul>
            </div>
            <p>
              <b>
                Please click on the module below that interests you to learn
                more👇
              </b>
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
