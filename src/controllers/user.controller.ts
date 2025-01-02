import { Request, Response } from "express";
import { userService } from "../services/user.service"; // Import the userService

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userService.getUserById(id);

    if (!user) {
      res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await userService.createUser({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const updatedUser = await userService.updateUser(id, { name, email, password });
    
    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedUser = await userService.deleteUser(id);

    if (!deletedUser) {
      res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};
