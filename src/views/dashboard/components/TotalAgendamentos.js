import { CCol, CRow, CWidgetStatsB } from "@coreui/react"
import { useEffect, useState } from "react"
import { instanceAxios } from "../../../config/api"

const TotalAgendamentos = () => {

    const [totalAgendamentos, setTotalAgendamentos] = useState(0)
    const [totalAusencias, setTotalAusencias] = useState(0)
    const [totalPresencas, setTotalPresencas] = useState(0)

    const api = async () => {
        const {data} = await instanceAxios.get('/report/dashboard/schedulings')

        setTotalAgendamentos(data[0] ? data[0].total : 0)
        setTotalAusencias(data[0] ? data[0].absence : 0)
        setTotalPresencas(data[0] ? data[0].attendance : 0)

    }

    useEffect(() => {

        api()

    }, [])


    return (
        <CRow >
            <h4 className='mb-3'>Agendamentos</h4>
            <CCol>
                <CWidgetStatsB
                    className="mb-3"
                    color="success"
                    inverse
                    progress={{ value: totalAgendamentos }}
                    title="Total"
                    text='Agendamentos Registrados'
                    value={totalAgendamentos}
                />
            </CCol>

            <CCol>
                <CWidgetStatsB
                    className="mb-3"
                    color="primary"
                    inverse
                    progress={{ value: totalPresencas }}
                    title="Compareceram"
                    text='cidadões que compareceram'
                    value={totalPresencas}
                />
            </CCol>

            <CCol>
                <CWidgetStatsB
                    className="mb-3"
                    color="danger"
                    inverse
                    progress={{ value: totalAusencias }}
                    title="Não compareceram"
                    text='Cidadões que não comparecerão'
                    value={totalAusencias}
                />
            </CCol>
        </CRow>
    )
}

export { TotalAgendamentos }