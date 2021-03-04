//获取URL参数值
function getURI(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    // return r[2];
    return null;
}

//获取cookie
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

// 根据数字返回中文
function getChineseNum(num) {
    if (isNaN(parseInt(num))) {
        return "";
    }
    var arr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    var arr2 = ["", "十", "百", "千", "万"];
    var n = num.toString().split("").reverse();
    var s = "";
    if (n.length == 1) {
        return arr[num];
    } else {
        if (n[0] != "0") {
            s = arr[n[0]];
        }
    }
    if (n.length >= 2) {
        if (n[1] == "0") {
            if (s != "") {
                s = arr[0] + s;
            } else {
                s = "";
            }
        } else {
            s = arr[n[1]] + arr2[1] + s;
        }
    }
    if (n.length >= 3) {
        if (n[2] == "0") {
            if (s == "") {
                s = "";
            } else if (n[1] != "0") {
                s = arr[0] + s;
            }
        } else {
            s = arr[n[2]] + arr2[2] + s;
        }
    }
    if (n.length >= 4) {
        s = arr[n[3]] + arr2[3] + s;
    }
    return s;
}

// 日期
function dateFormat(date) {
    var date = new Date(date);
    var yy = date.getFullYear();
    var m1 = (date.getMonth() + 1).toString().length > 1 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    var dd = date.getDate().toString().length > 1 ? date.getDate() : "0" + (date.getDate());
    var hh = date.getHours().toString().length > 1 ? date.getHours() : "0" + (date.getHours());
    var m2 = date.getMinutes().toString().length > 1 ? date.getMinutes() : "0" + (date.getMinutes());
    var ss = date.getSeconds().toString().length > 1 ? date.getSeconds() : "0" + (date.getSeconds());
    var arr = [yy, m1, dd, hh, m2, ss];
    return arr;
}

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分,
        "s+": this.getSeconds(), //秒
        "w+": getWeek(this.getDay()), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function getWeek(day) {
    var week;
    switch (day) {
        case 0:
            week = "日";
            break;
        case 1:
            week = "一";
            break;
        case 2:
            week = "二";
            break;
        case 3:
            week = "三";
            break;
        case 4:
            week = "四";
            break;
        case 5:
            week = "五";
            break;
        case 6:
            week = "六";
            break;
    }
    return week;
}

function formatDataByPattern(currentTimeMillis, pattern) {
    if (!currentTimeMillis) {
        return "";
    }
    var time = new Date(currentTimeMillis);
    if (!time) {
        return "";
    }
    return time.Format(pattern);

}

function formatDate(currentTimeMillis) {
    var pattern = "yyyy-MM-dd HH:mm";
    return formatDataByPattern(currentTimeMillis, pattern);

}

function formatDateByDay(time) {
    return formatDataByPattern(time, "yyyy-MM-dd");
}


function formatDate(dateStr, fmt) {
    if (dateStr) {
        var date;
        if (typeof dateStr === 'string') {
            dateStr = dateStr.replace(/-/g, '/')
        }
        date = new Date(dateStr);
        if (typeof fmt === 'undefined' || fmt == '') {
            fmt = 'yyyy-MM-dd HH:mm:ss'
        }
        return date.Format(fmt);
    }
    return '';
}

function learnTimeFormat(time) {
    if (isNaN(parseFloat(time))) {
        time = 0;
    }
    var hour = parseInt(time / 3600);
    var min = parseInt((time % 3600) / 60);
    var sec = time % 60;
    var result = hour + "小时" + min + "分钟" + sec + "秒";
    return result;
}

function concatUri() {
// if (arguments.length>)
//     for (var i = 1; i < arguments.length; i++) {
//         arguments[i].
//     }
}

if (typeof Vue === 'function') {
    Object.defineProperty(Vue.prototype, 'formatDate', {value: formatDate});
    Object.defineProperty(Vue.prototype, 'learnTimeFormat', {value: learnTimeFormat});
}

function getHead(head) {
    if (_.startsWith(head, "http")) {
        return head;
    } else {
        return zker_host + "/" + head;
    }
}

function getUrlList(urlList) {
    var tempPlayUrl = [];
    $.each(urlList, function (i, url) {
        if (url.type == 0) {
            tempPlayUrl[0] = ({
                label: "本地",
                src: res_host + url.url
            });
        } else if (url.type == 1) {
            $.each(url.playList, function (j, ccUrl) {
                switch (parseInt(ccUrl.quality)) {
                    case 30:
                        tempPlayUrl[3] = ({
                            label: "超清",
                            src: ccUrl.playurl
                        });
                        break;
                    case 20:
                        tempPlayUrl[2] = ({
                            label: "高清",
                            src: ccUrl.playurl
                        });
                        break;
                    default:
                        tempPlayUrl[1] = ({
                            label: "清晰",
                            src: ccUrl.playurl
                        });
                        break;
                }
            })
        }
    });
    return tempPlayUrl;
}

/**
 * 将组织数据转换为tree
 * @param rows 查询到的列表
 * @param disabled 是否禁用选项[可选]
 * @returns {Array} true
 */
