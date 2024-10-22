import zod from "zod";

export const createUserSchema = zod.object({
  userName: zod.string().min(8),
  firstName: zod.string().min(2),
  lastName: zod.string().min(2),
  password: zod.string().min(6),
  email: zod.string().email(),
});
