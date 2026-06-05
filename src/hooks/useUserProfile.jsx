import { useEffect, useState } from "react";
import { getUserProfile } from "../services/profileApi";

const useUserProfile = () => {
  const [user, setUser] = useState();
    

  const [loading, setLoading] = useState(true);
    

  useEffect(() => {
    const fetchProfile =
      async () => {
        try {
          const data =
            await getUserProfile();

          setUser(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchProfile();
  }, []);

  return {
    user,
    loading,
  };
};

export default useUserProfile;