import { useState } from 'react'
import "./style.css"
import QRCode from "react-qr-code";

const QRPage = () => {

  const [text, setText] = useState('');

  return (
    <div className='qr'>
      <h1>QR Code Generator</h1>
      <div className="input-here">
        <p>Enter your text here</p>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <QRCode value={text} style={{ maxWidth: "100%", width: "80%" }}/>
    </div>
  )
}

export default QRPage