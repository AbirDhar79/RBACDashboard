// import { http, HttpResponse } from 'msw';
// import { db } from './db';

// export const handlers = [
//   // Users endpoints
//   http.get('/api/users', () => {
//     const users = db.user.getAll();
//     return HttpResponse.json(users, { status: 200 });
//   }),

//   http.post('/api/users', async ({ request }) => {
//     const body = await request.json();
//     const user = db.user.create(body);
//     return HttpResponse.json(user, { status: 201 });
//   }),

//   http.put('/api/users/:id', async ({ request, params }) => {
//     const { id } = params;
//     const body = await request.json();
//     const user = db.user.update({
//       where: { id: { equals: Number(id) } },
//       data: body,
//     });
//     return HttpResponse.json(user, { status: 200 });
//   }),

//   http.delete('/api/users/:id', ({ params }) => {
//     const { id } = params;
//     db.user.delete({ where: { id: { equals: Number(id) } } });
//     return new HttpResponse(null, { status: 204 });
//   }),

//   // Roles endpoints
//   http.get('/api/roles', () => {
//     const roles = db.role.getAll();
//     return HttpResponse.json(roles, { status: 200 });
//   }),

//   http.post('/api/roles', async ({ request }) => {
//     const body = await request.json();
//     const role = db.role.create(body);
//     return HttpResponse.json(role, { status: 201 });
//   }),

//   http.put('/api/roles/:id', async ({ request, params }) => {
//     const { id } = params;
//     const body = await request.json();
//     const role = db.role.update({
//       where: { id: { equals: Number(id) } },
//       data: body,
//     });
//     return HttpResponse.json(role, { status: 200 });
//   }),

//   http.delete('/api/roles/:id', ({ params }) => {
//     const { id } = params;
//     db.role.delete({ where: { id: { equals: Number(id) } } });
//     return new HttpResponse(null, { status: 204 });
//   }),
// ];