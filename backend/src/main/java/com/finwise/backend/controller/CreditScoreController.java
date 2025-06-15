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

        // Inverting bad metrics (assumed 0–100 scale)
        double adjustedUtilization = 100 - request.getCreditUtilization();  // lower is better
        double adjustedInquiries = 100 - request.getHardInquiries();       // lower is better

        // Weighted score out of 100
        double weightedScore =
                request.getPaymentHistory() * 0.35 +
                adjustedUtilization * 0.30 +
                request.getCreditAge() * 0.15 +
                request.getCreditMix() * 0.10 +
                adjustedInquiries * 0.10;

        int score = (int) (300 + (weightedScore / 100) * (850 - 300));

        int creditScore = Math.min(Math.max(score, 300), 850);

        return ResponseEntity.ok(creditScore);
    }
}
