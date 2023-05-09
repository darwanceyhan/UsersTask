import { Checkbox } from "@mui/material";
import UserInterface from "../../interface/UserInterface";

interface UserListProps {
  users: UserInterface[];
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setFullname: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;

  fullname: string;
  username: string;
  email: string;
  role: string;
  id: number;
  page: number;
  search: string;
}

function UserList(props: UserListProps): JSX.Element {
  const deleteUser = (id: number) => {
    const newUsers = props.users.filter((user) => user.id !== id);
    props.setUsers(newUsers);
  };

  const checkedUser = (id: number) => {
    const newUsers = props.users.map((user) =>
      user.id === id ? { ...user, checked: !user.checked } : user
    );
    props.setUsers(newUsers);
  };

  return (
    <>
      {props.users
        .filter(
          (user) =>
            user.email.includes(props.search) ||
            user.name.includes(props.search)
        )
        .slice((props.page - 1) * 10, props.page * 10)
        .map((user) => (
          <div className="flex flex-row w-full text-xs h-20 items-center userList">
            <Checkbox
              checked={user.checked}
              onChange={() => checkedUser(user.id)}
            />
            <div className="basis-1/6 gap-4"></div>
            <div className="basis-1/2">{user.name}</div>
            <div className="basis-1/2">{user.username}</div>
            <div className="basis-1/2">{user.email}</div>
            <div className="basis-1/4">{user.role}</div>
            <div className="basis-1/4 flex gap-4">
              <button
                className="hover:text-rose-600"
                onClick={() => {
                  props.setFullname(user.name);
                  props.setUsername(user.username);
                  props.setEmail(user.email);
                  props.setRole(user.role);
                  props.setId(user.id);
                  props.setPopup(true);
                }}
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5687 0.800676C18.048 0.279983 17.2037 0.279983 16.6831 0.800676L14.7975 2.68629L20.4543 8.34314L22.3399 6.45753C22.8605 5.93684 22.8605 5.09261 22.3399 4.57192L18.5687 0.800676ZM18.5687 10.2288L12.9117 4.57192L1.04579 16.4379C0.79574 16.688 0.655273 17.0271 0.655273 17.3807V21.152C0.65526 21.8884 1.25222 22.4853 1.98861 22.4853H5.75983C6.11346 22.4853 6.45259 22.3448 6.70265 22.0948L18.5687 10.2288Z"
                    fill="#82868C"
                  />
                </svg>
              </button>
              <button
                className="hover:text-rose-600"
                onClick={() => deleteUser(user.id)}
              >
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
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default UserList;
