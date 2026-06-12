import { useState } from "react";

function ReportUpload() {

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file");
      return;
    }

    console.log(file);

    // Later connect backend API here

    setMessage("Report uploaded successfully!");
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          Upload Medical Report
        </h1>

        <form onSubmit={handleUpload}>

          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={handleFileChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Upload Report
          </button>

        </form>

        {message && (
          <div style={styles.message}>
            {message}
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
    textAlign: "center",
  },

  title: {
    color: "#0077b6",
    marginBottom: "20px",
  },

  input: {
    marginBottom: "20px",
    width: "100%",
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

  message: {
    marginTop: "20px",
    padding: "12px",
    backgroundColor: "#caf0f8",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default ReportUpload;