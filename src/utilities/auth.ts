const API_URL = import.meta.env.VITE_API_URL;

type ApiLoginResponse = Promise<{
  userId: number;
}>;

// export const login = async (userName:string, password:string) => {
export async function login(): ApiLoginResponse {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "preston", password: "pass" }),
  });
  return response.json();
}
