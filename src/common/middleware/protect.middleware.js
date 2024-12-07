import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../constant/config.constant.js";
import { ForbiddenError, UnAuthorizedError } from "../../helper/handleError.js";
import prisma from "../prisma/prisma.init.js";

const protect = async (req, res, next) => {
  try {
    console.log("Kiểm tra token");
    const accessToken = req.headers?.authorization?.split(" ")[1];
    if (!accessToken) {
      throw new UnAuthorizedError("Vui lòng cung cấp token để sử dụng api này");
    }
    console.log(accessToken);
    const verifyToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    //nếu lỗi jwt sẽ tự động bắn lỗi
    if (!verifyToken?.nguoi_dung_id) {
      throw new UnAuthorizedError(
        "Token không hợp lệ hoặc thiếu thông tin nguoi_dung_id",
      );
    }

    console.log({ verifyToken });

    const user = await prisma.nguoi_dung.findUnique({
      where: {
        nguoi_dung_id: verifyToken.nguoi_dung_id,
      },
      select: {
        nguoi_dung_id: true,
        ho_ten: true,
        tuoi: true,
        email: true,
        anh_dai_dien: true,
      },
    });

    if (!user) {
      throw new ForbiddenError("Không tìm thấy user");
    }

    req.user = user;

    //console.log(req.headers.authorization.split(" ")[1]);
    next();
  } catch (error) {
    next(error);
  }
};
export default protect;
