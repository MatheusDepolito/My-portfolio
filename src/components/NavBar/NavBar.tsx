import { AppBar, IconButton, MenuItem, Toolbar, styled } from "@mui/material"
import { useTranslation } from "react-i18next"
import Brasil from '../../assets/images/brasil.png'
import Eua from '../../assets/images/eua.png'

const NavBar = () => {
    const { t, i18n } = useTranslation()

    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
      };

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem component="a" href={"#about"}>{t('About')}</MenuItem>
                    <MenuItem component="a" href={"#skills"}>{t('Skills')}</MenuItem>
                    <MenuItem component="a" href={"#projects"}>{t('Projects')}</MenuItem>

                    <div>
                        <div>
                            <IconButton onClick={() => changeLanguage('en')} color="inherit">
                                <img src={Eua} alt="English" width="24" height="24" />
                            </IconButton>
                            <IconButton onClick={() => changeLanguage('pt')} color="inherit">
                                <img src={Brasil} alt="Português" width="24" height="24" />
                            </IconButton>
                        </div>
                    </div>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar