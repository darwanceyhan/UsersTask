import "./index.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Checkbox } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useEffect, useState } from "react";
import UserData from "./data/data";
import UserInterface from "./interface/UserInterface";
import Popup from "./components/popup/popup";
import UserList from "./components/userlist/userlist";
import Pagination from "./components/pagination/pagination";

function App() {
  const [popup, setPopup] = useState(false);
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [fullname, setFullname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setUsers(UserData);
  }, []);

  const deleteSelectedUsers = () => {
    const newUsers = users.filter((user) => !user.checked);
    setUsers(newUsers);
  };

  const checkAllUsers = () => {
    if (users.filter((user) => user.checked).length === users.length) {
      const newUsers = users.map((user) => {
        user.checked = false;
        return user;
      });
      setUsers(newUsers);
    } else {
      const newUsers = users.map((user) => {
        user.checked = true;
        return user;
      });
      setUsers(newUsers);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center h-20 w-full border-b-2">
        <div className="basis-1/4 flex items-center gap-2">
          <div
            className="w-10 h-10 flex items-center ml-4 rounded-lg"
            style={{ backgroundColor: "#D4DBFC" }}
          >
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M4.73285 3.81304C5.16609 3.52959 5.45136 3.04757 5.45136 2.50016C5.45136 1.62767 4.72711 0.920654 3.83301 0.920654C2.9389 0.920654 2.21438 1.62767 2.21438 2.50016C2.21438 3.04757 2.5002 3.52986 2.93316 3.81304C1.81013 4.13679 1 5.02797 1 5.89486C1 6.97953 2.26881 6.84101 3.83328 6.84101C5.3983 6.84101 6.66656 6.9798 6.66656 5.89486C6.66683 5.0277 5.85697 4.13652 4.73285 3.81304ZM15.0663 3.81304C15.4995 3.52959 15.7848 3.04757 15.7848 2.50016C15.7848 1.62767 15.0605 0.920654 14.1664 0.920654C13.2723 0.920654 12.5478 1.62794 12.5478 2.50016C12.5478 3.04757 12.8336 3.52986 13.2666 3.81304C12.1436 4.13679 11.3334 5.02797 11.3334 5.89486C11.3334 6.97953 12.6022 6.84101 14.1667 6.84101C15.7317 6.84101 17 6.9798 17 5.89486C17 5.0277 16.1901 4.13652 15.0663 3.81304ZM9.99325 11.4178C10.4713 11.1047 10.7864 10.5728 10.7864 9.96827C10.7864 9.0053 9.98668 8.22435 8.99959 8.22435C8.01277 8.22435 7.21276 9.0053 7.21276 9.96827C7.21276 10.5728 7.52784 11.105 8.0062 11.4178C6.76584 11.7752 5.87174 12.759 5.87174 13.7161C5.87174 14.9137 7.27211 14.7604 8.99986 14.7604C10.7276 14.7604 12.1277 14.9137 12.1277 13.7161C12.128 12.7587 11.2336 11.7749 9.99325 11.4178Z"
                stroke="#2940D3"
                stroke-width="1.3"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          Users
        </div>
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
            <Button
              variant="contained"
              className="text-sm"
              onClick={() => setPopup(true)}
            >
              <ControlPointIcon /> Add New User
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
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
        <div className="flex items-center justify-end mr-5 gap-2 ">
          <svg
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 20.75C1.5 22.1313 2.61875 23.25 4 23.25H14C15.3813 23.25 16.5 22.1313 16.5 20.75V5.75H1.5V20.75ZM17.75 2H13.375L12.125 0.75H5.875L4.625 2H0.25V4.5H17.75V2Z"
              fill="#82868C"
            />
          </svg>
          <button
            className="hover:text-rose-600"
            onClick={() => {
              deleteSelectedUsers();
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full text-xs items-center listBar">
        <Checkbox
          onClick={checkAllUsers}
          checked={users.length === users.filter((user) => user.checked).length}
        />
        <div className="basis-1/6 gap-4">Avatar</div>
        <div className="basis-1/2">Name</div>
        <div className="basis-1/2">Username</div>
        <div className="basis-1/2">Email</div>
        <div className="basis-1/4">Role</div>
        <div className="basis-1/4">Edit</div>
      </div>
      {users && (
        <UserList
          setPopup={setPopup}
          users={users}
          setUsers={setUsers}
          fullname={fullname}
          setFullname={setFullname}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          role={role}
          setRole={setRole}
          id={id}
          setId={setId}
          page={page}
          setPage={setPage}
        />
      )}
      {popup && (
        <Popup
          setPopup={setPopup}
          users={users}
          setUsers={setUsers}
          fullname={fullname}
          setFullname={setFullname}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          role={role}
          setRole={setRole}
          id={id}
          setId={setId}
        />
      )}
      <Pagination users={users} page={page} setPage={setPage} />
    </>
  );
}

export default App;
