import { Box, Container, Typography, Button, TextField, InputAdornment, Chip } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import SearchIcon from "@mui/icons-material/Search"
import WarningAmberIcon from "@mui/icons-material/WarningAmber"
import { useNavigate } from "react-router-dom"
import CartTopBar from "../CartTopBar"
import ProductCard from "./ProductCart"
import Logo from "../../images/Logo.png"
import { Link } from "react-router-dom"
import { useState } from "react"

type Product = {
  id: string
  name: string
  model?: string
  image: string
  price: number
  promoPrice?: number
}

type Props = {
  title: string
  emoji: string
  items: Product[]
  notice?: string
}

const ProductPageLayout = ({ title, emoji, items, notice }: Props) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const filtered = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.model && item.model.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <Box sx={{ minHeight: "100vh", background: "#080808", pb: 10 }}>
      <CartTopBar />

      {/* Top nav */}
      <Box
        sx={{
          background: "rgba(8,8,8,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          py: 1.5,
          px: { xs: 2, md: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          startIcon={<ArrowBackIcon sx={{ fontSize: "16px !important" }} />}
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
            sx={{ width: 28, height: 28, borderRadius: "7px", border: "1px solid rgba(255,140,0,0.3)" }}
          />
          <Typography fontWeight={800} fontSize={13} color="white">
            UGO <Box component="span" sx={{ color: "#FF8C00" }}>CELULARES</Box>
          </Typography>
        </Box>
      </Box>

      <Container sx={{ pt: 6 }}>
        {/* Header */}
        <Box mb={6}>
          <Box display="flex" alignItems="center" gap={2} mb={1}>
            <Typography fontSize={36}>{emoji}</Typography>
            <Box>
              <Typography
                fontWeight={800}
                fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                color="white"
                lineHeight={1.1}
                letterSpacing="-0.5px"
                fontFamily="'Sora', sans-serif"
              >
                {title}
              </Typography>
              <Chip
                label={`${items.length} produtos disponíveis`}
                size="small"
                sx={{
                  mt: 0.5,
                  background: "rgba(255,140,0,0.1)",
                  border: "1px solid rgba(255,140,0,0.2)",
                  color: "#FFB347",
                  fontWeight: 600,
                  fontSize: 11,
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Search */}
        <Box mb={5}>
          <TextField
            placeholder={`Buscar em ${title}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "rgba(255,255,255,0.3)", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              maxWidth: 440,
              "& .MuiOutlinedInput-root": {
                background: "rgba(255,255,255,0.04)",
                color: "white",
                borderRadius: "12px",
                fontSize: 14,
                "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                "&:hover fieldset": { borderColor: "rgba(255,255,255,0.18)" },
                "&.Mui-focused fieldset": { borderColor: "#FF8C00" },
                "& input::placeholder": { color: "rgba(255,255,255,0.3)" },
              },
            }}
          />
        </Box>

        {/* Notice banner */}
        {notice && (
          <Box
            sx={{
              mb: 4,
              px: 2.5,
              py: 2,
              borderRadius: "12px",
              background: "rgba(255, 180, 0, 0.07)",
              border: "1px solid rgba(255, 180, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              maxWidth: 640,
            }}
          >
            <WarningAmberIcon sx={{ color: "#FFB300", fontSize: 20, flexShrink: 0 }} />
            <Typography fontSize={13} fontWeight={600} color="#FFD166">
              {notice}
            </Typography>
          </Box>
        )}

        {/* Products grid */}
        {filtered.length === 0 ? (
          <Box textAlign="center" py={10}>
            <Typography fontSize={36} mb={2}>🔍</Typography>
            <Typography color="rgba(255,255,255,0.4)">Nenhum produto encontrado</Typography>
          </Box>
        ) : (
          <Grid container spacing={2.5}>
            {filtered.map((item) => (
              <Grid size={{ xs: 6, sm: 4, md: 3 }} key={item.id}>
                <ProductCard product={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  )
}

export default ProductPageLayout
