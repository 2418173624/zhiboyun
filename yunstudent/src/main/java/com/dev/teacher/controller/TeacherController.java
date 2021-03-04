package com.dev.teacher.controller;

import com.dev.teacher.domain.po.UserPO;
import com.dev.teacher.service.IUserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.HtmlUtils;

import javax.servlet.http.HttpSession;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author qch
 * @since 2021-01-16
 */
@RestController
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    private IUserService userService;
    @GetMapping("/login")
    public ModelAndView toLogin(){
        ModelAndView model=new ModelAndView();
        model.setViewName("login");
        return model;
    }
    @GetMapping("/course")
    public ModelAndView toCourse(){
        ModelAndView model=new ModelAndView();
        model.setViewName("course");
        return model;
    }
    @GetMapping("/head")
    public ModelAndView toHead(){
        ModelAndView model=new ModelAndView();
        model.setViewName("head");
        return model;
    }
    @GetMapping("/homework")
    public ModelAndView toHomework(){
        ModelAndView model=new ModelAndView();
        model.setViewName("homework");
        return model;
    }
    @GetMapping("/index")
    public ModelAndView toIndex(){
        ModelAndView model=new ModelAndView();
        model.setViewName("index");
        return model;
    }
    @GetMapping("/password")
    public ModelAndView toPassword(){
        ModelAndView model=new ModelAndView();
        model.setViewName("password");
        return model;
    }
    @GetMapping("/test")
    public ModelAndView toTest(){
        ModelAndView model=new ModelAndView();
        model.setViewName("test");
        return model;
    }
    @GetMapping("/testpage")
    public ModelAndView toTestPage(){
        ModelAndView model=new ModelAndView();
        model.setViewName("testpage");
        return model;
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

    @PostMapping("/doLogin")
    public ModelAndView Login(UserPO userParam, HttpSession session, Model model){
        ModelAndView model1=new ModelAndView();
        model1.setViewName("index");
        ModelAndView model2=new ModelAndView();
        model2.setViewName("login");
        String phone=userParam.getPhone();
        String password=userParam.getPassword();
        phone = HtmlUtils.htmlEscape(phone);
        //获取当前的用户
        Subject subject = SecurityUtils.getSubject();
        //把输入的用户名+密码，放在token里
        UsernamePasswordToken token=new UsernamePasswordToken(phone,password);
        try {
            subject.login(token);
            System.out.println(userParam.getUsername());
            session.setAttribute("loginUser",userParam.getUsername());
            return model1;
        } catch (UnknownAccountException e) {  //用户名不存在
            model.addAttribute("msg","用户名错误或者该用户还没有注册");
            return model2;
        }catch (IncorrectCredentialsException e) {  //密码不存在
            model.addAttribute("msg","密码错误");
            return model2;
        }catch (LockedAccountException e){
            model.addAttribute("msg","账号已被冻结！");
            return model2;
        }

    }

}

