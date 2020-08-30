import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import './style.css';

const Card = () => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  const escape = (v) => {
    const needsEscape = ['"', ';', ',', ':', '\\'];
    
    let escaped = '';
    for (let i = 0; i < v.length; i++) {
      let c = v[i];
      if (needsEscape.includes(c)) {
        c = '\\' + c;
      }
      escaped += c;
    }

    return escaped;
  }

  useEffect(() => {
    let _ssid = escape(ssid),
        _password = escape(password);

    setQrvalue(`WIFI:T:WPA;S:${_ssid};P:${_password};;`);
  }, [ssid, password]);

  return (
    <div>
      <fieldset id="print-area">
        <legend></legend>

        <h1>WiFi 登录</h1>
        <hr/>

        <div className="details">
          <QRCode className="qrcode" value={qrvalue} size={175} />

          <div className="text">
            <label>WiFi 名称</label>
            <input id="ssid" type="text" maxLength="32" placeholder="WiFi 名称" value={ssid} onChange={event => setSsid(event.target.value)} />
            <label>密码</label>
            <input id="password" type="text" maxLength="64" placeholder="密码" value={password} onChange={event => setPassword(event.target.value)} />
          </div>
        </div>

        <p><span role="img" aria-label="mobile-phone">📸📱</span>将手机的摄像头对准二维码，扫码后即可自动连接 Wi-Fi</p>
      </fieldset>
      <div className="print-btn">
        <button onClick={window.print}>打印</button>
      </div>
    </div>
  )
}

export default Card;
