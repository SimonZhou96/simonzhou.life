"use client";
import { PaperclipIcon } from "lucide-react";
import { Navigation } from "../components/nav"

  export default function Resume() {
    const path = require('path')
    console.log('profile path,', path)
    var imgPath = path.resolve('profile.jpeg')
    return (
      <div>
            <Navigation message={{}}/>
            <div className="bg-dark h-screen">
            <div className="container mx-auto py-20 animate-fade-down">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-4 px-6">
                    <div className="col-span-4 sm:col-span-3 duration-200">
                        <div className="bg-slate-800 rounded-lg p-6 shadow-xl">
                            <div className="flex flex-col items-center">
                                <img src={imgPath} className="w-auto h-auto max-w-xs bg-gray-300 mb-4 transition-all duration-300 rounded-lg blur-sm hover:blur-none">

                                </img>
                                <h1 className="text-white text-xl font-bold">Simon Zhou</h1>
                                <p className="text-white my-2 text-gray-600">服务端研发工程师</p>
                                {/* <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                    <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                                </div> */}
                            </div>
                            <hr className="my-6 border-t border-gray-300"/>
                            <div className="flex flex-col items-center">
                                <span className="text-white uppercase font-bold tracking-wider mb-2">Skills</span>
                                <ul className="text-slate-400">
                                    <li className="mb-2">Golang</li>
                                    <li className="mb-2">MySQL</li>
                                    <li className="mb-2">Kafka</li>
                                    <li className="mb-2">Redis</li>
                                    <li className="mb-2">微服务</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-span-4 sm:col-span-9 animate-fade-down">
                        <div className="bg-slate-800 shadow rounded-lg p-6">
                            <h2 className="text-xl text-white font-bold mt-6 mb-4">工作经历</h2>
                            <div className="mb-6">
                                <div className="flex justify-between text-white">
                                    <span className="text-white">服务端研发工程师</span>
                                    <p>
                                        <span className="text-white mr-2 font-bold">字节跳动科技有限公司</span>
                                        <span className="text-white">2022 - 至今</span>
                                    </p>
                                </div>
                                <p className="text-slate-400 my-2">
                                  抖音小游戏 - <span className="text-slate-400 italic">抖音小游戏留存与ROI激进追平</span>
                                </p>
                                <span className="mt-2">
                                <ul className="text-slate-400 justify-between text-xs list-disc">
                                  <li>
                                    整体目标：通过加强抖音小游戏内用户复访渗透 DAU，打平抖音小游戏长期投放 ROI与整体 DAU，其中五款 IAP 小游戏追平微信七日留存&倍率。
                                  </li>
                                  <li>
                                    整体负责：小游戏分发能力，对小游戏留存与复访负责，其中包括小游戏 Feed 异形卡能力、首页侧边栏引导能力、小游戏消息订阅能力等。
                                  </li>
                                </ul>
                                </span>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between">
                                    <span className="text-white">服务端研发工程师</span>
                                    <p>
                                        <span className="text-white mr-2 font-bold">字节跳动科技有限公司</span>
                                        <span className="text-white">2021 - 2022</span>
                                    </p>
                                </div>
                                <p className="my-2 text-slate-400">
                                抖音开放平台 - ToD 抖音开发者平台官网
                                </p>
                                <p className="mt-2">
                                <ul className="text-slate-400 justify-between text-xs list-disc">
                                  <li>整体目标：整合现有多个对外开放平台，完成ToD 新平台官网的上线，实现对开发者从入驻到运营的全功能承载。</li>
                                  <li>主导新平台开发者入驻流程、帐号角色、应用管理体系的搭建，并基于新体系，解决多个现有开放平台的数据不兼容问题，产出存量数据迁徙方案，一个双月内实现了活跃开发者 100% 迁徙，同时数据迁徙过程中无事故。</li>
                                  <li>协助 ToD 新平台官网对外宣发-【开发者大会】容灾演练事项，产出账号、应用管理等核心业务的压测方案，演练期间核心服务达到4个9的高可用。</li>
                                </ul>
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800 shadow rounded-lg p-4 my-2">
                            <h2 className="text-xl text-white font-bold mt-6 mb-4">教育经历</h2>
                            <div>
                            <div className="flex justify-between text-white">
                                    <span className="text-white">网络系统硕士</span>
                                    <p>
                                        <span className="text-white mr-2 font-bold">加州大学欧文分校</span>
                                        <span className="text-white">2019 - 2021</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between text-white my-4">
                                <span className="text-white">计算机科学与工程本科</span>
                                <p>
                                    <span className="text-white mr-2 font-bold">南方科技大学</span>
                                    <span className="text-white">2015 - 2019</span>
                                </p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      );
  }
  