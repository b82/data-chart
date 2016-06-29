import React from 'react'
import ReactDOM from 'react-dom'
import BarChart from './components/BarChart'

class Main extends React.Component {

    render() {

        return (
            <div>
                <BarChart />
            </div>
        )

    }
}

ReactDOM.render(<Main />, document.getElementById('data-chart'))
