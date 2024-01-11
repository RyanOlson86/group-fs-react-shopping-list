-- Create database "shopping_list" --

CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
	"item" VARCHAR(80) NOT NULL,
	"quantity" NUMERIC NOT NULL,
	"unit" VARCHAR(20),
	"bought" BOOLEAN DEFAULT FALSE
);

INSERT INTO list ("item", "quantity", "unit")
VALUES 
('Cupcake', '12', 'each'),
('hamburger', '3', 'lbs');

SELECT * FROM "list";

INSERT INTO list ("item", "quantity", "unit")
VALUES 
('steak', '12', 'oz');

-- DELETE by ID --
DELETE FROM list WHERE "id"=3;

-- UPDATE when bought --
UPDATE list SET "bought"=TRUE WHERE "id"=4;

-- DELETE all purchased items
DELETE FROM list WHERE "bought"=TRUE;

-- DELETE ALL --
DELETE FROM list;