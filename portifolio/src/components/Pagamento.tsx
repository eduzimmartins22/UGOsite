import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material"

const Pagamento = () => {
  return (
    <Box id="pagamento" py={16}>
      <Container>
        <Typography variant="h2" textAlign="center" mb={4}>
          <span style={{ color: "#FF8C00" }}>Contato</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* CONTATOS */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                height: "100%",
              }}
            >
              {/* EMAIL */}
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mb: 0.5 }}
                >
                  gmail
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    wordBreak: "break-word",
                    backgroundColor: "#1a1818",
                    color: "#fff",
                    fontSize: 14,
                    fontFamily: "Arial Rounded MT Bold",
                    padding: "6px 10px",
                    borderRadius: 1.5,
                    display: "inline-block",
                  }}
                >
                  ugocelularescontato@gmail.com
                </Typography>
              </Box>

              {/* WHATSAPP */}
              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  mb={1}
                >
                  whatsapp
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  href="https://wa.me/5527999346464"
                >
                  falar no whatsapp
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* FORMULÁRIO */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography
                variant="subtitle1"
                textAlign="center"
                mb={3}
                fontWeight={500}
                sx={{
                  backgroundColor: "#1a1818",
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "Arial Rounded MT Bold",
                  padding: "6px 10px",
                  borderRadius: 1.5,
                  display: "inline-block",
                  display: "block", marginBottom: "16px",
                }}
              >
                PERGUNTAS
              </Typography>

              <Box
                component="form"
                display="flex"
                flexDirection="column"
                gap={2}
              >
                <TextField label="nome" fullWidth />
                <TextField label="gmail" type="email" fullWidth />
                <TextField label="número" type="tel" fullWidth />
                <TextField
                  label="pergunta"
                  multiline
                  rows={4}
                  fullWidth
                />

                <Button variant="contained">
                  enviar
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" mt={6}>
          <Button
            href="#topo"
            sx={{
              color: "white",
              backgroundColor: "#070707",
              width: "180px",
              height: "60px",
            }}
          >
            voltar ao topo
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Pagamento
