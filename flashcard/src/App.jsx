import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const flashcards = [
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces"
    },
    {
      question: "What is JSX?",
      answer: "A syntax extension for JavaScript that allows writing HTML in React"
    },
    {
      question: "What is a React Component?",
      answer: "A reusable piece of UI that can be used to build more complex interfaces"
    },
    {
      question: "What is the virtual DOM?",
      answer: "A lightweight copy of the actual DOM that React uses to optimize rendering performance"
    },
    {
      question: "What is state in React?",
      answer: "A built-in object that stores data that can change over time and affects component rendering"
    },
    {
      question: "What are props in React?",
      answer: "Properties passed to components that allow them to receive data from their parent"
    },
    {
      question: "What is the useState hook?",
      answer: "A React hook that lets you add state to functional components"
    },
    {
      question: "What is the useEffect hook?",
      answer: "A hook that lets you perform side effects in function components"
    },
    {
      question: "What is React Router?",
      answer: "A standard library for routing in React applications"
    },
    {
      question: "What is Redux?",
      answer: "A state management library commonly used with React for managing application state"
    },
    {
      question: "What are React lifecycle methods?",
      answer: "Special methods that run at different stages of a component's existence"
    },
    {
      question: "What is conditional rendering?",
      answer: "The ability to render different content based on certain conditions"
    },
    {
      question: "What is React Context?",
      answer: "A way to pass data through the component tree without passing props manually"
    },
    {
      question: "What are React Refs?",
      answer: "References that provide a way to access DOM nodes or React elements"
    },
    {
      question: "What is prop drilling?",
      answer: "The process of passing props through multiple levels of components"
    },
    {
      question: "What is React Fragment?",
      answer: "A component that lets you group children without adding extra nodes to the DOM"
    },
    {
      question: "What are controlled components?",
      answer: "Form elements whose values are controlled by React state"
    },
    {
      question: "What are uncontrolled components?",
      answer: "Form elements that maintain their own internal state"
    },
    {
      question: "What is React Fiber?",
      answer: "React's core algorithm for rendering and updating the component tree"
    },
    {
      question: "What is code splitting?",
      answer: "The practice of splitting code into smaller chunks to improve performance"
    },
    {
      question: "What is React.memo()?",
      answer: "A higher-order component that can prevent unnecessary re-renders"
    },
    {
      question: "What is the useCallback hook?",
      answer: "A hook that returns a memoized version of a callback to optimize performance"
    },
    {
      question: "What is the useMemo hook?",
      answer: "A hook that memoizes computed values to optimize performance"
    },
    {
      question: "What is the useRef hook?",
      answer: "A hook that creates a mutable reference that persists across re-renders"
    },
    {
      question: "What are React portals?",
      answer: "A way to render children into a DOM node outside of the parent hierarchy"
    },
    {
      question: "What is React Suspense?",
      answer: "A feature that lets components wait for something before rendering"
    },
    {
      question: "What are Error Boundaries?",
      answer: "Components that catch JavaScript errors in child components"
    },
    {
      question: "What is React.lazy()?",
      answer: "A function that lets you render a dynamic import as a regular component"
    },
    {
      question: "What are React hooks rules?",
      answer: "Only call hooks at the top level and only call hooks from React functions"
    },
    {
      question: "What is the StrictMode component?",
      answer: "A development mode only component that highlights potential problems"
    }
]

  const getPreviousCard = () => {
    setCurrentIndex(currentIndex === 0 ? flashcards.length - 1 : currentIndex - 1)
  }

  const getNextCard = () => {
    setCurrentIndex((currentIndex + 1) % flashcards.length)
  }

  return (
    <div className="app">
      <h1>React Fundamentals Flashcards</h1>
      <p>Total Cards: {flashcards.length}</p>
      
      <Card 
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
        cardIndex={currentIndex} // Add this prop
      />
      
      <div className="button-container">
        <button className="prev-button" onClick={getPreviousCard}>Previous</button>
        <button className="next-button" onClick={getNextCard}>Next Card</button>
      </div>
    </div>
  )
}

export default App