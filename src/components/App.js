import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import UserState from '../context/user/UserState'

import InstitutionalTheme from '../theme/InstitutionalTheme'

import LogInScreen from './auth/LogInScreen'
import LogOutScreen from './auth/LogOutScreen'
import ProfileScreen from './auth/ProfileScreen'

import DetailAutoridadScreen from './autoridades/DetailAutoridadScreen'
import ListAutoridadesScreen from './autoridades/ListAutoridadesScreen'

import DetailDistritoScreen from './distritos/DetailDistritoScreen'
import ListDistritosScreen from './distritos/ListDistritosScreen'

import DetailDomicilioScreen from './domicilios/DetailDomicilioScreen'
import ListDomiciliosScreen from './domicilios/ListDomiciliosScreen'

import DetailMateriaScreen from './materias/DetailMateriaScreen'
import ListMateriasScreen from './materias/ListMateriasScreen'

import DetailModuloScreen from './modulos/DetailModuloScreen'
import ListModulosScreen from './modulos/ListModulosScreen'

import DetailOficinaScreen from './oficinas/DetailOficinaScreen'
import ListOficinasScreen from './oficinas/ListOficinasScreen'

import DetailRedamScreen from './redams/DetailRedamScreen'
import ListRedamsScreen from './redams/ListRedamsScreen'

import DetailRolScreen from './roles/DetailRolScreen'
import ListRolesScreen from './roles/ListRolesScreen'

import StartScreen from './start/StartScreen'

import Navigation from './ui/Navigation'


const Layout = () => {
    return(
        <ThemeProvider theme={InstitutionalTheme}>
            <UserState>
                <Navigation />
                <Outlet />
            </UserState>
        </ThemeProvider>
    )
}

const App = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<StartScreen />} />
                    <Route path='login' element={<LogInScreen />} />
                    <Route path='profile' element={<ProfileScreen />} />
                    <Route path='logout' element={<LogOutScreen />} />
                    <Route path='autoridades'>
                        <Route path='' element={<ListAutoridadesScreen />} />
                        <Route path=':id' element={<DetailAutoridadScreen />} />
                    </Route>
                    <Route path='domicilios'>
                        <Route path='' element={<ListDomiciliosScreen />} />
                        <Route path=':id' element={<DetailDomicilioScreen />} />
                    </Route>
                    <Route path='distritos'>
                        <Route path='' element={<ListDistritosScreen />} />
                        <Route path=':id' element={<DetailDistritoScreen />} />
                    </Route>
                    <Route path='materias'>
                        <Route path='' element={<ListMateriasScreen />} />
                        <Route path=':id' element={<DetailMateriaScreen />} />
                    </Route>
                    <Route path='modulos'>
                        <Route path='' element={<ListModulosScreen />} />
                        <Route path=':id' element={<DetailModuloScreen />} />
                    </Route>
                    <Route path='oficinas'>
                        <Route path='' element={<ListOficinasScreen />} />
                        <Route path=':id' element={<DetailOficinaScreen />} />
                    </Route>
                    <Route path='redam'>
                        <Route path='' element={<ListRedamsScreen />} />
                        <Route path=':id' element={<DetailRedamScreen />} />
                    </Route>
                    <Route path='roles'>
                        <Route path='' element={<ListRolesScreen />} />
                        <Route path=':id' element={<DetailRolScreen />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App
