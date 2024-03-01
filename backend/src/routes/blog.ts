import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

import { PrismaClient } from "@prisma/client/edge";
import { verify } from "hono/jwt";

export const blogRouter = new  Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables: {
      userId: string
    }
  }>();

blogRouter.use("/*",async(c, next)=>{
  const token = c.req.header("authorization") || "";
  const user = verify(token, c.env.JWT_SECRET);
  if(user){
    c.set("userId", user.id);
    next();
  }else{
    c.status(403);
    return c.json({
      message: "Unauthorized"
    })
  }


    next();
})


blogRouter.post("/api/v1/blog", async(c) => {

  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog =  await prisma.blog.create({
    where: {
      id:body.id
    },

    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId)
    },

  })
  return c.json({
    id:blog.id
  })

    

  });


blogRouter.put("/",async (c) => {
   
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog =  await prisma.blog.update({
    where: {
      id:body.id
    },
    
    data: {
      title: body.title,
      content: body.content,
    },

  })
  return c.json({
    id:blog.id
  })
  });

blogRouter.get("/blog",async (c) => {
    
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog =  await prisma.blog.findFirst({
    where: {
      id:body.id
    },
      })
  return c.json({
    blog

  });
})

blogRouter.get("/bulk",async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogs = await  prisma.blog.findMany();
  return c.json({
    blogs
  })

});
  