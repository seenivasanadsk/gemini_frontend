import {
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import StraightenIcon from "@mui/icons-material/Straighten";
import PaymentsIcon from "@mui/icons-material/Payments";

function Order() {
  return (
    <Card variant="outlined" sx={{ maxWidth: "sm" }}>
      <CardContent>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>#001</Typography>
          <Chip label="New" color="primary" variant="filled" size="small" />
        </Stack>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <LandscapeIcon></LandscapeIcon>
            </ListItemIcon>
            <ListItemText>M sand</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StraightenIcon></StraightenIcon>
            </ListItemIcon>
            <ListItemText>2.00</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PaymentsIcon></PaymentsIcon>
            </ListItemIcon>
            <ListItemText>8400</ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
export default Order;
