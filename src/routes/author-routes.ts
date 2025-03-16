import { Router } from "express";
import { AuthorController } from "@/controller/author-controller";

const authorRoutes = Router()
const authorController = new AuthorController()


authorRoutes.post('/',authorController.create)
authorRoutes.get('/',authorController.index)
authorRoutes.get('/:id',authorController.show)
authorRoutes.patch('/:id/atualiza', authorController.update)
authorRoutes.delete('/:id', authorController.delete)


export{authorRoutes}