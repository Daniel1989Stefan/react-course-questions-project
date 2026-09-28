import { useState } from "react";
import questions from "./data.js"; //[{id, title, info}]
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const App = () => {
  const [faq, setFaq] = useState(questions);
  const [showId, setShowId] = useState(0); // id-ul
  // const [showInfo, setShowInfo] = useState(false);

  const showMore = (id) => {
    return setShowId(id);
  };
  const showLess = (id) => {
    return setShowId(0);
  };

  return (
    <section
      style={{ maxWidth: "700px", margin: "4rem auto", padding: "0 1rem" }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
        Questions
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {faq.map((question) => {
          const { id, title, info } = question;
          return (
            <div
              key={id}
              style={{
                background: "white",
                borderRadius: "8px",
                padding: "1.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <h2 style={{ fontSize: "1.1rem", color: "#222" }}>{title}</h2>
                <span style={{ fontSize: "1.5rem", color: "#645cff" }}>
                  {id === showId ? (
                    <IoIosArrowDropupCircle onClick={showLess} />
                  ) : (
                    <IoIosArrowDropdownCircle onClick={() => showMore(id)} />
                  )}
                </span>
              </div>
              {id === showId && (
                <p
                  style={{
                    marginTop: "1rem",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {info}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default App;
