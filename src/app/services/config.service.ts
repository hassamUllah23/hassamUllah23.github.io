import { hasEmptyValues } from "../utils/functions.utils";

/**
 * @name RootConfig
 * @description root configuration type
 */
type RootConfig = {
  mailConfig: {
    apiKey: string;
    from: string;
  };
};

/**
 * @name Config
 * @description root configuration type
 */

console.log({
  a: process.env.NEXT_PUBLIC_API_KEY,
  b: process.env.NEXT_PUBLIC_SENDER_ADDRESS,
});
const Config: RootConfig = {
  mailConfig: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
    from: process.env.NEXT_PUBLIC_SENDER_ADDRESS as string,
  },
};

if (hasEmptyValues(Config)) {
  console.error("\n\nPLEASE ENSURE ALL ENVIRONMENT VARIABLES ARE SET\n\n");
  process.exit(1);
}

export { Config };
