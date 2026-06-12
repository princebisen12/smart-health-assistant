import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "20px", background: "#222" }}>

      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Login
      </Link>

      <Link to="/dashboard" style={{ color: "white", marginRight: "20px" }}>
        Dashboard
      </Link>

      <Link to="/symptoms" style={{ color: "white", marginRight: "20px" }}>
        Symptoms
      </Link>

      <Link to="/chatbot" style={{ color: "white", marginRight: "20px" }}>
        Chatbot
      </Link>

      <Link to="/reports" style={{ color: "white" }}>
        Reports
      </Link>

    </div>
  );
}

export default Navbar;