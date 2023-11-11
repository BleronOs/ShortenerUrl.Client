import React, { useState } from 'react'
import { createShortUrl } from '../api/url-api';

function AddShortenerUrl({fetchTableData}) {
    const [originalUrl, setOriginalUrl] = useState('');
    const [idExpiration, setIdExpiration] = useState('');

    const addShortenerUrl = () => {
            if(!originalUrl || !idExpiration) return alert("Please fill all fields!");
            const payload ={
                originalUrl:originalUrl,
                idExpiration:idExpiration
            }
            createShortUrl(payload)
            .then(() => {
                fetchTableData();
                alert('successfully inserted');
            })
            .catch((err) => {
                if(err.response.status == 409) return alert("This URL exists and is still valid!")
                alert(err, 'error from back')
            })
            .finally(() => {
                setOriginalUrl('');
                setIdExpiration('');
            })  
    }
  return (
    <div className="content">
           <h1>URL Shortener</h1>
        <div className="input-inline">
          <input type="text"
                 className="inp1"
                 value={originalUrl}
                 onChange={(e) => setOriginalUrl(e.target.value)}
                 placeholder="Paste the URL to be shortened"
                 />
          <select className="inp2" value={idExpiration} onChange={(e) => setIdExpiration(e.target.value)}>
            <option value="" disabled hidden>Add expiration date</option>
            <option value="1" className="divinjo">1 Minute</option>
            <option value="2">5 Minutes</option>
            <option value="3">30 Minutes</option>
            <option value="4">1 Hour</option>
            <option value="5">5 Hours</option>
          </select>
        </div>
        <button type='subimt' onClick={() => addShortenerUrl()}>
          Shorten URL
        </button>
      </div>
  )
}

export default AddShortenerUrl
