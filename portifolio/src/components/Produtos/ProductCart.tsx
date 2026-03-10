import { Box, Typography, TextField, Chip } from "@mui/material"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import { useState } from "react"
import { useCart } from "../../context/useCart"

type Product = {
  id: string
  name: string
  model?: string
  image: string
  price: number
  promoPrice?: number
}

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart()
  const [obs, setObs] = useState("")

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: `${product.name}${product.model ? ` - ${product.model}` : ""}`,
      price: product.promoPrice ?? product.price,
      observation: obs,
    })
  }

  const discount = product.promoPrice
    ? Math.round(((product.price - product.promoPrice) / product.price) * 100)
    : 0

  return (
    <Box
      sx={{
        background: "#111114",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        height: "100%",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          borderColor: "rgba(255,140,0,0.25)",
        },
      }}
    >
      {/* Image area */}
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #1a1a1d, #141416)",
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {discount > 0 && (
          <Chip
            icon={<LocalOfferIcon sx={{ fontSize: "12px !important", color: "white !important" }} />}
            label={`-${discount}%`}
            size="small"
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "linear-gradient(135deg, #FF8C00, #FF6B00)",
              color: "white",
              fontWeight: 800,
              fontSize: 11,
              height: 24,
              zIndex: 1,
            }}
          />
        )}
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            maxHeight: 130,
            maxWidth: "75%",
            objectFit: "contain",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography fontWeight={700} fontSize={14} color="white" mb={0.5} lineHeight={1.3}>
          {product.name}
        </Typography>

        {product.model && (
          <Typography fontSize={11} color="rgba(255,255,255,0.4)" mb={2} lineHeight={1.5}>
            {product.model}
          </Typography>
        )}

        {/* Price */}
        <Box mb={2} mt="auto">
          {product.promoPrice && (
            <Typography
              fontSize={12}
              sx={{ textDecoration: "line-through", color: "#555" }}
            >
              R$ {product.price.toLocaleString("pt-BR")}
            </Typography>
          )}
          <Typography fontSize={20} fontWeight={800} color="#FF8C00" lineHeight={1}>
            R$ {(product.promoPrice ?? product.price).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>
        </Box>

        {/* Obs input */}
        <TextField
          size="small"
          placeholder="Cor, modelo, quantidade..."
          value={obs}
          onChange={(e) => setObs(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              background: "rgba(255,255,255,0.03)",
              color: "rgba(255,255,255,0.7)",
              fontSize: 12,
              borderRadius: "8px",
              "& fieldset": { borderColor: "rgba(255,255,255,0.07)" },
              "&:hover fieldset": { borderColor: "rgba(255,255,255,0.15)" },
              "&.Mui-focused fieldset": { borderColor: "#FF8C00" },
              "& input::placeholder": { color: "rgba(255,255,255,0.25)", fontSize: 12 },
            },
          }}
        />

        {/* Add button */}
        <Box
          component="button"
          onClick={handleAdd}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            background: "linear-gradient(135deg, rgba(255,140,0,0.15), rgba(255,140,0,0.08))",
            border: "1px solid rgba(255,140,0,0.25)",
            borderRadius: "10px",
            py: 1.2,
            cursor: "pointer",
            color: "#FF8C00",
            fontWeight: 700,
            fontSize: 13,
            fontFamily: "'Sora', sans-serif",
            transition: "all 0.2s",
            "&:hover": {
              background: "linear-gradient(135deg, #FF8C00, #FF6B00)",
              color: "white",
              border: "1px solid transparent",
            },
          }}
        >
          <AddShoppingCartIcon sx={{ fontSize: 17 }} />
          Adicionar ao Carrinho
        </Box>
      </Box>
    </Box>
  )
}

export default ProductCard
