// Module 06, Day 01 — Exercise Starter: Profile Card Component
//
// TASK: Create a React component that displays a profile card.
//
// 1. Create a component called ProfileCard that accepts these props:
//    - name (string)
//    - title (string)
//    - bio (string)
//    - isAvailable (boolean)
//
// 2. The component should display all the info in a styled card
// 3. Show "Available for hire" or "Currently unavailable" based on isAvailable
// 4. Use this component 3 times in App with different data

// Save this as src/ProfileCard.jsx

function ProfileCard({ name, title, bio, isAvailable }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            margin: "10px",
            maxWidth: "300px"
        }}>
            {/* Add the profile card content here */}
            {/* Display name in h2 */}
            {/* Display title in h3 */}
            {/* Display bio in p */}
            {/* Conditionally show availability status */}
        </div>
    );
}

export default ProfileCard;
