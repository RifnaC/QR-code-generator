import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'

function App() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [size, setSize] = useState("150");

  // generating QR code
  async function generateQR(){
    setLoading(true);
    try {
      setImg(data,size);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
      <div>
        {loading && <p>Please wait...</p>}
        {img && <QRCode  className='qr-code-img' value={img} size={size} />}
      
      </div>
      <input type="text" id="dataInput" placeholder='Enter URL' onChange={(e) => setData(e.target.value)}/>
      <input type="text" id="sizeInput" placeholder='Enter image Size' onChange={(e)=> setSize(Number(e.target.value))}/>
      <div>
        <button className='generate-btn' onClick={generateQR}>Generate QR Code</button>
      </div>
    </div>
  )
}

export default App
