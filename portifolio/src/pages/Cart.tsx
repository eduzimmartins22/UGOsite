import { Box, Typography, Divider, Button } from "@mui/material"
import { useCart } from "../context/useCart"

const Cart = () => {
  const { cartItems, total } = useCart()

  return (
    <Box maxWidth={600} mx="auto" p={3}>
      <Typography variant="h5" fontWeight={700}>
        Carrinho
      </Typography>

      <Divider sx={{ my: 2 }} />

      {cartItems.length === 0 ? (
        <Typography>Carrinho vazio</Typography>
      ) : (
        cartItems.map((item, index) => (
          <Box key={index} display="flex" justifyContent="space-between" mb={1}>
            <Typography>{item.name}</Typography>
            <Typography>R$ {item.price}</Typography>
          </Box>
        ))
      )}

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight={700}>
        Total: R$ {total}
      </Typography>

      <Button fullWidth variant="contained" color="warning" sx={{ mt: 2 }}>
        Escolher pagamento
      </Button>
    </Box>
  )
}

export default Cart
