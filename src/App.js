import React , {component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import CourseRegister from './components/CourseRegister'
import OnlineProfile from './components/OnlineProfile';
import Join from './components/Join'
import Login from './components/Login';
import SchoolStatus from './components/SchoolStatus';
import ImageMap from './components/ImageMap';
import Anchor from './components/Anchor'
import DateMonth from './components/DateMonth'
import NumberRange from './components/NumberRange'
import Color from './components/Color'
import Home from './components/Home';
import Navigation from './components/Navigation';
import styled from 'styled-components';
import Header from './components/Header';


const App = () => (
    <>
    <Layout>
        <Header />
      </Layout>
    <Navigation/>
    <Switch>
    <Route exact path='/' component = {Home}/>
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
    </Switch></>
  );

const Layout = styled.div`
    margin: 0 auto;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
`

export default App;
