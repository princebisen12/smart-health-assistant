import { Link } from "react-router-dom";

function Dashboard() {

  const cards = [
    {
      title: "Symptom Checker",
      description: "Predict diseases using symptoms",
      path: "/symptoms",
      color: "#0077b6",
    },

    {
      title: "AI Chatbot",
      description: "Ask healthcare related questions",
      path: "/chatbot",
      color: "#00b4d8",
    },

    {
      title: "Medical Reports",
      description: "Upload and analyze reports",
      path: "/reports",
      color: "#48cae4",
    },
  ];

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>
        Smart Healthcare Dashboard
      </h1>

      <div style={styles.cardContainer}>

        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              borderTop: `5px solid ${card.color}`,
            }}
          >

            <h2>{card.title}</h2>

            <p>{card.description}</p>

            <Link to={card.path} style={styles.button}>
              Open
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    padding: "40px",
    backgroundColor: "#f4f7fb",
  },

  heading: {
    textAlign: "center",
    color: "#023e8a",
    marginBottom: "40px",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  card: {
    width: "300px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  button: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#0077b6",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default Dashboard;