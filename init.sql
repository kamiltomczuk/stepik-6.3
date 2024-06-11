CREATE TABLE data (
    id SERIAL PRIMARY KEY,
    text_field TEXT,
    integer_field INTEGER
);

INSERT INTO data (text_field, integer_field) VALUES
('Sample Text 1', 10),
('Sample Text 2', 20),
('Sample Text 3', 30);
