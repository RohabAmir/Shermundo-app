// next.config.mjs
import path from 'path';

const nextConfig = {
  sassOptions: {
    // includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "global";`,
  },
};

export default nextConfig;