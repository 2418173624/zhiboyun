package com.dev.jiaowu.domain.po;

import lombok.Data;

import java.util.List;

@Data
public class UserVO {
        private Integer      current;
        private Integer      size;
        private Long         total;
        private List<UserPO> userList;

}
