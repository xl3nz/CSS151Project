CREATE DATABASE user_account;
USE user_account;

CREATE TABLE users (
    -- Core Identity
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    
    -- Role-Based Access (Handles Admin vs Regular User)
    role ENUM('user', 'admin') DEFAULT 'user',
    
    -- Authentication (Matches Login/Register UI)
    password_hash VARCHAR(255) NULL, 
    auth_provider ENUM('local', 'google', 'facebook', 'apple') DEFAULT 'local',
    remember_token VARCHAR(255) NULL, 
    
    -- System Status (Matches DFD Process Flow)
    is_verified BOOLEAN DEFAULT FALSE, 
    account_status ENUM('active', 'locked', 'suspended') DEFAULT 'active',
    last_login DATETIME NULL,
    
    -- Timestamps (Tracks when account is created or updated)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);
