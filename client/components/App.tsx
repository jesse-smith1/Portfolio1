
import GitHub from './GitHub'
import Linkedin from './Linkedin'
import { Work } from './Work'
import { AboutMe } from './About'

function App() {
  return (
    <>
      <header className="header">

        <div className="GitLinkedIn">
          <GitHub />
          <Linkedin />
        </div>
        <h1>Jesse Smith | Portfolio</h1>

      </header>
      <AboutMe />
      <Work />
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
