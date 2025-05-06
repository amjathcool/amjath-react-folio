import { Link } from "react-router-dom";
import teamDataMap from "./maps/team-data-map";
import Welcome from "./Welcome";

const SwLandingPage = () => {
  return (
    <>
      <Welcome />
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          paddingTop: "0px",
          fontFamily: "'Arial', sans-serif", // Apply sans-serif font
        }}
      >
        <h2
          style={{
            backgroundColor: "#4CAF50", // Green background for the heading
            color: "white", // White text color
            padding: "10px 20px", // Padding around the text
            borderRadius: "5px", // Rounded corners
            marginBottom: "20px", // Space below the heading
          }}
        >
          Select Your Team
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.entries(teamDataMap).map(([routeKey, { name }], index) => (
            <li
              key={routeKey}
              style={{
                margin: "10px 0",
                backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#d3d3d3", // Alternating background colors
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Link
                to={`/${routeKey}`}
                style={{
                  textDecoration: "none",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SwLandingPage;
