import { Request, Response } from "express";
import { userService } from "../../services/user.service"; // Import the userService
import { errorResponse, successResponse } from "../../utils/response.util";

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
  const { name, email, role } = req.body;

  try {
    const user = await userService.getUserByEmail(email);

    if (user) {
      res.status(400).json({ error: "User already exists." });
    } else {
      const newUser = await userService.createUser({ name, email, role });
      res.status(201).json(newUser);
    }
  } catch (error) {
    errorResponse(res, "Failed to create user", 500)
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  try {
    const updatedUser = await userService.updateUser(id, { name, email, role });

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
