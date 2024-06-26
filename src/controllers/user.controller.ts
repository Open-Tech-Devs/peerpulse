import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import { userService } from "../services";
import { User } from "@prisma/client";

const getCurrentUser = catchAsync(async (req, res) => {
  const user = req.user as User;
  res.send(user);
});

const updateUserById = catchAsync(async (req, res) => {
  const user = req.user as User;
  const updateUser = await userService.updateUserById(user.id, req.body);
  res.status(httpStatus.OK).send(updateUser);
});

const getPeersFromCollege = catchAsync(async (req, res) => {
  const user = req.user as User;
  const peers = await userService.getPeersFromCollege(user.collegeId || "");
  res.status(httpStatus.OK).send(peers);
});

export default {
  getCurrentUser,
  updateUserById,
  getPeersFromCollege,
};
