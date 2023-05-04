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
  Button,
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

  const addNewUser = () => {
    const newUser: UserInterface = {
      id: props.users.length + 1,
      name: fullname,
      username: username,
      email: email,
      role: role,
    };
    props.setUsers([...props.users, newUser]);
    props.setPopup(false);
  };

  const deleteUser = (id: number) => {
    const newUsers = props.users.filter((user) => user.id !== id);
    props.setUsers(newUsers);
  };
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

        <form onSubmit={addNewUser}>
          <Stack spacing={2} sx={{ width: "90%" }} className="mx-auto">
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email Adress"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <MenuItem value={"Contributor"}>Contributor</MenuItem>
                  <MenuItem value={"Subscriber"}>Subscriber</MenuItem>
                  <MenuItem value={"Author"}>Author</MenuItem>
                  <MenuItem value={"Adminstrator"}>Adminstrator</MenuItem>
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
          <Button variant="contained" className="text-sm" type="submit">
            Add New User
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
