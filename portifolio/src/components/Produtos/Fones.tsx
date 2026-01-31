import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"

import AirConductionSportsImg from "../../images/AirConductionSports.png"
import AirpodsMaxHeadphoneImg from "../../images/AirpodsMaxHeadphone.png"
import AirpodsTWSImg from "../../images/AirpodsTWS.png"
import AKGComMicrofoneImg from "../../images/AKGComMicrofone.png"
import EarpodsLightningImg from "../../images/EarpodsLightning.png"
import FoneBlacksoundBLImg from "../../images/FoneBlacksoundBL.png"
import foneBluetooth0481Img from "../../images/foneBluetooth0481.png"
import foneBluetoothBAFON8743Img from "../../images/foneBluetoothBA-FON8743.png"
import FoneBluetoothBrightImg from "../../images/FoneBluetoothBright.png"
import FoneBluetoothFON20393Img from "../../images/FoneBluetoothFON-20393.png"
import FoneBluetoothInovaFON8779Img from "../../images/FoneBluetoothInovaFON-8779.png"
import FoneBTFON20390Img from "../../images/FoneBTFON-20390.png"
import FoneBTFON30045Img from "../../images/FoneBTFON-30045.png"
import FoneDanxImg from "../../images/FoneDanx.png"
import foneInovaFON30140Img from "../../images/foneInovaFON-30140.png"
import FoneInovaMinimalistaImg from "../../images/FoneInovaMinimalista.png"
import FoneInovaSemFioImg from "../../images/FoneInovaSemFio.png"
import FoneKapbomKA763Img from "../../images/FoneKapbomKA-763.png"
import FoneKapbomKA775Img from "../../images/FoneKapbomKA-775.png"
import foneP3DF21Img from "../../images/foneP3DF21.png"
import KV8778FoneInovaImg from "../../images/KV-8778FoneInova.png"


import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
  {
    id: "4364",
    name: "Fone Bluetooth Bright",
    model: "0481 • Bluetooth • Graves reforçados • Bateria durável",
    image: foneBluetooth0481Img,
    price: 170,
  },
  {
  id: "5380",
  name: "Fone Inova Sem Fio",
  model: "FON-8779 • Bluetooth • Bateria prolongada",
  image: FoneBluetoothInovaFON8779Img,
  price: 130,
  promoPrice: 65,
},
  {
    id: "3506",
    name: "Fone Blacksound BL",
    model: "514 • Bluetooth • Som potente • Confortável",
    image: FoneBlacksoundBLImg,
    price: 245,
  },
  {
    id: "5370",
    name: "Airpods Max Headphone",
    model: "Bluetooth • Over-ear • Estilo premium",
    image: AirpodsMaxHeadphoneImg,
    price: 280,
  },
  {
    id: "3872",
    name: "Air Conduction Sports",
    model: "A889Pro • Condução aérea • Ideal para esportes",
    image: AirConductionSportsImg,
    price: 240,
  },
  {
    id: "3196",
    name: "Airpods TWS",
    model: "TWS • Sem fio • Estojo carregador",
    image: AirpodsTWSImg,
    price: 190,
  },
  {
    id: "5337",
    name: "Fone Danx",
    model: "DF51 • Bluetooth • Compacto • Graves equilibrados",
    image: FoneDanxImg,
    price: 130,
    promoPrice: 65,
  },
  {
    id: "3005",
    name: "Earpods Lightning",
    model: "Conector Lightning • Microfone • Padrão Apple",
    image: EarpodsLightningImg,
    price: 165,
    promoPrice: 90,
  },
  {
    id: "5335",
    name: "Fone Inova Minimalista",
    model: "FON-20380 • Design clean • Bluetooth",
    image: FoneInovaMinimalistaImg,
    price: 90,
    promoPrice: 45,
  },
  {
    id: "4997",
    name: "Fone Basike",
    model: "FON-20386 • Bluetooth • Uso diário",
    image: FoneBluetoothBrightImg,
    price: 98,
    promoPrice: 33,
  },
  {
    id: "5380",
    name: "Fone Inova Sem Fio",
    model: "FON-8779 • Bluetooth • Bateria prolongada",
    image: FoneInovaSemFioImg,
    price: 130,
    promoPrice: 65,
  },
  {
    id: "5017",
    name: "Fone Airpods Max Inova",
    model: "KV-8778 • Bluetooth • Estilo Max",
    image: KV8778FoneInovaImg,
    price: 110,
    promoPrice: 55,
  },
  {
    id: "4504",
    name: "Fone Estéreo Inova",
    model: "FON-30140 • P2 • Som estéreo",
    image: foneInovaFON30140Img,
    price: 20,
    promoPrice: 14,
  },
  {
    id: "4544",
    name: "Fone Kapbom",
    model: "KA-763 • P2 • Leve e simples",
    image: FoneKapbomKA763Img,
    price: 15,
    promoPrice: 7.5,
  },
  {
    id: "3937",
    name: "AKG com Microfone",
    model: "Tipo C • Microfone integrado • Som limpo",
    image: AKGComMicrofoneImg,
    price: 15,
  },
  {
    id: "3941",
    name: "Fone Bluetooth Basike",
    model: "BA-FON 8743 • Bluetooth • Compacto",
    image: foneBluetoothBAFON8743Img,
    price: 80,
  },
  {
    id: "3651",
    name: "Fone P3 Estéreo Danx",
    model: "DF21 • P3 • Microfone • Estéreo",
    image: foneP3DF21Img,
    price: 24,
    promoPrice: 12,
  },
  {
    id: "5409",
    name: "Fone Sem Fio Basike",
    model: "FON-20393 • Bluetooth • Design moderno",
    image: FoneBluetoothFON20393Img,
    price: 100,
    promoPrice: 60,
  },
  {
    id: "4855",
    name: "Fone BT Inova",
    model: "FON-30045 • Bluetooth • Boa autonomia",
    image: FoneBTFON30045Img,
    price: 110,
    promoPrice: 55,
  },
  {
    id: "4568",
    name: "Fone Kapbom",
    model: "KA-775 • P2 • Básico e funcional",
    image: FoneKapbomKA775Img,
    price: 20,
  },
  {
    id: "5028",
    name: "Fone BT Inova",
    model: "FON-20390 • Bluetooth • Confortável",
    image: FoneBTFON20390Img,
    price: 112,
    promoPrice: 56,
  },
]

const Fones = () => {
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
           <span style={{ color: "#FF8C00" }}>Fones</span>
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

export default Fones
