import { decode, sign, verify } from "hono/jwt";

import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", useBlog);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono Post signupblog!");
});
app.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono Post signup blog !");
});
app.get("/api/v1/blog/blog", (c) => {
  return c.text("Hello Hono Post signup !");
});
app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono Post signup !");
});

app.use("/api/v1/blog/*", async (c, next) => {
  const header = c.req.header("authorization ") || "";

  const response = await verify(header, c.env.JWT_SECRET);

  if (response.id) {
    next();
  } else {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }

  await next();
});
export default app;
