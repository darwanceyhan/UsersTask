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
import UserInterface from "../../interface/UserInterface";

interface PopupProps {
  users: UserInterface[];
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setFullname: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  fullname: string;
  username: string;
  email: string;
  role: string;
}
const Popup = (props: PopupProps) => {
  const addNewUser = () => {
    const newUser: UserInterface = {
      id: props.users.length + 1,
      name: props.fullname,
      username: props.username,
      email: props.email,
      role: props.role,
    };
    props.setUsers([...props.users, newUser]);
    props.setPopup(false);
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
              value={props.fullname}
              onChange={(e) => props.setFullname(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={props.username}
              onChange={(e) => props.setUsername(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email Adress"
              variant="outlined"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={props.role}
                  onChange={(e) => props.setRole(e.target.value)}
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
