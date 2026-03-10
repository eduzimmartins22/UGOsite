import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import { useCart } from "../context/useCart"
import Logo from "../images/Logo.png"

const navLinks = [
  { label: "Início", href: "#topo" },
  { label: "Reparos", href: "#Reparo" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
]

const produtos = [
  { label: "Celulares", path: "/celulares" },
  { label: "Películas", path: "/Peliculas" },
  { label: "Capinhas", path: "/capinhas" },
  { label: "Mochilas", path: "/mochilas" },
  { label: "Bicicletas", path: "/bicicletas" },
  { label: "Fones", path: "/fones" },
  { label: "Caixas de Som", path: "/caixas-som" },
]

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [produtosOpen, setProdutosOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { cartItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(8,8,8,0.97)"
            : "rgba(8,8,8,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,140,0,0.15)"
            : "1px solid rgba(255,255,255,0.05)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 0.5, minHeight: "64px !important" }}>
          {/* LOGO */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="UGO"
              sx={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                objectFit: "contain",
                border: "1px solid rgba(255,140,0,0.3)",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: 17,
                  letterSpacing: 0.5,
                  color: "white",
                  lineHeight: 1,
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                UGO{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #FF8C00, #FFB347)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  CELULARES
                </Box>
              </Typography>
              <Typography sx={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 1.5 }}>
                TECNOLOGIA & ACESSÓRIOS
              </Typography>
            </Box>
          </Box>

          {/* NAV DESKTOP - hidden on mobile */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
              mr: 3,
            }}
          >
            {navLinks.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  px: 2,
                  py: 1,
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: "8px",
                  transition: "all 0.2s",
                  "&:hover": {
                    color: "#FF8C00",
                    background: "rgba(255,140,0,0.08)",
                  },
                }}
              >
                {link.label}
              </Box>
            ))}

            {/* Dropdown Produtos */}
            <Box
              sx={{ position: "relative" }}
              onMouseEnter={() => setProdutosOpen(true)}
              onMouseLeave={() => setProdutosOpen(false)}
            >
              <Box
                component="button"
                sx={{
                  px: 2,
                  py: 1,
                  color: produtosOpen ? "#FF8C00" : "rgba(255,255,255,0.75)",
                  background: produtosOpen ? "rgba(255,140,0,0.08)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  fontFamily: "'Sora', sans-serif",
                  transition: "all 0.2s",
                  "&:hover": { color: "#FF8C00", background: "rgba(255,140,0,0.08)" },
                }}
              >
                Produtos <ExpandMoreIcon sx={{ fontSize: 16 }} />
              </Box>

              {produtosOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    pt: "6px", // padding instead of gap — mouse stays inside the Box
                    zIndex: 999,
                    minWidth: 200,
                  }}
                >
                  <Box
                    sx={{
                      background: "#141416",
                      border: "1px solid rgba(255,140,0,0.2)",
                      borderRadius: "14px",
                      py: 1,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                    }}
                  >
                    {produtos.map((p) => (
                      <Box
                        key={p.path}
                        component={Link}
                        to={p.path}
                        onClick={() => setProdutosOpen(false)}
                        sx={{
                          display: "block",
                          px: 2.5,
                          py: 1.2,
                          color: "rgba(255,255,255,0.8)",
                          textDecoration: "none",
                          fontSize: 14,
                          fontWeight: 500,
                          transition: "all 0.15s",
                          "&:hover": {
                            color: "#FF8C00",
                            background: "rgba(255,140,0,0.08)",
                            pl: 3,
                          },
                        }}
                      >
                        {p.label}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          {/* CART + MENU */}
          <Box display="flex" alignItems="center" gap={0.5}>
            <IconButton
              component={Link}
              to="/cart"
              sx={{
                color: "white",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                p: 1,
                "&:hover": { borderColor: "#FF8C00", color: "#FF8C00" },
              }}
            >
              <Badge
                badgeContent={cartItems.length}
                sx={{
                  "& .MuiBadge-badge": {
                    background: "#FF8C00",
                    color: "#000",
                    fontWeight: 700,
                  },
                }}
              >
                <ShoppingCartIcon fontSize="small" />
              </Badge>
            </IconButton>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: "white",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                p: 1,
                ml: 0.5,
                "&:hover": { borderColor: "#FF8C00", color: "#FF8C00" },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background: "#0E0E10",
            borderLeft: "1px solid rgba(255,140,0,0.15)",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography fontWeight={700} color="white">Menu</Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.07)" }} />

        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ "&:hover": { background: "rgba(255,140,0,0.08)" } }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setProdutosOpen(!produtosOpen)}
              sx={{ "&:hover": { background: "rgba(255,140,0,0.08)" } }}
            >
              <ListItemText
                primary="Produtos"
                primaryTypographyProps={{ fontSize: 15, fontWeight: 500, color: "#FF8C00" }}
              />
              {produtosOpen ? <ExpandLessIcon sx={{ color: "#FF8C00" }} /> : <ExpandMoreIcon sx={{ color: "rgba(255,255,255,0.4)" }} />}
            </ListItemButton>
          </ListItem>

          <Collapse in={produtosOpen}>
            {produtos.map((p) => (
              <ListItemButton
                key={p.path}
                component={Link}
                to={p.path}
                onClick={() => setDrawerOpen(false)}
                sx={{ pl: 4, "&:hover": { background: "rgba(255,140,0,0.06)" } }}
              >
                <ListItemText
                  primary={p.label}
                  primaryTypographyProps={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}
                />
              </ListItemButton>
            ))}
          </Collapse>
        </List>
      </Drawer>
    </>
  )
}

export default Header
