CREATE TABLE IF NOT EXISTS classes (
  id SERIAL PRIMARY KEY,
  class_name VARCHAR(255) NOT NULL,
  class_description TEXT
);