package com.dev.teacher.service;

import com.alibaba.druid.util.StringUtils;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.dev.teacher.domain.po.UserPO;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author qch
 * @since 2021-01-23
 */

public interface IUserService extends IService<UserPO> {
    UserPO getByUserName(String phone);




}
