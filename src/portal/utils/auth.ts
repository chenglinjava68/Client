// 从内存中读取token而不是磁盘以增加读取效率
// https://www.jianshu.com/p/0a3399c0d5e2
import _isNull from 'lodash/isNull';
import _get from 'lodash/get';
import _isString from 'lodash/isString';
import _isObject from 'lodash/isObject';
import { request, navToLoginPage } from './request';
import { PORTAL_JWT_KEY } from '@shared/utils/consts';

/**
 * 发送一个校验token的请求到服务端
 * 如果校验不通过会由request的拦截器自动跳转到登录页
 * 该检查一般用于表单填写页面防止填了一堆数据后提交失败跳转到登录页的挫败感
 * @param 是否自动跳转。如果为登录页则此值应该为false
 */
export const checkToken = async (autoNav = true): Promise<void> => {
  try {
    await request.post('/player/sso/check');
  } catch (err) {
    if (autoNav) {
      // 如果出错则跳转到登录页面
      navToLoginPage();
      return;
    }
    throw err;
  }
};

/**
 * 设置portal端的JWT
 * portal端的jwt数据结构简单，这样可以方便的进行代码注入(app)
 */
export function setPortalJWT(jwt: string) {
  window.localStorage.setItem(PORTAL_JWT_KEY, jwt);
}

export function getPortalJWT(): string {
  return localStorage.getItem(PORTAL_JWT_KEY) ?? '';
}