function convertOrgTree(rows, disabled) {
    if (typeof disabled == "undefined") {
        disabled = false;
    }

    function exists(rows, parentId) {
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].orgId == parentId) return true;
        }
        return false;
    }

    var nodes = [];
    // get the top level nodes
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (!exists(rows, row.orgParentId)) {
            nodes.push({
                path: [row.orgId],
                orgId: row.orgId,
                orgName: row.orgName,
                orgCode: row.orgCode,
                orgLevel: row.orgLevel,
                orgSeq: row.orgSeq,
                disabled: disabled
            });
        }
    }

    var toDo = [];
    for (var i = 0; i < nodes.length; i++) {
        toDo.push(nodes[i]);
    }
    while (toDo.length) {
        var node = toDo.shift();    // the parent node
        // get the children nodes
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (row.orgParentId == node.orgId) {
                var tempParent = _.defaultsDeep([], node.path);
                tempParent.push(row.orgId);
                var child = {
                    path: tempParent,
                    orgId: row.orgId,
                    orgName: row.orgName,
                    orgCode: row.orgCode,
                    orgLevel: row.orgLevel,
                    orgSeq: row.orgSeq,
                    disabled: disabled
                };
                if (node.children) {
                    node.children.push(child);
                } else {
                    node.children = [child];
                }
                toDo.push(child);
            }
        }
    }
    return nodes;
}

function replaceResHost(src) {
    if (src) {
        src = _.replace(src, /\$RESOURCE_HOST/gm, res_host);
    }
    return src;
}

function replaceHostRes(src) {
    if (src) {
        src = _.replace(src, new RegExp(res_host, 'gm'), "$RESOURCE_HOST");
    }
    return src;
}

function replaceHtml(src) {
    src = _.replace(src, /</g, '&lt;');
    src = _.replace(src, />/g, '&gt;');
    return src;
}

function verifyFileName(FileName) {
    var reg = new RegExp('[\\\\*\\/|:"*<> \(\)]+');
    return reg.test(FileName);
}

function convertMenuTree(rows, disabled) {
    if (typeof disabled == "undefined") {
        disabled = false;
    }

    function exists(rows, parentId) {
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].id == parentId) {
                return true;
            }
        }
        return false;
    }

    var nodes = [];
    // get the top level nodes
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (!exists(rows, row.parentId)) {
            nodes.push({
                id: row.id,
                name: row.name,
                url: row.url,
                icon: row.icon,
                weight: row.weight,
                isShow: row.isShow,
                level: row.level,
                disabled: disabled
            });
        }
    }

    var toDo = [];
    for (var i = 0; i < nodes.length; i++) {
        toDo.push(nodes[i]);
    }
    while (toDo.length) {
        var node = toDo.shift();    // the parent node
        // get the children nodes
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (row.parentId == node.id) {
                var child = {
                    id: row.id,
                    name: row.name,
                    url: row.url,
                    icon: row.icon,
                    weight: row.weight,
                    isShow: row.isShow,
                    level: row.level,
                    disabled: disabled
                };
                if (node.children) {
                    node.children.push(child);
                } else {
                    node.children = [child];
                }
                toDo.push(child);
            }
        }
    }
    return nodes;
}

