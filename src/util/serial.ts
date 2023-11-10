import * as SerialPort from 'serialport';

const port = new SerialPort('COM1', {
    baudRate: 9600, // 波特率，根据您的设备设置
    dataBits: 8,    // 数据位
    stopBits: 1,    // 停止位
    parity: 'none', // 奇偶校验
});

// 打开串口连接
port.open((err) => {
    if (err) {
        console.error('无法打开串口:', err);
    } else {
        console.log('串口已打开');
        // 在这里可以执行串口通信操作，例如监听数据和发送数据
    }
});

// 监听串口数据
port.on('data', (data) => {
    console.log(`收到数据: ${data}`);
});

// 错误处理
port.on('error', (err) => {
    console.error('串口发生错误:', err);
});

// 关闭串口连接
// port.close((err) => {
//   if (err) {
//     console.error('无法关闭串口:', err);
//   } else {
//     console.log('串口已关闭');
//   }
// });
