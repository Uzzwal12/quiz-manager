import { Request as BaseRequest } from 'express';
import { Response as BaseResponse } from 'express';

export interface Request extends BaseRequest {
  // get all inputs
  all(): Record<string, any>;

  user: Record<string, any>;
}

export interface Response extends BaseResponse {
  success(
    data: Record<string, any> | Array<any> | string,
    status?: number | string,
  );
  noContent(): any;

  error(error: Record<string, any> | string, status?: number | string): any;

  withMeta(data: Record<string, any>, status?: number | string): any;
}
