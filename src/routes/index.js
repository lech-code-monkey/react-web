import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// 首页
import Main from '../pages/Main'

// 登录
import Login from '../pages/auth/Login'

class MRoute extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    {/*首页*/}
                    <Route exact path='/' component={Main} />
                    <Route path='/main' component={Main} />

                    {/*登录*/}
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MRoute