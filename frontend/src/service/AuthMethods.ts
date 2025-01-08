
export const getToken = () => {
    return localStorage.getItem("TOKEN") || "";
}

export const setToken = (token:string) => {
    return localStorage.setItem("TOKEN", token);
}

export const setTRefreshToken = (token:string) => {
    return localStorage.setItem("REFRESH_TOKEN", token);
}