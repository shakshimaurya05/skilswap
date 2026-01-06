import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./home.css";
function ProfileModal({ selectedMatch, closeModal }) {
  if (!selectedMatch) return null;

  const user = selectedMatch.user;

  return (
    <div className="profile-overlay">
      <div className="profile-modal">
        <button className="close-btn" onClick={closeModal}>
          <AiOutlineClose size={14} />
        </button>

        <h2>{user.name}</h2>
        {user.bio && (
          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
        )}

        <p><strong>Location:</strong> {user.location || "Unknown"}</p>

        <p>
          <strong>Expertise:</strong>{" "}
          {user.skillsToTeach?.length
            ? user.skillsToTeach.map(s => s.skillName).join(", ")
            : "None"}
        </p>

        <p>
          <strong>Learning Goals:</strong>{" "}
          {user.skillsToLearn?.length
            ? user.skillsToLearn.join(", ")
            : "None"}
        </p>

        {user.portfolio && (
          <p>
            <strong>Portfolio:</strong>{" "}
            <a href={user.portfolio} target="_blank" rel="noopener noreferrer">
              View Portfolio
            </a>
          </p>
        )}

        <button className="chat-btn">
          Chat with {user.name}
        </button>
      </div>
    </div>
  );
}

export default ProfileModal;
