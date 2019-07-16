import React from 'react'
import ReactDOM from 'react-dom'
import '../src/styles/index'
import Routes from './routes/index'
import {
    Provider
} from 'mobx-react'
import * as stores from './stores'
import * as serviceWorker from './registerServiceWorker'
//时间格式本地化
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

ReactDOM.render( 
    <Provider {...stores}> 
        <Routes />
    </Provider>,
    document.getElementById('root')
)
serviceWorker.unregister()