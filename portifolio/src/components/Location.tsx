import { Box, Container, Typography } from "@mui/material"
import Estabelecimento from "../images/Estabelecimento.jpg"
import styled from "@emotion/styled"

const EstabelecimentoImg = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: 12,
})

const hoverCard = {
  backgroundColor: "#2e2d2dff",
  padding: 3,
  borderRadius: 3,
  boxShadow: 3,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: 8,
  },
}

const Location = () => {
  return (
    <Box id="localizacao" py={11} bgcolor="background.paper">
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={2}>
          Nossa <span style={{ color: "#FF8C00" }}>Localização</span>
        </Typography>

        <Typography mb={6} fontFamily="Arial Rounded MT Bold">
          📍 TERMINAL DE CARAPINA - SERRA / ES
        </Typography>

        {/* IMAGEM + MAPA */}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {/* IMAGEM */}
          <Box
            sx={{
              ...hoverCard,
              display: { xs: "none", md: "block" },
              maxWidth: 500,
            }}
          >
            <EstabelecimentoImg
              src={Estabelecimento}
              alt="Estabelecimento"
            />
          </Box>

          {/* MAPA */}
          <Box
            sx={{
              ...hoverCard,
              width: { xs: "100%", md: "60%" },
            }}
          >
            <iframe
              width="100%"
              height="300"
              style={{ borderRadius: 16, border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps?q=Terminal%20de%20Carapina%20Serra%20ES&output=embed"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Location
