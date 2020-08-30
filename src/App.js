import React from 'react';
import Card from './components/Card';
import './style.css';

function App() {
    return (
        <div className="App">

            <h1><span role="img" aria-label="antenna-bars">📶</span>&nbsp; WiFi 登录卡片</h1>

            <p className="tag">
                打印一张带有 WiFi 登录详细信息的简单卡片。可以贴在墙上，方便别人扫码连接 WiF。
      </p>

            {/* <p className="tag">
                Your WiFi information is never sent to the server.
                No tracking, analytics, or fingerprinting are used on this website.
        View the <a href="https://github.com/bndw/wifi-card">source code</a>.
      </p> */}

            <Card />

            <a className="help" href="https://project.yunser.com/products/c43870f0aa6a11eabf7b417cd2376690" target="_blank" rel="noopener noreferrer">帮助</a>

        </div>
    );
}

export default App;
