/**
 *
 * @param jq_el
 * @param name
 */
function hasAttr(jq_el,name){
    var attr = jq_el.attr(name);
    if (typeof attr !== typeof undefined && attr !== false) {
       return true;
    }
    return false;
}

/**
   去除所有控控
**/
function removeSpace(str){
    return str.replace(/\s+/g,"");
}