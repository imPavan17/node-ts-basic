import { Router } from "express";

const router = Router();
const todos: Todo[] = [{ id: 1, value: "Go for a walk" }];

/*
    type Todo = {
    id: number;
    value: string;
    }[]; OR can use interface like below
*/
interface Todo {
  id: number;
  value: string;
}

router.get("/get", (_req, res) => {
  res.json({
    data: todos,
  });
});

type RequestBody = { value: string };

router.post("/create", (req, res) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: 2,
    value: body.value,
  };

  todos.push(newTodo);
});

export default router;
