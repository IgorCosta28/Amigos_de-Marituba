import { useEffect, useState } from "react"
import { instanceAxios } from "../../../config/api"
import { CCol, CRow, CWidgetStatsB } from "@coreui/react"

const TotalCidadoesLideres = () => {

    const [total, setTotal] = useState({})

    const api = async ()=>{
        const {data} = await instanceAxios.get('/report/dashboard/total')
        setTotal(data[0] ? data[0] : { citizen: 0, leader: 0 })
    }

    useEffect(()=>{

        api()

    },[])


    return(
        <CRow >
          <h4 className='mb-3'>Registros</h4>
          <CCol>
            <CWidgetStatsB
              className="mb-3"
              inverse
              progress={{ value: total.citizen }}
              style={{
                fontSize: 17
              }}
              title="Cidadões"
              text='Cidadões Cadastrados no Sistema'
              value={total.citizen}
            />
          </CCol>

          <CCol>
            <CWidgetStatsB
              className="mb-3"
              inverse
              progress={{ value: total.leader }}
              title="Lideres"
              text='Lideres Cadastrados no Sistema'
              value={total.leader}
            />
          </CCol>
        </CRow>
    )
}

export {TotalCidadoesLideres}