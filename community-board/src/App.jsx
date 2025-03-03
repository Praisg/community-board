import { useState } from 'react'
import './App.css'

function Card({ title, description, link, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  )
}

function App() {
  const resources = [
    {
      title: "CodePath",
      description: "Free courses in mobile and web development for college students",
      link: "https://codepath.org",
      image: "/images.png"
    }
    ,
    {
      title: "React Documentation",
      description: "Official React documentation for beginners and advanced developers",
      link: "https://react.dev",
      image: "https://reactjs.org/logo-og.png"
    },
    {
      title: "JavaScript MDN",
      description: "Comprehensive JavaScript learning resources",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      title: "GitHub Fundamentals",
      description: "Learn version control and collaboration with Git and GitHub",
      link: "https://github.com/skills/introduction-to-github",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
    {
      title: "Web.dev",
      description: "Build modern web experiences by Google",
      link: "https://web.dev",
      image: "https://web.dev/images/social.png"
    },
    {
      title: "Node.js Documentation",
      description: "Official Node.js documentation and guides",
      link: "https://nodejs.org/docs/latest/api/",
      image: "https://nodejs.org/static/images/logo.svg"
    },
    {
      title: "TypeScript Handbook",
      description: "Learn TypeScript from the official documentation",
      link: "https://www.typescriptlang.org/docs/",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    },
    {
      title: "Stack Overflow",
      description: "Community-driven Q&A for programmers",
      link: "https://stackoverflow.com",
      image: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png"
    },
    {
      title: "Python Documentation",
      description: "Official Python programming language documentation",
      link: "https://docs.python.org/3/",
      image: "https://www.python.org/static/community_logos/python-logo.png"
    }
    
  ]

  return (
    <div className="app">
      <h1>Software Engineering Learning Resources</h1>
      <div className="card-container">
        {resources.map((resource, index) => (
          <Card key={index} {...resource} />
        ))}
      </div>
    </div>
  )
}

export default App
