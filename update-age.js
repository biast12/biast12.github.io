const fs = require("fs");
const path = require("path");

const calculateAge = (birthday) => {
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
};

const birthday = new Date(2000, 1, 28); // Month is 0-indexed, so 1 represents February
const age = calculateAge(birthday);

const readmePath = path.join(__dirname, "README.md");
let readmeContent = fs.readFileSync(readmePath, "utf8");

readmeContent = readmeContent.replace(/age: \d+/, `age: ${age}`);

fs.writeFileSync(readmePath, readmeContent);
