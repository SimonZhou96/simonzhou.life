import React from "react";

export default function WordCloud() {
    const cloudList = [
        { Name: "Redis", Weight: 10, Label: "skill"},
        { Name: "Mysql 索引", Weight: 10, Label: "skill"},
        { Name: "计算机网络", Weight: 10, Label: "skill"},
        { Name: "缓存设计", Weight: 10, Label: "skill"},
        { Name: "Golang", Weight: 10, Label: "skill"},
        { Name: "并发编程", Weight: 10, Label: "skill"},
        { Name: "Kafka 消息队列", Weight: 10, Label: "skill"},
        { Name: "微服务治理", Weight: 10, Label: "skill"},
        { Name: "篮球", Weight: 5, Label: "hobby"},
        { Name: "健身", Weight: 5, Label: "hobby"},
        { Name: "滑雪", Weight: 5, Label: "hobby"},
        { Name: "唱歌", Weight: 5, Label: "hobby"},
    ]
    const fontSize = ["text-4xl", "text-3xl", "text-2xl","text-xl","text-md", "text-lg", "text-sm", "text-xs"]
    const fontColor = ["text-white", "text-cyan-500", "text-gray-500", "text-indigo-500"]
    return (
        <div className="mt-20 flex justify-center">
            <ul className="flex justify-center flex-wrap max-w-xl align-center gap-5 leading-8">
                {cloudList.map((cloud, index) => (
                    <li className={`${fontSize[index % fontSize.length]} ${fontColor[index % fontColor.length]}`}>{cloud.Name}</li>
                ))}
            </ul>
        </div>
    );
}