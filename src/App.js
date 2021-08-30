import React , {component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import {CourseRegister, OnlineProfile, Join, Login, SchoolStatus, ImageMap, Anchor, DateMonth,NumberRange, 
        Color, Navigation, NavigationForJavaScript, Header} from './components/index'
import styled from 'styled-components';
import {Basic, ArrowFunction, Arguments, TemplateLiteral, LiteralMethod, Destructuring, Loop, ArrayMethod, 
        SpreadOperatorRestParameter, ObjectLiteral, Symbol, Class, Promise, Generator, Proxy, SetMap, Array, 
        ES2017, AsnycAwait, ES2018, ES2019, ES2020, TypeScript} from './modern-javascript/index'
import HomePage from './pages/HomePage';


const App = () => (
    <>
    <Layout>
    <Header />
    <Navigation/>
    <NavigationForJavaScript/>
    <Switch>
    <Route exact path='/' component = {HomePage}/>
    <Redirect from='/home' to = {'/'}/>
    <Route exact path='/login' component = {Login}/>
    <Route exact path='/join' component = {Join}/>
    <Route exact path='/online-profile' component = {OnlineProfile}/>
    <Route exact path='/course-register' component = {CourseRegister}/>
    <Route exact path='/school-status' component = {SchoolStatus}/>
    <Route exact path='/image-map' component = {ImageMap}/>
    <Route exact path='/anchor' component = {Anchor}/>
    <Route exact path='/date-month' component = {DateMonth}/>
    <Route exact path='/number-range' component = {NumberRange}/>
    <Route exact path='/color' component = {Color}/>
    <Route exact path='/basic' component = {Basic}/>
    <Route exact path='/arrowfunction' component = {ArrowFunction}/>
    <Route exact path='/arguments' component = {Arguments}/>
    <Route exact path='/template-literal' component = {TemplateLiteral}/>
    <Route exact path='/literal-method' component = {LiteralMethod}/>
    <Route exact path='/destructuring' component = {Destructuring}/>
    <Route exact path='/loop' component = {Loop}/>
    <Route exact path='/array-method' component = {ArrayMethod}/>
    <Route exact path='/spread-operator-rest-parameter' component = {SpreadOperatorRestParameter}/>
    <Route exact path='/object-literal' component = {ObjectLiteral}/>
    <Route exact path='/symbol' component = {Symbol}/>
    <Route exact path='/class' component = {Class}/>
    <Route exact path='/promise' component = {Promise}/>
    <Route exact path='/generator' component = {Generator}/>
    <Route exact path='/proxy' component = {Proxy}/>
    <Route exact path='/set-map' component = {SetMap}/>
    <Route exact path='/array' component = {Array}/>
    <Route exact path='/es2017' component = {ES2017}/>
    <Route exact path='/asnyc-await' component = {AsnycAwait}/>
    <Route exact path='/es2018' component = {ES2018}/>
    <Route exact path='/es2019' component = {ES2019}/>
    <Route exact path='/es2020' component = {ES2020}/>
    <Route exact path='/type-script' component = {TypeScript}/>
    </Switch>
    </Layout>
</>);

const Layout = styled.div`
    margin: 0 auto;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
`

export default App;
