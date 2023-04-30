import "./index.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function App() {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="basis-1/4">Users</div>
        <div className="basis-1/2">
          <Stack spacing={2} direction="row">
            <Button variant="text">All Users</Button>
            <Button variant="text">Contributor</Button>
            <Button variant="text">Author</Button>
            <Button variant="text">Adminstrator</Button>
            <Button variant="text">Subscriber</Button>
          </Stack>
        </div>
        <div className="basis-1/4 grid grid-cols-2">
          <div></div>
          <Button variant="contained">Add New User</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
