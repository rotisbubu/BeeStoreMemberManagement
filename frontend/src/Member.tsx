import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Member.css";
import { Link } from "react-router-dom";

// Define the MemberType interface
interface MemberType {
  CustomerID: number;
  CustomerName: string;
  CustomerPhone: string;
  CustomerEmail: string;
}

const Member: React.FC = () => {
  const [members, setMembers] = useState<MemberType[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        console.log("API Response:", res.data);
        setMembers(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await axios.delete(`http://localhost:3000/deleteMember/${id}`);
        alert("Member deleted successfully!");
        setMembers(members.filter((member) => member.CustomerID !== id));
      } catch (err) {
        console.error("Delete Error:", err);
      }
    }
  };

  return (
    <>
      <h2>Welcome to BeeStore Member Management!</h2>
      <div className="container">
        <div className="header">
          <Link to="/createMember" className="btn-create">
            Add New Member +
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.length > 0 ? (
                members.map((member) => (
                  <tr key={member.CustomerID}>
                    <td>{member.CustomerID}</td>
                    <td>{member.CustomerName}</td>
                    <td>{member.CustomerPhone}</td>
                    <td>{member.CustomerEmail}</td>
                    <td>
                      <Link
                        to={`/updateMember/${member.CustomerID}`}
                        className="btn-update"
                      >
                        Update
                      </Link>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(member.CustomerID)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>No members found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Member;
