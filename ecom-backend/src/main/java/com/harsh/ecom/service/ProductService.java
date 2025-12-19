package com.harsh.ecom.service;

import com.harsh.ecom.model.Product;
import com.harsh.ecom.repository.Productrepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
@Service
@Transactional

public class ProductService
{
    @Autowired
    private Productrepo repo;

    public List<Product> getAllProducts()
    {
        return repo.findAll();
    }

    public void addProduct(Product prod)
    {
        if (prod.getName() == null || prod.getName().isBlank()) {
            throw new RuntimeException("Invalid product data");
        }
        repo.save(prod);
    }

    public Product getProductById(int prodId)
    {
        return repo.findById(prodId).orElse(new Product());
    }



    public List<Product> getProductBySearch(String q)
    {
        return repo.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(q,q,q);
    }
}
