import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'


const settings = ['profile', 'logout'];

const NavLogIn = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={navigationSX.accountBoxDesktop}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon fontSize="medium" sx={navigationSX.accountIconDesktop} />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Link to='/{setting}'>
                            <Typography textAlign="center">
                                {setting}
                            </Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default NavLogIn
