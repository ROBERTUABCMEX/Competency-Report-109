import axios from 'axios';

class ProductService {

  serverUrl = "http://fsdi.azurewebsites.net/api";
  
  async getProducts() {
    // ajax request to  get data
    const resp = await axios.get(this.serverUrl + '/products');
    return resp.data;
  }
}

export default ProductService;
