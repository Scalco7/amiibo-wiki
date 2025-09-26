import { createPortal } from "react-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

export default function Modal({ open, onClose, amiibo }) {
  if (!open || !amiibo) return null;

  return createPortal(
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>{amiibo.name}</DialogTitle>
      <DialogContent dividers>
        <img
          src={amiibo.image}
          alt={amiibo.name}
          style={{
            display: "block",
            margin: "0 auto 1rem",
            maxHeight: "200px",
            objectFit: "contain",
          }}
        />
        <Typography><strong>Série:</strong> {amiibo.amiiboSeries}</Typography>
        <Typography><strong>Tipo:</strong> {amiibo.type}</Typography>
        <Typography><strong>Jogo:</strong> {amiibo.gameSeries}</Typography>
        <Typography><strong>Lançamento (NA):</strong> {amiibo.release?.na ?? "N/A"}</Typography>
        <Typography><strong>Lançamento (JP):</strong> {amiibo.release?.jp ?? "N/A"}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>,
    document.getElementById("modal-root") // 👈 ainda usamos o portal explicitamente
  );
}
