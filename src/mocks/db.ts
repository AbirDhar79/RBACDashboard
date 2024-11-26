import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  user: {
    id: primaryKey(Number),
    name: String,
    email: String,
    role: String,
    status: String,
  },
  role: {
    id: primaryKey(Number),
    name: String,
    permissions: Array,
    description: String,
  },
});

export const seedDb = () => {
  db.user.create({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
  });
  
  db.role.create({
    id: 1,
    name: 'Admin',
    permissions: ['create_user', 'edit_user', 'delete_user', 'manage_roles'],
    description: 'Full system access',
  });
};

seedDb(); // Call this to populate initial data
