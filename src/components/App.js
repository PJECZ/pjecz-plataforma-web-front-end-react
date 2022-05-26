import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import InstitutionalTheme from '../theme/InstitutionalTheme'

// components auth
import LogInScreen from './auth/LogInScreen'
import LogOutScreen from './auth/LogOutScreen'
import ProfileScreen from './auth/ProfileScreen'

// components autoridades
import AutoridadesScreen from './autoridades/AutoridadesScreen'
import DistritosScreen from './autoridades/DistritosScreen'
import DistritoScreen from './autoridades/DistritoScreen'
import MateriasScreen from './autoridades/MateriasScreen'

// components inventarios
import DomiciliosScreen from './inventarios/DomiciliosScreen'
import OficinasScreen from './inventarios/OficinasScreen'

// components start
import StartScreen from './start/StartScreen'

// components ui
import Navigation from './ui/Navigation'

// components usuarios
import ModulosScreen from './usuarios/ModulosScreen'
import RolesScreen from './usuarios/RolesScreen'


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
                        <Route path='autoridades' element={<AutoridadesScreen />} />
                        <Route path='distritos' element={<DistritosScreen />} />
                        <Route path='distritos/:id' element={<DistritoScreen />} />
                        <Route path='materias' element={<MateriasScreen />} />
                    </Route>
                    <Route path='inventarios'>
                        <Route path='domicilios' element={<DomiciliosScreen />} />
                        <Route path='oficinas' element={<OficinasScreen />} />
                    </Route>
                    <Route path='usuarios'>
                        <Route path='modulos' element={<ModulosScreen />} />
                        <Route path='roles' element={<RolesScreen />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
