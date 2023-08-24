import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from "../../../../../../../vite.svg"
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + CI/CD</h1>
      <div className="card">
        <div className='buttons-container'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={() => setCount(0)}>
            Reset count
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Testing workflows on Github
        </p>
        <ol>
          <li>Created repo on Github with some base code</li>
          <li>Created .github/workflows folder with prod.yaml file</li>
          <li>Introduced some basic checks inside</li>
          <li>Created Netlify secret tokens</li>
          <li>Commit changes and push the code to master to see deployments under Action tab on Github</li>
        </ol>
      </div>
    </>
  )
}

export default App
