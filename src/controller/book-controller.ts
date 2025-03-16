import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { date, z } from "zod";

export class BookController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      title: z.string().trim().min(3, "Digite o titulo"),
      publication_year: z
        .number()
        .positive()
        .min(3, "Digite o ano de publicação"),
      author_id: z.string().uuid(),
    });

    const { title, publication_year, author_id } = bodySchema.parse(req.body);

    const book = await prisma.book.create({
      data: {
        title,
        publication_year,
        author_id,
      },
    });

    res.json({ book });
  }

  async index(req: Request, res: Response) {
    const books = await prisma.book.findMany();
    res.json(books);
  }

  async show(req: Request, res: Response) {
    const paramSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramSchema.parse(req.params);

    const book = await prisma.book.findFirst({
      where: { id },
    });

    res.json(book);
  }

  async update(req: Request, res: Response) {
    const paramsSchema = z.object({
        id: z.string(),
      });
    const bodySchema = z.object({
      title: z.string().trim().min(3, "Digite o titulo"),
      publication_year: z
        .number()
        .positive()
        .min(3, "Digite o ano de publicação").optional()
    });

    const {id} = paramsSchema.parse(req.params)
    const {title, publication_year} = bodySchema.parse(req.body)

    await prisma.book.update({
        data:{
            title,
            publication_year
        },
        where:{
            id:id
        }
    })

    res.status(200).json({message: "atualizado com sucesso"})
  }


  async delete(req: Request, res: Response){
    const {id} = req.params

    await prisma.book.delete({where:{id:id}})
     res.json({message: "Livro deletado"})
   
  }

}
