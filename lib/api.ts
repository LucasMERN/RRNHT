interface FetcherOptions {
    url: string;
    method: string;
    body?: Record<string, unknown>;
    json?: boolean;
  }

const fetcher = async ({ url, method, body, json = true }: FetcherOptions) => {
    const res = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
  
    if (!res.ok) {
        throw new Error("API Error: Something went wrong!");
    }
  
    if (json) {
        const data = await res.json();
        return data.data;
    }
};
  
export const register = async (user: { firstName: string; lastName: string; badge: string; }) => {
    return fetcher({
        url: "/api/register",
        method: "POST",
        body: user,
        json: false,
    });
};
  
export const login = async (user: { firstName: string; lastName: string; badge: string; }) => {
    return fetcher({
        url: "/api/login",
        method: "POST",
        body: user,
        json: false,
    });
};