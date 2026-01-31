import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"

import Poco40Img from "../../images/Poco40.png"
import PocoC65Img from "../../images/PocoC65.png"
import Posi50Img from "../../images/PosiP50.png"
import PosiP28Img from "../../images/PosiP28.png"
import PosiQ20Img from "../../images/PosiQ20.png"
import RealmeC6EImg from "../../images/RealmeC6E.png"
import RealmeC51Img from "../../images/RealmeC51.png"
import RealmeC61Img from "../../images/RealmeC61.png"
import RealmeC65Img from "../../images/RealmeC65.png"
import RealmeC67Img from "../../images/RealmeC67.png"
import RealmeC75Img from "../../images/RealmeC75.png"
import RealmeNote50Img from "../../images/RealmeNote50.png"
import Redmi13CImg from "../../images/Redmi13C.png"
import Redmi13Img from "../../images/Readmi13.png"
import Redmi14CImg from "../../images/Redmin14C.png"
import RedmiNote13Pro5gImg from "../../images/RedmiNote13Pro5g.png"
import RedmiNote13PlusImg from "../../images/RedmiNote13Plus.png"
import RedminNote13Img from "../../images/RedminNote13.png"
import SansungA12Img from "../../images/SansungA12.png"
import SansungA15Img from "../../images/SansungA15.png"
import Camon18Img from "../../images/Camon18.png"
import InfiniteImg from "../../images/Infinite.png"
import Iphone17Img from "../../images/Iphone17.png"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
{ id: "5600", name: "Realme C51", model: "128GB / 4GB RAM • Tela 6.74 HD+ 90Hz • 50MP • 5000mAh", image: RealmeC51Img, price: 1100, promoPrice: 550 },

{ id: "5752", name: "Realme C65", model: "256GB / 8GB RAM • Tela 6.67 HD+ 90Hz • 50MP • 5000mAh", image: RealmeC65Img, price: 1110 },

{ id: "3588", name: "Camon 18P", model: "Tecno • Tela 6.8 Full HD+ • 48MP • 5000mAh", image: Camon18Img, price: 1399, promoPrice: 549.5 },

{ id: "5881", name: "Infinix Hot 50i", model: "256GB / 8GB RAM • Tela 6.6 HD+ • 5000mAh", image: InfiniteImg, price: 1000 },

{ id: "5904", name: "iPhone 17 Pro", model: "256GB • OLED 120Hz • Câmera Pro • 5G", image: Iphone17Img, price: 8800 },

{ id: "5603", name: "Redmi Note 13", model: "128GB / 6GB RAM • AMOLED 120Hz • 108MP • 5000mAh", image: RedminNote13Img, price: 1200, promoPrice: 600 },

{ id: "5573", name: "Redmi Note 13 Pro Plus", model: "AMOLED curva 120Hz • 200MP • 5G • 120W", image: RedmiNote13PlusImg, price: 2650, promoPrice: 1325 },

{ id: "5254", name: "Realme Note 50", model: "256GB / 4GB RAM • Tela 6.74 HD+ • 5000mAh", image: RealmeNote50Img, price: 1150, promoPrice: 850 },

{ id: "5052", name: "Poco C40", model: "64GB / 4GB RAM • Tela 6.71 HD+ • Bateria 6000mAh", image: Poco40Img, price: 950, promoPrice: 475 },

{ id: "5492", name: "Poco C65", model: "256GB / 8GB RAM • Tela 6.74 HD+ 90Hz • 50MP", image: PocoC65Img, price: 1350, promoPrice: 1085 },

{ id: "4978", name: "Positivo Flip P50", model: "Flip • Teclas físicas • Rádio FM • Bluetooth", image: Posi50Img, price: 280, promoPrice: 130 },

{ id: "5373", name: "Positivo P28", model: "Básico • Dual chip • Bateria durável", image: PosiP28Img, price: 200, promoPrice: 100 },

{ id: "4908", name: "Positivo Q20", model: "128GB / 4GB RAM • Tela grande HD+ • 5000mAh", image: PosiQ20Img, price: 899, promoPrice: 449.95 },

{ id: "5682", name: "Realme C61", model: "128GB / 4GB RAM • Tela 6.74 HD+ • 50MP", image: RealmeC61Img, price: 1100, promoPrice: 1050 },

{ id: "5666", name: "Realme C63", model: "256GB / 8GB RAM • Tela 6.7 HD+ • 50MP • 5000mAh", image: RealmeC6EImg, price: 1300, promoPrice: 1000 },

{ id: "5570", name: "Realme C67", model: "256GB / 8GB RAM • AMOLED 120Hz • 108MP • 5G", image: RealmeC67Img, price: 1450, promoPrice: 1150 },

{ id: "5690", name: "Realme C75", model: "256GB / 8GB RAM • Tela 90Hz • 5000mAh", image: RealmeC75Img, price: 1450, promoPrice: 1300 },

{ id: "5478", name: "Redmi 13", model: "256GB / 8GB RAM • Full HD+ • 108MP • 5030mAh", image: Redmi13Img, price: 1400, promoPrice: 1200 },

{ id: "4982", name: "Redmi 13C", model: "128GB / 4GB RAM • Tela 6.74 HD+ • 50MP", image: Redmi13CImg, price: 1100, promoPrice: 699.99 },

{ id: "5679", name: "Samsung A15", model: "128GB / 4GB RAM • Super AMOLED • 50MP • 5000mAh", image: SansungA15Img, price: 1200, promoPrice: 900 },

{ id: "5665", name: "Redmi Note 13 Pro 5G", model: "256GB / 8GB RAM • AMOLED 120Hz • 200MP • 5G", image: RedmiNote13Pro5gImg, price: 2300, promoPrice: 1200 },

{ id: "5630", name: "Usado Samsung A12", model: "64GB • Tela 6.5 HD+ • 5000mAh", image: SansungA12Img, price: 600, promoPrice: 450 },

{ id: "5612", name: "Redmi 14C", model: "256GB / 8GB RAM • Tela 6.88 HD+ 90Hz • 50MP", image: Redmi14CImg, price: 1200, promoPrice: 1050 },


];

const Celulares = () => {

  const navigate = useNavigate()


  return (
    <Box py={16} bgcolor="#111">
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
          <span style={{ color: "#FF8C00" }}>Celulares</span>
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

export default Celulares
