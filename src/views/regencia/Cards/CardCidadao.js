
import { cilBuilding, cilClipboard, cilOptions, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CAvatar, CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CNavItem, CRow, CNavLink, CFormInput, CFormLabel, CFormText } from "@coreui/react";
import { Box, Button, Container, Drawer, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HistoryIcon from '@mui/icons-material/History';
import { NavLink } from "react-router-dom";
import ContainerTitle from "./Utils/ContainerTitle";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ListView from "../../../components/ListView/ListView";
import { formatDate } from "../../../utils/Utils";
import { fomartCPF } from "./Utils/FormatInput";
import { useSelector } from "react-redux";


const CardCidadao = ({ data, editerCidadao, deleteCidadao, historico }) => {
    const [colorBorderLider, setColorBorderLider] = useState('')

    const user = useSelector((state) => state.user)


    //const [colorBordeStart, setColorBordeStart] = useState('border-start-success')
    const setColorBorder = () => {

        if (data.lidere === null) {
            setColorBorderLider('border-start-secondary')
        } else {
            setColorBorderLider('border-start-success')
        }

    }

    useEffect(() => {
        setColorBorder()
    }, [data])



    const [anchorEl, setAnchorEl] = useState(null);

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawer = () => {
        setOpenDrawer(!openDrawer)
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(false);
    };

    const handleMenuDelete = () => {
        deleteCidadao(data)
        handleClose()
    };

    const handleMenuEditer = () => {
        editerCidadao(data)
        handleClose()
    };

    const handleHistorico = () => {
        historico(data)
        handleClose()
    }

    // const url = `/cidadoes/historico/${data.codigo}`

    const BoxInfo = ({ title, value, icon }) => {
        return (
            <Box sx={{ marginBottom: 0 }}>
                <CFormLabel htmlFor="exampleFormControlInput1" style={{ marginBottom: 1, fontWeight:'bold' ,fontSize: 15, textTransform:'uppercase'}}>
                    {title}
                </CFormLabel>
                <CFormText as="h5" style={{ fontSize: 17, marginTop: 1, textTransform:'uppercase'}} id="exampleFormControlInputHelpInline">
                    {value}
                </CFormText>
            </Box>
        )
    }

    const IconIf = ({ icon }) => {
        if (icon == 'lw') {
            return (
                <WhatsAppIcon sx={{ color: '#25D366' }} />
            )
        } else {
            return (
                <LocalPhoneIcon sx={{ color: '#fff' }}/>
            )
        }
    }

    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleMenuEditer} >
                    <EditIcon sx={{ marginRight: 1 }} />
                    Editar
                </MenuItem>
                {
                    user.user.level == 'adm' && 
                    <MenuItem onClick={handleMenuDelete}>
                        <DeleteIcon sx={{ marginRight: 1 }} />
                        Deletar
                    </MenuItem>
                }
                
                <MenuItem onClick={handleDrawer}>
                    <RemoveRedEyeIcon sx={{ marginRight: 1 }} />
                    Ver
                </MenuItem>
                <MenuItem onClick={handleHistorico}>
                    <HistoryIcon sx={{ marginRight: 1 }} />
                    Historico
                </MenuItem>


            </Menu>


            <Box className={`w-100 mb-3 border rounded p-3 border-start border-start-5 ${colorBorderLider}`}>
                <Box sx={{ display: 'flex', width: "100%" }}>

                    <CNavLink style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Box sx={{ width: '6%', marginRight: 3, marginLeft: 1 }}>
                            <CIcon icon={cilUser} customClassName="nav-icon" />
                            {/* <CAvatar src={imgT} size="xl" /> */}
                        </Box>

                        <ContainerTitle
                            title={'Cidadão'}
                            info={data.name}
                        />

                        <ContainerTitle
                            title={'Nascimento'}
                            info={formatDate(data.birth)}
                        />

                        <ContainerTitle
                            title={'Bairro'}
                            info={data.citizens_address.district}
                        />

                    </CNavLink>
                    <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <CIcon icon={cilOptions} size="lg" aria-haspopup="true" />
                        </Button>
                    </Box>
                </Box>
            </Box>



            <Drawer open={openDrawer} anchor={'right'} onClose={() => setOpenDrawer(false)}>

                <Box sx={{
                    width: "22vw",
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                    marginTop: 0,
                    bgcolor: '#1D222B',
                }}>

                    <Box sx={{
                        height: '120%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 1,
                        color: '#fff',
                        marginTop: 1,
                        // border: '1px solid #ccd1d7',
                        padding: 2,
                        borderRadius: 5,
                        textTransform: 'uppercase',
                        // bgcolor: '#ffff',
                        overflow: 'auto'
                    }}>

                        <BoxInfo
                            title={'Cidadão'}
                            value={data.name}
                        />

                        <BoxInfo
                            title={'Data de Nascimento'}
                            value={formatDate(data.birth)}
                        />

                        <BoxInfo
                            title={'CPF'}
                            value={fomartCPF(data.cpf)}
                        />

                        <BoxInfo
                            title={'RG'}
                            value={data.rg}
                        />


                        <Box sx={{ marginBottom: 1 }}>
                            <CFormLabel htmlFor="exampleFormControlInput1" style={{ marginBottom: 1,fontWeight:'bold', fontSize: 15 }}>
                                Endereço
                            </CFormLabel>
                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">
                                {data.citizens_address.street}
                            </CFormText>
                            
                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">
                                nº{data.citizens_address.home}
                                {data.citizens_address.quatrain != '' ?
                                '/ Q' + data.citizens_address.quatrain + "," : ''}
                            </CFormText>

                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">
                                Bairro {data.citizens_address.district}
                            </CFormText>

                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">
                                Cidade de {data.citizens_address.city}
                            </CFormText>

                            {
                                data.citizens_address.complement != '' ?
                                (<BoxInfo
                                    title={'Ponto de Referencia'}
                                    value={`${data.citizens_address.complement }` }
                                />):
                                ''
                            }
                                
                            
                        </Box>

                        <Box>
                            <CFormLabel htmlFor="exampleFormControlInput1" style={{ marginBottom: 1, fontSize: 15,fontWeight:'bold' }}>Contato</CFormLabel>

                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">

                                <IconIf icon={data.citizens_contact.mode} />

                                {
                                    data.citizens_contact.mode == 'lw'?
                                    (<a style={{ marginLeft: 2, color: '#fff' }} href={`https://wa.me/55${data.citizens_contact.ddd}${data.citizens_contact.phone}`} target="_blank" >
                                        ({data.citizens_contact.ddd}) {data.citizens_contact.phone}
                                    </a>):
                                    `(${data.citizens_contact.ddd}) ${data.citizens_contact.phone}`
                                    
                                }
                                

                            </CFormText>

                        </Box>




                    </Box>
                    <Box sx={{
                        alignSelf: 'center',
                        marginTop: 3,
                    }}>
                        <CButton color="danger" style={{ color: '#fff' }} onClick={handleDrawer}>
                            Fechar
                        </CButton>

                    </Box>

                </Box>

            </Drawer>
        </>
    )
}


export default React.memo(CardCidadao)
