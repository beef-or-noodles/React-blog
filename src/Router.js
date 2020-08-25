import React, { Suspense, lazy } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Layout from './components/layout/layout.jsx'
import MyLoader from './components/loading/MyLoader/index'
const Home = lazy(() => import('./pages/home/home.jsx'));
const Search = lazy(() => import('./pages/search/search.jsx'));
const Login = lazy(() => import('./pages/login.jsx'));
const List = lazy(() => import('./pages/list.jsx'));
const Content = lazy(() => import('./pages/content/content.jsx'));
const Comment = lazy(() => import('./pages/comment.jsx'));
const Nopage = lazy(() => import('./pages/noPage.jsx'));
function router(){
    return(
        <Router>
            <Layout>
                <Suspense fallback={<div><MyLoader/></div>}>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/home/:id?' exact component={Home}></Route>
                        <Route path='/search' exact component={Search}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/list/:id' exact component={List}></Route>
                        <Route path='/content/:id' exact component={Content}></Route>
                        <Route path='/comment' exact component={Comment}></Route>
                        <Route component={Nopage}></Route>
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    )
}
export default router