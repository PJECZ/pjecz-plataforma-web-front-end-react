import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import { InstitutionalTheme } from '../theme/InstitutionalTheme';

import { LogInScreen } from './auth/LogInScreen';
import { DistritosScreen } from './catalogos/DistritosScreen';
import { MateriasScreen } from './catalogos/MateriasScreen';
import { Navigation } from './ui/Navigation';


const Layout = () => {
    return(
        <ThemeProvider theme={InstitutionalTheme}>
            <Navigation />
            <Outlet />
        </ThemeProvider>
    );
}


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<LogInScreen />} />
                    <Route path='catalogos'>
                        <Route path='distritos' element={<DistritosScreen />} />
                        <Route path='materias' element={<MateriasScreen />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
