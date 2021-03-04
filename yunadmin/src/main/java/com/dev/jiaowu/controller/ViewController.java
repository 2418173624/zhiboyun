package com.dev.jiaowu.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/view")
public class ViewController {
    @GetMapping("/course")
    public ModelAndView toCourse(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("course");
        return modelAndView;
    }
    @GetMapping("/fankui")
    public ModelAndView toFankui(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("fankui");
        return modelAndView;
    }

    @GetMapping("/index")
    public ModelAndView toIndex(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("index");
        return modelAndView;
    }
    @GetMapping("/test")
    public ModelAndView toTest(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("test");
        return modelAndView;
    }
    @GetMapping("/testpaper")
    public ModelAndView toTestPaper(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("testpaper");
        return modelAndView;
    }
    @GetMapping("/video")
    public ModelAndView toVideo(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("video");
        return modelAndView;
    }
    @GetMapping("/jiaowu")
    public ModelAndView toJiaowu(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("jiaowu");
        return modelAndView;
    }
    @GetMapping("/login")
    public ModelAndView toLogin(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }

    //退出登录
    @GetMapping("/logout")
    public ModelAndView logout( ) {
        ModelAndView model=new ModelAndView();
        model.setViewName("login");
        Subject subject = SecurityUtils.getSubject();
        if(subject.isAuthenticated())
            subject.logout();
        return model;
    }
    //默认跳转到首页
    @GetMapping("/")
    public ModelAndView toIndex1(){
        ModelAndView model=new ModelAndView();
        model.setViewName("login");
        return model;
    }
}
