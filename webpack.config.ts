import path from "path";
import webpackNodeExternals from "webpack-node-externals";
import WebpackShellPluginNext from "webpack-shell-plugin-next"

const getConfig = (
    env: { [key: string]: string },
    argv: { [key: string]: string }
) => {
    if (argv.mode !== "production") {
        require("dotenv").config({
            path: path.resolve(__dirname, `.env.${env.mode}`),
        });
    }
    const config = {
        entry: './src/index.ts',
        target: 'node',
        mode: argv.mode === "production" ? "production" : "development",
        externals: [webpackNodeExternals()],
        plugins: [
            new WebpackShellPluginNext({
                onBuildStart: {
                    scripts: ["npm run clean"],
                    blocking: true,
                    parallel: false,
                },
                onBuildEnd: {
                    scripts: ["npm run dev"],
                    blocking: false,
                    parallel: true,
                },
            })
        ],
        module: {
            rules: [{
                test: /\.(ts|js)$/,
                loader: "ts-loader",
                options: {},
                exclude: /node_modules/,
            }]
        },
        resolve: {
            extensions: [".ts", ".js"],
            alias: {
                src: path.resolve(__dirname, "src"),
            }
        },
        output: {
            path: path.join(__dirname, "public"),
            filename: "index.js",
        },
        optimization: {
            moduleIds: "deterministic",
            splitChunks: {
                chunks: "all",
            }
        }
    }

    if (argv.mode === "production") {
        config["plugins"] = [
            new WebpackShellPluginNext({
                onBuildStart: {
                    scripts: ["npm run clean"],
                    blocking: true,
                    parallel: false,
                }
            })
        ]
    }

    return config
}

export default getConfig