import path from "path";
import { Plugin } from "vite";
import fs from "fs";

interface Options {
  input: string;
  contentPath: string;
}

export default function ViteMdPagesPlugin(options: Options): Plugin {
  const { input, contentPath } = options;
  // 完整路径
  const inputDir = path.resolve(input);
  const inputFiles = fs.readdirSync(inputDir);

  //   获取inputDir中多个文件夹的名称
  return {
    name: "vite-plugin-md-pages",
    async buildStart(options) {},
    // 访问的时候
    async resolveId(route: string) {},
    async load(id: string) {},
    // 更新的时候
    async handleHotUpdate() {
      console.log(inputFiles, 22);
    },
  };
}
