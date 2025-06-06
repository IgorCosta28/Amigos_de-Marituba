import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CPopover,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useForm } from 'react-hook-form'
import { instanceAxios } from '../../../config/api'
import { useDispatch } from 'react-redux'
import AlertRegistre from '../../../components/AlertRegistre/AlertRegistre'

const Login = () => {
  const userSession = useDispatch()

  const [isUser, setIsUser] = useState(false)
  const [isUserA, setIsUserA] = useState(false)


  const { reset, handleSubmit, register } = useForm()

  const handleClose = () => {
    setIsUser(false)
  };

  const handleSubmitLogin = async (dataSession) => {

      try {
        const { data } = await instanceAxios.post('/session', dataSession)
        instanceAxios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
        

        setIsUserA(true)

        setTimeout(() => {
          userSession({ type: 'set', user: data })
          localStorage.setItem('@user',JSON.stringify(data))
          handleClose()
        }, 1500)

      } catch {
        setIsUser(true)
        setTimeout(() => {
          handleClose()
        }, 3000)
        
      }
      reset({})
    

  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <AlertRegistre open={isUser} handleClose={handleClose}
        severity={'warning'} message={'Usúario não registrado no sistema'} />

      <AlertRegistre open={isUserA} handleClose={handleClose}
        severity={'success'} message={`Usúario Atenticado. Bem-Vindo!`} />

      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit(handleSubmitLogin)}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Acesso apenas dos lideres</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="CPF"
                        autoComplete="username"
                        {...register('login', { required: true })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        {...register('password', { required: true })}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4"
                          type='submit'
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                         <CPopover content="Entre em contato com um administrador para muda a senha" placement="right" trigger={['hover', 'focus']}>
                           <CButton color="link" className="px-0">
                              Esqueceu a senha?
                           </CButton>
                        </CPopover>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary" style={{ width: '44%', paddingTop: 10 }}>
                <CCardBody className="text-center">
                  <div>
                    <CImage fluid src={'/logo.ico'} width={180} height={170} style={{ marginBottom: 3 }} />
                    <p>
                      Projeto Amigos de Marituba, é uma projeto apoiado pela uzina da paz de marituba
                    </p>
                    <p>
                      Apoiador Igor Castro
                    </p>

                  </div>
                </CCardBody>
                <CCardFooter style={{ fontSize: 11, fontStyle: 'italic', textAlign: 'center' }}>
                  <span> Desenvolvido por Silva&Costa Technology&copy;Todos os Direitos Reservados</span>
                </CCardFooter>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default React.memo(Login)
