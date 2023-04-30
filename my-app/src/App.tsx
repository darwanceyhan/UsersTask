import "./index.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Checkbox } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

function App() {
  return (
    <>
      <div className="flex flex-row items-center h-20 w-full border-b-2">
        <div className="basis-1/4">Users</div>
        <div className="basis-1/2 h-full flex items-center">
          <Stack spacing={8} direction="row" className="h-full">
            <button className="navbarFilterItems">All Users</button>
            <button className="navbarFilterItems">Contributor</button>
            <button className="navbarFilterItems">Author</button>
            <button className="navbarFilterItems">Adminstrator</button>
            <button className="navbarFilterItems">Subscriber</button>
          </Stack>
        </div>
        <div className="basis-1/4 flex flex-row">
          <div className="basis-1/3"></div>
          <div className="basis-1/2">
            <Button variant="contained" className="text-sm">
              <ControlPointIcon /> Add New User
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mx-6 h-24 items-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5358 20.3631L16.8863 15.7131C18.3953 13.9015 19.1478 11.5779 18.9874 9.22556C18.8269 6.87322 17.7658 4.67331 16.0248 3.08349C14.2839 1.49367 11.997 0.636339 9.6401 0.689864C7.28316 0.743388 5.0376 1.70364 3.37057 3.37086C1.70353 5.03808 0.743382 7.28389 0.689863 9.64108C0.636344 11.9983 1.49358 14.2854 3.08323 16.0265C4.67287 17.7677 6.87254 18.8289 9.22462 18.9894C11.5767 19.1498 13.9001 18.3972 15.7114 16.8881L20.361 21.5381C20.5168 21.6938 20.7281 21.7812 20.9484 21.7812C21.1687 21.7812 21.38 21.6938 21.5358 21.5381C21.6136 21.4613 21.6753 21.3698 21.7174 21.269C21.7596 21.1681 21.7812 21.0599 21.7812 20.9506C21.7812 20.8413 21.7596 20.7331 21.7174 20.6323C21.6753 20.5314 21.6136 20.4399 21.5358 20.3631ZM2.38346 9.86586C2.37964 8.63457 2.67973 7.42136 3.25709 6.33385C3.83446 5.24634 4.67125 4.31813 5.69327 3.63157C6.71528 2.94501 7.89091 2.52131 9.11589 2.39805C10.3409 2.27479 11.5773 2.45578 12.7156 2.92498C13.8539 3.39417 14.8588 4.13705 15.6412 5.08774C16.4236 6.03843 16.9593 7.16754 17.2008 8.37492C17.4424 9.58229 17.3822 10.8306 17.0257 12.0092C16.6692 13.1877 16.0274 14.2601 15.1572 15.1311C14.1136 16.1795 12.7825 16.8947 11.3324 17.1862C9.88221 17.4776 8.37818 17.3323 7.01061 16.7686C5.64305 16.2049 4.47342 15.2482 3.64975 14.0194C2.82609 12.7907 2.3854 11.3452 2.38346 9.86586Z"
            fill="#82868C"
          />
        </svg>

        <input type="text" placeholder="Search" className="searchInput" />
      </div>
      <div className="flex flex-row w-full text-xs items-center listBar">
        <Checkbox />
        <div className="basis-1/6 gap-4">Avatar</div>
        <div className="basis-1/2">Name</div>
        <div className="basis-1/2">Username</div>
        <div className="basis-1/2">Email</div>
        <div className="basis-1/4">Role</div>
        <div className="basis-1/4">Edit</div>
      </div>
    </>
  );
}

export default App;
