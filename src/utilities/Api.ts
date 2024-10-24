const API_URL = import.meta.env.VITE_API_URL;

// fetch for categories

export const addCategory = async (name: string) => {
  const response = await fetch(`${API_URL}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return response.json();
};

export const editCategory = async (
  categoryId: number,
  categoryEdited: string
) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ categoryEdited }),
  });
  return response.json();
};

export const deleteCategory = async (categoryId: number) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}`, {
    method: "DELETE",
  });
  return response.status;
};

// fetch for modules

export const getModules = async (categoryId: number) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}/modules`);
  return response.json();
};

export const addModule = async (categoryId: number, newModule: object) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}/modules`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newModule),
  });
  return response.json();
};

export const editModule = async (moduleId: number, moduleEdited: object) => {
  const response = await fetch(`${API_URL}/modules/${moduleId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(moduleEdited),
  });
  return response.json();
};

export const deleteModule = async (moduleId: number) => {
  const response = await fetch(`${API_URL}/modules/${moduleId}`, {
    method: "DELETE",
  });
  return response.status;
};
