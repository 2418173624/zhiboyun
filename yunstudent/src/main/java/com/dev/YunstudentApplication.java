package com.dev;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.dev.teacher.**.dao")
public class YunstudentApplication {

    public static void main(String[] args) {
        SpringApplication.run(YunstudentApplication.class, args);
    }

}
