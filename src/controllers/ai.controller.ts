import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import { aiService, postService } from "../services";

const getExplanationStream = catchAsync(async (req, res) => {
  const { postId } = req.body;
  const post = await postService.getPostById(postId);
  if (!post) {
    res.status(httpStatus.NOT_FOUND).send("Post not found");
    return;
  }
  const explanation = await aiService.getExplanationStream(
    post.title,
    post.content
  );
  res.status(httpStatus.OK).send({
    explanation: explanation,
  });
});

export default {
  getExplanationStream,
};
