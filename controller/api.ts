import { Request, Response } from 'express';
import { createUser, fetchUser, updateUser} from '../repository/userCollection';
import { User } from '../entities/user';


export const createUserData = async (req: Request, res: Response) => {
    try{
        const { email, age, name } = req.body;

        if (!email || !age || !name) {
            res.status(400).json({ message: 'Email, name, and age are required' });
            return;
        }
        const userJson = {
            name,
            email,
            age: Number(age),
        };
        await createUser(userJson);
        res.status(201).json({ message: 'User created successfully', user: userJson });
        return 
    }catch(error){
        res.status(500).json({ message: 'Error create user data', error });
    }
};

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;

    await updateUser(user);
    res.status(200).json({ message: 'User data updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user data', error });
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: 'User ID is required' });
        return
    }
    const user = await fetchUser(id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return
    }

    res.status(200).json({ message: 'User data fetched successfully', user });
    return
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data', error });
    return
  }
};
