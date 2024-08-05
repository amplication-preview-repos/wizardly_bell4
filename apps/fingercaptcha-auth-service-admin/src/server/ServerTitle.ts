import { Server as TServer } from "../api/server/Server";

export const SERVER_TITLE_FIELD = "id";

export const ServerTitle = (record: TServer): string => {
  return record.id?.toString() || String(record.id);
};
