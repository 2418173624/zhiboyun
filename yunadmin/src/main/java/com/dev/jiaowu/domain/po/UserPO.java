package com.dev.jiaowu.domain.po;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;

import lombok.*;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author qch
 * @since 2021-01-17
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("user")
public class UserPO implements Serializable {

    private static final long serialVersionUID = 1L;

      @TableId(value = "id", type = IdType.ASSIGN_UUID)
    private String id;

    @TableField("cid")
    private String cid;

    @TableField("username")
    private String username;

    @TableField("password")
    private String password;
    @TableField("phone")
    private String phone;

    @TableField("sex")
    private String sex;
    @TableField("age")
    private String age;
    @TableField("icon")
    private String icon;

    @TableField("role")
    private String role;

    @TableField("locked")
    private Integer locked;


}
