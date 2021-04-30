import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import styled from 'styled-components'
import { AppNavigation } from './components/common/AppNavigation'
import { ROUTE } from './constants'
import { CharacterPage } from './pages/character'
import { NewsPage } from './pages/news'
import { RulesPage } from './pages/rules'
import { StoriesPage } from './pages/stories'

function App() {
  return (
    <RecoilRoot>
      <Router>
        <AppNavigation />
        <Body>
          <Switch>
            <Route exact path={ROUTE.rules} component={RulesPage} />
            <Route exact path={ROUTE.character} component={CharacterPage} />
            <Route exact path={ROUTE.stories} component={StoriesPage} />
            <Route exact path={ROUTE.news} component={NewsPage} />
            <Route exact path={ROUTE.top} component={NewsPage} />
            <Route component={NewsPage} />
          </Switch>
        </Body>
      </Router>
    </RecoilRoot>
  )
    
}

const Body = styled.div`
  padding-top: 7.875rem;
`

export default App
