package com.finwise.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finwise.backend.dto.CreditScoreRequestDTO;

@RestController
@RequestMapping("/api/credit")
@CrossOrigin(originPatterns = "*", allowCredentials = "true")
public class CreditScoreController {
	 
	@PostMapping("/calculate")
	public ResponseEntity<Integer> calculateScore(@RequestBody CreditScoreRequestDTO request) {
		
		int score = 300;
		
		score += request.getPaymentHistory()*0.35;
		score += request.getCreditUtilization()*0.30;
		score += request.getCreditAge()*0.15;
		score += request.getCreditMix()*0.10;
		score += request.getHardInquiries()*0.10;
		
		score = Math.min(Math.max(score, 300), 850);
		
		return ResponseEntity.ok(score);
	}
}