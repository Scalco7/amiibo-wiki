import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useAmiibo } from "../contexts/AmiiboContext";

export default function AmiiboList() {
  const { amiibos, loading, error } = useAmiibo();

  if (loading) return <Typography variant="h6">Carregando...</Typography>;
  if (error) return <Typography color="error">Erro ao carregar dados</Typography>;
  if (!amiibos || amiibos.length === 0)
    return <Typography variant="h6">Nenhum resultado encontrado</Typography>;

  return (
    <Grid container spacing={2} justifyContent="center">
      {amiibos.map((amiibo) => (
        <Grid item key={amiibo.head + amiibo.tail} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image={amiibo.image}
              alt={amiibo.name}
              loading="lazy"
            />
            <CardContent>
              <Typography variant="h6">{amiibo.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Série: {amiibo.amiiboSeries}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tipo: {amiibo.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lançamento (NA): {amiibo.release?.na ?? "N/A"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
