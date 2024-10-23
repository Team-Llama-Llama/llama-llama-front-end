const API_URL = import.meta.env.VITE_API_URL;

// fetch for categories
export const getCategories = async () => {
  const response = await fetch(`${API_URL}/categories"`);
  return response.json();
};

export const addCategory = async (newCategory) => {
  const response = await fetch(`${API_URL}/categories"`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCategory),
  });
  return response.json();
};

export const editCategory = async (categoryId, categoryEdit) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categoryId, categoryEdit),
  });
  return response.json();
};

export const deleteCategory = async (categoryId) => {
  await fetch(`${API_URL}/categories/${categoryId}`, {
    method: "DELETE",
  });
};

// fetch for modules

export const getModules = async (categoryId) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}/modules"`);
  return response.json();
};

export const addModule = async (categoryId, newModule) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}/modules"`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newModule),
  });
  return response.json();
};

export const editModule = async (moduleId, moduleEdit) => {
  const response = await fetch(`${API_URL}/modules/${moduleId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(moduleId, moduleEdit),
  });
  return response.json();
};

export const deleteModule = async (moduleId) => {
  await fetch(`${API_URL}/modules/${moduleId}`, {
    method: "DELETE",
  });
};
