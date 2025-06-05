import { CCol, CSpinner} from '@coreui/react'
import { Suspense } from 'react'
import { TotalCidadoesLideres } from './components/TotalCidadoes'
import { TotalAgendamentos } from './components/TotalAgendamentos'
import { GraficoServicos } from './components/GraficoServicos'
import { GraficoLideres } from './components/GraficoLideres'

const Dashboard = () => {

  return (
    <Suspense fallback={<CSpinner color="primary" />}>
      <CCol>

        <TotalCidadoesLideres/>

        <TotalAgendamentos/>
        
        <GraficoServicos/>

       <GraficoLideres/>
        
      </CCol>
    </Suspense>
  )
}

export default Dashboard
