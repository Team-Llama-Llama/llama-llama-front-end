interface Users {
  id: number;
  username: string;
}

interface Categories {
  id: number;
  userId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface Modules {
  id: number;
  categoryId: number;
  tile: string;
  body: string;
  referenceUrl: string;
  solution: string;
  createdAt: string;
  updatedAt: string;
}

export { Users, Categories, Modules };
