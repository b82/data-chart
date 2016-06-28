import React from 'react'
import ChartistGraph from 'react-chartist'

export default class LineChart extends React.Component {

    constructor(){
        super()
        this.state = {
            data: {
                labels: [],
                series: [[]]
            },
            options: {
                high: 1,
                low: -0.5,
                axisX: {
                    labelInterpolationFnc: function(value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                },
                height: '400px'
            },
            type: 'Bar'
        }
    }

    componentDidMount() {
        var self = this,
            arrayData = {
                labels: [],
                series: [[]]
            };

        $.getJSON( "http://www.ncdc.noaa.gov/cag/time-series/global/globe/land_ocean/1/5/1880-2016.json", function( res ) {
            $.each(res.data, function(k, v) {
                arrayData.labels.push(k)
                arrayData.series[0].push(v)
            })
            self.setState({data: arrayData})
        })
    }

    render() {

        return (
            <div>
                <ChartistGraph data={this.state.data} options={this.state.options} type={this.state.type} />
            </div>
        )

    }

}
