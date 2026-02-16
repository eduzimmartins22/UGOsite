import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material"
import Grid from "@mui/material/Grid"
import { Link } from "react-router-dom"

import Celulares from "../images/Celulares.png"
import Capinhas from "../images/Capinhas.png"
import Peliculas from "../images/Peliculas.png"
import Mochilas from "../images/Mochilas.png"
import Fones from "../images/Fones.png"
import CaixasSom from "../images/CaixasSom.png"
import Bicicletas from "../images/Bicicletas.png"

const items = [
  { name: "Celulares", image: Celulares, link: "/celulares" },
  { name: "Capinhas", image: Capinhas, link: "/capinhas" },
  { name: "Películas", image: Peliculas, link: "/peliculas" },
  { name: "Mochilas", image: Mochilas, link: "/mochilas" },
  { name: "Fones", image: Fones, link: "/fones" },
  { name: "Caixas de Som", image: CaixasSom, link: "/caixas-som" },
  { name: "Bicicletas Motorizadas", image: Bicicletas, link: "/bicicletas" },
]

const Products = () => {
  return (
<Box
  id="produtos"
  py={{ xs: 12, md: 18 }}
  sx={{
    backgroundColor: "#F4F6F8",
  }}
>
  <Container>
    {/* Header */}
    <Box textAlign="center" mb={8}>
      <Typography
        variant="overline"
        sx={{
          color: "#F97316",
          fontWeight: 700,
          letterSpacing: 1.5,
        }}
      >
        CATEGORIAS
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "2.8rem" },
          fontWeight: 800,
          color: "#0F172A",
          mt: 1,
        }}
      >
        Nossos Produtos
      </Typography>

      <Typography
        sx={{
          mt: 2,
          color: "#64748B",
          maxWidth: 520,
          mx: "auto",
        }}
      >
        Selecionamos os produtos mais procurados para garantir qualidade,
        disponibilidade e excelente custo-benefício.
      </Typography>
    </Box>

    {/* Grid */}
    <Grid container spacing={4}>
      {items.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.name}>
          <Card
            component={Link}
            to={item.link}
            elevation={0}
            sx={{
              height: 320,
              borderRadius: 4,
              textDecoration: "none",
              border: "1px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
                borderColor: "#FDBA74",
              },
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.name}
              sx={{
                height: 200,
                objectFit: "contain",
                p: 3,
              }}
            />

            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#1E293B",
                }}
              >
                {item.name}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: 14,
                  color: "#F97316",
                  fontWeight: 600,
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#EA580C",
                  },
                }}
              >
                Explorar →
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
  )
}

export default Products