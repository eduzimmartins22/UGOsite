import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import PeliculasImg from "../../images/Peliculas.png"
import Peli3dsImg from "../../images/Peli3d.png"
import PeliCamAImg from "../../images/PeliCamAvul.png"
import PeliCamHImg from "../../images/PeliCamHuang.png"
import PeliCamMImg from "../../images/PeliCamMokingo.png"
import PeliFoscaImg from "../../images/peliFosca.png"
import PeliHidroImg from "../../images/PeliHidroG.png"
import PeliPrivImg from "../../images/peliPriv.png"
import PeliTable3Img from "../../images/PeliTablet3d.png"
import PeliTabletClaroImg from "../../images/PeliTabletClaro.png"
import PeliVidroImg from "../../images/PeliVidro.png"
import PeliVidroPrivImg from "../../images/PeliVidroPriv.png"


import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
 {
  id: "Peli-1234",
  name: "Película Gel",
  model: "Celulares • Flexível • Autoregenerativa • Alta transparência",
  image: PeliculasImg,
  price: 30,
  promoPrice: 15,
},
{
  id: "peli-4595",
  name: "Película 3D",
  model: "Promoção • Vidro curvo • Cobertura total",
  image: Peli3dsImg,
  price: 15,
  promoPrice: 15,
},
{
  id: "peli-4323",
  name: "Película de Câmera",
  model: "Avulsa • Proteção para lente • Antirrisco",
  image: PeliCamAImg,
  price: 10,
},
{
  id: "peli-5674",
  name: "Película de Câmera",
  model: "Huang • Vidro temperado • Alta resistência",
  image: PeliCamHImg,
  price: 25,
},
{
  id: "peli-5563",
  name: "Película de Câmera",
  model: "Mokingo • Proteção básica • Encaixe preciso",
  image: PeliCamMImg,
  price: 5,
},
{
  id: "peli-5596",
  name: "Película 3D",
  model: "Privacidade • Vidro temperado • Anti-espião",
  image: PeliVidroPrivImg,
  price: 30,
},
{
  id: "peli-4402",
  name: "Película Tablet",
  model: "3D • Vidro temperado • Proteção total",
  image: PeliTable3Img,
  price: 20,
},
{
  id: "peli-4602",
  name: "Película de Vidro",
  model: "3D • Vidro temperado • Alta transparência",
  image: PeliVidroImg,
  price: 20,
},
{
  id: "peli-3450",
  name: "Película",
  model: "Fosca • Anti-reflexo • Toque suave",
  image: PeliFoscaImg,
  price: 35,
},
{
  id: "peli-3449",
  name: "Película Hidrogel",
  model: "Transparente • Flexível • Alta definição",
  image: PeliHidroImg,
  price: 35,
},
{
  id: "peli-4558",
  name: "Película",
  model: "Câmera • Proteção para lente • Antirrisco",
  image: PeliCamAImg,
  price: 20,
},
{
  id: "peli-3451",
  name: "Película Hidrogel",
  model: "Privacidade • Anti-espião • Flexível",
  image: PeliPrivImg,
  price: 50,
},
{
  id: "peli-3751",
  name: "Película Tablet",
  model: "Clara • Alta transparência • Uso diário",
  image: PeliTabletClaroImg,
  price: 52,
},

]

const Peliculas = () => {
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
           <span style={{ color: "#FF8C00" }}>Películas</span>
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

export default Peliculas
