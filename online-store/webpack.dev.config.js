import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const mode = 'development';
export const devtool = 'source-map';
export const devServer = {
  static: {
    directory: resolve(__dirname, 'dist'),
  },
  hot: true,
};
