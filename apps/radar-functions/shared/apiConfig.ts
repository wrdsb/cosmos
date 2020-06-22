export const apiConfig = {
    //returnRejectedPromiseOnError: true,
    //withCredentials: true,
    //timeout: 30000,
    baseURL: "https://webapi.teamviewer.com/api/v1",
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": ""
        }
    }
};
