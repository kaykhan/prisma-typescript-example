import winston, { createLogger, format } from "winston";

const APP_NAME = "shared";

const namespaceFormat = format((info, _opts) => {
    if (typeof info.message === "object") {
        (info.message as any) = { [APP_NAME]: info.message };
    } else {
        (info.message as any) = { [APP_NAME]: { message: info.message } };
    }
    return info;
});

const Logger = createLogger({
    format: format.combine(namespaceFormat(), format.timestamp(), format.json()),

    transports: [new winston.transports.Console()],
});

export default Logger;
