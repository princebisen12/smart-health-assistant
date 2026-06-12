import { useState } from "react";

function SymptomChecker() {

  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    headache: false,
    fatigue: false,
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setSymptoms({
      ...symptoms,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(symptoms);

    // Dummy prediction logic
    if (symptoms.fever && symptoms.cough) {
      setResult("Possible Disease: Flu");
    }
    else if (symptoms.headache && symptoms.fatigue) {
      setResult("Possible Disease: Migraine");
    }
    else {
      setResult("No major disease detected");
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          Symptom Checker
        </h1>

        <form onSubmit={handleSubmit}>

          <div style={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="fever"
                checked={symptoms.fever}
                onChange={handleChange}
              />
              Fever
            </label>
          </div>

          <div style={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="cough"
                checked={symptoms.cough}
                onChange={handleChange}
              />
              Cough
            </label>
          </div>

          <div style={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="headache"
                checked={symptoms.headache}
                onChange={handleChange}
              />
              Headache
            </label>
          </div>

          <div style={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="fatigue"
                checked={symptoms.fatigue}
                onChange={handleChange}
              />
              Fatigue
            </label>
          </div>

          <button type="submit" style={styles.button}>
            Predict Disease
          </button>

        </form>

        {result && (
          <div style={styles.result}>
            {result}
          </div>
        )}

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f7fb",
  },

  card: {
    width: "400px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    color: "#0077b6",
    marginBottom: "20px",
  },

  checkboxGroup: {
    marginBottom: "15px",
    fontSize: "18px",
  },

  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0077b6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },

  result: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#caf0f8",
    borderRadius: "5px",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default SymptomChecker;