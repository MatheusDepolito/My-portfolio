import { Box, Button, Container, Grid, Grid2, styled, Typography } from "@mui/material"
import Avatar from "../../../assets/images/eu.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../components/StyledButton/StyledButton";
import theme from "../../../theme";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
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

  const StyledImage = styled("img")(() => ({
    width: "75%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImage src={Avatar} />
              </Box>
            </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center">Matheus Depolito</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm Software Engineer</Typography>
                <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                  <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledButton onClick={() => console.log("download cv")}>
                      <DownloadIcon />
                        <Typography>
                          Download CV
                        </Typography>
                    </StyledButton>
                  </Grid>
                  <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledButton onClick={() => console.log("Select com linkedin e whatsapp")}>
                      <EmailIcon />
                        <Typography>
                          Contact me
                        </Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
