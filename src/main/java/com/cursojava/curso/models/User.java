package com.cursojava.curso.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Getter @Setter @Column(name="id")
    @Id
    private Long id;

    @Getter @Setter @Column(name="name")
    private String name;

    @Getter @Setter @Column(name="lastname")
    private String lastname;

    @Getter @Setter @Column(name="email")
    private String email;

    @Getter @Setter @Column(name="telephone")
    private String telephone;

    @Getter @Setter @Column(name="password")
    private String password;
}
