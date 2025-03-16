import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";
export class AuthorController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(2, "Nome é obrigatório"),
      birthdate: z
        .string()
        .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data deve estar no formato dd/mm/yyyy")
        .transform((val) => {
          const [day, month, year] = val.split("/").map(Number);
          return new Date(year, month - 1, day);
        }),
    });

    const { name, birthdate } = bodySchema.parse(req.body);

    await prisma.author.create({
      data: {
        name,
        birthdate,
      },
    });
    res.json({ name, birthdate });
  }

  async index(req: Request, res: Response) {
    const author = await prisma.author.findMany();
    res.json(author);
  }

  async show(req: Request, res: Response) {
    const paramSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramSchema.parse(req.params);

    const author = await prisma.author.findFirst({
      where: { id },
    });

    res.json(author);
  }

  async update(req: Request, res: Response) {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const bodySchema = z.object({
      name: z.string().trim().min(2, "Nome é obrigatório"),
      birthdate: z
        .string()
        .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data deve estar no formato dd/mm/yyyy")
        .transform((val) => {
          const [day, month, year] = val.split("/").map(Number);
          return new Date(year, month - 1, day);
        }).optional(),
    });
    const {id} = paramsSchema.parse(req.params)
    const {name,birthdate} = bodySchema.parse(req.body)

    await prisma.author.update({
        data:{
            name,
            birthdate
        },
        where:{
            id:id
        }
    })

    res.status(200).json({name,birthdate})
  }

  async delete(req: Request, res: Response){
    const {id} = req.params

    await prisma.author.delete({where:{id:id}})
     res.json({message: "autor deletado"})
  }
}
