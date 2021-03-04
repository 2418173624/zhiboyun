package com.dev.teacher.service.impl;

import com.dev.teacher.domain.po.ClassPO;
import com.dev.teacher.dao.IClassMapper;
import com.dev.teacher.service.IClassService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author qch
 * @since 2021-01-23
 */
@Service
public class ClassServiceImpl extends ServiceImpl<IClassMapper, ClassPO> implements IClassService {

}
