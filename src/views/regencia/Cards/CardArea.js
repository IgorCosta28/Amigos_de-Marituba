// import React, { useEffect, useRef, useState } from "react";

// import { cilOptions, cilTerrain } from "@coreui/icons";
// import CIcon from "@coreui/icons-react";
// import {  CNavLink } from "@coreui/react";
// import { Box, Button, Menu, MenuItem } from "@mui/material";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { NavLink } from "react-router-dom";

// import ContainerTitle from "./Utils/ContainerTitle";

// const CardArea = ({data,editerArea,deleteArea}) => {

//     const {zone,uid,type} = data

//     const [anchorEl, setAnchorEl] = useState(null);

//     const open = Boolean(anchorEl);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const handleDelete = () => {
//         deleteArea(data.id)
//     };

//     const handleEditer = () => {
//         editerArea(data)
//         handleClose()
//     };

//     const pathLocal = ()=>{
//         const path = JSON.parse(localStorage.getItem('@PATH-PAGE'))
//         path.push(zone)
//         localStorage.setItem('@PATH-PAGE',JSON.stringify(path))
//     }
    
//     const url = `/lideres/${uid}`

//     return (
//         <>
//             <Menu
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 MenuListProps={{
//                     'aria-labelledby': 'basic-button',
//                 }}
//             >
//                 <MenuItem onClick={handleEditer}>
//                     <EditIcon sx={{ marginRight: 1 }} />
//                     Editar
//                 </MenuItem>
//                 <MenuItem onClick={handleDelete}>
//                     <DeleteIcon sx={{ marginRight: 1 }} />
//                     Deletar
//                 </MenuItem>
//             </Menu>

//             <Box className="w-100 mb-3 border rounded p-3 border-start border-start-5 border-start-info">

//                 <Box  onClick={pathLocal} sx={{ display: 'flex', width: "100%" }}>

//                     <CNavLink style={{ display: 'flex', width: '100%',alignItems:'center', justifyContent:'space-evenly' }} to={url} as={NavLink}>
//                         <Box sx={{width:'6%', marginRight:3,marginLeft:1}}>
//                             <CIcon icon={cilTerrain} customClassName="nav-icon"/>
//                         </Box>
                        
//                         <ContainerTitle
//                             title={'Area'}
//                             info={zone}
//                         />

//                         <ContainerTitle
//                             title={'Tipo'}
//                             info={type}
//                         />

//                         <ContainerTitle
//                             title={'Codigo'}
//                             info={uid}
//                         />

//                     </CNavLink>

//                     <Box sx={{alignItems:'center', justifyContent:'center', display:'flex'}}>
//                         <Button
//                             id="basic-button"
//                             aria-controls={open ? 'basic-menu' : undefined}
//                             aria-haspopup="true"
//                             aria-expanded={open ? 'true' : undefined}
//                             onClick={handleClick}
//                         >
//                             <CIcon icon={cilOptions} size="lg" aria-haspopup="true" />

//                         </Button>
//                     </Box>

//                 </Box>

//             </Box>
//         </>
//     )
// }


// export default React.memo(CardArea)
