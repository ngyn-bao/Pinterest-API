import { handleSuccessResponse } from "../helper/handleResponse.js";
import { userService } from "../services/user.service.js";

export const userController = {
  findOne: async function (req, res, next) {
    try {
      const result = await userService.findOne(req);
      const response = handleSuccessResponse(
        `Get user's detail successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  findSaved: async function (req, res, next) {
    try {
      const result = await userService.findSaved(req);
      const response = handleSuccessResponse(
        `Update user's saved images successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  findCreated: async function (req, res, next) {
    try {
      const result = await userService.findCreated(req);
      const response = handleSuccessResponse(
        `Find user's posted images successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  put: async function (req, res, next) {
    try {
      const result = await userService.put(req);
      const response = handleSuccessResponse(
        `Config user successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
};
