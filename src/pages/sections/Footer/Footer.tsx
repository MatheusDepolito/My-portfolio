import { styled } from "@mui/material"


const Footer = () => {

  const StyledFooter = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    height: "20vh",
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
      <StyledFooter>
        Footer
      </StyledFooter>
    </>
  )
}

export default Footer