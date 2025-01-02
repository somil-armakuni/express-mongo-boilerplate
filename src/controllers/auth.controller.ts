import { Request, Response } from 'express';

// Controller to handle login
export const login = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to handle registration
export const register = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
