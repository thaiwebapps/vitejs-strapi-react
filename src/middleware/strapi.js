import axios from 'axios';
class strapiClient {
  constructor(customConfig = {}) {
    this.defaultAxiosConfig = {
      baseURL: 'https://api.example.com', // Change this to your API base URL
      timeout: 10000, // Default timeout in milliseconds
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 05aee6f0afa2882952c42afd3ab2afc018f7761ec0eca6f4ff046ce0b1fece98d5307ed28b73433b98fda60f57b636bd2ec679dea267d34d152db847e30510ba52e4cbaedf5e0fca021115caea6fc53cf3c8bce1244fbe3a931e048370068dd19ff14149ab0352da5ee93ec2618a6b13f4c42a60f017a4107c6cd8e094eda6b9',
      },
    };

    this.axiosConfig = {
      ...this.defaultAxiosConfig,
      ...customConfig,
    };

    this.axiosInstance = axios.create(this.axiosConfig);
  }

  get(url, config = {}) {
    return this.axiosInstance.get(url, config);
  }

  post(url, data = {}, config = {}) {
    return this.axiosInstance.post(url, data, config);
  }
}
export default strapiClient;
