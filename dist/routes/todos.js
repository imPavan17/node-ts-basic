"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [{ id: 1, value: "Go for a walk" }];
router.get("/get", (_req, res) => {
    res.json({
        data: todos,
    });
});
router.post("/create", (req, res) => {
    const body = req.body;
    const newTodo = {
        id: 2,
        value: body.value,
    };
    todos.push(newTodo);
});
exports.default = router;
