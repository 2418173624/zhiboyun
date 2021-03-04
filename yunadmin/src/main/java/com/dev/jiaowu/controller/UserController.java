package com.dev.jiaowu.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dev.jiaowu.dao.IUserMapper;
import com.dev.jiaowu.domain.po.UserPO;
import com.dev.jiaowu.domain.po.UserVO;
import com.dev.jiaowu.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.HtmlUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author qch
 * @since 2021-01-17
 */
@RestController
@RequestMapping("/user")
@Validated
/*@RequiredArgsConstructor(onConstructor = @__(@Autowired))*/
public class UserController {
    @Autowired
    private IUserService userService;
   @Autowired
   private IUserMapper userMapper;



    @PostMapping("/excel")
    private ModelAndView insert(String className,Integer studentSize,MultipartFile file) throws Exception {
       String msg;
        if (userService.getExcel(className,studentSize,file)){
           msg="上传成功";

        } else {
            msg="上传失败";

        }
        ModelAndView model=new ModelAndView();
        model.setViewName("jiaowu");
        return model;
        //return ResultBody.getSuccessResultBody("");
    }
    @PostMapping("/selectall")
    public List<UserPO> selectAll(Model model,HttpServletRequest request){
            List<UserPO> list=userService.selectAll();
            request.setAttribute("result",list);
            return list;
    }

    @PostMapping("/doLogin")
    public ModelAndView Login(UserPO userParam, HttpServletRequest request,Model model){
        ModelAndView model1=new ModelAndView();
        model1.setViewName("index");
        ModelAndView model2=new ModelAndView();
        model2.setViewName("login");
        String username=userParam.getUsername();
        String password=userParam.getPassword();
        username = HtmlUtils.htmlEscape(username);
        //获取当前的用户
        Subject subject = SecurityUtils.getSubject();
        //把输入的用户名+密码，放在token里
        UsernamePasswordToken token=new UsernamePasswordToken(username,password);
        try {
            subject.login(token);
            request.setAttribute("loginUser",username);
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


    @PostMapping( "/findAll")
    public Object findAll(HttpServletRequest request){
        //获取前台发送过来的数据
        Integer pageNo = Integer.valueOf(request.getParameter("current"));
        Integer pageSize = Integer.valueOf(request.getParameter("size"));
        IPage<UserPO> page = new Page<>(pageNo, pageSize);
        QueryWrapper<UserPO> wrapper = new QueryWrapper<>();
        UserPO student =new UserPO();
      //  student.setId(1);
        wrapper.setEntity(student);
        return userService.page(page,wrapper);
    }

}

