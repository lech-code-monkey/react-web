import React, { Component } from 'react'
import { Button } from 'antd'

class Login extends Component {
    back = () => this.props.history.goBack()

    render () { 
        return (
            <div className="text-center" style={{padding: 20}}>
                <h2>This is Login</h2>
                <Button onClick={this.back}>Back to Login</Button>
            </div>
           
        )
    }
}

export default Login