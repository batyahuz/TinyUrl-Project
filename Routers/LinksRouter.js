import express from "express"
import LinksController from "../Controllers/LinksController"

const LinksRouter = express.Router()

TasksRouter.get("/", LinksController.getLinks)
TasksRouter.get("/:id", LinksController.getById)
TasksRouter.post("/", LinksController.add)
TasksRouter.put("/:id", LinksController.update)
TasksRouter.delete("/:id", LinksController.delete)

export default LinksRouter
