package com.neo.security.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.neo.security.entity.User;
import com.neo.security.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	public boolean addUser(User user) {
		
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		
		User user1 = User.builder()
				.id(user.getId())
				.firstName(user.getFirstName())
				.lastName(user.getLastName())
				.username(user.getUsername())
				.email(user.getEmail())
				.dob(user.getDob())
				.qualification(user.getQualification())
				.password(encodedPassword)
				.phoneNumber(user.getPhoneNumber())
				.build();
		
		return repo.save(user1)!=null ? true:false;
	}

	@Override
	public List<User> getAllUsers() {
		return repo.findAll();
	}

	@Override
	public User getUserByEmail(String email) {
	
		return repo.findByEmail(email).get();
	}
}
