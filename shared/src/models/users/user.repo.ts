import Logger from "@modules/logger.module";
import { PrismaService } from "@services/db.service";

export const FindUsers = async () => {
    try {
        const contracts = await PrismaService.user.findMany();

        return [contracts, null] as const;
    } catch (err) {
        Logger.error({ kind: "FindUsers", error: err.name, stack_trace: err.stack });
        return [null, err] as const;
    }
};
