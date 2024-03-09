export const INDEV = process.env.NODE_ENV === "development";
const apiurl = "http://localhost:32500/";

export const api: any = {
  get: async (endpoint: string, data: any) => {
    const request = await fetch(apiurl + endpoint, {
      method: "GET",
    });

    if (request.status === 200) {
      return request.json();
    }

    throw request;
  },
  post: async (endpoint: string, data: any) => {
    const request = await fetch(apiurl + endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      } as any,
    });

    if ([200, 201].indexOf(request.status) !== -1) {
      return request.json();
    }

    throw request;
  },
  postFile: async (endpoint: string, data: any) => {
    const request = await fetch(apiurl + endpoint, {
      method: "POST",
      body: data,
    });
    if ([200, 201].indexOf(request.status) !== -1) {
      try {
        return await request.json();
      } catch (e) {
        return request;
      }
    }
  },
  buffer: async (endpoint: string) => {
    const request = await fetch(apiurl + endpoint, {
      method: "GET",
    });

    if (request.status === 200) {
      return request.arrayBuffer();
    }

    throw new Error("Failed to fetch buffer");
  },
};

export const clients = {
  api,
};

export default clients;
