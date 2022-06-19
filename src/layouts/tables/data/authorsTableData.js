/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @mui material components
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

import { useState } from "react";

export default function data() {
  const Persona = ({ image, name, email, identificacion }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="lg" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography display="block" variant="caption">Identificacion: {identificacion}</MDTypography>
        <MDTypography display="block" variant="caption">Direccion: {email}</MDTypography>

      </MDBox>
    </MDBox>
  );

  const Promesa = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="center">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const FecNacimiento = ({ fec }) => (
    <MDBox lineHeight={1} textAlign="center">
      <MDTypography variant="caption">{fec}</MDTypography>
    </MDBox>
  );

  const Edad = ({ edad }) => (
    <MDBox lineHeight={1} textAlign="center">
      <MDTypography variant="caption">{edad}</MDTypography>
    </MDBox>
  );

  const Activaciones = ({ activo }) => (
    <MDBox ml={-1}>
      <MDBox lineHeight={1} textAlign="left">
        {activo === "Si" ? (<MDBadge badgeContent={activo} color="success" variant="gradient" size="lg" />) :
          (<MDBadge badgeContent={activo} color="dark" variant="gradient" size="lg" />)}
      </MDBox>
    </MDBox>
  );

  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const ActionsMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Ver</MenuItem>
      <MenuItem onClick={closeMenu}>Editar</MenuItem>
      <MenuItem onClick={closeMenu}>Etapas</MenuItem>
      <MenuItem onClick={closeMenu}>Trillos</MenuItem>
    </Menu>
  );

  const Acciones = () => (
    <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
      <MDBox color="text" px={2}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
          more_vert
        </Icon>
      </MDBox>
      {ActionsMenu}
    </MDBox>
  );

  return {
    columns: [
      { Header: "Datos Personales", accessor: "Datos", width: "35%", align: "left" },
      { Header: "Fecha Nacimiento", accessor: "FechaNacimiento", align: "center" },
      { Header: "Edad", accessor: "edad", align: "left" },
      { Header: "Promesado en Wak", accessor: "promesa", align: "center" },
      { Header: "Activo", accessor: "status", align: "center" },
      { Header: "Inscrito CNS", accessor: "cns", align: "center" },
      { Header: "Trabaja PPA", accessor: "ppa", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        Datos: <Persona image={team2} name="Yeikel Jose Morales" email="50 Norte De La Escuela Dr. Fernando Guzmán Mata, Casa J 12" identificacion="3-555-674" />,
        status: <Activaciones activo="Si"/>,
        FechaNacimiento: <FecNacimiento fec="19/10/2019" />,
        edad: (<Edad edad="17" />),
        ppa: <Activaciones activo="Si"/>,
        promesa: <Promesa title="Si" description="19/10/2019" />,
        cns: <Activaciones activo="Si"/>,
        action: <Acciones />,
      },
      {
        Datos: <Persona image={team3} name="Danixia De Los Angeles Loría Solano" email="del Ebais en San Blas 25 mts norte y 25 mts este 5ta casa al lado izquierdo" identificacion="3-556-478" />,
        status: <Activaciones activo="Si" />,
        FechaNacimiento: <FecNacimiento fec="19/10/2019" />,
        edad: (<Edad edad="15" />),
        ppa: <Activaciones activo="Si"/>,
        promesa: <Promesa title="Si" description="04/07/2020" />,
        cns: <Activaciones activo="No"/>,
        action: <Acciones />,
      },
    ],
  };
}
