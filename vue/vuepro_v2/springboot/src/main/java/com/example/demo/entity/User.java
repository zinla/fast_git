package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("user")
@Data    //自动生成get set
public class User {
    @TableId(type = IdType.AUTO)  //自增
    private int id;

    private String email;
    private String name;
    private int age;
}
