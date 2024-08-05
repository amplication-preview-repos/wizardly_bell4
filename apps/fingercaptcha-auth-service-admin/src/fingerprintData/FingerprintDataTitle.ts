import { FingerprintData as TFingerprintData } from "../api/fingerprintData/FingerprintData";

export const FINGERPRINTDATA_TITLE_FIELD = "id";

export const FingerprintDataTitle = (record: TFingerprintData): string => {
  return record.id?.toString() || String(record.id);
};
