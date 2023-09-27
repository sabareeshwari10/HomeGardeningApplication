package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepo;

@Service
public class CustomerService {
	@Autowired
	CustomerRepo cr;
	
	public Customer saveinfo(Customer e) {
		return cr.save(e);
	}
	public List<Customer> showinfo(){
		return cr.findAll();
	}
	   public Customer updateCustomer(int id, Customer updatedCustomer) {
	    	
	        Optional<Customer> optionalCustomer = cr.findById(id);

	        if (optionalCustomer.isPresent()) {
	            
	            Customer existingCustomer = optionalCustomer.get();
	            existingCustomer.setName(updatedCustomer.getName());
	            existingCustomer.setMobile(updatedCustomer.getMobile());
	            existingCustomer.setAddress(updatedCustomer.getAddress());
	            existingCustomer.setService(updatedCustomer.getService());

	            
	            return cr.save(existingCustomer);
	        } else {
	            
	            return null; 
	        }
	}

	 public void deleteRecordById(int id) {
	        cr.deleteById(id);
	    }
}
