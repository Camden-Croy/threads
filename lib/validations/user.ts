import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Name must be 3 characters or longer." })
    .max(30, { message: "Name must be 30 characters or shorter." }),
  username: z
    .string()
    .min(3, { message: "Username must be 3 characters or longer." })
    .max(30, { message: "Username must be 30 characters or shorter." }),
  bio: z.string().max(1000, { message: "Bio cannot exceed 1000 characters." }),
});
