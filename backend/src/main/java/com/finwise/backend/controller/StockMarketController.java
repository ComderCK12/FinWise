package com.finwise.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/market")
public class StockMarketController {

    @Value("${rapidapi.key}")
    private String rapidApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/stocks/gainers")
    public ResponseEntity<String> getTopGainers() {
        String url = "https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/day_gainers";
        return fetchRapidApiData(url);
    }

    @GetMapping("/stocks/losers")
    public ResponseEntity<String> getTopLosers() {
        String url = "https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/day_losers";
        return fetchRapidApiData(url);
    }

    @GetMapping("/indexes")
    public ResponseEntity<String> getMarketIndexes() {
        String url = "https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quotes/major_indexes";
        return fetchRapidApiData(url);
    }
    
    @GetMapping("/crypto")
    public ResponseEntity<String> getTrendingCrypto() {
        String url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=percent_change_24h_desc&per_page=6&page=1&sparkline=false";
        String response = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(response);
    }
    
    private ResponseEntity<String> fetchRapidApiData(String url) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", rapidApiKey);
        headers.set("X-RapidAPI-Host", "yahoo-finance15.p.rapidapi.com");
        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        return ResponseEntity.ok(response.getBody());
    }
}
