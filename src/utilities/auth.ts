const API_URL = import.meta.env.VITE_API_URL;

type ApiLoginResponse = Promise<{
  userId: number;
}>;

export const login = async (userName:string, password:string):ApiLoginResponse => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: userName, password: password }),
    credentials: "include"
  });
  return response.json();
}

export async function logout(): Promise<any>{
  const response = await fetch(`${API_URL}/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });
  return response.json();
}
