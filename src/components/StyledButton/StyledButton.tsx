import { styled } from "@mui/material"
import theme from "../../theme"
import { ReactNode } from "react"

interface StyledButtonProps {
  children: ReactNode,
  onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {

  const StyledButton = styled("button")(() => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "3px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
  }))

  return (
    <>
      <StyledButton onClick={onClick}>
        { children }
      </StyledButton>
    </>
  )
}

export default StyledButton