import { Router } from "express";
import { authorRoutes } from "./author-routes";
import { bookRoute } from "./book-routes";

const routes = Router()

routes.use('/author', authorRoutes)
routes.use('/book',bookRoute)

export {routes}