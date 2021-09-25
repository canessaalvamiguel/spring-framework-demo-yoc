package com.cursojava.curso.dao;

import com.cursojava.curso.models.User;

import java.util.List;

public interface UserDao {

    List<User> getUsers();

    void delete(Long id);

    void create(User user);

    User findUserByLoginCredentials(User user);
}
