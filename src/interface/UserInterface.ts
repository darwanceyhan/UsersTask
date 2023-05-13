interface UserInterface {
   id: number;
    name: string;
    username: string;
    email: string;
    role: string;
    checked: boolean;
    avatar: {
        URL: string;
        avatarNumber: number;
    };
    }

export default UserInterface;
