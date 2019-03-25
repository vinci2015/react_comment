import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root/root'

class App extends Component{
    render(){
        return(
           <Root/>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'))