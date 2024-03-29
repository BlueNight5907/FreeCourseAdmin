/* eslint-disable react/prop-types */
import React from "react";
import { DeleteOutline } from "@mui/icons-material";
import ConfirmDialog from "components/dialog/confirm-dialog";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import { useTheme } from "@mui/material";

const DeleteAction = ({ params, onDelete }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const onAccept = async () => {
    try {
      onDelete();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SoftButton
        variant="gradient"
        style={{ marginLeft: 16 }}
        color="error"
        onClick={() => setOpen(true)}
      >
        <DeleteOutline />
      </SoftButton>
      <ConfirmDialog
        open={open}
        title={`Xóa người dùng`}
        setOpen={setOpen}
        deleted
        onAccept={onAccept}
      >
        <SoftTypography variant="body2">
          Bạn có chắc chắn muốn xóa người dùng{" "}
          <strong style={{ color: theme.palette.error.light }}>
            {params.row.userInformation.fullName}
          </strong>{" "}
          này không?
        </SoftTypography>
      </ConfirmDialog>
    </>
  );
};

export default DeleteAction;
