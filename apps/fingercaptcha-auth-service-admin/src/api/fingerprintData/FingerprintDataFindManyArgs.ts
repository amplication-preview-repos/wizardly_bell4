import { FingerprintDataWhereInput } from "./FingerprintDataWhereInput";
import { FingerprintDataOrderByInput } from "./FingerprintDataOrderByInput";

export type FingerprintDataFindManyArgs = {
  where?: FingerprintDataWhereInput;
  orderBy?: Array<FingerprintDataOrderByInput>;
  skip?: number;
  take?: number;
};
