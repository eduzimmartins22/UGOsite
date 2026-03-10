import { Box, Button, Container, Typography, Stack, Chip } from "@mui/material"
import LogoBg from "../images/LogoH.png"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import StorefrontIcon from "@mui/icons-material/Storefront"
import BuildCircleIcon from "@mui/icons-material/BuildCircle"
import StarIcon from "@mui/icons-material/Star"

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* BG Logo watermark */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${LogoBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: { xs: "80%", md: "45%" },
          opacity: 0.04,
          zIndex: 0,
        }}
      />

      {/* Gradient orbs */}
      <Box
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(255,140,0,0.12) 0%, transparent 65%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(255,100,0,0.08) 0%, transparent 65%)",
          bottom: "15%",
          right: "10%",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container id="topo" sx={{ position: "relative", zIndex: 2, textAlign: "center", pt: { xs: 4, md: 0 } }}>
        {/* Badge */}
        <Box mb={4} display="flex" justifyContent="center">
          <Chip
            icon={<StorefrontIcon sx={{ fontSize: "16px !important", color: "#FF8C00 !important" }} />}
            label="Terminal de Carapina • Serra/ES"
            sx={{
              background: "rgba(255,140,0,0.1)",
              border: "1px solid rgba(255,140,0,0.3)",
              color: "#FFB347",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 0.5,
              py: 2.5,
              px: 1,
              "& .MuiChip-icon": { ml: 1 },
            }}
          />
        </Box>

        {/* Main headline */}
        <Typography
          sx={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.5rem" },
            lineHeight: 1.1,
            letterSpacing: "-2px",
            mb: 3,
            color: "white",
          }}
        >
          Tudo em tecnologia
          <Box
            component="br"
            sx={{ display: { xs: "none", sm: "block" } }}
          />
          {" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            num só lugar.
          </Box>
        </Typography>

        {/* Subheadline */}
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            mx: "auto",
            mb: 6,
            lineHeight: 1.8,
            fontWeight: 400,
          }}
        >
          Assistência técnica especializada, celulares, acessórios e muito mais —
          atendimento rápido e preço justo em Serra/ES.
        </Typography>

        {/* CTA Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          mb={8}
        >
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/5527999346464"
            target="_blank"
            sx={{
              background: "linear-gradient(135deg, #FF8C00, #FF6B00)",
              color: "white",
              fontWeight: 700,
              px: 4,
              py: 1.8,
              borderRadius: "12px",
              fontSize: 15,
              boxShadow: "0 8px 32px rgba(255,140,0,0.35)",
              "&:hover": {
                background: "linear-gradient(135deg, #FF9D1A, #FF7B1A)",
                boxShadow: "0 12px 40px rgba(255,140,0,0.5)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Falar no WhatsApp
          </Button>

          <Button
            variant="outlined"
            endIcon={<ArrowDownwardIcon />}
            href="#produtos"
            sx={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 600,
              px: 4,
              py: 1.8,
              borderRadius: "12px",
              fontSize: 15,
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.04)",
              "&:hover": {
                borderColor: "rgba(255,140,0,0.5)",
                color: "#FF8C00",
                background: "rgba(255,140,0,0.05)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Ver Produtos
          </Button>
        </Stack>

        {/* Stats row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          {[
            { icon: <StarIcon sx={{ color: "#FF8C00", fontSize: 18 }} />, value: "5 estrelas", label: "Avaliações Google" },
            { icon: <BuildCircleIcon sx={{ color: "#FF8C00", fontSize: 18 }} />, value: "Mesmo dia", label: "Reparos expressos" },
            { icon: <StorefrontIcon sx={{ color: "#FF8C00", fontSize: 18 }} />, value: "7+ categorias", label: "Produtos disponíveis" },
          ].map((stat, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.2,
                px: 3,
                borderRight: { sm: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none" },
                borderBottom: { xs: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none", sm: "none" },
                pb: { xs: i < 2 ? 2 : 0, sm: 0 },
              }}
            >
              {stat.icon}
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 700, color: "white", lineHeight: 1 }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.4)", mt: 0.3 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
