/*
 * @Author: @yzcheng
 * @Date: 2020-08-13 09:28:32
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-08-13 09:28:36
 */
import Cookies from 'js-cookie'

const TokenKey = 'Authorization'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
