

export interface RequestParams {
    method: string,
    url: string,
    params: any
}

export enum RequestMethodType {
    GET = "GET",
    POST = "POST"
}
export const requestObservable = ({ method, url, params }: RequestParams) => {
    if (method == "GET") {
        if (params) {
            let paramsArray: String[] = [];
            //拼接参数
            Object.keys(params).forEach(key =>  
                paramsArray.push(key + "=" + params[key])
            );
            if (url.search(/\?/) === -1) {
                url += "?" + paramsArray.join("&");
            } else {
                url += "&" + paramsArray.join("&");
            }
        }
        console.log("创建请求", `http://www.wanandroid.com/${url}`);

        // fetch 请求
        return fetch(`http://www.wanandroid.com/${url}`, {
            method: "GET",
            headers: {}
        });
    } else {
        let formData = new FormData();
        for (const key in params) {
            formData.append(key, params[key]);
        }
        return fetch(`http://www.wanandroid.com/${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        });
    }
}

