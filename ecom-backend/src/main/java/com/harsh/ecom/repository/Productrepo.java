package com.harsh.ecom.repository;

import com.harsh.ecom.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Productrepo extends JpaRepository<Product , Integer> {

    List<Product>
    findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(
            String name,
            String brand,
            String category
    );
}
