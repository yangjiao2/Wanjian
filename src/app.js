/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Global } from '@emotion/core'
import { desaturate, normalize, shade } from 'polished'
/* eslint react/jsx-max-props-per-line: 0 */
/* eslint react/jsx-sort-props: 0 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ContactPage from './pages/contact'
import HomePage from './pages/home'
import JoinPage from './pages/join'
import RecentPage from './pages/recent'
import SupportPage from './pages/support'
import { theme } from './theme'

const globalCSS = css`
  ${normalize()};
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "PingFang SC", -apple-system, Arial, Helvetica, sans-serif;
    color: ${desaturate(.8, shade(.4, theme.primary))}
  };
  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  };
  ul {
    margin: 0;
    padding: 0 18px;
  }
`

const App = props => {
  return (
    <React.Fragment>
      {/* 全局样式 */}
      <Global styles={globalCSS} />


      {/* 全局路由 */}
      <Router>

        {/* 全局头部 */}
        <Route path='/'>
          <Header />
          <Navigation />
        </Route>

        {/* 页面主体 */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/join' component={JoinPage} />
          <Route exact path='/recent' component={RecentPage} />
          <Route exact path='/support' component={SupportPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>

      </Router>
    </React.Fragment>
  )
}

export default App
