import { Box, Container, Typography, Button } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/useCart"

const CartTopBar = () => {
  const { cartItems, total } = useCart()
  const navigate = useNavigate()

  if (cartItems.length === 0) return null

  return (
    <Box
      id="cart-top"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(8,8,8,0.97)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,140,0,0.2)",
        py: 1.5,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            sx={{
              background: "rgba(255,140,0,0.1)",
              border: "1px solid rgba(255,140,0,0.2)",
              borderRadius: "8px",
              px: 1.5,
              py: 0.7,
              display: "flex",
              alignItems: "center",
              gap: 0.8,
            }}
          >
            <ShoppingCartIcon sx={{ color: "#FF8C00", fontSize: 16 }} />
            <Typography fontWeight={700} color="#FF8C00" fontSize={13}>
              {cartItems.length} item{cartItems.length > 1 ? "s" : ""}
            </Typography>
          </Box>

          <Typography fontSize={14} fontWeight={700} color="white">
            R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </Typography>
        </Box>

        <Button
          startIcon={<ShoppingCartIcon />}
          onClick={() => navigate("/cart")}
          sx={{
            background: "linear-gradient(135deg, #FF8C00, #FF6B00)",
            color: "white",
            fontWeight: 700,
            px: 3,
            py: 1,
            borderRadius: "10px",
            fontSize: 13,
            "&:hover": {
              boxShadow: "0 6px 20px rgba(255,140,0,0.4)",
            },
          }}
        >
          Ver Carrinho
        </Button>
      </Container>
    </Box>
  )
}

export default CartTopBar
