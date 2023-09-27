package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Customer;
import com.example.demo.service.CustomerService;

@RestController
@CrossOrigin
public class CustomerController {
	@Autowired
	CustomerService ser;
	
	@PostMapping("/post")
	public String add(@RequestBody Customer e)
	{
		 ser.saveinfo(e);
		 return "Data Saved";
	}
	@GetMapping("/get")
	public List<Customer>show(){
		return ser.showinfo();
	}
	
	//@RequestMapping("/api/customers")
	    @PutMapping("update/{id}")
	    public ResponseEntity<Customer> updateCustomer(
	            @PathVariable int id,
	            @RequestBody Customer updatedCustomer
	    ) {
	        Customer updated = ser.updateCustomer(id, updatedCustomer);
	        return ResponseEntity.ok(updated);
	    }
	

	@DeleteMapping("delete/{id}")
	 public ResponseEntity<String> deleteRecord(@PathVariable int id) {
	        try {
	            ser.deleteRecordById(id);
	            return new ResponseEntity<>("Record deleted successfully", HttpStatus.OK);
	        } catch (Exception e) {
	            // Handle exceptions (e.g., record not found)
	            return new ResponseEntity<>("Error deleting record: " + e.getMessage(), HttpStatus.NOT_FOUND);
	        }
	    }
}
