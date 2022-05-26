import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import InstitutionalTheme from '../theme/InstitutionalTheme'

import LogInScreen from './auth/LogInScreen'
import LogOutScreen from './auth/LogOutScreen'
import ProfileScreen from './auth/ProfileScreen'

import ListAutoridadesScreen from './autoridades/ListAutoridadesScreen'

import DetailDistritoScreen from './distritos/DetailDistritoScreen'
import ListDistritosScreen from './distritos/ListDistritosScreen'

import ListDomiciliosScreen from './domicilios/ListDomiciliosScreen'

import ListMateriasScreen from './materias/ListMateriasScreen'

import ListModulosScreen from './modulos/ListModulosScreen'

import DetailOficinaScreen from './oficinas/DetailOficinaScreen'
import ListOficinasScreen from './oficinas/ListOficinasScreen'

import ListRolesScreen from './roles/ListRolesScreen'

import StartScreen from './start/StartScreen'

import Navigation from './ui/Navigation'


const Layout = () => {
    return(
        <ThemeProvider theme={InstitutionalTheme}>
            <Navigation />
            <Outlet />
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
                        <Route path='autoridades' element={<ListAutoridadesScreen />} />
                        <Route path='distritos' element={<ListDistritosScreen />} />
                        <Route path='distritos/:id' element={<DetailDistritoScreen />} />
                        <Route path='materias' element={<ListMateriasScreen />} />
                    </Route>
                    <Route path='inventarios'>
                        <Route path='domicilios' element={<ListDomiciliosScreen />} />
                        <Route path='oficinas' element={<ListOficinasScreen />} />
                        <Route path='oficinas/:id' element={<DetailOficinaScreen />} />
                    </Route>
                    <Route path='usuarios'>
                        <Route path='modulos' element={<ListModulosScreen />} />
                        <Route path='roles' element={<ListRolesScreen />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App
