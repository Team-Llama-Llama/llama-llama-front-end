interface UserInterface {
  id: number;
  username: string;
}

interface CategoryInterface {
  id: number;
  userId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface ModuleInterface {
  id?: number;
  categoryId: number;
  title: string;
  body: string;
  //PRESTON may need to change from referenceURL -> reference_url (have not edited yet)
  referenceUrl: string;
  solution: string;
  createdAt: string;
  updatedAt: string;
}

export type { UserInterface, CategoryInterface, ModuleInterface };
