import { Box, Typography, Button, Avatar } from "@mui/material";
import perfilImg from "../assets/perfil.png";
import { Icon } from "@mui/material";

const Aside = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(58, 58, 58)",
        width: "20%",
        padding: 3,
        margin: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        src={perfilImg}
        alt="Perfil"
        sx={{
          width: "90%",
          height: "30vh",
          borderRadius: 2,
          objectFit: "cover",
        }}
      />
      <Typography variant="h6" color="white" align="center">
        Frontend Developer
      </Typography>
      <Typography variant="h6" color="white" align="center">
        Bogotá, Colombia
      </Typography>
      <Box
        sx={{
          backgroundColor: "rgb(155, 155, 155)",
          width: "100%",
          height: "5vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 2,
          marginTop: "auto",
        }}
      >
        <Icon sx={{ color: "#fff" }}>face</Icon>
        <Icon sx={{ color: "#fff" }}>work</Icon>
        <Icon sx={{ color: "#fff" }}>email</Icon>
        <Icon sx={{ color: "#fff" }}>phone</Icon>
      </Box>
      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          background: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
          color: "#000",
          borderRadius: 2,
        }}
      >
        Let's Work Together
      </Button>
    </Box>
  );
};

export default Aside;
