import { handleSuccessResponse } from "../helper/handleResponse.js";
import { imageService } from "../services/image.service.js";

export const imageController = {
  findAll: async function (req, res, next) {
    try {
      const result = await imageService.findAll(req);
      const response = handleSuccessResponse(
        `Get all images successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  findByName: async function (req, res, next) {
    try {
      const result = await imageService.findByName(req);
      const response = handleSuccessResponse(
        `Search images successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  findDetailById: async function (req, res, next) {
    try {
      const result = await imageService.findDetailById(req);
      const response = handleSuccessResponse(
        `Get image's details successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  getComment: async function (req, res, next) {
    try {
      const result = await imageService.getComment(req);
      const response = handleSuccessResponse(
        `Get comments successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  checkSave: async function (req, res, next) {
    try {
      const result = await imageService.checkSave(req);
      const response = handleSuccessResponse(
        `Check saving successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  createComment: async function (req, res, next) {
    try {
      const result = await imageService.createComment(req);
      const response = handleSuccessResponse(
        `Add comment successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  deleteImage: async function (req, res, next) {
    try {
      const result = await imageService.deleteImage(req);
      const response = handleSuccessResponse(
        `Delete image #${req.params.id} successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  createImage: async function (req, res, next) {
    try {
      const result = await imageService.createImage(req);
      const response = handleSuccessResponse(
        `Post image #${req.params.id} successfully`,
        undefined,
        result,
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
};
