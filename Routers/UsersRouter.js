import express from 'express'
import UsersController from '../Controllers/UsersController'

const UsersRouter = express.Router()

TasksRouter.get('/', UsersController.getUsers)
TasksRouter.get('/:id', UsersController.getById)
TasksRouter.post('/', UsersController.add)
TasksRouter.put('/:id', UsersController.update)
TasksRouter.delete('/:id', UsersController.delete)

export default UsersRouter
