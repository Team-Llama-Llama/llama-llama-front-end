const API_URL = import.meta.env.VITE_API_URL;

// export const login = async (userName:string, password:string) => {
export const login = async () => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({ userName, password }),
  });
  return response.json();
};
