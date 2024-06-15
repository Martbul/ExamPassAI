import { createContext, useCallback, useEffect, useState } from "react";
import { postRequest,baseUrl} from "../utils/request";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [currentKnowledgebaseAIstate, setCurrentKnowledgebaseAIstate] = useState(false)

  

  const loadUser = async () => {
    try {
      setIsLoading(true);
      const storedUser = await AsyncStorage.getItem('user');
    
      if (storedUser!==null && !user) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to load user", error);
    } 
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
   
  }, []);
  


  return (
    <AuthContext.Provider value={{ user,isLoading,setUser,currentKnowledgebaseAIstate,setCurrentKnowledgebaseAIstate}}>
      {children}
    </AuthContext.Provider>
    
  );
};
