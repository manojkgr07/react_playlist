import axios from 'axios';

const request = async options => {
    return await axios(options)
      .then(response => {
        console.log('axios response --->', response);
        return response;
      })
      .catch(error => {
        console.log('axios error --->', error);
        if (error.code == 'ECONNABORTED') {
          return {
            message: 'Request timeout',
            error,
          };
        }
        return error;
      });
};

const getRequest = async (url) => {
    
    console.log('get request..', url);
  
   
    let response;
    let header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
     
    };
   
    const requestOptions = {
      url: url,
      method: 'get',
      headers: header,
      timeout: 1000 * 8,
      validateStatus: status => {
        return true;
      },
    };
    response = await request(requestOptions);
    return response;
};

const postRequest = async (url, params) => {
    console.log('post request...', url, params);
   
  
    let response;
    const header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
     
    };

    const requestOptions = {
      url: url,
      method: 'POST',
      headers: header,
      data: params,
      timeout: 1000 * 8,
      validateStatus: status => {
        return true;
      },
    };
    console.log(requestOptions);
    response = await request(requestOptions);
    return response;
};

const getRequestwithtoken = async (url, token) => {
    //const getRequest = async (url, key, token) => {
    console.log('get request..', url, token);
    
    console.log('token--->' + token);
    let response;
    let header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      
    };
    if (token) {
      header.Authorization = `${token}`;
    }
    const requestOptions = {
      url: url,
      method: 'get',
      headers: header,
      timeout: 1000 * 8,
      validateStatus: status => {
        return true;
      },
    };
    response = await request(requestOptions);
    return response;
};

const putRequest = (url, params) => {
    console.log('put request...', url, params);
    let response;
    const header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const requestOptions = {
      method: 'PUT',
      headers: header,
      body: JSON.stringify(params),
    };
    response = request(url, requestOptions);
    return response;
};

const deleteRequest = url => {
    console.log('delete request...', url);
    let response;
    const header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const requestOptions = {
      method: 'DELETE',
      headers: header,
    };
    response = request(url, requestOptions);
    return response;
};


  
  export {getRequest, postRequest, putRequest, deleteRequest,getRequestwithtoken};