"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { syncUser } from "@/lib/actions/users";

function UserSync() {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const handleSyncUser = async () => {
      if (isLoaded && isSignedIn) {
        try {
          await syncUser();
        } catch (error) {
          console.log("Failed to sync user", error);
        }
      }
    };

    handleSyncUser();
  }, []);

  return null;
}

export default UserSync;
