interface User {
  main
  id: number;
  username: string;
}

interface Category {
  id: number;
  userId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface Module {
  id: number;
  categoryId: number;
  tile: string;
  body: string;
  referenceUrl: string;
  solution: string;
  createdAt: string;
  updatedAt: string;
}

export { User, Category, Module };
