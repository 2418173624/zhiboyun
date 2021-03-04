package com.dev.configure.shiro;

import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.session.mgt.SessionManager;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.apache.shiro.web.session.mgt.DefaultWebSessionManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

/**
 * Shiro配置类
 * com.test.demo.configuration.shiro
 * ShiroConfiguration
 */
@Configuration
public class ShiroConfiguration {

    @Bean
    public Realm realm(){
        return new CustomizeRealm();
    }

    @Bean("sessionManager")
    public SessionManager sessionManager() {
        return new DefaultWebSessionManager();
    }

    @Bean("securityManager")
    public DefaultWebSecurityManager securityManager(SessionManager sessionManager, Realm customizeRealm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        securityManager.setSessionManager(sessionManager);
        securityManager.setRealm(customizeRealm);
        return securityManager;
    }

    //---------------------
//    @Bean
//    public HashedCredentialsMatcher hashedCredentialsMatcher(){
//        HashedCredentialsMatcher hashedCredentialsMatcher = new HashedCredentialsMatcher();
//        hashedCredentialsMatcher.setHashAlgorithmName("md5");
//        hashedCredentialsMatcher.setHashIterations(2);
//        return hashedCredentialsMatcher;
//    }
//
//    /**
//     *  开启shiro aop注解支持.
//     *  使用代理方式;所以需要开启代码支持;
//     * @param securityManager
//     * @return
//     */
//    @Bean
//    public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor(java.lang.SecurityManager securityManager){
//        AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor = new AuthorizationAttributeSourceAdvisor();
//        authorizationAttributeSourceAdvisor.setSecurityManager(securityManager);
//        return authorizationAttributeSourceAdvisor;
//    }
    //-------------------------------------

    @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean(SecurityManager securityManager) {
        ShiroFilterFactoryBean filterFactoryBean = new ShiroFilterFactoryBean();
        //必须设置securityManager
        filterFactoryBean.setSecurityManager(securityManager);
        //增加请求地址的认证
        filterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap());
        //未登录跳转页面
        filterFactoryBean.setLoginUrl("/view/login");
        //登录成功跳转页面
        filterFactoryBean.setSuccessUrl("/view/index");
        //未授权界面
        //filterFactoryBean.setUnauthorizedUrl("/403");
        return filterFactoryBean;
    }

    private Map<String, String> filterChainDefinitionMap() {
        //anon 不需要认证就可以访问
        //authc 需要认证
        //user 必须拥有 记住我 功能才能用
        //perms 拥有对某个资源的权限才能访问
        //role 拥有某个角色权限才能访问
        //当访问时是从上往下认证的，当URL匹配到第一个的时候,不会继续向下匹配了
        Map<String, String> filterChainDefinitionMap = new HashMap<>();
        filterChainDefinitionMap.put("/view/login", "anon");
        filterChainDefinitionMap.put("/user/doLogin", "anon");
        //过滤连定义，从上向下顺序执行，一般将/** 放在最下边
        //authc：所有url都必须认证通过才可以访问； anon：所有url都可以匿名访问
        filterChainDefinitionMap.put("/**", "authc");
        //配置登出 过滤器
        filterChainDefinitionMap.put("/view/logout", "logout");
        return filterChainDefinitionMap;
    }
}
