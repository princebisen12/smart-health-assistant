import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Later connect backend API here

    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          Smart Healthcare Assistant
        </h1>

        <h2 style={styles.subtitle}>
          Login
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>

        </form>

        <p style={styles.text}>
          Don't have an account?
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
  },

  card: {
    width: "350px",
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    color: "#0077b6",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0077b6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },

  text: {
    marginTop: "15px",
    textAlign: "center",
  },

  link: {
    marginLeft: "5px",
    color: "#0077b6",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;