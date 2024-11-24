import { ZodType, z } from "zod";

export type TodoFieldType = {
  text: string;
};

export const TodoSchema: ZodType<TodoFieldType> = z.object({
  text: z.string().trim().min(1, "Please enter a TODO"),
});
