import { FindUsers } from "@models/users/user.repo";

const Main = async () => {
    const [response, error] = await FindUsers();
    console.log(response, error);
};

Main();
