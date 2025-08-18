import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex flex-col items-center">
      {/* Original Vite content */}
      <div className="mb-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      
      {/* Tailwind test section */}
      <div className="mt-8 p-6 bg-blue-100 rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600">
          Tailwind Test
        </h1>
        <p className="mt-2 text-blue-800">
          Voljim!
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Najvise
        </button>
      </div>
    </div>
      <h1>Carlos is gordito</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Calorie count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
