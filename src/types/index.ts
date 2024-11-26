export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
  }
  
  export interface Role {
    id: number;
    name: string;
    permissions: string[];
    description: string;
  }
  