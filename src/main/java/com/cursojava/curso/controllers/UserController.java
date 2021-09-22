package com.cursojava.curso.controllers;

import com.cursojava.curso.models.User;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @RequestMapping(value = "user/{id}")
    public User getUser(@PathVariable Long id){
        User user = new User();
        user.setId(id);
        user.setName("Miguel");
        user.setLastname("Canessa");
        user.setEmail("canessaalvamiguel@gmail.com");
        user.setTelephone("147987694654");
        return user;
    }

    @RequestMapping(value = "users")
    public List<User> getUsers(){

        User user1 = new User();
        user1.setId(1L);
        user1.setName("Miguel");
        user1.setLastname("Canessa");
        user1.setEmail("canessaalvamiguel@gmail.com");
        user1.setTelephone("147987694654");

        User user2 = new User();
        user2.setId(2L);
        user2.setName("Test2");
        user2.setLastname("TestLN2");
        user2.setEmail("test2@gmail.com");
        user2.setTelephone("8798456");

        User user3 = new User();
        user3.setId(3L);
        user3.setName("Test3");
        user3.setLastname("TestLN3");
        user3.setEmail("test3@gmail.com");
        user3.setTelephone("987987");

        List<User> users = new ArrayList<>();
        users.add(user1);
        users.add(user2);
        users.add(user3);

        return users;
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
