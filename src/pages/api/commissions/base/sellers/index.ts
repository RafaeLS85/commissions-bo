import type { NextApiRequest, NextApiResponse } from 'next';
import {  getDefaultHeaders } from '@/lib/utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) { 


  // https://api.mercadolibre.com/sites/MLA/search?q=celulares

  if (req.method === 'GET') {    
    const base = `${process.env.SELLER_COMMISSION_DEFAULT_SERVICE}/seller`;
    const url = `${base}/?page=${0}&pageSize=${9999}`;    

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