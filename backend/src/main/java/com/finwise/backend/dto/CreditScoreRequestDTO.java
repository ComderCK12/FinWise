package com.finwise.backend.dto;

public class CreditScoreRequestDTO {
	private int paymentHistory;
    private int creditUtilization;
    private int creditAge;
    private int creditMix;
    private int hardInquiries;
    
    
	public int getPaymentHistory() {
		return paymentHistory;
	}
	public void setPaymentHistory(int paymentHistory) {
		this.paymentHistory = paymentHistory;
	}
	public int getCreditUtilization() {
		return creditUtilization;
	}
	public void setCreditUtilization(int creditUtilization) {
		this.creditUtilization = creditUtilization;
	}
	public int getCreditAge() {
		return creditAge;
	}
	public void setCreditAge(int creditAge) {
		this.creditAge = creditAge;
	}
	public int getCreditMix() {
		return creditMix;
	}
	public void setCreditMix(int creditMix) {
		this.creditMix = creditMix;
	}
	public int getHardInquiries() {
		return hardInquiries;
	}
	public void setHardInquiries(int hardInquiries) {
		this.hardInquiries = hardInquiries;
	}
    
    
}