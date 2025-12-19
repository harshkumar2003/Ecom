package com.harsh.ecom.controller;

import com.harsh.ecom.model.Product;
import com.harsh.ecom.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(
        origins = {
                "http://localhost:5173",
                "https://ecom-weld-one.vercel.app"
        }
)
@RequestMapping("/api")
public class ProductController
{
//    @Autowired
    private ProductService service;
    public ProductController(ProductService service)
    {
        this.service = service;
    }
    @GetMapping("/")
    public String greet()
    {
        return "hello ";
    }

    @GetMapping("/products")
    public List<Product> getAllProducts()
    {
        return service.getAllProducts();
    }

    @GetMapping("/products/{prodId}")
    public Product getProductById(@PathVariable int prodId)
    {
        return service.getProductById(prodId);

    }

    @GetMapping("/products/search")
    public List<Product> getProductBySearch(@RequestParam String q)
    {
        return service.getProductBySearch(q);
    }
    @PostMapping("/products")
    public void addProduct(@RequestBody Product prod)
    {
         service.addProduct(prod);
    }
}
