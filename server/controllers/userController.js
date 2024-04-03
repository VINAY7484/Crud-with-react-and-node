import { v4 as uuid } from "uuid";

let users = [
  {
    name: "John  Doe",
    email: "john@gmail.com",
    contact: "1234567890",
    id: "b3ef103d-49de-4e32-a7ce-c83fab601d98",
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("User added Succesfully");
};

export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};
export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("User deleted successfully");
};
export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.name = req.body.name;
  user.email = req.body.email;
  user.contact = req.body.contact;

  res.send("User updated successfully");
};
