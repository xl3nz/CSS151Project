CREATE DATABASE IF NOT EXISTS user_account;
USE user_account;

CREATE TABLE IF NOT EXISTS users (
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

-- Insert an admin user
INSERT INTO users (
    first_name, last_name, email, role, password_hash, auth_provider, is_verified, account_status
) VALUES (
    'Lee', 'Ber', 'admin@example.com', 'admin', 
    '$2y$10$examplehashadmin', -- hashed password placeholder
    'local', TRUE, 'active'
);

-- Insert a regular user
INSERT INTO users (
    first_name, last_name, email, role, password_hash, auth_provider, is_verified, account_status
) VALUES (
    'Jane', 'Doe', 'user@example.com', 'user', 
    '$2y$10$examplehashuser', -- hashed password placeholder
    'local', FALSE, 'active'
);
