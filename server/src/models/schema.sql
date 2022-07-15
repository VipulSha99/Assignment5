
CREATE TYPE roleType AS ENUM ('SuperAdmin', 'Admin', 'Subscriber') DEFAULT 'Subscriber';

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number INT NOT NULL,
    role roleType,
    address VARCHAR(255) NOT NULL,
    created_date VARCHAR(255)
);


