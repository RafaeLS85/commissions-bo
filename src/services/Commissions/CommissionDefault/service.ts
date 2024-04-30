
export const commissionDefaultService = {
  update: async (commissionDefault: number) => {
    return fetch('/api/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        defaultCommission: commissionDefault
      })
    })
    .then((response) => response.json()) 
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    });

  },
  get: async (): Promise<any> => {    
    return fetch('/api/default')
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error
    })
  }
}




