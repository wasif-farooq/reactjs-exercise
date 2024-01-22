import axios from "axios";

class Http {
  constructor() {
    this.instance = axios.create({
      headers: {
        Accept: "application/json",
      },
      baseURL: process.env.REACT_APP_API_URL
    });

    // Add access token interceptor
    this.instance.interceptors.request.use((config) => {
      if (sessionStorage.getItem("accessToken")) {
        config.headers.Authorization = `Bearer ${sessionStorage.getItem("accessToken")}`;
      }
      return config;
    });

    // handle unauthorization 401 error
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          sessionStorage.clear();
          window.location.replace("/signin");
        }
        throw error;
      }
    );
  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  setHeaders(headers) {
    this.instance.defaults.headers = {
      ...this.instance.defaults.headers,
      ...headers,
    };
  }

  async get(url, config = {}) {
    try {
      const response = await this.instance.get(url, {
        ...config,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post(url, data = {}, config = {}) {
    try {
      const response = await this.instance.post(url, data, {
        ...config,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put(url, data = {}, config = {}) {
    try {
      const response = await this.instance.put(url, data, {
        ...config,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete(url, config = {}) {
    try {
      const response = await this.instance.delete(url, {
        ...config,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Response Error:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Headers:", error.response.headers);
      return error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request Error:", error.request);
      return "No response received from the server.";
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("General Error:", error.message);
      return "An error occurred while setting up the request.";
    }
  }
}

const http = new Http();
export default http;
