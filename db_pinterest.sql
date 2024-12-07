CREATE DATABASE IF NOT EXISTS db_pinterest

USE db_pinterest

CREATE TABLE binh_luan(
	binh_luan_id INT PRIMARY KEY AUTO_INCREMENT,
	nguoi_dung_id INT,
	hinh_id INT,
	ngay_binh_luan DATETIME,
	noi_dung VARCHAR(255)
)

ALTER TABLE binh_luan
ADD CONSTRAINT FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id)


CREATE TABLE nguoi_dung(
	nguoi_dung_id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(255),
	mat_khau VARCHAR(255),
	ho_ten VARCHAR(255),
	tuoi INT,
	anh_dai_dien VARCHAR(255)
)

CREATE TABLE hinh_anh(
	hinh_id INT PRIMARY KEY AUTO_INCREMENT,
	ten_hinh VARCHAR(255),
	duong_dan VARCHAR(255),
	mo_ta VARCHAR(255),
	nguoi_dung_id INT
)

ALTER TABLE hinh_anh
ADD CONSTRAINT FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id)

CREATE TABLE luu_anh(
	nguoi_dung_id INT,
	hinh_id INT,
	PRIMARY KEY (nguoi_dung_id, hinh_id),
	ngay_luu DATETIME
)

ALTER TABLE luu_anh
ADD CONSTRAINT FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id)

ALTER TABLE luu_anh
ADD CONSTRAINT FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id)

INSERT INTO nguoi_dung (nguoi_dung_id, email, mat_khau, ho_ten, tuoi, anh_dai_dien) VALUES
(1, 'user1@example.com', 'password1', 'Nguyen Van A', 25, 'https://example.com/avatar1.png'),
(2, 'user2@example.com', 'password2', 'Tran Thi B', 30, 'https://example.com/avatar2.png'),
(3, 'user3@example.com', 'password3', 'Le Van C', 22, 'https://example.com/avatar3.png'),
(4, 'user4@example.com', 'password4', 'Pham Minh D', 28, 'https://example.com/avatar4.png'),
(5, 'user5@example.com', 'password5', 'Hoang Anh E', 35, 'https://example.com/avatar5.png'),
(6, 'user6@example.com', 'password6', 'Nguyen Thu F', 20, 'https://example.com/avatar6.png'),
(7, 'user7@example.com', 'password7', 'Tran Quoc G', 40, 'https://example.com/avatar7.png'),
(8, 'user8@example.com', 'password8', 'Le Thi H', 29, 'https://example.com/avatar8.png'),
(9, 'user9@example.com', 'password9', 'Nguyen Thanh I', 26, 'https://example.com/avatar9.png'),
(10, 'user10@example.com', 'password10', 'Pham Anh K', 32, 'https://example.com/avatar10.png');

INSERT INTO hinh_anh (hinh_id, ten_hinh, duong_dan, mo_ta, nguoi_dung_id) VALUES
(1, 'Hình ảnh 1', 'https://example.com/image1.png', 'Mô tả hình ảnh 1', 1),
(2, 'Hình ảnh 2', 'https://example.com/image2.png', 'Mô tả hình ảnh 2', 2),
(3, 'Hình ảnh 3', 'https://example.com/image3.png', 'Mô tả hình ảnh 3', 3),
(4, 'Hình ảnh 4', 'https://example.com/image4.png', 'Mô tả hình ảnh 4', 4),
(5, 'Hình ảnh 5', 'https://example.com/image5.png', 'Mô tả hình ảnh 5', 5),
(6, 'Hình ảnh 6', 'https://example.com/image6.png', 'Mô tả hình ảnh 6', 6),
(7, 'Hình ảnh 7', 'https://example.com/image7.png', 'Mô tả hình ảnh 7', 7),
(8, 'Hình ảnh 8', 'https://example.com/image8.png', 'Mô tả hình ảnh 8', 8),
(9, 'Hình ảnh 9', 'https://example.com/image9.png', 'Mô tả hình ảnh 9', 9),
(10, 'Hình ảnh 10', 'https://example.com/image10.png', 'Mô tả hình ảnh 10', 10);

INSERT INTO binh_luan (binh_luan_id, nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung) VALUES
(1, 1, 1, '2024-12-01', 'Bình luận 1 cho Hình 1'),
(2, 2, 2, '2024-12-02', 'Bình luận 2 cho Hình 2'),
(3, 3, 3, '2024-12-03', 'Bình luận 3 cho Hình 3'),
(4, 4, 4, '2024-12-04', 'Bình luận 4 cho Hình 4'),
(5, 5, 5, '2024-12-05', 'Bình luận 5 cho Hình 5'),
(6, 6, 6, '2024-12-06', 'Bình luận 6 cho Hình 6'),
(7, 7, 7, '2024-12-07', 'Bình luận 7 cho Hình 7'),
(8, 8, 8, '2024-12-07', 'Bình luận 8 cho Hình 8'),
(9, 9, 9, '2024-12-07', 'Bình luận 9 cho Hình 9'),
(10, 10, 10, '2024-12-07', 'Bình luận 10 cho Hình 10');

INSERT INTO luu_anh (nguoi_dung_id, hinh_id, ngay_luu) VALUES
(1, 1, '2024-12-01'),
(2, 2, '2024-12-02'),
(3, 3, '2024-12-03'),
(4, 4, '2024-12-04'),
(5, 5, '2024-12-05'),
(6, 6, '2024-12-06'),
(7, 7, '2024-12-07'),
(8, 8, '2024-12-07'),
(9, 9, '2024-12-07'),
(10, 10, '2024-12-07');

