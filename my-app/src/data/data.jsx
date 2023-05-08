const UserData = () => {
  let data = [];

  for (let i = 0; i < 40; i++) {
    data.push({
      id: i + 1,
      name: "zachary gonzalez",
      username: "zachary-gonzalez",
      email: "zachary-gonzalez@gmail.com",
      role: "Editor",
      checked: false,
    });
  }
  return data;
};

export default UserData;
