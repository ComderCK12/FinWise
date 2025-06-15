package com.finwise.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping("/api/news")
public class NewsController {
	
	@Value("${newsapi.key}")
	private String apiKey;
	
	@GetMapping
	public ResponseEntity<String> getFinanceNews() {
		String url = "https://newsapi.org/v2/everything?q=finance&language=en&pageSize=10&sortBy=publishedAt&apiKey=" + apiKey;
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(response);
	}
	
}