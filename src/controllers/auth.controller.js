import { handleSuccessResponse } from "../helper/handleResponse.js";
import { authService } from "../services/auth.service.js";

export const authController = {
  register: async function (req, res, next) {
    try {
      const result = await authService.register(req);
      const response = handleSuccessResponse(
        `Register successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  login: async function (req, res, next) {
    try {
      const result = await authService.login(req);
      const response = handleSuccessResponse(
        `Login successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
};
