package com.unicam.bandb.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1//user")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

     @Autowired
    private UserRepository repo;

     @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User userData){
         System.out.println(userData);
        User user= repo.findByEmail(userData.getEmail());
        if(user.getPassword().equals(userData.getPassword()))
            return ResponseEntity.ok(user);

         return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }
}
