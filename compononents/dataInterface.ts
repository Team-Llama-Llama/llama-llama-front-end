export interface Users {
  id: number;
  username: string;
  hashedPassword: string;
}

export interface Categories {
  id: number;
  userId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Modules {
  id: number;
  categoryId: number;
  tile: string;
  body: string;
  referenceUrl: string;
  solution: string;
  createdAt: string;
  updatedAt: string;
}
