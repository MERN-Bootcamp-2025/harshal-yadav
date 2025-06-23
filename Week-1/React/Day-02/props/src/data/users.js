// data/users.js
const users = [
  {
    name: "Harshal Yadav",
    title: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Passionate about building responsive UI with React.",
    skills: ["React", "JavaScript", "CSS"],
    email: "harshal@example.com",
    socials: [
      { platform: "GitHub", url: "https://github.com/harshal" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/harshal" },
    ],
    layout: "detailed",
  },
  {
    name: "Jane Doe",
    title: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=2",
    skills: ["Figma", "Sketch", "Adobe XD"],
    layout: "compact",
  },
  {
    name: "John Smith",
    title: "Backend Developer",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Specializes in Node.js and microservices.",
    email: "john@example.com",
    layout: "detailed",
  },
];

export default users;
