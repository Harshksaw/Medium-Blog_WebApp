import z from "zod"

export const signupInput = z.object({
    username: z.string(),
    password: z.string(),
    name: z.string(),
    })






export const SigninInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),

})

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string(),
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string(),
})
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof SigninInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>