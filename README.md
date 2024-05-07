# Next-Auth

- NextAuth
- tRPC
- ta
- Prisma
- Postgresql
- Tailwind
- tanstack/react-query
- hookform
- zod
- jsonwebtoken
- bcryptjs

#### For Migrations (every time the model is being changed)

```bash
npx prisma migrate dev --name init
```

### Test Routes

- [Status Checker (public)](http://localhost:3000/api/trpc/statuschecker): `http://localhost:3000/api/trpc/statuschecker`
- [Get User (private)](http://localhost:3000/api/trpc/getUser): `http://localhost:3000/api/trpc/getUser`

## Breakdown

tRPC: 
 - routes on `/api/trpc`