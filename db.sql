create database db_notification;
use db_notification;
-- Table for Programs
CREATE TABLE tbl_programs (
    prog_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
INSERT INTO tbl_programs (name) VALUES 
('BS'), 
('MS');

-- Table for Departments
CREATE TABLE tbl_dec (
    dec_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
INSERT INTO tbl_dec (name) VALUES 
('CS'), 
('SE'), 
('CE');

-- Table for Semesters
CREATE TABLE tbl_sem (
    sem_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
INSERT INTO tbl_sem (name) VALUES 
('1st Sem'), 
('2nd Sem'), 
('3rd Sem'), 
('4th Sem'), 
('5th Sem'), 
('6th Sem'), 
('7th Sem'), 
('8th Sem');


-- Table for Sections
CREATE TABLE tbl_sections (
    sec_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL
);
INSERT INTO tbl_sections (name) VALUES 
('A'), 
('B'), 
('C'), 
('D'), 
('E'), 
('F');

-- Table for Students
CREATE TABLE tbl_student (
    student_id VARCHAR(20) PRIMARY KEY,
    student_email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    prog_id INT,
    dec_id INT,
    sem_id INT,
    sec_id INT,
    FOREIGN KEY (prog_id) REFERENCES tbl_programs(prog_id),
    FOREIGN KEY (dec_id) REFERENCES tbl_dec(dec_id),
    FOREIGN KEY (sem_id) REFERENCES tbl_sem(sem_id),
    FOREIGN KEY (sec_id) REFERENCES tbl_sections(sec_id)
);
INSERT INTO tbl_student (student_id, student_email, password, prog_id, dec_id, sem_id, sec_id) VALUES 
('22k-4647', 'hamza@example.com', 'hashed_password_1', 1, 1, 4, 1),  -- BSCS 4th Sem Section A
('22k-4648', 'ali@example.com', 'hashed_password_2', 2, 2, 4, 2);  -- MSCS 4th Sem Section B

CREATE TABLE tbl_teacher (
    teacher_id INT auto_increment PRIMARY KEY ,
    teacher_name varchar(225) NOT NULL,
    teacher_email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);
-- Insert data into updated tbl_teacher
INSERT INTO tbl_teacher (teacher_name, teacher_email, password) VALUES 
('Dr. Smith', 'smith@example.com', 'hashed_password_3'),
('Prof. Johnson', 'johnson@example.com', 'hashed_password_4');



CREATE TABLE tbl_sec_for_teacher(
	section_id INT auto_increment primary key,
    teacher_id_from_tbl_teacher INT,
    prog_id INT,
    dec_id INT,
    sem_id INT,
    sec_id INT,
     FOREIGN KEY (teacher_id_from_tbl_teacher) REFERENCES tbl_teacher(teacher_id),
    FOREIGN KEY (prog_id) REFERENCES tbl_programs(prog_id),
    FOREIGN KEY (dec_id) REFERENCES tbl_dec(dec_id),
    FOREIGN KEY (sem_id) REFERENCES tbl_sem(sem_id),
    FOREIGN KEY (sec_id) REFERENCES tbl_sections(sec_id)
);

INSERT INTO tbl_sec_for_teacher (teacher_id_from_tbl_teacher, prog_id, dec_id, sem_id, sec_id) VALUES 
(1, 1, 1, 4, 1),  -- Dr. Smith teaches BSCS Section A in 4th Sem
(1, 2, 2, 4, 2),  -- Dr. Smith teaches MSCS Section B in 4th Sem
(2, 1, 1, 4, 3);  -- Prof. Johnson teaches BSCS Section C in 4th Sem
-- for notifications: 
CREATE TABLE tbl_notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_id INT, -- who sent 
    message TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- for which student group 
    prog_id INT,
    dec_id INT,
    sem_id INT,
    sec_id INT,
    FOREIGN KEY (teacher_id) REFERENCES tbl_teacher(teacher_id),
    FOREIGN KEY (prog_id) REFERENCES tbl_programs(prog_id),
    FOREIGN KEY (dec_id) REFERENCES tbl_dec(dec_id),
    FOREIGN KEY (sem_id) REFERENCES tbl_sem(sem_id),
    FOREIGN KEY (sec_id) REFERENCES tbl_sections(sec_id)
);

