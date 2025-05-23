import { Link } from "react-router-dom";
import teamDataMap from "../maps/team-data-map";
import WelcomeHeader from "./WelcomeHeader";

const SwLandingPage = () => {
  return (
    <>
      <WelcomeHeader />
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          paddingTop: "0px",
          fontFamily: "'Arial', sans-serif", // Apply sans-serif font
        }}
      >
        <h3
          style={{
            backgroundColor: "#4CAF50", // Green background for the heading
            color: "white", // White text color
            padding: "10px 20px", // Padding around the text
            borderRadius: "5px", // Rounded corners
            marginBottom: "20px", // Space below the heading
          }}
        >
          Select Your Team
        </h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.entries(teamDataMap).map(([routeKey, { name }]) => (
            <li
              key={routeKey}
              style={{
                margin: "10px 0",
                backgroundColor: "#f0f0f0",
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
