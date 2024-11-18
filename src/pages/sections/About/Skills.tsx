import { styled } from "@mui/material"
import theme from "../../../theme";



const Skills = () => {
  const StyledSkills = styled("div")(({ theme }) => ({
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
      <StyledSkills>
        Skills
      </StyledSkills>
    </>
  )
}

export default Skills