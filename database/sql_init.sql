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

DROP TABLE IF EXISTS Manager_Contact;

CREATE TABLE Manager_Contact (
    ManagerID varchar(6),
    Mcontact varchar(10)
);

DROP TABLE IF EXISTS Inventory;

CREATE TABLE Inventory (
    Shelf varchar(5),
    NumberOfProduct int(6),
    Leftover int(5),
    MaxTotalList int(5)
);

DROP TABLE IF EXISTS Supplier;

CREATE TABLE Supplier (
    SupplierID varchar(6),
    Sname varchar(25),
    Contact int,
    List int,
    District varchar(25),
    SubDistrict varchar(25),
    Street varchar(25),
    Province varchar(25),
    Zipcode int,
    Shelf varchar(5),
    SendDate date,
    SendCount int
);

DROP TABLE IF EXISTS Retailer;

CREATE TABLE Retailer (
    Rid varchar(6),
    Rname varchar(50),
    District varchar(25),
    SubDistrict varchar(25),
    Province varchar(25),
    Zipcode int
);

DROP TABLE IF EXISTS Retailer_Contact;

CREATE TABLE Retailer_Contact (
    Rid varchar(6),
    ReContact varchar(10)
);

DROP TABLE IF EXISTS Ordertable;

CREATE TABLE Ordertable (
    OrderID varchar(6),
    Count int,
    ManagerID varchar(6),
    Rid varchar(6),
    orderStatus varchar(10) default "WAITING"
);

DROP TABLE IF EXISTS OrderList;

CREATE TABLE OrderList (
    OrderID varchar(10),
    List varchar(50)
);

DROP TABLE IF EXISTS Product;

CREATE TABLE Product (
    Shelf varchar(5),
    PID int,
    Pname varchar(50),
    OrderID varchar(10)
);

DROP TABLE IF EXISTS Dryfood;

CREATE TABLE Dryfood (
    Shelf varchar(5),
    PID varchar(6),
    Pname varchar(50),
    DryfoodFlavor varchar(50)
);

DROP TABLE IF EXISTS WetFood;

CREATE TABLE WetFood (
    Shelf varchar(5),
    PID varchar(6),
    Pname varchar(50),
    WetFoodFlavor varchar(50)
);

DROP TABLE IF EXISTS Snacks;

CREATE TABLE Snacks (
    Shelf varchar(5),
    PID varchar(6),
    Pname varchar(50),
    SnacksFlavor varchar(50)
)

insert into Retailer values 
("R12241", "บริษัท เฉลิมชัย ยูเนี่ยน จำกัด", "แขวงมหานคร", "เขตป้อมปราบ", "กรุงเทพมหานคร", "10100"),
("R17355", "บริษัท บลูอาร์ไคฟ์ จำกัด", "ทะเลชุบศร", "เมือง", "ลพบุรี", "15120"),
("R17453", "บริษัท เดลีย์ แอนิมอล จำกัด", "ตาคลี", "ตาคลี", "นครสวรรค์", "60140"),
("R34777", "บริษัท ฟาร์มไชย เจริญการค้า จำกัด", "บาเจาะ", "บาเจาะ", "นราธิวาส", "96170"),
("R38872", "บริษัท ยิ่งยวร โลคัล จำกัด", "ทะเลทรัพย์", "ปะทิว", "ชุมพร", "86190"),
("R15590", "บริษัท หลีเตอหัว เอแอนด์ซี จำกัด", "ลานสัก", "ลานสัก", "อุทัยธานี", "61160"),
("R26922", "บริษัท ไชยเสน ดีไซน์ จำกัด", "จอมพระ", "จอมพระ", "สุรินทร์", "32180"),
("R14437", "บริษัท คอนทินิว หลัวชา จำกัด", "คลองกิ่ว", "บ้านบึง", "ชลบุรี", "20220"),
("R15598", "บริษัท มิยาโกะ เทรด จำกัด", "พยุหะ", "พยุหะคีรี", "นครสวรรค์", "60130"),
("R24457", "บริษัท คิโวทอช คอร์ปอเรชั่น จำกัด", "แหลมงอบ", "แหลมงอบ", "ตราด", "23120");

