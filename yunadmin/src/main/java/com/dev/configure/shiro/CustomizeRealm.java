package com.dev.configure.shiro;

import com.dev.jiaowu.dao.IUserMapper;
import com.dev.jiaowu.domain.po.UserPO;
import com.dev.jiaowu.service.IUserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * 自定义Realm
 * com.test.demo.configuration.shiro
 * CustomizeRealm
 */
public class CustomizeRealm extends AuthorizingRealm {

    @Autowired
    private IUserService iUserService;

    @Autowired
    private IUserMapper iUserMapper;

    /**
     * 权限认证 暂时不用
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        System.out.println("执行了=》授权 doGetAuthorizationInfo");
        return null;
    }

    /**
     * 身份认证 登录认证
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        System.out.println("执行了=》认证 doGetAuthenticationInfo");
        //获取登录令牌用户名
        String userName = (String) authenticationToken.getPrincipal();
        //获取用户信息（唯一标识）从数据库中查到这个用户
        UserPO userPO = iUserService.getByUserName(userName);
        if (userPO == null) { //没有这个人
            //throw new AuthenticationException();
            return null;  //UnknownAccountException
        }
        if (userPO.getLocked()==0){
            throw new LockedAccountException(); //抛出用户被管理员锁定异常
        }
        //取出这个用户的密码
        String passwordInDB=userPO.getPassword();
        //SimpleAuthenticationInfo:代表该用户的认证信息。参数为“用户名+密码+盐”
        //this.getName()是获取CachingRealm的名
        return new SimpleAuthenticationInfo(userName,userPO.getPassword(),getName());
    }
}
