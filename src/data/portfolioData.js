// src/data/portfolioData.js - ตัวอย่างที่นักศึกษาต้องทำ
export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured online store built with React and Node.js",
    image: "/images/ecommerce-project.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://my-ecommerce-demo.netlify.app",
    githubUrl: "https://github.com/username/ecommerce-project",
    featured: true
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    image: "/images/weather-app.jpg",
    technologies: ["React", "OpenWeather API", "CSS3"],
    demoUrl: "https://my-weather-app.netlify.app",
    githubUrl: "https://github.com/username/weather-app",
    featured: false
  },
  // นักศึกษาเพิ่มอย่างน้อย 3 projects
];