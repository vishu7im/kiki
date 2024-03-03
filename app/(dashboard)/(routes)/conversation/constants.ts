import { z } from "zod";

const formSchema = z.object({
  prompt: z.string().min(2).max(100),
});

export default formSchema;
