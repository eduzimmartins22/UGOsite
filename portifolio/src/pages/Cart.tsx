import {
  Box,
  Container,
  Typography,
  IconButton,
  Button,
  TextField,
} from "@mui/material"

import DeleteIcon from "@mui/icons-material/Delete"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import PaymentsIcon from "@mui/icons-material/Payments"
import QrCodeIcon from "@mui/icons-material/QrCode"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import Logo from "../images/Logo.png"

import { useNavigate, Link } from "react-router-dom"
import { useCart } from "../context/useCart"
import { useState } from "react"

const Cart = () => {
  const { cartItems, total, removeFromCart } = useCart()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const handleWhatsApp = async () => {
    if (!name.trim() || !cpf.trim()) {
      alert("Por favor, preencha Nome e CPF.")
      return
    }
    if (!paymentMethod) {
      alert("Selecione o modo de pagamento.")
      return
    }

    const message = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} - R$ ${item.price}${
            item.observation ? ` | Obs: ${item.observation}` : ""
          }`
      )
      .join("\n")

    const fullMessage = `
🛒 *PEDIDO UGO CELULARES*

👤 Cliente: ${name}
🪪 CPF: ${cpf}

📦 Produtos:
${message}

💳 Pagamento: ${paymentMethod}
💰 Total: R$ ${total}
    `.trim()

    const url = `https://wa.me/5527999346464?text=${encodeURIComponent(fullMessage)}`
    window.open(url, "_blank")
  }

  const inputSx = {
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.4)", fontSize: 14 },
    "& .MuiInputLabel-root.Mui-focused": { color: "#FF8C00" },
    "& .MuiOutlinedInput-root": {
      background: "rgba(255,255,255,0.03)",
      color: "#fff",
      borderRadius: "10px",
      fontSize: 14,
      "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
      "&:hover fieldset": { borderColor: "rgba(255,255,255,0.2)" },
      "&.Mui-focused fieldset": { borderColor: "#FF8C00" },
    },
  }

  const cardSx = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "20px",
    p: 3,
    mb: 3,
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#080808",
        pt: 4,
        pb: 10,
      }}
    >
      <Container maxWidth="sm">
        {/* Header */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={4}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontWeight: 600,
              fontSize: 13,
              "&:hover": { color: "#FF8C00", background: "rgba(255,140,0,0.06)" },
              borderRadius: "10px",
            }}
          >
            Voltar
          </Button>

          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none" }}
          >
            <Box
              component="img"
              src={Logo}
              sx={{ width: 30, height: 30, borderRadius: "8px", border: "1px solid rgba(255,140,0,0.3)" }}
            />
            <Typography fontWeight={800} fontSize={14} color="white">
              UGO <Box component="span" sx={{ color: "#FF8C00" }}>CELULARES</Box>
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={1.5} mb={5}>
          <ShoppingBagIcon sx={{ color: "#FF8C00", fontSize: 28 }} />
          <Typography variant="h5" fontWeight={800} color="white">
            Seu Carrinho
          </Typography>
        </Box>

        {cartItems.length === 0 ? (
          <Box textAlign="center" py={10}>
            <Typography fontSize={48} mb={2}>🛒</Typography>
            <Typography color="rgba(255,255,255,0.4)" fontSize={16} mb={3}>
              Seu carrinho está vazio
            </Typography>
            <Button
              onClick={() => navigate(-1)}
              sx={{
                background: "linear-gradient(135deg, #FF8C00, #FF6B00)",
                color: "white",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: "12px",
              }}
            >
              Ver Produtos
            </Button>
          </Box>
        ) : (
          <>
            {/* IDENTIFICAÇÃO */}
            <Box sx={cardSx}>
              <Typography fontWeight={700} fontSize={15} color="white" mb={2.5}>
                Identificação do Cliente
              </Typography>

              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  fullWidth
                  label="Nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={inputSx}
                />
                <TextField
                  fullWidth
                  label="CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="000.000.000-00"
                  sx={inputSx}
                />
              </Box>
            </Box>

            {/* PAGAMENTO */}
            <Box sx={cardSx}>
              <Typography fontWeight={700} fontSize={15} color="white" mb={2.5}>
                Forma de Pagamento
              </Typography>

              <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1.5}>
                {[
                  { label: "PIX", icon: <QrCodeIcon sx={{ fontSize: 18 }} /> },
                  { label: "Crédito (12x)", icon: <CreditCardIcon sx={{ fontSize: 18 }} /> },
                  { label: "Débito", icon: <PaymentsIcon sx={{ fontSize: 18 }} /> },
                  { label: "Boleto", icon: <AccountBalanceIcon sx={{ fontSize: 18 }} /> },
                  { label: "Duas Formas", icon: <LocalAtmIcon sx={{ fontSize: 18 }} /> },
                ].map((option) => (
                  <Box
                    key={option.label}
                    component="button"
                    onClick={() => setPaymentMethod(option.label)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: 2,
                      py: 1.5,
                      borderRadius: "12px",
                      border: paymentMethod === option.label
                        ? "1px solid #FF8C00"
                        : "1px solid rgba(255,255,255,0.08)",
                      background: paymentMethod === option.label
                        ? "rgba(255,140,0,0.12)"
                        : "rgba(255,255,255,0.03)",
                      color: paymentMethod === option.label ? "#FF8C00" : "rgba(255,255,255,0.7)",
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: "pointer",
                      fontFamily: "'Sora', sans-serif",
                      transition: "all 0.2s",
                      "&:hover": {
                        borderColor: "rgba(255,140,0,0.4)",
                        background: "rgba(255,140,0,0.06)",
                      },
                    }}
                  >
                    {option.icon}
                    {option.label}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* ITENS */}
            <Box sx={cardSx}>
              <Typography fontWeight={700} fontSize={15} color="white" mb={2.5}>
                Itens do Pedido
              </Typography>

              <Box display="flex" flexDirection="column" gap={2}>
                {cartItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "12px",
                      p: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box flex={1} mr={1}>
                      <Typography fontWeight={600} fontSize={13} color="white" lineHeight={1.4}>
                        {item.name}
                      </Typography>
                      {item.observation && (
                        <Typography fontSize={11} color="rgba(255,255,255,0.4)" mt={0.5}>
                          Obs: {item.observation}
                        </Typography>
                      )}
                    </Box>

                    <Box display="flex" alignItems="center" gap={1} flexShrink={0}>
                      <Typography fontWeight={800} fontSize={14} color="#FF8C00">
                        R$ {item.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </Typography>
                      <IconButton
                        onClick={() => removeFromCart(index)}
                        size="small"
                        sx={{
                          color: "rgba(255,255,255,0.3)",
                          "&:hover": { color: "#ff4444", background: "rgba(255,68,68,0.1)" },
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* TOTAL */}
            <Box
              sx={{
                ...cardSx,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography color="rgba(255,255,255,0.5)" fontSize={14}>
                Total do Pedido
              </Typography>
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{
                  background: "linear-gradient(135deg, #FF8C00, #FFD700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </Typography>
            </Box>

            {/* FINALIZAR */}
            <Button
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsApp}
              sx={{
                background: "linear-gradient(135deg, #25D366, #1DB85A)",
                color: "white",
                fontWeight: 700,
                py: 2,
                fontSize: 16,
                borderRadius: "14px",
                boxShadow: "0 8px 32px rgba(37,211,102,0.3)",
                "&:hover": {
                  boxShadow: "0 12px 40px rgba(37,211,102,0.5)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Finalizar Pedido no WhatsApp
            </Button>
          </>
        )}
      </Container>
    </Box>
  )
}

export default Cart
