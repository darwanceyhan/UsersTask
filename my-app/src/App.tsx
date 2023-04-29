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
            <Button variant="text">Text</Button>
            <Button variant="text">Contained</Button>
            <Button variant="text">Outlined</Button>
          </Stack>
        </div>
        <div className="basis-1/4">
          <Button variant="contained">Add Neww User</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
