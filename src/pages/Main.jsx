/**
 * 路由配置
 */
import React, { Component } from 'react'
import { Button } from 'antd'

class Main extends Component {
    login = () => this.props.history.push('login')

    render () { 
        return (
            <div className="text-center" style={{padding: 20}}>
                <h2>This is Index</h2>
                <Button onClick={this.login}>Go to Login</Button>
            </div>
        )
    }
}

export default Main