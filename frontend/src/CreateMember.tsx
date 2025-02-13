import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateMember: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const phoneRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      setError("Name cannot be empty.");
      return false;
    }
    if (!phone.trim()) {
      setError("Phone number cannot be empty.");
      return false;
    }
    if (!phone.match(phoneRegex)) {
      setError("Phone number must contain only numbers.");
      return false;
    }
    if (!email.trim()) {
      setError("Email cannot be empty.");
      return false;
    }
    if (!email.match(emailRegex)) {
      setError("Invalid email format. Example: user@example.com");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    if (!validateForm()) return;
  
    console.log("Submitting:", { name, phone, email });
  
    try {
      const response = await axios.post("http://localhost:3000/createMember", { name, phone, email });
  
      console.log("Response:", response.data);
  
      if (response.status === 201 || response.status === 200) {
        alert("Member added successfully!");
        navigate("/");
      } else {
        alert("Failed to add member.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  

  return (
    <div>
      <h2>Add New Member</h2>
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <div className="form-box">
            <label>Name</label>
            <input
              value={name}
              type="text"
              placeholder="Insert Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-box">
            <label>Phone Number</label>
            <input
              value={phone}
              type="text"
              placeholder="Insert Phone Number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-box">
            <label>Email</label>
            <input
              value={email}
              type="text"
              placeholder="Insert Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="btn-submit-container">
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMember;