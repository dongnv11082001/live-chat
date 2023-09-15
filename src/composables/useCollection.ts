import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { ref } from 'vue';

type DocType = {
  message: string;
  user: string;
  createdAt: string;
};

const useCollection = (path: string) => {
  const error = ref<string | null>(null);

  const addDocumentToFirebase = async (docData: DocType) => {
    try {
      await addDoc(collection(db, `${path}`), docData);
    } catch (err: any) {
      console.log(err.message);
      error.value = 'Could not send the message';
    }
  };
  return { addDocumentToFirebase, error };
};

export default useCollection;
