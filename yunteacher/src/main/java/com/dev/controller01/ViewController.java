package com.dev.controller01;

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
    @GetMapping("/head")
    public ModelAndView toHead(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("head");
        return modelAndView;
    }
    @GetMapping("/homework")
    public ModelAndView toHomework(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("homework");
        return modelAndView;
    }
    @GetMapping("/index")
    public ModelAndView toIndex(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("index");
        return modelAndView;
    }
    @GetMapping("/login")
    public ModelAndView toLofin(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }
    @GetMapping("/password")
    public ModelAndView toPassword(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("password");
        return modelAndView;
    }
    @GetMapping("person")
    public ModelAndView toPerson(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("person");
        return modelAndView;
    }
    @GetMapping("/test")
    public ModelAndView toTest(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("test");
        return modelAndView;
    }
}
