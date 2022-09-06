import dotenv from "dotenv";

switch (process.env.NODE_ENV) {
    case "production":
        break;
    default:
        dotenv.config({ path: ".env" });
}

export const Config: Config = {
    environment: process.env.ENVIRONMENT,
    env: process.env.NODE_ENV,
};

interface Config {
    env: string | undefined;
    environment: string | undefined;
}
