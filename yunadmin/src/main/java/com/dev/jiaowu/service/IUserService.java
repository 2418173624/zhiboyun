package com.dev.jiaowu.service;

import com.dev.jiaowu.domain.po.UserPO;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author qch
 * @since 2021-01-17
 */
public interface IUserService extends IService<UserPO> {
    boolean getExcel(String className,Integer studentSize,MultipartFile file) throws Exception;
    List<UserPO> selectAll();
    UserPO getByUserName(String userName);
}
