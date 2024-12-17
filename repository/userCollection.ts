import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';


const USERS_COLLECTION = 'users';

export const createUser = async (user: { email: string; name: string; age: number }) => {
    return await db.collection(USERS_COLLECTION).doc(user.email).set(user);
};

export const updateUser = async (user: User): Promise<void> => {
  return await db.collection(USERS_COLLECTION).doc(user.email).set(user, { merge: true });
};

export const fetchUser = async (id: string): Promise<User | null> => {
  const userDoc = await db.collection(USERS_COLLECTION).doc(id).get();
  return userDoc.exists ? (userDoc.data() as User) : null;
};