import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import BoltIcon from "@mui/icons-material/Bolt"
import BuildIcon from "@mui/icons-material/Build"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import TimerIcon from "@mui/icons-material/Timer"
import VerifiedIcon from "@mui/icons-material/Verified"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"

const serviceItems = [
  { icon: "📱", label: "Troca de tela" },
  { icon: "🔋", label: "Troca de bateria" },
  { icon: "🔌", label: "Conector de carga" },
  { icon: "📷", label: "Câmera e lentes" },
  { icon: "🔊", label: "Alto-falante" },
  { icon: "💧", label: "Dano por água" },
]

const highlights = [
  { icon: <TimerIcon />, title: "Serviço no dia", desc: "A maioria dos reparos prontos em horas" },
  { icon: <AttachMoneyIcon />, title: "Preço justo", desc: "Orçamento sem compromisso, transparência total" },
  { icon: <VerifiedIcon />, title: "Garantia", desc: "Todos os reparos com garantia inclusa" },
]

const Reparo = () => {
  return (
    <Box
      id="Reparo"
      sx={{
        background: "linear-gradient(180deg, #080808 0%, #0D0D0D 100%)",
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 16 },
      }}
    >
      {/* Accent line top */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,140,0,0.5), transparent)",
        }}
      />

      {/* BG glow */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(255,140,0,0.07) 0%, transparent 70%)",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        {/* HEADER */}
        <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Chip
            icon={<BuildIcon sx={{ fontSize: "16px !important", color: "#FF8C00 !important" }} />}
            label="ASSISTÊNCIA TÉCNICA"
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
              fontSize: { xs: "2rem", md: "3.2rem" },
              letterSpacing: "-1px",
              lineHeight: 1.15,
              color: "white",
              mb: 2,
            }}
          >
            Reparo{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #FF8C00, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              profissional
            </Box>
            {" "}de celulares
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 16, maxWidth: 480, mx: "auto" }}>
            Atendimento presencial no{" "}
            <Box component="span" sx={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
              Terminal de Carapina – Serra/ES
            </Box>
          </Typography>
        </Box>

        {/* MAIN LAYOUT */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            mb: 4,
          }}
        >
          {/* LEFT CARD – Services */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              p: { xs: 3, md: 4 },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 180,
                height: 180,
                background: "radial-gradient(circle, rgba(255,140,0,0.08) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            <Box display="flex" alignItems="center" gap={1.5} mb={3}>
              <Box
                sx={{
                  background: "rgba(255,140,0,0.15)",
                  borderRadius: "10px",
                  p: 1,
                  display: "flex",
                }}
              >
                <BoltIcon sx={{ color: "#FF8C00", fontSize: 20 }} />
              </Box>
              <Typography fontWeight={700} fontSize={18} color="white">
                Serviços Disponíveis
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1.5,
              }}
            >
              {serviceItems.map((s) => (
                <Box
                  key={s.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    p: 1.5,
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.2s",
                    "&:hover": {
                      background: "rgba(255,140,0,0.06)",
                      borderColor: "rgba(255,140,0,0.2)",
                    },
                  }}
                >
                  <Typography fontSize={20}>{s.icon}</Typography>
                  <Typography fontSize={13} fontWeight={600} color="rgba(255,255,255,0.85)">
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                mt: 3,
                p: 2,
                borderRadius: "12px",
                background: "rgba(255,140,0,0.06)",
                border: "1px solid rgba(255,140,0,0.15)",
              }}
            >
              <Typography fontSize={13} color="#FFB347" fontWeight={600}>
                ⚡ Telas • Incel, OLED, AMOLED — Baterias originais e compatíveis
              </Typography>
            </Box>
          </Box>

          {/* RIGHT CARD – Why us */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              p: { xs: 3, md: 4 },
            }}
          >
            <Box display="flex" alignItems="center" gap={1.5} mb={3}>
              <Box
                sx={{
                  background: "rgba(255,140,0,0.15)",
                  borderRadius: "10px",
                  p: 1,
                  display: "flex",
                }}
              >
                <CheckCircleIcon sx={{ color: "#FF8C00", fontSize: 20 }} />
              </Box>
              <Typography fontWeight={700} fontSize={18} color="white">
                Por que escolher a UGO?
              </Typography>
            </Box>

            <Stack spacing={2.5}>
              {highlights.map((h, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    gap: 2,
                    p: 2,
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.2s",
                    "&:hover": {
                      background: "rgba(255,140,0,0.05)",
                      borderColor: "rgba(255,140,0,0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      mt: 0.2,
                      color: "#FF8C00",
                      flexShrink: 0,
                      "& svg": { fontSize: 22 },
                    }}
                  >
                    {h.icon}
                  </Box>
                  <Box>
                    <Typography fontWeight={700} fontSize={15} color="white" mb={0.3}>
                      {h.title}
                    </Typography>
                    <Typography fontSize={13} color="rgba(255,255,255,0.5)">
                      {h.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* CTA */}
        <Box textAlign="center" pt={2}>
          <Button
            startIcon={<WhatsAppIcon />}
            variant="contained"
            href="https://wa.me/5527999346464?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20reparo%20do%20meu%20aparelho."
            target="_blank"
            sx={{
              background: "linear-gradient(135deg, #FF8C00, #FF6B00)",
              color: "white",
              fontWeight: 700,
              px: 5,
              py: 1.8,
              borderRadius: "12px",
              fontSize: 16,
              boxShadow: "0 8px 32px rgba(255,140,0,0.3)",
              "&:hover": {
                boxShadow: "0 12px 40px rgba(255,140,0,0.5)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Solicitar Orçamento no WhatsApp
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Reparo
