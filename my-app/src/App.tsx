import "./index.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="flex flex-row items-center h-20 w-full border-b-2">
      <div className="basis-1/4">Users</div>
      <div className="basis-1/2 h-full flex items-center">
        <Stack spacing={8} direction="row">
          <button className="navbarFilterItems">All Users</button>
          <button className="navbarFilterItems">Contributor</button>
          <button className="navbarFilterItems">Author</button>
          <button className="navbarFilterItems">Adminstrator</button>
          <button className="navbarFilterItems">Subscriber</button>
        </Stack>
      </div>
      <div className="basis-1/4 flex flex-row">
        <div className="basis-1/2"></div>
        <div className="basis-1/2">
          <Button variant="contained">Add New User</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
