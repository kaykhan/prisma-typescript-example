import { Config } from "@config";
import { Prisma, PrismaClient } from "@prisma/client";

export const PrismaService = new PrismaClient({
    log: Config.env !== "production" ? ["query", "info", "warn", "error"] : [],
});
export const PrismaHelper = Prisma;
