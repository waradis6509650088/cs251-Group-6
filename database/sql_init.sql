DROP TABLE IF EXISTS Manager;

CREATE TABLE Manager (
    ManagerID varchar(6),
    Firstname varchar(25),
    Lastname varchar(25),
    District varchar(25),
    SubDistrict varchar(25),
    Street varchar(25),
    Province varchar(25),
    Zipcode int,
    Shelf varchar(3)
);

-- DROP TABLE IF EXISTS Manager_Contact;

-- CREATE TABLE Manager_Contact (
--     ManagerID int,
--     Mcontact varchar(10)
-- );

-- DROP TABLE IF EXISTS Inventory;

-- CREATE TABLE Inventory (
--     Shelf varchar(5),
--     NumberOfProduct int(6),
--     Leftover int(5),
--     MaxTotalList int(5)
-- );

-- DROP TABLE IF EXISTS Supplier;

-- CREATE TABLE Supplier (
--     SupplierID varchar(6),
--     Sname varchar(25),
--     Contact int,
--     List int,
--     District varchar(25),
--     SubDistrict varchar(25),
--     Street varchar(25),
--     Province varchar(25),
--     Zipcode int,
--     Shelf varchar(5),
--     SendDate date,
--     SendCount int
-- );

-- DROP TABLE IF EXISTS Retailer;

-- CREATE TABLE Retailer (
--     Rid varchar(6),
--     Rname varchar(50),
--     District varchar(25),
--     SubDistrict varchar(25),
--     Province varchar(25),
--     Zipcode in,
-- );

-- DROP TABLE IF EXISTS Retailer_Contact;

-- CREATE TABLE Retailer_Contact (
--     Rid int,
--     ReContact varchar(10)
-- );

-- DROP TABLE IF EXISTS Order

-- CREATE TABLE Order (
--     OrderID varchar(6),
--     Count int,
--     ManagerID varchar(6),
--     Rid varchar(6)
-- );

-- DROP TABLE IF EXISTS OrderList;

-- CREATE TABLE OrderList (
--     OrderID varchar(10),
--     List varchar(5)
-- );

-- DROP TABLE IF EXISTS Product;

-- CREATE TABLE Product (
--     Shelf varchar(5),
--     PID int,
--     Pname varchar(50),
--     OrderID varchar(10),
-- );

-- DROP TABLE IF EXISTS Dryfood;

-- CREATE TABLE Dryfood (
--     Shelf varchar(5),
--     PID varchar(6),
--     Pname varchar(50),
--     DryfoodFlavor varchar(50)
-- );

-- DROP TABLE IF EXISTS WetFood;

-- CREATE TABLE WetFood (
--     Shelf varchar(5),
--     PID varchar(6),
--     Pname varchar(50),
--     WetFoodFlavor varchar(50)
-- );

-- DROP TABLE IF EXISTS Snacks;

-- CREATE TABLE Snacks (
--     Shelf varchar(5),
--     PID varchar(6),
--     Pname varchar(50),
--     SnacksFlavor varchar(50)
-- )

