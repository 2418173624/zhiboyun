package com.dev.jiaowu.service.impl;

import com.alibaba.druid.util.StringUtils;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dev.jiaowu.dao.IClassMapper;
import com.dev.jiaowu.domain.po.ClassPO;
import com.dev.jiaowu.domain.po.UserPO;
import com.dev.jiaowu.dao.IUserMapper;
import com.dev.jiaowu.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author qch
 * @since 2021-01-17
 */
@Service
//@RequiredArgsConstructor(onConstructor = @__(@Autowired))
//@CacheConfig(cacheNames = BasicHazelcastClient.MAP_NAME)
@Slf4j
public class UserServiceImpl extends ServiceImpl<IUserMapper, UserPO> implements IUserService {
    @Autowired
    private IUserMapper userMapper;
    @Autowired
    private IClassMapper classMapper;

    @Override
    public boolean getExcel(String className,Integer studentSize,MultipartFile file) throws Exception {
         ClassPO classPO=new ClassPO();
         classPO.setClassname(className);
         classPO.setClasssize(studentSize);
         classMapper.insert(classPO);

        //1.得到上传的表
        Workbook workbook2 = WorkbookFactory.create(file.getInputStream());
        //2、获取test工作表
        Sheet sheet2 = workbook2.getSheet("表");
        //获取表的总行数
        int num = sheet2.getLastRowNum();
        //System.out.println(num);
        //总列数
        int col = sheet2.getRow(0).getLastCellNum();


        //遍历excel每一行
        for (int j = 1; j <= num; j++) {
            Row row1 = sheet2.getRow(j);

            //如果单元格中有数字或者其他格式的数据，则调用setCellType()转换为string类型
            // Cell cell1 = row1.getCell(0);
            //cell1.setCellType(CellType.STRING);
            //获取表中第i行，第2列的单元格
            Cell cell2 = row1.getCell(1);
            //excel表的第i行，第3列的单元格
            Cell cell3 = row1.getCell(2);
            //cell3.setCellType(CellType.STRING);
            Cell cell4 = row1.getCell(3);
            Cell cell5 = row1.getCell(4);
            Cell cell6 = row1.getCell(5);
            Cell cell7 = row1.getCell(6);
            Cell cell8 = row1.getCell(7);
            //这里new 一个对象，用来装填从页面上传的Excel数据，字段根据上传的excel决定
            UserPO excel= new UserPO();
            if(excel!=null) {
                // excel.setId(cell1.getStringCellValue());
                if(cell2!=null){
                    cell2.setCellType(cell2.CELL_TYPE_STRING);
                    excel.setUsername(cell2.getStringCellValue());
                }
                //excel.setUsername(cell2.getStringCellValue());
                if(cell3!=null){
                    cell3.setCellType(cell3.CELL_TYPE_STRING);
                    excel.setPassword(cell3.getStringCellValue());
                }
                //excel.setPassword(cell3.getStringCellValue());
                if(cell4!=null){
                    cell4.setCellType(cell4.CELL_TYPE_STRING);
                    excel.setPhone(cell4.getStringCellValue());
                }
                //excel.setSchoolname(cell4.getStringCellValue());
                if(cell5!=null){
                    cell5.setCellType(cell5.CELL_TYPE_STRING);
                    excel.setSex(cell5.getStringCellValue());
                }
               // excel.setSex(cell5.getStringCellValue());
                if(cell6!=null){
                    cell6.setCellType(cell6.CELL_TYPE_STRING);
                    excel.setAge(cell6.getStringCellValue());
                }
                //excel.setAge(cell6.getStringCellValue());
                if(cell7!=null){
                    cell7.setCellType(cell7.CELL_TYPE_STRING);
                    excel.setIcon(cell7.getStringCellValue());
                }
                if(cell8!=null){
                    cell8.setCellType(cell8.CELL_TYPE_STRING);
                    excel.setRole(cell8.getStringCellValue());
                }
               /* excel.setIcon(cell7.getStringCellValue());
                excel.setRole(cell8.getStringCellValue());*/
                // list.add(excel);
               String cid= classPO.getId();
               excel.setCid(cid);
                userMapper.insert(excel);
            }
        }
        return true;
    }

    @Override
    public List<UserPO> selectAll() {
        QueryWrapper<UserPO> queryWrapper = new QueryWrapper<>();
        List<UserPO> userPOS = userMapper.selectList(queryWrapper);
//        LambdaQueryWrapper<UserPO> queryWrapper = new LambdaQueryWrapper<>();
//        queryWrapper.getSqlSelect();
//        List<UserPO> list = list(queryWrapper);
//        if (CollectionUtils.isNotEmpty(list)){
//            //从设计上来说,一般用户名是唯一的,所以list的大小一般为1
//            return list;
//        }
        return userPOS;
    }

    @Override
    public UserPO getByUserName(String userName) {
        if (StringUtils.isEmpty(userName)) {
            return null;
        }
        LambdaQueryWrapper<UserPO> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(UserPO::getUsername,userName);
        List<UserPO> list = list(queryWrapper);
        if (CollectionUtils.isNotEmpty(list)){
            //从设计上来说,一般用户名是唯一的,所以list的大小一般为1
            return list.get(0);
        }
        return null;
    }
}
