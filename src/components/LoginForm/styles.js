import { styled } from "@mui/material/styles";
import { Container, Paper, Box } from "@mui/material";

export const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "100%",
  maxWidth: 400,
  backgroundColor: theme.palette.background.paper,
}));

export const StyledForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
