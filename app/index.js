import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


//A component is concerned of a state, lifecycle, UI
class App extends React.Component {
    render () {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)