import { Request, Response, NextFunction } from "express";

const handler = (req: Request, res: Response, next: NextFunction) => {
  const { hostname, headers, ip, path, requestId } = req;

  console.group(`Request ${requestId}`);

  console.log({
    requestId,
    ip,
    hostname,
    path,
    headers,
  });

  console.groupEnd();

  return next();
};

export default handler;
