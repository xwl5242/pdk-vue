/**
 * 页面中生成Toast通知DIV的id属性值
 * @type {string}
 */
const toastDivId = 'loadingToast';

/**
 * 页面中生成Message提示框DIV的id属性值
 * @type {string}
 */
const messageDivId = 'dialogs';

/**
 * Toast通知DIV中具体HTML内容
 * @type {string}
 */
const toastHtmlTpl = "<div class=\"weui-mask_transparent\"></div>\n" +
    "    <div class=\"weui-toast\">\n" +
    "        <i class=\"weui-loading weui-icon_toast\"></i>\n" +
    "        <p class=\"weui-toast__content\">#DESC#</p>\n" +
    "    </div>";

/**
 * 页面中生成Message提示框DIV中按钮具体HTML内容
 * @type {string}
 */
const messageHtmlBtnTpl = "<a href=\"javascript:;\" id=\"#ID#\" style=\"color:#D64848;font-size: 17px;\" " +
    "class=\"weui-dialog__btn weui-dialog__btn_primary\">#NAME#</a>";

/**
 * 页面中生成Message提示框DIV中具体HTML内容
 * @type {string}
 */
const messageHtmlTpl = "<div class=\"js_dialog\" id=\"requiredMsg\">\n" +
    "        <div class=\"weui-mask\"></div>\n" +
    "        <div class=\"weui-dialog\">\n" +
    "            <div class=\"weui-dialog__bd\" id=\"realMsg\">#INFO#</div>\n" +
    "            <div class=\"weui-dialog__ft\">\n#BUTTONS#" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>";

/**
 * 页面弹出Toast通知层
 * @param desc 通知的具体信息
 */
function showToast(desc){
    let html = toastHtmlTpl.replace("#DESC#", desc);
    let toastDiv = document.createElement('div');
    toastDiv.id = toastDivId;
    toastDiv.innerHTML = html;
    document.body.appendChild(toastDiv);
}

/**
 * 隐藏Toast消息
 */
function hideToast(){
    document.getElementById(toastDivId).remove();
}

/**
 * 显示Message弹框
 * @param info 弹框提示信息
 * @param buttons 弹框的按钮组，格式为[{name:'按钮名称', func:'按钮触发事件,类型为function'},{name:'', func:''}]
 */
function showMsg(info, buttons){
    buttons = buttons || [{name:'确定', func:hideMsg}];
    if(buttons && buttons.length>0){
        let parentHtml = messageHtmlTpl.replace('#INFO#', info);
        let childsHtml = '';
        for(let i=0;i<buttons.length;i++){
            let childHtml = messageHtmlBtnTpl.replace('#ID#', 'custom_msg_btn_'+i)
                .replace('#NAME#', buttons[i].name);
            childsHtml += childHtml + '\n';
        }
        let html = parentHtml.replace('#BUTTONS#', childsHtml);
        let messageDiv = document.createElement('div');
        messageDiv.id = messageDivId;
        messageDiv.innerHTML = html;
        document.body.appendChild(messageDiv);
        for(let i=0;i<buttons.length;i++){
            if(buttons[i].func && typeof(buttons[i].func) == 'function'){
                let msgBtn = document.getElementById('custom_msg_btn_'+i);
                msgBtn.addEventListener('click', buttons[i].func);
            }
        }
    }
}

/**
 * 隐藏Message弹框
 */
function hideMsg(){
    document.getElementById(messageDivId).remove();
}
