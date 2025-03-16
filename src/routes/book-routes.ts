import { Router } from "express";
import { BookController } from "@/controller/book-controller";

const bookRoute = Router()

const bookController = new BookController()

bookRoute.post('/',bookController.create)
bookRoute.get('/',bookController.index)
bookRoute.get('/:id',bookController.show)
bookRoute.patch('/:id/atualizar',bookController.update)
bookRoute.delete('/:id/remove',bookController.delete)

export {bookRoute}