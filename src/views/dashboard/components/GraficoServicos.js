import { useEffect, useRef, useState } from "react"
import { instanceAxios } from "../../../config/api"
import { CRow } from "@coreui/react"
import { CChart } from "@coreui/react-chartjs"
import { getStyle } from "@coreui/utils"

const GraficoServicos = () => {

    const chartRef = useRef(null)

    const [graficService, setGraficService] = useState([])

    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio ', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], // 9 labels
        datasets: graficService,
        //[
        //   {
        //     label: 'Clinico Geral',
        //     backgroundColor: '#6261cc',
        //     borderColor: '#6261cc',
        //     data: [4, 20, 10, 5, 0, 3, 25, 7, 20, 6, 32, 14],
        //   },
        //   {
        //     label: 'Odontologia',
        //     backgroundColor: '#fff',
        //     borderColor: '#fff',
        //     data: [5, 2, 10, 29, 10, 46, 9, 0, 20, 2, 3, 10],
        //   },

        //   {
        //     label: 'Psicilogo',
        //     backgroundColor: '#3399FF',
        //     borderColor: '##3399FF',
        //     data: [4, 0, 0, 23, 5, 0, 9, 8, 25, 2, 4, 1],
        //   },

        //   {
        //     label: 'RG',
        //     backgroundColor: '#249542',
        //     borderColor: '#249542',
        //     data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 25, 42, 100],
        //   },
        // ],
    }

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
        const grafic_services = await instanceAxios.get('/report/dashboard/grafic')
        setGraficService(grafic_services.data)

    }

    useEffect(() => {

        api()

    }, [])


    return (
        <CRow style={{ justifyContent: 'center', marginTop: 20, marginBottom: 45 }} className=''>
            <h4>Serviços por Mês</h4>
            <CChart type="bar" style={{ width: '80%' }} options={options} data={data} ref={chartRef} />
        </CRow>
    )
}

export { GraficoServicos }