import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref } from 'vue';

const error = ref<string | null>(null);

const signup = async (username: string, email: string, password: string) => {
  console.log(auth, email, password);
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (!response) {
      throw new Error('Could not complete the signup');
    }

    await updateProfile(response.user, { displayName: username });
    error.value = null;
    return response;
  } catch (err: any) {
    console.error(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return {
    error,
    signup
  };
};

export default useSignup;
