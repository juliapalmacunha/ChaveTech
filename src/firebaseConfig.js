// Importa os módulos necessários do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase no projeto
const firebaseConfig = {
  apiKey: "AIzaSyDLlejOHNwvNd_yMjuto1qg8HPgbLRw6jw",
  authDomain: "chaveirojr-9d601.firebaseapp.com",
  projectId: "chaveirojr-9d601",
  storageBucket: "chaveirojr-9d601.firebasestorage.app",
  messagingSenderId: "207762764818",
  appId: "1:207762764818:web:916bcd6eb3960beb7894cb",
  measurementId: "G-T3FSFWQV02", // Essa linha pode ser ignorada se não usar Analytics
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore (banco de dados)
const db = getFirestore(app);

// Exporta o Firestore para usar em outros arquivos do projeto
export { db };
