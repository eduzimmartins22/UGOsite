import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import CapinhasImg from "../../images/Capinhas.png"
import CapaCouroImg from "../../images/CapaCouro.png"
import CapaMagImg from "../../images/CapaMagnetica.png"
import CapaSpaceImg from "../../images/CapaSpace.png"
import CapaBlisterImg from "../../images/capaBlister.png"



import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
  {
  id: "cap-01",
  name: "Capa de Celular Transparente",
  model: "iPhone • Silicone flexível • Antirrisco • Proteção básica",
  image: CapinhasImg,
  price: 30,
  promoPrice: 12,
},

{
  id: "cap-03",
  name: "Capa de Celular Magnética",
  model: "iPhone • Suporte MagSafe • Encaixe magnético • Proteção premium",
  image: CapaMagImg,
  price: 25,
},

{
  id: "cap-04",
  name: "Capa de Celular Couro",
  model: "iPhone • Couro sintético • Design elegante • Toque macio",
  image: CapaCouroImg,
  price: 20,
},

{
  id: "cap-05",
  name: "Capa de Celular Space",
  model: "iPhone • Estilo espacial • Acabamento fosco • Proteção traseira",
  image: CapaSpaceImg,
  price: 25,
},

{
  id: "cap-06",
  name: "Capa de Celular Blister",
  model: "iPhone • Transparente rígida • Bordas reforçadas • Antimpacto",
  image: CapaBlisterImg,
  price: 25,
},
]



const Capinhas = () => {
  const navigate = useNavigate()


  return (
    <Box pt={0} pb={10} bgcolor="#111">
      {/* 🔝 Carrinho fixo no topo */}
      <CartTopBar />



      <Container>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            mb: 3,
            color: "#FF8C00",
            fontWeight: 600,
            alignSelf: "flex-start",
            "&:hover": {
              backgroundColor: "rgba(255,140,0,0.1)",
            },
          }}
        >
          Voltar
        </Button>

        <Typography variant="h2" textAlign="center" mb={6} color="white">
         <span style={{ color: "#FF8C00" }}>Capinhas</span>
        </Typography>

        <Grid container spacing={5}>
          {items.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  )
}

export default Capinhas
