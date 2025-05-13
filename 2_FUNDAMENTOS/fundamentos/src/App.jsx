import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {
  return (
    <>
      <div className='App'>
        <h1>React é maneiro</h1>
        <h1>Fundamentos REACT</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <Events />
      </div>
    </>
  )
}

export default App
