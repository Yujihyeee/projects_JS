import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationForJavaScript = () => (
    <Nav>
        <NavList>
            <NavItem><Link to = '/basic'>Basic</Link></NavItem>
            <NavItem><Link to = '/arrowfunction'>ArrowFunction</Link></NavItem>
            <NavItem><Link to = '/arguments'>Arguments</Link></NavItem>
            <NavItem><Link to = '/template-literal'>TemplateLiteral</Link></NavItem>
            <NavItem><Link to = '/literal-method'>LiteralMethod</Link></NavItem>
            <NavItem><Link to = '/destructuring'>Destructuring</Link></NavItem>
            <NavItem><Link to = '/loop'>Loop</Link></NavItem>
            <NavItem><Link to = '/array-method'>ArrayMethod</Link></NavItem>
        </NavList>
        <NavList>
            <NavItem><Link to = '/spread-operator-rest-parameter'>SpreadOperatorRestParameter</Link></NavItem>
            <NavItem><Link to = '/object-literal'>ObjectLiteral</Link></NavItem>
            <NavItem><Link to = '/symbol'>Symbol</Link></NavItem>
            <NavItem><Link to = '/class'>Class</Link></NavItem>
            <NavItem><Link to = '/promise'>Promise</Link></NavItem>
            <NavItem><Link to = '/generator'>Generator</Link></NavItem>
            <NavItem><Link to = '/proxy'>Proxy</Link></NavItem>
            <NavItem><Link to = '/set-map'>SetMap</Link></NavItem>
        </NavList>
        <NavList>
            <NavItem><Link to = '/array'>Array</Link></NavItem>
            <NavItem><Link to = '/es2017'>ES2017</Link></NavItem>
            <NavItem><Link to = '/asnyc-await'>AsnycAwait</Link></NavItem>
            <NavItem><Link to = '/es2018'>ES2018</Link></NavItem>
            <NavItem><Link to = '/es2019'>ES2019</Link></NavItem>
            <NavItem><Link to = '/es2020'>ES2020</Link></NavItem>
            <NavItem><Link to = '/type-script'>TypeScript</Link></NavItem>
        </NavList>
    </Nav>
)

export default NavigationForJavaScript;

const Nav = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px soild #d1d8e4;

`
const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: auto;
    margin-left: 20px;
    margin-top: 30px;
    display: flex;
`
