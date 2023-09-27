package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private long mobile;
	private String address;
	private String service;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(String name, long mobile, String address, String service) {
		super();
		
		this.name = name;
		this.mobile = mobile;
		this.address = address;
		this.service = service;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
}
