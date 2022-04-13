package com.example.demo.controller;


import com.example.demo.common.Result;
import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;

@RestController
@RequestMapping("/user")    //统一路由
public class UserController {
    @Resource
    UserMapper userMapper;

    @PostMapping
    public Result<?> save(@RequestBody User user){
        userMapper.insert(user);
        return Result.success();
    }
}
