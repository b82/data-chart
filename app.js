import React from 'react'
import ReactDOM from 'react-dom'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'

class Main extends React.Component {

    render() {

        return (
            <div>
                <LineChart />
                <BarChart />
            </div>
        )

    }
}

ReactDOM.render(<Main />, document.getElementById('data-chart'))
