// src/pages/Profile.jsx
import { useContext } from "react";
import { AuthContext } from "../components/layout/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const Profile = () => {
  const { user } = useContext(AuthContext);

  const handleUpdateProfile = () => {
    const newName = prompt("Enter your new display name:");
    const newPhoto = prompt("Enter your new photo URL:");

    if (!newName && !newPhoto) return;

    updateProfile(auth.currentUser, {
      displayName: newName || user.displayName,
      photoURL: newPhoto || user.photoURL,
    })
      .then(() => {
        alert("✅ Profile updated successfully!");
        window.location.reload();
      })
      .catch((error) => console.error("Error updating profile:", error));
  };

  if (!user) {
    return <p className="text-center mt-10 text-gray-500">No user logged in</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-16 bg-white rounded-xl shadow-lg p-6 text-center">
      <img
        src={user.photoURL || "https://via.placeholder.com/100"}
        alt="User"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h2 className="text-2xl font-semibold mb-2">
        {user.displayName || "Unnamed User"}
      </h2>
      <p className="text-gray-600 mb-4">{user.email}</p>
      <button
        onClick={handleUpdateProfile}
        className="btn btn-primary px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
