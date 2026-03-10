import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Chip,
} from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import SendIcon from "@mui/icons-material/Send"
import ContactSupportIcon from "@mui/icons-material/ContactSupport"
import InstagramIcon from "@mui/icons-material/Instagram"

const Pagamento = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pergunta: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()

    const mensagem = `
Olá, gostaria de entrar em contato.

📌 Nome: ${formData.nome}
📧 Email: ${formData.email}
📱 Telefone: ${formData.telefone}

❓ Mensagem:
${formData.pergunta}
    `.trim()

    const telefone = "5527999346464"
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const inputSx = {
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.4)", fontSize: 14 },
    "& .MuiInputLabel-root.Mui-focused": { color: "#FF8C00" },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255,255,255,0.03)",
      color: "#fff",
      borderRadius: "10px",
      fontSize: 14,
      "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
      "&:hover fieldset": { borderColor: "rgba(255,255,255,0.2)" },
      "&.Mui-focused fieldset": { borderColor: "#FF8C00" },
    },
  }

  return (
    <Box
      id="contato"
      sx={{
        background: "linear-gradient(180deg, #111114 0%, #080808 100%)",
        py: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG glow */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(255,140,0,0.06) 0%, transparent 70%)",
          bottom: 0,
          right: "10%",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Chip
            icon={<ContactSupportIcon sx={{ fontSize: "16px !important", color: "#FF8C00 !important" }} />}
            label="FALE CONOSCO"
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
            Entre em{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #FF8C00, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contato
            </Box>
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: 15 }}>
            Tire suas dúvidas ou solicite um orçamento rapidamente.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "5fr 7fr" },
            gap: 3,
            alignItems: "start",
          }}
        >
          {/* LEFT – Quick contacts */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography fontWeight={700} fontSize={17} color="white" mb={3}>
              Atendimento direto
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
              <Button
                startIcon={<WhatsAppIcon />}
                onClick={() =>
                  handleSubmit({
                    preventDefault: () => {},
                  } as React.FormEvent)
                }
                fullWidth
                sx={{
                  background: "linear-gradient(135deg, #25D366, #1DB85A)",
                  color: "white",
                  fontWeight: 700,
                  py: 1.6,
                  borderRadius: "12px",
                  fontSize: 14,
                  boxShadow: "0 6px 20px rgba(37,211,102,0.25)",
                  "&:hover": {
                    boxShadow: "0 8px 28px rgba(37,211,102,0.4)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.2s",
                }}
              >
                Falar no WhatsApp
              </Button>

              <Button
                startIcon={<EmailIcon />}
                href="mailto:ugocelularescontato@gmail.com"
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 600,
                  py: 1.6,
                  borderRadius: "12px",
                  fontSize: 14,
                  "&:hover": {
                    borderColor: "rgba(255,140,0,0.4)",
                    color: "#FF8C00",
                    background: "rgba(255,140,0,0.05)",
                  },
                  transition: "all 0.2s",
                }}
              >
                ugocelularescontato@gmail.com
              </Button>

              <Button
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/ugocelulares_modulo16"
                target="_blank"
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 600,
                  py: 1.6,
                  borderRadius: "12px",
                  fontSize: 14,
                  "&:hover": {
                    borderColor: "rgba(255,140,0,0.4)",
                    color: "#FF8C00",
                    background: "rgba(255,140,0,0.05)",
                  },
                  transition: "all 0.2s",
                }}
              >
                @ugocelulares
              </Button>
            </Box>

            {/* Info card */}
            <Box
              sx={{
                mt: 3,
                p: 2,
                borderRadius: "12px",
                background: "rgba(255,140,0,0.06)",
                border: "1px solid rgba(255,140,0,0.12)",
              }}
            >
              <Typography fontSize={13} color="rgba(255,255,255,0.6)" lineHeight={1.7}>
                📍 Terminal de Carapina, Serra/ES<br />
                ⏰ Segunda a Sábado<br />
                📞 (27) 99934-6464
              </Typography>
            </Box>
          </Box>

          {/* RIGHT – Form */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography fontWeight={700} fontSize={17} color="white" mb={3}>
              Envie sua mensagem
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <TextField
                  label="Nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  fullWidth
                  sx={inputSx}
                />
                <TextField
                  label="Telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  fullWidth
                  sx={inputSx}
                />
              </Box>

              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                sx={inputSx}
              />

              <TextField
                label="Mensagem"
                name="pergunta"
                value={formData.pergunta}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                sx={inputSx}
              />

              <Button
                type="submit"
                variant="contained"
                startIcon={<SendIcon />}
                fullWidth
                sx={{
                  mt: 1,
                  background: "linear-gradient(135deg, #FF8C00, #FF6B00)",
                  color: "white",
                  fontWeight: 700,
                  py: 1.7,
                  borderRadius: "12px",
                  fontSize: 15,
                  boxShadow: "0 8px 24px rgba(255,140,0,0.3)",
                  "&:hover": {
                    boxShadow: "0 12px 32px rgba(255,140,0,0.45)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.2s",
                }}
              >
                Enviar via WhatsApp
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Footer note */}
        <Box
          sx={{
            mt: 8,
            pt: 6,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
          }}
        >
          <Typography fontSize={13} color="rgba(255,255,255,0.25)">
            © {new Date().getFullYear()} UGO Celulares · Terminal de Carapina, Serra/ES · Todos os direitos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Pagamento
