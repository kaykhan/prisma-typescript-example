const todaysDate = new Date();
todaysDate.setUTCHours(0, 0, 0, 0);

export const CurrentDate = todaysDate.toISOString();

export enum NETWORKS {
    ETHERUM = "ETHEREUM",
}
