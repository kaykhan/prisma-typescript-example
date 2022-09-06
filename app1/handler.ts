import { FindUsers } from "./../shared/src/models/users/user.repo";

export const FunctionOne = async (event: any, _context) => {
  try {
    const [response, error] = await FindUsers();

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify("Something went wrong"),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed", error: err.stack }),
    };
  }
};

export const FunctionTwo = async (event: any, _context) => {
  try {
    const [response, error] = await FindUsers();

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify("Something went wrong"),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed", error: err.stack }),
    };
  }
};