var labIconMap = {
    "0": "icon-template",
    "1": "icon-virtual_machine",
    "2": "icon-setup_file",
    "3": "icon-notebook",
    "4": "icon-word",
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

function _throttleDefer(func, about) {
    var deferred;

    function cancel() {
        if (deferred !== undefined && typeof deferred.abort == 'function') {
            deferred.abort();
        }
    }

    function immediate() {
        cancel();
        deferred = func.apply(this, arguments);
        return deferred;
    }

    function isPending() {
        return typeof deferred != 'undefined' && typeof deferred.state == 'function' && deferred.state() == 'pending';
    }

    function throttled() {
        if (!!about) {
            cancel();
        }

        if (!isPending()) {
            deferred = func.apply(this, arguments);
        }
        return deferred;
    }

    throttled.cancel = cancel;
    throttled.immediate = immediate;
    throttled.isPending = isPending;
    return throttled;
}

function formatDuration(duration) {
    duration = parseInt(duration);
    if (isNaN(duration) || duration == 0) {
        return "0分0秒";
    }
    var time = duration / 1000;
    var hour = parseInt(time / (60 * 60));
    var min = parseInt((time % (60 * 60)) / 60);
    var sec = parseInt(time % 60);
    var result = "";
    if (hour > 0) {
        result += hour + "小时";
    }
    result += (min < 10 ? "0" + min : min) + "分";
    result += (sec < 10 ? "0" + sec : sec) + "秒";
    return result;
}


var ITP_PASSWORD_REG = /^.{6,}$/;
var ITP_PHONE_REG = /^[1]([3-9])[0-9]{9}$/;
var ITP_EMAIL_REG = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;

function isMobile(mobile) {
    return ITP_PHONE_REG.test(mobile);
}

function isValidatePwd(pwd) {
    return ITP_PASSWORD_REG.test(pwd);
}

function isEmail(email) {
    return ITP_EMAIL_REG.test(email);
}

function copyText(value) {
    var oInput = document.createElement('input');
    oInput.value = value;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
}

function download(url, name) {
    window.open(ctx + "/download/resources?url=" + url + "&name=" + name);
}

function formatSize(size, pointLength, units) {
    if (size) {
        var unit;
        units = units || ['B', 'K', 'M', 'G', 'TB'];
        while ((unit = units.shift()) && size > 1024) {
            size = size / 1024;
        }
        return (unit === 'B' ? size : size.toFixed(pointLength || 2)) +
            unit;
    }
}

function convertTasksTree(tasks) {
    var map = {}, roots = [];
    tasks = tasks || [];
    map = _.keyBy(tasks, "_id");
    _.each(tasks, function (task) {
        map[task._id] = task;
        task.children = [];
    });
    _.each(tasks, function (task) {
        if (task.pId) {
            map[task.pId].children = _.union(map[task.pId].children || [], [task]);
            task.parent = map[task.pId];
        } else {
            roots.push(task);
        }
    });
    _.each(tasks, function (task) {
        task.children = _.sortBy(task.children, "seq");
    });
    return _.sortBy(roots, "seq");
}

function codeFormatter(val) {
    if (typeof val === "undefined") {
        return "--";
    }
    if (isNaN(parseInt(val))) {
        return val;
    }
    if (val > 999 && val <= (999999)) {
        return parseInt(val / 1000) + 'K+';
    } else if (val > 999999 && val <= 999999999) {
        return parseInt(val / (1000 * 1000)) + 'M+';
    } else if (val > (999999999)) {
        return parseInt(val / (1000 * 1000 * 1000)) + 'B+';
    } else {
        return val;
    }
}

function basename(name) {
    return name && name.replace(/(.*)\.[^.]+/gi, "$1");
}

// 转换富文本字符串为纯文本内容
function htmlToText(str) {
    var div = document.createElement("div");
    div.innerHTML = _.unescape(str);
    return div.innerText;
}

/**
 * 根据编号查询树节点的路径
 * @param tree
 * @param id
 */
function findOrgPath(tree, id) {
    if (_.isEmpty(tree)) {
        return [];
    }
    getOrgTreePath(tree, id);
    var child;

    function getOrgTreePath(targetTree, targetTreeId) {
        if (_.isEmpty(targetTree)) {
            return false;
        }
        _.forEach(targetTree, function (tr) {
            if (tr.orgId == targetTreeId) {
                child = tr;
                return false;
            } else {
                getOrgTreePath(tr.children, id);
            }
        });
    }

    if (child) {
        return child.path;
    } else {
        return [];
    }
}

// ckeditor 默认配置
function getEditorConfig(config) {
    return Object.assign({
        language: 'zh-cn',
        toolbar: ["heading", "bold", "italic", "strikethrough", "blockQuote", "link", "highlight", "fontSize", "fontColor", "underline", "alignment", "numberedList", "bulletedList", "insertTable", "imageUpload", "math", "undo", "redo"],
        extraPlugins: [CKEDITOR.uploadAdapter({
            url: api + "/uploader/editor",
            host: res_host
        })],
        image: {
            // You need to configure the image toolbar, too, so it uses the new style buttons.
            toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],
            styles: [
                'full',
                'alignLeft',
                'alignRight'
            ]
        },
        math: {
            engine: 'katex',
            outputType: 'span',
            forceOutputType: false,
            enablePreview: true,
            kityDest: `${ctx}/js/plugin/kityformula/kityFormulaDialog.html`
        },
        fontSize: {
            options: [12, 'default', 14, 16, 18, 20, 22, 24, 26, 28],
        },
    }, config || {});
}

function workbook2blob(workbook) {
    // 将workbook装化成blob对象
    // 生成excel的配置项
    const wopts = {
        // 要生成的文件类型
        bookType: 'xlsx',
        // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        bookSST: false,
        // 二进制类型
        type: 'binary'
    };
    const workbookOut = XLSX.write(workbook, wopts);
    return new Blob([s2ab(workbookOut)], {
        type: 'application/octet-stream'
    })
}

function s2ab(s) {
    // 将字符串转ArrayBuffer
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xff
    }
    return buf
}

function openDownloadDialog(blob, fileName) {
    // 将blob对象创建blob url，然后用a标签实现弹出下载框
    if (typeof blob == 'object' && blob instanceof Blob) {
        blob = URL.createObjectURL(blob) // 创建blob地址
    }
    const aLink = document.createElement('a');
    aLink.href = blob;
    // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效
    aLink.download = fileName || '';
    let event;
    if (window.MouseEvent) event = new MouseEvent('click');
    //   移动端
    else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent(
            'click',
            true,
            false,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
        )
    }
    aLink.dispatchEvent(event);
    URL.revokeObjectURL(blob)
}


function splitByLine(str) {
    if (!str) {
        return [];
    }
    return str.split("\n");
}