insert into Retailer_Contact values 
(“R12241”, 0814495532)
(“R17355”, 0849934522)
(“R17453”, 0647428962)
(“R34777”, 0628094417)
(“R38872”, 0921339986)
(“R15590”, 0812238852)
(“R26922”, 0817742135)
(“R14437”, 0631234567)
(“R15598”, 0633346987)
(“R24457”, 0629517531)

INSERT INTO Manager VALUES
('M21344', 'เจริญ', 'สูงพาณิชย์', 'เขาสมิง', 'เขาสมิง', 'ตราด-แหลมงอบ', 'ตราด', 23120, 'A10'),
('M21546', 'คมอน', 'ฟักมี', 'ราษีไศล', 'เมืองคง', 'รัฐประชา', 'ศรีสะเกษ', 33160, 'A20'),
('M41220', 'วิลเลี่ยม', 'อาฟตอน', 'บ่อเกลือ', 'บ่อเกลือใต้กิ่ง', 'น่าน-บ่อเกลือ', 'น่าน', 55220, 'A30'),
('M12987', 'สมชาย', 'คงโพธิ์ศรี', 'ชะอำ', 'ชะอำ', 'นราธิป', 'เพชรบุรี', 76120, 'A40'),
('M12445', 'สาคร', 'แย้มม้าย', 'คลองท่อม', 'คลองท่อมใต้', 'เก้า', 'กระบี่', 81120, 'A50'),
('M43122', 'ภูมิ', 'ยามากุจิ', 'บ้านหมอ', 'บ้านหมอ', 'เศรษฐ์สัมพันธ์', 'สระบุรี', 18130, 'B10'),
('M31550', 'อับดุล', 'เอาซายีป', 'เมือง', 'กะเฉด', 'สุขุมวิท', 'ระยอง', 12223, 'B20'), -- Missing postal code
('M52555', 'กันชัย', 'ตันติกุล', 'สระแก้ว', 'สระแก้ว', 'สุวรรณศร', 'สระแก้ว', 27000, 'B30'),
('M11258', 'บรรลือ', 'กระจ่างแก้ว', 'เขมราฐ', 'เขมราฐ', 'อรุณประเสริฐ', 'อุบลราชธานี', 34170, 'B40'),
('M93242', 'เพ็ญศรี', 'แสงนวล', 'เมือง', 'หนองบัว', 'วิไสนอุดรกิจ', 'หนองบัวลำภู', 39000, 'B50');

INSERT INTO Manager_Contact VALUES
('M21344', '0659987758'),
('M21546', '0659987792'),
('M41220', '0991010918'),
('M12987', '0626648907'),
('M12445', '0944381788'),
('M43122', '0659987407'),
('M31550', '0849956644'),
('M52555', '0954412277'),
('M11258', '0648529637'),
('M93242', '0845567531');

INSERT INTO Supplier VALUES
('S11111', 'เจริญศรี', '0813356694', 4, 'หนองเรือ', 'บ้านกง', 'มะลิวัลย์', 'ขอนแก่น', 40240, 'A10', '2022-12-24', 3000),
('S24551', 'ก้องพล', '0631144477', 5, 'วาริชภูมิ', 'วาริชภูมิ', 'ผดุงวารีย์', 'สกลนคร', 47150, 'A20', '2022-08-07', 400),
('S14785', 'ชุมพล', '0891018125', 10, 'เมือง', 'วัดเกตุ', 'เจริญเมือง', 'เชียงใหม่', 50000, 'A30', '2023-02-05', 20),
('S54896', 'บุญมี', '0648529996', 15, 'คลองหลวง', 'คลองหนึ่ง', 'เชียงราก', 'ปทุมธานี', 12120, 'A40', '2022-09-30', 5000),
('S44777', 'จรัญ', '0879568547', 50, 'กระบุรี', 'น้ำจืด', 'เพชรเกษม', 'ระนอง', 85110, 'A50', '2022-09-27', 10000),
('S96325', 'ซายะ', '0899941712', 25, 'โนนไทย', 'โนนไทย', 'สุรนารายณ์', 'นครราชสีมา', 30220, 'B10', '2023-02-28', 4500),
('S22422', 'พีรพัฒน์', '0631478529', 40, 'นางรอง', 'นางรอง', 'โชคชัย-เดชอุดม', 'บุรีรัมย์', 31110, 'B20', '2022-05-08', 750);