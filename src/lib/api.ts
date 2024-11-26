import axios from 'axios';
import { User, Role } from '@/types';

const api = axios.create({
  baseURL: '/api',
});

export const userApi = {
  getAll: () => api.get<User[]>('/users'),
  getById: (id: number) => api.get<User>(`/users/${id}`),
  create: (user: Omit<User, 'id'>) => api.post<User>('/users', user),
  update: (id: number, user: Partial<User>) => api.put<User>(`/users/${id}`, user),
  delete: (id: number) => api.delete(`/users/${id}`),
};

export const roleApi = {
  getAll: () => api.get<Role[]>('/roles'),
  getById: (id: number) => api.get<Role>(`/roles/${id}`),
  create: (role: Omit<Role, 'id'>) => api.post<Role>('/roles', role),
  update: (id: number, role: Partial<Role>) => api.put<Role>(`/roles/${id}`, role),
  delete: (id: number) => api.delete(`/roles/${id}`),
};