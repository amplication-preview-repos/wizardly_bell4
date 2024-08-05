import { ServerWhereInput } from "./ServerWhereInput";
import { ServerOrderByInput } from "./ServerOrderByInput";

export type ServerFindManyArgs = {
  where?: ServerWhereInput;
  orderBy?: Array<ServerOrderByInput>;
  skip?: number;
  take?: number;
};
