package com.dev.teacher.service.impl;

import com.alibaba.druid.util.StringUtils;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.dev.teacher.domain.po.UserPO;
import com.dev.teacher.dao.IUserMapper;
import com.dev.teacher.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author qch
 * @since 2021-01-23
 */
@Service
public class UserServiceImpl extends ServiceImpl<IUserMapper, UserPO> implements IUserService {
    @Autowired
    private IUserMapper userMapper;

    @Override
    public UserPO getByUserName(String phone) {
        if (StringUtils.isEmpty(phone)) {
            return null;
        }
        LambdaQueryWrapper<UserPO> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(UserPO::getPhone,phone);
        List<UserPO> list = list(queryWrapper);
        if (CollectionUtils.isNotEmpty(list)){
            //从设计上来说,一般用户名是唯一的,所以list的大小一般为1
            return list.get(0);
        }
        return null;
    }
}
