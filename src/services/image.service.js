import prisma from "../common/prisma/prisma.init.js";
import { BadRequestError } from "../helper/handleError.js";

export const imageService = {
  findAll: async function (req) {
    const result = await prisma.hinh_anh.findMany();

    return { item: result || [] };
  },

  findByName: async function (req) {
    const tenHinh = req.query.name;

    if (!tenHinh) throw new BadRequestError("Cần nhập tên hình!");

    const result = await prisma.hinh_anh.findMany({
      where: {
        ten_hinh: {
          contains: tenHinh,
          // mode: "insensitive",
        },
      },
    });

    return { item: result || [] };
  },

  findDetailById: async function (req) {
    const idHinh = req.params.id;

    if (!idHinh) throw new BadRequestError("Yêu cầu id ảnh!");

    const result = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: +idHinh,
      },
      include: {
        nguoi_dung: {
          select: {
            nguoi_dung_id: true,
            email: true,
            ho_ten: true,
            anh_dai_dien: true,
            tuoi: true,
          },
        },
      },
    });

    return { item: result || {} };
  },

  getComment: async function (req) {
    const idHinh = req.params.id;

    if (!idHinh) throw new BadRequestError("Yêu cầu id ảnh!");

    const result = await prisma.binh_luan.findMany({
      where: {
        hinh_id: Number(idHinh),
      },
      include: {
        nguoi_dung: {
          select: {
            nguoi_dung_id: true,
            ho_ten: true,
            anh_dai_dien: true,
          },
        },
      },
    });

    return { item: result || [] };
  },

  checkSave: async function (req) {
    const idHinh = req.params.id;
    const idUser = req.user.nguoi_dung_id;

    if (!idHinh) throw new BadRequestError("Yêu cầu id ảnh!");

    const isSaved = await prisma.luu_anh.findFirst({
      where: {
        hinh_id: Number(idHinh),
        nguoi_dung_id: idUser,
      },
    });

    const result = isSaved ? "Ảnh đã được lưu" : "Ảnh chưa được lưu";
    return { status: result, item: isSaved };
  },

  createComment: async function (req) {
    const idHinh = req.params.id;
    const { noi_dung } = req.body;
    const idUser = req.user.nguoi_dung_id;

    const comment = prisma.binh_luan.create({
      data: {
        nguoi_dung_id: idUser,
        hinh_id: idHinh,
        noi_dung: noi_dung,
        ngay_binh_luan: new Date(),
      },
    });

    return { item: comment || {} };
  },

  deleteImage: async function (req) {
    const idHinh = req.params.id;

    const image = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: Number(idHinh),
      },
    });

    if (!image || image.hinh_id !== Number(idHinh))
      throw new BadRequestError("Không tìm thấy hình ảnh!");

    await prisma.binh_luan.deleteMany({ where: { hinh_id: +idHinh } });

    await prisma.luu_anh.deleteMany({ where: { hinh_id: +idHinh } });

    const result = await prisma.hinh_anh.delete({
      where: {
        hinh_id: Number(idHinh),
      },
    });

    return { item: result || {} };
  },

  createImage: async function (req) {
    const { ten_hinh, duong_dan, mo_ta } = req.body;
    const userId = req.user.nguoi_dung_id;

    const result = await prisma.hinh_anh.create({
      data: {
        ten_hinh: ten_hinh,
        duong_dan: duong_dan,
        mo_ta: mo_ta,
        nguoi_dung_id: userId,
      },
    });

    return { item: result || {} };
  },
};
