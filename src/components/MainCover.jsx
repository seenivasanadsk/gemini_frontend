/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import DialogForm from "./DialogForm";
import { useState } from "react";
function MainCover({ children, title, form }) {
  const FormContent = form;
  const [showFormDialog, setShowFormDialog] = useState(true);

  function openForm() {
    setShowFormDialog(true);
  }

  function closeForm() {
    setShowFormDialog(false);
  }

  return (
    <>
      <Box className="head" sx={{ m: 1.5 }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1">
            {title}
          </Typography>
          <Box>
            <Button variant="contained" onClick={openForm}>
              Add new {title}
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box className="body">{children}</Box>
      <DialogForm
        title={title}
        showFormDialog={showFormDialog}
        closeForm={closeForm}
      >
        <FormContent></FormContent>
      </DialogForm>
    </>
  );
}

export default MainCover;
