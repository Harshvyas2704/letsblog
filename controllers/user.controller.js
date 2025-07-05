import { createUserService } from "../services/user.service.js";

async function createUserController(req, body) {
  try {
    await createUserService();
  } catch (error) {}
}

export { createUserController };
