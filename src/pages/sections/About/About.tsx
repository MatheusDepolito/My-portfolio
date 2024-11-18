import { styled } from "@mui/material"
import theme from "../../../theme";

const About = () => {

  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: "100px",

    },
    [theme.breakpoints.up('md')]: { // >=mobile
        paddingTop: "0",
    }
  }))
  
  return (
    <>
      <StyledAbout>
        About
      </StyledAbout>
    </>
  )
}

export default About