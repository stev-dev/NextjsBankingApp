'use client'

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)


const DoghnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label: 'Banks',
                data: ['234', '345', '421'],
                backgroundColor: ["#0747b6", '#2265d8', '#3f91fa']
            }
        ],
        labels: ['bank 1', 'bank 2', 'bank 3'],
    }
    
    return (
        <div>
            <Doughnut 
            data={data}
            options={{
                cutout: '65%',
                plugins:{
                    legend:{
                        display: false
                    }
                }
            }}
            />
        </div>
  )
}

export default DoghnutChart