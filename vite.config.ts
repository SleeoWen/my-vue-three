import { ServerConfig } from 'vite';
import path from 'path';

const pathResolve = (pathStr: string) => {
    return path.resolve(__dirname, pathStr);
};

const config: ServerConfig = {
    alias: {
        '/@/': pathResolve('./src'),
    },
    proxy: {
        // string shorthand
        '/foo': 'http://localhost:4567/foo',
        // with options
        '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, ''),
        },
    },
};

module.exports = config;
