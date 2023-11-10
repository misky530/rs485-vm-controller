# 


<div align="center">
<img src="./docs/images/icon.svg" alt="icon"/>

<h1 align="center">rs485 virtual controller</h1>

English / [简体中文](./README_CN.md) 

a virtual rs485 controller, 避免485通讯占用, 提高485性能



[![Web][Web-image]][web-url]
[![Windows][Windows-image]][download-url]
[![MacOS][MacOS-image]][download-url]
[![Linux][Linux-image]][download-url]

[Web App](https://chatgpt.nextweb.fun/) / [Desktop App](https://github.com/Yidadaa/ChatGPT-Next-Web/releases) / [Buy Me a Coffee](https://www.buymeacoffee.com/yidadaa)

[网页版](https://chatgpt.nextweb.fun/) / [客户端](https://github.com/Yidadaa/ChatGPT-Next-Web/releases) / [反馈](https://github.com/Yidadaa/ChatGPT-Next-Web/issues) / [QQ 群](https://github.com/Yidadaa/ChatGPT-Next-Web/discussions/1724) / [打赏开发者](https://user-images.githubusercontent.com/16968934/227772541-5bcd52d8-61b7-488c-a203-0330d8006e2b.jpg)

[web-url]: https://chatgpt.nextweb.fun
[download-url]: https://github.com/Yidadaa/ChatGPT-Next-Web/releases
[Web-image]: https://img.shields.io/badge/Web-PWA-orange?logo=microsoftedge
[Windows-image]: https://img.shields.io/badge/-Windows-blue?logo=windows
[MacOS-image]: https://img.shields.io/badge/-MacOS-black?logo=apple
[Linux-image]: https://img.shields.io/badge/-Linux-333?logo=ubuntu


</div>

## 背景
- 由于rs485是半双工通讯, 通讯时会占用总线, 造成其他设备无法通讯
- 本项目通过虚拟rs485控制器, 使得通讯时不占用总线, 从而提高485性能
- 同时将数据缓存并转发到真实的rs485总线上, 使得真实设备可以正常通讯
- 本项目依赖于redis, 请先安装redis

## 主要功能

- 进行rs485的连接
- rs485的轮询读取数据 
- rs485的数据缓存
- rs485的数据转发
- rs485的写入操作,写入优先操作
- 调试功能
- 日志功能

## 开发计划

- [] 构建连接工具类 
- [] 构建连接实例管理
- [] 定义发送服务
- [] 定义获取服务
- [] 定义队列
- [] 定义缓存
- [] 定义转发
- [] 定义写入
- [] 定义调试

## 最新动态

- 🚀 v0.1 draft准备开发始
## Get Started

> [简体中文 > 如何开始使用](./README_CN.md#开始使用)



## FAQ

[简体中文 > 常见问题](./docs/faq-cn.md)

[English > FAQ](./docs/faq-en.md)


### Contributor



## LICENSE

[Apache2.0](https://github.com/misky530/rs485-vm-controller/blob/main/LICENSE)