import { Request, Response, NextFunction } from "express";
import { randomUUID } from "crypto";

const handler = (req: Request, res: Response, next: NextFunction) => {
  const id = randomUUID();

  req["requestId"] = id;

  return next();
};

export default handler;
