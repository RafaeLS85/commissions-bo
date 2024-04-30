import type { NextApiRequest, NextApiResponse } from 'next';
import {  getDefaultHeaders } from '@/lib/utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) { 

  // https://api.mercadolibre.com/sites/MLA/search?q=celulares

  if (req.method === 'GET') {   
   
    const url = `${process.env.COMMISSION_SERVICE}/search?q=celulares`;    

    fetch(url, {
      method: "GET",
      headers: getDefaultHeaders(req),      
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      const message = error.message || error.code       
      res.send({ status: 500, message, error });
    })

  }  
}