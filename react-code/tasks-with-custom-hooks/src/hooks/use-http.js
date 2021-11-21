import { useState, useCallback } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = useCallback((requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
  
      fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers: {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
      })
      .then(response => {
       return response.json();
      }).then(data => {
  
        applyData(data);
  
      }).catch(err => {
        setError(err.message || "Something went wrong!"); 
      });
      setIsLoading(false); 
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;