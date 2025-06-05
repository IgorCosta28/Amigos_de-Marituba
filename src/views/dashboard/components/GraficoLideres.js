import { useEffect, useRef, useState } from "react"
import { instanceAxios } from "../../../config/api"
import { CRow } from "@coreui/react"
import { CChart } from "@coreui/react-chartjs"
import { getStyle } from "@coreui/utils"

const GraficoLideres = () => {

    const chartRef = useRef(null)

    const [totalLider, setTotalLider] = useState({})

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: getStyle('--cui-body-color'),
                },
            },
        },
        scales: {
            x: {

                ticks: {
                    color: getStyle('--cui-body-color'),
                },
                type: 'category',
            },
            y: {
                ticks: {
                    color: getStyle('--cui-body-color'),
                },
                beginAtZero: true,
            },
        },
    }

    const api = async () => {
        try{
            const data_leaders = await instanceAxios.get('/report/dashboard/leaders')
            setTotalLider(data_leaders.data)
        }catch{
            localStorage.clear()
        }
        

    }

    useEffect(() => {

        api()

    }, [])


    return (
        <CRow style={{ justifyContent: 'center', marginTop: 20, marginBottom: 45 }}>
            <h3>Agendamentos por Líder</h3>
            <CChart type="bar" style={{ width: '80%' }} options={options} data={totalLider} ref={chartRef} />
        </CRow>

    )
}

export { GraficoLideres }
