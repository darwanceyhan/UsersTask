import CloseIcon from "@mui/icons-material/Close";
import {
  Stack,
  TextField,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import UserInterface from "../../interface/UserInterface";

interface PopupProps {
  users: UserInterface[];
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const Popup = (props: PopupProps) => {
  const [fullname, setFullname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  return (
    <div className="popup-container">
      <div className="popup">
        <div
          className="close-button"
          onClick={() => {
            props.setPopup(false);
          }}
        >
          <CloseIcon />
        </div>

        <Stack spacing={2} sx={{ width: "90%" }} className="mx-auto">
          <TextField id="outlined-basic" label="Full Name" variant="outlined" />
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Email Adress"
            variant="outlined"
          />
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Contributor</MenuItem>
                <MenuItem value={20}>Subscriber</MenuItem>
                <MenuItem value={30}>Author</MenuItem>
                <MenuItem value={40}>Adminstrator</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>

        <Stack
          direction="column"
          spacing={2}
          sx={{ width: "90%" }}
          className="mx-auto mt-5"
        >
          <h2 className="mt-20">Select Avatar</h2>
          <Stack direction="row" spacing={2}>
            <Avatar
              variant="square"
              sx={{ height: "50px", width: "50px" }}
            ></Avatar>
            <Avatar
              variant="square"
              sx={{ height: "50px", width: "50px" }}
            ></Avatar>
            <Avatar
              variant="square"
              sx={{ height: "50px", width: "50px" }}
            ></Avatar>
            <Avatar
              variant="square"
              sx={{ height: "50px", width: "50px" }}
            ></Avatar>
            <Avatar
              variant="square"
              sx={{ height: "50px", width: "50px" }}
            ></Avatar>
            <Avatar
              variant="square"
              sx={{ height: "50px", width: "50px" }}
            ></Avatar>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Popup;
