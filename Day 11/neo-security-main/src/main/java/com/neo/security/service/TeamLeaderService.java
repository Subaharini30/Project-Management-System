package com.neo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.repository.TeamLeaderRepo;

@Service
public class TeamLeaderService 
{
	@Autowired
	private TeamLeaderRepo tlr;

}
