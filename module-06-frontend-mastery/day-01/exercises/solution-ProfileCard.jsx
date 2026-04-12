// Module 06, Day 01 — Solution: Profile Card Component

function ProfileCard({ name, title, bio, isAvailable }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            margin: "10px",
            maxWidth: "300px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
            <h2 style={{ marginBottom: "4px" }}>{name}</h2>
            <h3 style={{ color: "#666", fontWeight: "normal", marginBottom: "12px" }}>{title}</h3>
            <p style={{ color: "#444", lineHeight: "1.5" }}>{bio}</p>
            <p style={{
                marginTop: "12px",
                fontWeight: "bold",
                color: isAvailable ? "#22c55e" : "#ef4444"
            }}>
                {isAvailable ? "✅ Available for hire" : "❌ Currently unavailable"}
            </p>
        </div>
    );
}

export default ProfileCard;

// Usage in App.jsx:
//
// import ProfileCard from "./ProfileCard";
//
// function App() {
//     return (
//         <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
//             <ProfileCard
//                 name="Lucky"
//                 title="Full-Stack Developer"
//                 bio="Building the web one component at a time."
//                 isAvailable={true}
//             />
//             <ProfileCard
//                 name="Grace"
//                 title="UI/UX Designer"
//                 bio="Creating beautiful, user-centered experiences."
//                 isAvailable={true}
//             />
//             <ProfileCard
//                 name="Kevin"
//                 title="Data Analyst"
//                 bio="Turning data into actionable insights."
//                 isAvailable={false}
//             />
//         </div>
//     );
// }
