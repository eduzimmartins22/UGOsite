import { Box, Container, Typography, Button, Chip } from "@mui/material"
import Estabelecimento from "../images/Estabelecimento.jpg"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import DirectionsIcon from "@mui/icons-material/Directions"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import MapIcon from "@mui/icons-material/Map"

const Location = () => {
  return (
    <Box
      id="localizacao"
      sx={{
        background: "linear-gradient(180deg, #0D0D0D 0%, #111114 100%)",
        py: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "40%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,140,0,0.4), transparent)",
        }}
      />

      <Container>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Chip
            icon={<MapIcon sx={{ fontSize: "16px !important", color: "#FF8C00 !important" }} />}
            label="ONDE ESTAMOS"
            sx={{
              mb: 3,
              background: "rgba(255,140,0,0.1)",
              border: "1px solid rgba(255,140,0,0.25)",
              color: "#FFB347",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 1.5,
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              letterSpacing: "-1px",
              color: "white",
              mb: 2,
            }}
          >
            Nossa{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #FF8C00, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Localização
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              color: "rgba(255,255,255,0.5)",
              flexWrap: "wrap",
              mb: 3,
            }}
          >
            <LocationOnIcon sx={{ color: "#FF8C00", fontSize: 18 }} />
            <Typography fontSize={15}>
              Terminal de Carapina – Serra / ES
            </Typography>
          </Box>

          <Button
            href="https://www.google.com/maps/search/?api=1&query=Terminal+de+Carapina+Serra+ES"
            target="_blank"
            startIcon={<DirectionsIcon />}
            sx={{
              background: "linear-gradient(135deg, #FF8C00, #FF6B00)",
              color: "white",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(255,140,0,0.3)",
              "&:hover": {
                boxShadow: "0 12px 32px rgba(255,140,0,0.5)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Abrir no Google Maps
          </Button>
        </Box>

        {/* Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {/* Photo */}
          <Box
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              minHeight: 320,
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={Estabelecimento}
              alt="Estabelecimento UGO Celulares"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                minHeight: 320,
                display: "block",
              }}
            />
            {/* overlay label */}
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                background: "rgba(8,8,8,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                px: 2,
                py: 1,
              }}
            >
              <Typography fontSize={13} fontWeight={700} color="white">
                UGO Celulares
              </Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                <AccessTimeIcon sx={{ fontSize: 12, color: "#FF8C00" }} />
                <Typography fontSize={11} color="rgba(255,255,255,0.6)">
                  Terminal de Carapina
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Map */}
          <Box
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              minHeight: 320,
              position: "relative",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: "absolute",
                inset: 0,
                minHeight: 320,
                filter: "brightness(0.85) saturate(0.8)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Terminal%20de%20Carapina%20Serra%20ES&output=embed"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Location
