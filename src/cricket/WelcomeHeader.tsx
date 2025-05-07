const WelcomeHeader = () => {
  // CSS in JS
  const fadeIn = {
    animation: "fadeIn 2s ease-in-out",
  };

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif", // Apply sans-serif font
      textAlign: "center" as const,
      borderBottom: "2px solid #e0e0e0",
    },
    appName: {
      color: "#00796b", // Sporty green
      marginBottom: "-0.2rem",
    },
    built: {
      fontSize: "0.80rem",
      color: "#888",
      ...fadeIn,
    },
    message: {
      marginTop: "0.5rem",
      fontSize: "1rem",
      color: "#333",
      lineHeight: "1.3",
    },
  };

  // Inline keyframes injection using <style> tag
  const animationKeyframes = `
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <>
      <style>{animationKeyframes}</style>
      <div style={styles.container}>
        <h1 style={styles.appName}>CrickTrak</h1>
        <div style={styles.built}>Built by Amjath</div>
        <p style={styles.message}>
          Game schedule, weather, maps and scores
          <br />
          your team’s game hub made simple
        </p>
      </div>
    </>
  );
};

export default WelcomeHeader;
