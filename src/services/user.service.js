import prisma from "../common/prisma/prisma.init.js";

export const userService = {
  findOne: async function (req) {
    const userId = req.user.nguoi_dung_id;

    const result = await prisma.nguoi_dung.findUnique({
      where: {
        nguoi_dung_id: userId,
      },
    });

    return { item: result };
  },

  findSaved: async function (req) {
    const userId = req.user.nguoi_dung_id;

    const savedImage = await prisma.luu_anh.findMany({
      where: {
        nguoi_dung_id: userId,
      },
      include: {
        hinh_anh: true,
      },
    });

    return { item: savedImage || [] };
  },

  findCreated: async function (req) {
    const userId = req.user.nguoi_dung_id;

    const createdImage = await prisma.hinh_anh.findMany({
      where: {
        nguoi_dung_id: userId,
      },
    });

    return { item: createdImage || [] };
  },

  put: async function (req) {
    const { ho_ten, tuoi, anh_dai_dien } = req.body;
    const userId = req.user.nguoi_dung_id;

    const updateUser = await prisma.nguoi_dung.update({
      where: {
        nguoi_dung_id: userId,
      },
      data: {
        ho_ten: ho_ten,
        tuoi: tuoi,
        anh_dai_dien: anh_dai_dien,
      },
    });

    return { item: updateUser || [] };
  },
};
