const API_URL = import.meta.env.VITE_API_URL;
import {
  CategoryInterface,
  ModuleInterface,
} from "../interfaces/dataInterface";

// fetch for categories
export const getCategories = async (
  userId: number
): Promise<CategoryInterface[]> => {
  //Need to add auth user
  const response = await fetch(`${API_URL}/users/${userId}/categories`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });
  return response.json();
};

export const addCategory = async (
  name: string,
  userId: number
): Promise<{ message: string; data: CategoryInterface }> => {
  //Need to add auth user
  const response = await fetch(`${API_URL}/users/${userId}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
    credentials: "include"
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
    credentials: "include"
  });
  return response.json();
};

export const deleteCategory = async (categoryId: number) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}`, {
    method: "DELETE",
    credentials: "include"
  });
  return response.status;
};

// fetch for modules
export const getModules = async (categoryId: number) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}/modules`, {
    method: "GET",
    credentials: "include"
  });
  return response.json();
};

interface ApiResponse <T> {
  message: string;
  data: T
}
export const addModule = async (
  categoryId: number,
  title: string,
  referenceUrl: string
): Promise<ApiResponse<ModuleInterface>> => {
  const newModuleObject: ModuleInterface = {
    categoryId: categoryId,
    title: title,
    referenceUrl: referenceUrl,
    body: "",
    solution: "",
    createdAt: "",
    updatedAt: "",
  };
  const response = await fetch(`${API_URL}/categories/${categoryId}/modules`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newModuleObject),
        credentials: "include"
  });
  return response.json();
};

export const editModule = async (
  moduleId: number,
  moduleEdited: ModuleInterface
) => {
  const response = await fetch(`${API_URL}/modules/${moduleId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(moduleEdited),
        credentials: "include"
  });
  return response.status;
};

export const deleteModule = async (moduleId: number) => {
  const response = await fetch(`${API_URL}/modules/${moduleId}`, {
    method: "DELETE",
        credentials: "include"
  });
  return response.status;
};
