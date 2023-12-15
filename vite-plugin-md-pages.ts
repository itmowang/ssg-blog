import path from "path";
import { Plugin } from "vite";
import fs from "fs";

interface Options {
  input: string;
  contentPath: string;
}

export default function createMdPagesPlugin(options: Options): Plugin {
  const { input, contentPath } = options;
  // 完整路径
  const inputDir = path.resolve(input);
  const contentDir = path.resolve(contentPath);
  const inputFiles = fs.readdirSync(inputDir);
  const mdFiles = fs.readdirSync(contentDir);


  //   获取inputDir中多个文件夹的名称
  return {
    name: "vite-plugin-md-pages",
    async buildStart(options) {
      // console.log(options,33);
      // mdFiles.forEach((dirName) => {
      //     console.log(dirName, 55);
      // })
      inputFiles.forEach((dirName) => {
        // 匹配路径
        // const paths = path.resolve(inputDir, dirName);
        // console.log(paths, 66);
        // 如果dirName是文件夹读取文件夹下的文件名 看看是否为 [id].vue 如果是的话就去contentDir中找到对应的文件夹 匹配md文件 通过 viteSSG编译
        const files = fs.readdirSync(path.resolve(inputDir, dirName));
        const filteName = files[0].replace(/\.vue$/, "");
        // 判断test 是否为[ ] 包裹了内容
        const reg = /\[(.+)\]/;
        const test = reg.test(filteName);
        if (test) {
          // 去contentDir中找到对应的文件夹 匹配md文件 通过 viteSSG编译
        }
      });
      // inputPages.forEach((dirName) => {
      //     console.log(dirName, 88);
      // });
    },
    async resolveId(route: string) {
      // 循环inputDir中的文件夹名称
      inputFiles.forEach((dirName) => {
        // if(route.startsWith(`/${dirName}/`)){
        //     console.log("asd",route);
        //     const id = route.replace(/^\/page\//, "");
        //     console.log(id);
        // }
      });
    },
    async load(id: string) {
      //   console.log(id);
    },
  };
}
