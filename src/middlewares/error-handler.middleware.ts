import { Request, Response, NextFunction } from "express";

const handler = (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    requestId: req.requestId,
    status: 404,
    error: "Route not found",
  });
};

export default handler;
