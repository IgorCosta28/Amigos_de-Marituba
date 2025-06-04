
import { cilBuilding, cilClipboard, cilLocationPin, cilOptions } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CAvatar, CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CNavItem, CRow, CNavLink, CFormInput, CFormLabel, CFormText } from "@coreui/react";
import { Box, Button, Container, Drawer, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NavLink } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import ContainerTitle from "./Utils/ContainerTitle";
import { formatDate } from "../../../utils/Utils";
import { fomartCPF } from "./Utils/FormatInput";

const CardLider = ({ data, editerLider, deleteLider }) => {

    const [colorBorderArea, setColorBorderArea] = useState('')

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
        deleteLider({ id: data.id, name: data.name, uid: data.uid })
        handleClose()
    };

    const handleMenuEditer = () => {
        editerLider(data)
        handleClose()
    };

    // const url = `/cidadoes/${data.uid}`

    const setColorBorder = () => {

        if (data.zone_uid === 'L00') {
            setColorBorderArea('border-start-secondary')
        } else {
            setColorBorderArea('border-start-info')
        }

    }

    useEffect(() => {
        setColorBorder()
    }, [data])


    const BoxInfo = ({ title, value, icon }) => {
        return (
            <Box sx={{ marginBottom: 0 }}>
                <CFormLabel htmlFor="exampleFormControlInput1" style={{ marginBottom: 1, fontWeight: 'bold', fontSize: 15, textTransform: 'uppercase' }}>
                    {title}
                </CFormLabel>
                <CFormText as="h5" style={{ fontSize: 17, marginTop: 1, textTransform: 'uppercase' }} id="exampleFormControlInputHelpInline">
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
                <LocalPhoneIcon sx={{ color: '#fff' }} />
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
                <MenuItem onClick={handleMenuEditer}>
                    <EditIcon sx={{ marginRight: 1 }} />
                    Editar
                </MenuItem>
                <MenuItem onClick={handleMenuDelete}>
                    <DeleteIcon sx={{ marginRight: 1 }} />
                    Deletar</MenuItem>
                <MenuItem onClick={handleDrawer}>
                    <RemoveRedEyeIcon sx={{ marginRight: 1 }} />
                    Ver</MenuItem>
            </Menu>

            <Box className={`w-100 mb-3 border rounded p-3 border-start border-start-5 ${colorBorderArea}`} >
                <Box  sx={{ display: 'flex', width: "100%" }}>

                    <CNavLink style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Box sx={{ width: '6%', marginRight: 3, marginLeft: 1 }}>
                            <CIcon icon={cilClipboard} customClassName="nav-icon" />
                            {/* <CAvatar src={imgT} size="xl" /> */}
                        </Box>

                        <ContainerTitle
                            title={'Lider'}
                            info={data.name}
                        />

                        <ContainerTitle
                            title={'CPF'}
                            info={fomartCPF(data.cpf)}
                        />


                        <ContainerTitle
                            title={'Bairro'}
                            info={`${data.leaders_address.district}`}
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
                    {/* <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 1, marginTop: 2 }}>
                        <CAvatar src={imgT}
                            style={{ width: '110px', height: '110px', border: '0.5px solid #ccd1d7' }} />
                    </Box> */}

                    <Box sx={{
                        height: '120%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 1,
                        color: '#fff',
                        marginTop: 1,
                        padding: 2,
                        borderRadius: 5,
                        textTransform: 'uppercase',
                        overflow: 'auto'
                    }}>

                        <BoxInfo
                            title={'Lider'}
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
                            title={'Codigo Lider'}
                            value={data.uid}
                        />


                        <BoxInfo

                            title={'Email'}
                            value={data.email}
                        />

                        <Box sx={{ marginBottom: 1 }}>
                            <CFormLabel htmlFor="exampleFormControlInput1" style={{ marginBottom: 1, fontWeight: 'bold', fontSize: 15 }}>
                                Endereço
                            </CFormLabel>
                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">
                                {data.leaders_address.street}
                            </CFormText>

                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">
                                nº{data.leaders_address.home}
                                {data.leaders_address.quatrain != '' ?
                                    '/ Q' + data.leaders_address.quatrain + "," : ''}
                            </CFormText>

                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">
                                Bairro {data.leaders_address.district}
                            </CFormText>

                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">
                                Cidade de {data.leaders_address.city}
                            </CFormText>

                            {
                                data.leaders_address.complement != '' ?
                                    (<BoxInfo
                                        title={'Ponto de Referencia'}
                                        value={`${data.leaders_address.complement}`}
                                    />) :
                                    ''
                            }


                        </Box>

                        <Box>
                            <CFormLabel htmlFor="exampleFormControlInput1" style={{ marginBottom: 1, fontSize: 12 }}>Contatos</CFormLabel>

                            <CFormText as="h5" style={{ fontSize: 17, marginTop: 1 }} id="exampleFormControlInputHelpInline">

                                <IconIf icon={data.leaders_contact.mode} />

                                {
                                    data.leaders_contact.mode == 'lw' ?
                                        (<a style={{ marginLeft: 2, color: '#fff' }} href={`https://wa.me/55${data.leaders_contact.ddd}${data.leaders_contact.phone}`} target="_blank" >
                                            ({data.leaders_contact.ddd}) {data.leaders_contact.phone}
                                        </a>) :
                                        `(${data.leaders_contact.ddd}) ${data.leaders_contact.phone}`

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


export default React.memo(CardLider)
