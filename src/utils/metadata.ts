import { z } from "zod";

const metadataValidator = z.object({
  FE_URL: z.string(),
});

export const getGenericMetadata = () => {
  const { FE_URL } = metadataValidator.parse(process.env);

  const url = new URL(FE_URL);

  return url;
};
