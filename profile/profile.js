// Nitish Profile in JavaScript (Working Version)

// Data Object
const nitish = {
    name: "Nitish KR Singh",
    email: "nitishsingh2148@gmail.com",
    location: "Bengaluru, India",
    bio: "Frontend Developer | JavaScript Learner",
    github: "https://github.com/Nitish0202A-R",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub"]
};

// Function to print line
function line() {
    console.log("=========================================");
}

// Function to print profile
function showProfile() {
    line();
    console.log("        NITISH PROFILE (JavaScript)");
    line();

    console.log("👤 Name: ", nitish.name);
    console.log("📧 Email:", nitish.email);
    console.log("📍 Location:", nitish.location);
    console.log("📝 Bio:", nitish.bio);

    line();
    console.log("🌐 Social Links");
    console.log("GitHub   :", nitish.github);
    console.log("Instagram:", nitish.instagram);
    console.log("LinkedIn :", nitish.linkedin);

    line();
    console.log("💼 Skills");
    nitish.skills.forEach((s, i) => {
        console.log(`${i + 1}. ${s}`);
    });

    line();
    console.log("🎉 Profile successfully shown using JavaScript!");
    line();
}

// Run the function
showProfile();
