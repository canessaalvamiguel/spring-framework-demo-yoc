package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.UserDao;
import com.cursojava.curso.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "api/user/{id}")
    public User getUser(@PathVariable Long id){
        return null;
    }

    @RequestMapping(value = "api/users")
    public List<User> getUsers(){
        return userDao.getUsers();
    }

    @RequestMapping(value = "temp_237")
    public User editUser(){
        return null;
    }

    @RequestMapping(value = "temp_235")
    public User deleteUser(){
        return null;
    }

    @RequestMapping(value = "temp_233")
    public User findUser(){
        return null;
    }
}
