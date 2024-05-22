import React, { useEffect, useRef } from "react";
import { useAuth } from "./AuthContext";
import { getMyReceivedFriendRequests } from "../services/polling";

const PollingComponent = () => {
  const { isAuthenticated } = useAuth();
  const pollingRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      startPolling();
    } else {
      stopPolling();
    }

    return () => stopPolling(); // Clean up on unmount
  }, [isAuthenticated]);

  const startPolling = () => {
    pollingRef.current = setInterval(async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await getMyReceivedFriendRequests(userId);
        console.log("Polling data:", response);
      } catch (error) {
        console.error("Polling error:", error);
      }
    }, 5000); // Adjust the interval as necessary
  };

  const stopPolling = () => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  };

  return null; // This component doesn't render anything
};

export default PollingComponent;