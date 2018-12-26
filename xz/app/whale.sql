SET NAMES UTF8;
DROP DATABASE IF EXISTS whale;
CREATE DATABASE whale CHARSET=UTF8;
-- 进入
USE whale;
-- 创建表(首页视频表)
CREATE TABLE w_video(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    img_url VARCHAR(255),
    upd SMALLINT,
    content VARCHAR(255) 
);
INSERT INTO w_video VALUES(null,"火王之千里同风","http://127.0.0.1:3000/img/61df786909d91b28fe355af50e6f14dd.jpg",15,"陈柏霖营救景甜落圈套");
INSERT INTO w_video VALUES(null,"花千骨","http://127.0.0.1:3000/img/074bcfab9425b70e9eac925f24191a7b.jpg",10,"陈柏霖营救景甜落圈套");
INSERT INTO w_video VALUES(null,"鬼吹灯之精绝古城","http://127.0.0.1:3000/img/976e87493a9a86b1965b82e5ed94f8a5.jpg",20,"陈柏霖营救景甜落圈套");
INSERT INTO w_video VALUES(null,"三生三世","http://127.0.0.1:3000/img/d31da47881a0083cff582dd4b9701dbd.jpg",34,"陈柏霖营救景甜落圈套");
INSERT INTO w_video VALUES(null,"老九门","http://127.0.0.1:3000/img/2c3949688d9c68c8623f71ffdb7fd13e.jpg",30,"陈柏霖营救景甜落圈套");
INSERT INTO w_video VALUES(null,"鬼吹灯","http://127.0.0.1:3000/img/074bcfab9425b70e9eac925f24191a7b.jpg",15,"陈柏霖营救景甜落圈套");
INSERT INTO w_video VALUES(null,"鬼吹灯","http://127.0.0.1:3000/img/074bcfab9425b70e9eac925f24191a7b.jpg",15,"陈柏霖营救景甜落圈套");
INSERT INTO w_video VALUES(null,"鬼吹灯","http://127.0.0.1:3000/img/074bcfab9425b70e9eac925f24191a7b.jpg",15,"陈柏霖营救景甜落圈套");


-- 消息表
CREATE TABLE w_message(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    ctime DATE,
    img_url VARCHAR(255),
    desc1 VARCHAR(255),
    content VARCHAR (255)
);
INSERT INTO w_message VALUES(null,"111","2018-12-12","http://127.0.0.1:3000/img/banner1.jpg","1","111");
INSERT INTO w_message VALUES(null,"222","2018-12-12","http://127.0.0.1:3000/img/banner2.png","2","222");
INSERT INTO w_message VALUES(null,"333","2018-12-12","http://127.0.0.1:3000/img/banner3.jpg","3","333");
INSERT INTO w_message VALUES(null,"444","2018-12-12","http://127.0.0.1:3000/img/banner1.jpg","4","444");
INSERT INTO w_message VALUES(null,"555","2018-12-12","http://127.0.0.1:3000/img/banner3.jpg","5","555");
INSERT INTO w_message VALUES(null,"666","2018-12-12","http://127.0.0.1:3000/img/banner1.png","6","666");


-- 短视频表
CREATE TABLE w_shotmovie(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    img_url VARCHAR(255),
    act VARCHAR(255)
);
INSERT INTO w_shotmovie VALUES(null,"打错电话?男孩用这样一个借口骗到了女神.....你经历过绝望吗","http://127.0.0.1:3000/img/movie01.jpg","1");
INSERT INTO w_shotmovie VALUES(null,"打错电话?男孩用这样一个借口骗到了女神.....你经历过绝望吗","http://127.0.0.1:3000/img/movie01.jpg","126");
INSERT INTO w_shotmovie VALUES(null,"打错电话?男孩用这样一个借口骗到了女神.....你经历过绝望吗","http://127.0.0.1:3000/img/movie01.jpg","213");
INSERT INTO w_shotmovie VALUES(null,"打错电话?男孩用这样一个借口骗到了女神.....你经历过绝望吗","http://127.0.0.1:3000/img/movie01.jpg","1");
INSERT INTO w_shotmovie VALUES(null,"打错电话?男孩用这样一个借口骗到了女神.....你经历过绝望吗","http://127.0.0.1:3000/img/movie01.jpg","23");
INSERT INTO w_shotmovie VALUES(null,"打错电话?男孩用这样一个借口骗到了女神.....你经历过绝望吗","http://127.0.0.1:3000/img/movie01.jpg","3");
INSERT INTO w_shotmovie VALUES(null,"打错电话?男孩用这样一个借口骗到了女神.....你经历过绝望吗","http://127.0.0.1:3000/img/movie01.jpg","123");
INSERT INTO w_shotmovie VALUES(null,"打错电话?男孩用这样一个借口骗到了女神.....你经历过绝望吗","http://127.0.0.1:3000/img/movie01.jpg","13");
INSERT INTO w_shotmovie VALUES(null,"打错电话?男孩用这样一个借口骗到了女神.....你经历过绝望吗","http://127.0.0.1:3000/img/movie01.jpg","12");

