import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Api from './components/Api'

export default(
    <Switch>
        <Route path='/' component={Api}/>
    </Switch>
)