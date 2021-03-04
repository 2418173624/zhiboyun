function onRemoteGet(url, data, onsucc, onerr) {
    return onRemoteCall(url, 'get', data, onsucc, onerr)
}

function onRemotePost(url, data, onsucc, onerr) {
    return onRemoteCall(url, 'post', data, onsucc, onerr)
}

function remotePost(url, data, onsucc, onerr) {
    return onRemoteCall(url, 'post', data, onsucc, onerr, "application/json", true)
}

function onRemotePut(url, data, onsucc, onerr) {
    return onRemoteCall(url, 'put', data, onsucc, onerr)
}

function onRemotePatch(url, data, onsucc, onerr) {
    return onRemoteCall(url, 'patch', data, onsucc, onerr)
}


function onRemoteDelete(url, data, onsucc, onerr) {
    return onRemoteCall(url, 'delete', data, onsucc, onerr)
}

function onRemoteForm(url, method, data, onsucc, onerr) {
    var formData = new FormData();

    _.each(buildParamObj(data), function (v, k) {
        formData.append(k, v);
    });

    var restfulReg = /^put|patch|delete$/i;
    if (restfulReg.test(method)) {
        var originalMethod = method;
        formData.append("_method", originalMethod);
        method = "POST";
    }
    onRemoteCall(url, method, formData, onsucc, onerr, undefined, false, false);
}

function onRemoteCall(url, method, data, onsucc, onerr, contextType, async, processData) {
    if (typeof (url) == "undefined") {
        return;
    }
    // 允许只传部分参数,最少需要 url + successCallback;
    var methodReg = /^get|head|post|put|patch|delete|options|trace$/i;

    if (jQuery.isFunction(method)) {
        onerr = onerr || data;
        onsucc = onsucc || method;
        method = undefined;
        data = undefined;
    } else if (jQuery.isFunction(data)) {
        onerr = onerr || onsucc;
        onsucc = data;
        if (typeof method === 'string' && methodReg.test(method)) {
            data = undefined;
        } else {
            data = method;
            method = undefined;
        }
    }

    // 除了get,post 外服务器不支持其他请求提交表单格式数据。
    // delete,不需要方法参数不用设置，其他请求不常用。
    var contextType = contextType;
    var restfulReg = /^put|patch|delete$/i;
    if (restfulReg.test(method)) {
        var originalMethod = method;
        data = jQuery.extend(data, {"_method": originalMethod});
        method = "POST";
    } else if (_.toUpper(method) === "POST") {
        //todo https时 post空数据会403 临时hack一下 不确定是否有更好的解决方案
        data = jQuery.extend(data || {}, {"_t": new Date().getTime()});
    }

    return jQuery.ajax(jQuery.extend({
        async: async,
        url: url,
        type: method,
        contentType: contextType,
        dataType: 'json',
        data: data,
        processData: processData,
        xhrFields: {//通过ajax把cookie传到后台
            withCredentials: true
        },
        crossDomain: true, //跨域
        success: function (result) {
            if (result.success) {
                if (jQuery.isFunction(onsucc)) {
                    onsucc(result);
                }
            } else {
                switch (result.code) {
                    case -1://未登录
                        break;
                    case -2:// redirectHref
                        window.parent.location.href = result.redirectURI;
                        break;
                    case -3:// redirectLoad
                        jQuery('body').load(result.redirectURI);
                        break;
                    case -4:// redirectOpen
                        window.open(result.redirectURI);
                        break;
                    case "02"://请求参数错误
                        console.error('param error', result);
                        break;
                    case "03"://系统异常
                        console.error('sys err', result);
                        break;
                    case "04"://未知异常
                        console.error('unknow error', result);
                        break;
                    case "05"://未登录
                        sessionStorage.removeItem('userInfo');
                        console.log('remoteCall:showLogin');
                        break;
                    case "06"://权限异常
                        console.error('permission denied', result);
                        break;
                }
                if (jQuery.isFunction(onerr)) {
                    onerr(result);
                }
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            if (jQuery.isFunction(onerr)) {
                if (!xmlHttpRequest.message) {
                    xmlHttpRequest.message = xmlHttpRequest.status + ":" + errorThrown;
                }
                if (xmlHttpRequest.responseJSON && xmlHttpRequest.responseJSON.hasOwnProperty("code") && xmlHttpRequest.responseJSON.hasOwnProperty("success")) {
                    onerr(xmlHttpRequest.responseJSON);
                } else if (xmlHttpRequest.hasOwnProperty("code") && xmlHttpRequest.hasOwnProperty("success")) {
                    onerr(xmlHttpRequest);
                } else {
                    onerr({
                        code: "04",
                        message: xmlHttpRequest.message,
                        success: false
                    });
                }
            }
            console.error('send request failed!!! status:', xmlHttpRequest.status, errorThrown);
        },
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }, jQuery.isPlainObject(url) && url));
}

function buildParamObj(param) {
    if (_.isArray(param)) {
        return _.map(param, function (o) {
            return buildParam({}, o);
        });
    } else if (_.isObject(param)) {
        return buildParam({}, param);
    } else {
        return param;
    }
}

function buildParam(result, obj, path) {
    _.each(obj, function (value, key) {
        if (_.isNil(value)) {
            return;
        }

        var s_path = _.isEmpty(path) ? key : (path + '.' + key);
        if (_.isArray(value)) {
            _.each(value, function (v, i) {
                buildParam(result, v, s_path + '[' + i + ']');
            });
        } else if (value instanceof File || value instanceof Date) {
            result[s_path] = value;
        } else if (_.isObject(value)) {
            buildParam(result, value, s_path);
        } else {
            result[s_path] = value;
        }
    });
    return result;
}

function urlEncode(param, key, encode) {
    if (param === null) return '';
    let paramStr = '';
    let t = typeof (param);
    if (t === 'string' || t === 'number' || t === 'boolean') {
        paramStr += '&' + key + '=' + (encode !== false ? encodeURIComponent(param) : param);
    } else {
        for (let i in param) {
            let k = (key !== undefined && key !== null) ? key + (param instanceof Array ? '[' + i + ']' : '.' + i) : i;
            paramStr += '&' + urlEncode(param[i], k, encode);
        }
    }
    return paramStr.substr(1);
}

