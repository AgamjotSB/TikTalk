import * as z from 'zod';

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(3, { message: 'Minimum 3 Characters'}).max(30, {message: "Max 30 Characters"}),
  username: z.string().min(3, { message: 'Minimum 3 Characters'}).max(30, {message: "Max 30 Characters"}),
  bio: z.string().min(3).max(1000),
})