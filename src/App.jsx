import Header from './components/Header'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import IntroSection from './components/IntroSection'
import IntroEndSection from './components/IntroEndSection'
import SectionTablet from './components/SectionTablet'
import TableWithAutoNumbering from './components/TableWithAutoNumbering'
import ChooseSection from './components/ChooseSection'

function App() {
  return (
    <>
    <main>
      <Header/>
      <IntroSection/>
      <IntroEndSection/>
    </main>
    <section>
      <SectionTablet/>
    </section>
    <section>
      <ChooseSection/>
    </section>
    </>
  )
}

export default App
