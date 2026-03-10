import {
  Box,
  Container,
  Typography,
  Chip,
} from "@mui/material"
import { Link } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import GridViewIcon from "@mui/icons-material/GridView"

import Celulares from "../images/Celulares.png"
import Capinhas from "../images/Capinhas.png"
import Peliculas from "../images/Peliculas.png"
import Mochilas from "../images/Mochilas.png"
import Fones from "../images/Fones.png"
import CaixasSom from "../images/CaixasSom.png"
import Bicicletas from "../images/Bicicletas.png"

const items = [
  { name: "Celulares", image: Celulares, link: "/celulares", desc: "Smartphones das melhores marcas" },
  { name: "Capinhas", image: Capinhas, link: "/capinhas", desc: "Proteção com estilo" },
  { name: "Películas", image: Peliculas, link: "/Peliculas", desc: "Proteção para a tela" },
  { name: "Mochilas", image: Mochilas, link: "/mochilas", desc: "Praticidade e conforto" },
  { name: "Fones", image: Fones, link: "/fones", desc: "Som de qualidade" },
  { name: "Caixas de Som", image: CaixasSom, link: "/caixas-som", desc: "Áudio poderoso" },
  { name: "Bicicletas Motorizadas", image: Bicicletas, link: "/bicicletas", desc: "Mobilidade inteligente" },
]

const Products = () => {
  return (
    <Box
      id="produtos"
      sx={{
        background: "#F4F5F7",
        py: { xs: 10, md: 16 },
        position: "relative",
      }}
    >
      {/* Top accent */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "40%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,140,0,0.4), transparent)",
        }}
      />

      <Container>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Chip
            icon={<GridViewIcon sx={{ fontSize: "16px !important", color: "#FF8C00 !important" }} />}
            label="CATEGORIAS"
            sx={{
              mb: 3,
              background: "rgba(255,140,0,0.1)",
              border: "1px solid rgba(255,140,0,0.25)",
              color: "#E07000",
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
              color: "#0D0D0D",
              mb: 2,
            }}
          >
            Nossos Produtos
          </Typography>

          <Typography sx={{ color: "#6B7280", fontSize: 16, maxWidth: 480, mx: "auto" }}>
            Selecionamos os produtos mais procurados para garantir qualidade e excelente custo-benefício.
          </Typography>
        </Box>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "1fr 1fr 1fr",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {items.map((item, index) => (
            <Box
              key={item.name}
              component={Link}
              to={item.link}
              sx={{
                textDecoration: "none",
                display: "block",
                // Make last item span 2 cols on md if there's an odd number
                gridColumn: index === items.length - 1 && items.length % 4 !== 0
                  ? { xs: "span 2", sm: "span 1", md: "span 1" }
                  : "span 1",
              }}
            >
              <Box
                sx={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
                    borderColor: "rgba(255,140,0,0.3)",
                    "& .product-arrow": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                    "& .product-img": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #f8f9fa, #eef0f2)",
                    height: 160,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    className="product-img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      maxHeight: 120,
                      maxWidth: "80%",
                      objectFit: "contain",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </Box>

                {/* Content */}
                <Box sx={{ p: 2.5 }}>
                  <Typography
                    fontWeight={700}
                    fontSize={15}
                    color="#0D0D0D"
                    mb={0.5}
                  >
                    {item.name}
                  </Typography>

                  <Typography fontSize={12} color="#9CA3AF" mb={1.5}>
                    {item.desc}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: "#FF8C00",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    Ver produtos
                    <ArrowForwardIcon
                      className="product-arrow"
                      sx={{
                        fontSize: 15,
                        opacity: 0,
                        transform: "translateX(-4px)",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Products
