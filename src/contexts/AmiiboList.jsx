// src/components/AmiiboList.jsx
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useState } from "react";
import { useAmiibo } from "../contexts/AmiiboContext";
import Modal from "./Modal";

export default function AmiiboList() {
  const { amiibos, loading, error } = useAmiibo();
  const [open, setOpen] = useState(false);
  const [selectedAmiibo, setSelectedAmiibo] = useState(null);

  if (loading) return <Typography variant="h6">Carregando...</Typography>;
  if (error) return <Typography color="error">Erro ao carregar dados</Typography>;
  if (!amiibos || amiibos.length === 0)
    return <Typography variant="h6">Nenhum resultado encontrado</Typography>;

  const handleOpen = (amiibo) => {
    setSelectedAmiibo(amiibo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAmiibo(null);
  };

  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {amiibos.map((amiibo) => (
          <Grid item key={amiibo.head + amiibo.tail} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                maxWidth: 280,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(amiibo)}
            >
              <CardMedia
                component="img"
                image={amiibo.image}
                alt={amiibo.name}
                loading="lazy"
                sx={{
                  height: 200,
                  objectFit: "contain",
                  padding: "1rem",
                  backgroundColor: "#f9f9f9",
                }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" noWrap>
                  {amiibo.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Série: {amiibo.amiiboSeries}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose} amiibo={selectedAmiibo} />
    </>
  );
}
