# Host: localhost  (Version: 5.5.40)
# Date: 2018-10-29 14:54:50
# Generator: MySQL-Front 5.3  (Build 4.120)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "cz_kh"
#

DROP TABLE IF EXISTS `cz_kh`;
CREATE TABLE `cz_kh` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "cz_kh"
#

/*!40000 ALTER TABLE `cz_kh` DISABLE KEYS */;
INSERT INTO `cz_kh` VALUES (1,'1_n_06586_180x180.jpg','M.A.C','魅可子弹头口红唇膏','￥170.00','新品',NULL),(2,'1_n_06628_180x180.jpg','LANCOME','兰蔻菁纯丝绒雾面唇膏','￥270.00','新品',NULL),(3,'1_n_05794_180x180.jpg','SEPHORACOLLECTION','丝芙兰染唇膏','￥95.00',NULL,'独家'),(4,'1_n_06264_180x180.jpg','ESTEELAUDER','雅诗兰黛倾慕唇膏-丝绒系列','￥270.00',NULL,NULL),(5,'1_n_06270_180x180.jpg','CLINIQUE','倩碧花漾胭脂(小雏菊腮红)','￥130.00',NULL,NULL),(6,'1_n_06312_180x180.jpg','GIORGIOARMANI','阿玛尼臻致丝绒哑光唇釉','￥310.00','新品',NULL),(7,'1_n_06513_180x180.jpg','YSL','圣罗兰黑管唇釉','￥320.00','新品',NULL),(8,'1_n_05502_180x180.jpg','DIOR','迪奥烈艳蓝金唇膏-哑光系列','￥300.00',NULL,NULL),(9,'1_n_05502_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰蜜吻润唇球','￥29.50~￥59.00',NULL,'独家'),(10,'1_n_06475_180x180.jpg','SEPHORACOLLECTION','丝芙兰唇情物语系列唇膏','￥79.00','新品','独家');
/*!40000 ALTER TABLE `cz_kh` ENABLE KEYS */;

#
# Structure for table "cz_sh"
#

DROP TABLE IF EXISTS `cz_sh`;
CREATE TABLE `cz_sh` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "cz_sh"
#

/*!40000 ALTER TABLE `cz_sh` DISABLE KEYS */;
INSERT INTO `cz_sh` VALUES (1,'1_n_06254_180x180.jpg','STAGEQ','施婷姬蔻 亮颜妆前乳珠光白','￥210.00',NULL,'独家'),(2,'1_n_06569_180x180.jpg','STAGEQ','施婷姬蔻 轻感遮瑕粉底液','￥360.00','新品','独家'),(3,'1_n_06565_180x180.jpg','STAGEQ','施婷姬蔻 BB气垫粉膏','￥360.00','新品','独家'),(4,'1_n_06524_180x180.jpg','STAGEQ','施婷姬蔻馥郁漆光唇釉','￥190.00','新品','独家'),(5,'1_n_06494_180x180.jpg','STAGEQ','施婷姬蔻柔雾眼线液笔 #1 雾面黑色','￥220.00','新品','独家'),(6,'1_n_06580_180x180.jpg','GIVENCHY','纪梵希高定香榭丰唇膏套装','￥320.00','新品','独家'),(7,'1_n_06475_180x180.jpg','SEPHORACOLLECTION','丝芙兰唇情物语系列唇膏','￥79.00','新品','独家'),(8,'1_n_06481_180x180.jpg','GIVENCHY','纪梵希星纪美人高光粉饼N1','￥380.00',NULL,'独家'),(9,'1_n_06481_180x180(1).jpg','GIVENCHY','纪梵希禁忌之吻漆光唇膏限量 18','￥320.00',NULL,'独家'),(10,'1_n_06524_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰漫威英雄蜜吻润唇球迷你套装','￥99.00','新品','独家');
/*!40000 ALTER TABLE `cz_sh` ENABLE KEYS */;

#
# Structure for table "cz_xm"
#

DROP TABLE IF EXISTS `cz_xm`;
CREATE TABLE `cz_xm` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "cz_xm"
#

/*!40000 ALTER TABLE `cz_xm` DISABLE KEYS */;
INSERT INTO `cz_xm` VALUES (1,'1_n_06664_180x180.jpg','ALGENIST','奥杰尼睿雅靓颜修容液','￥325.00','新品'),(2,'1_n_06660_180x180.jpg','ALGENIST','奥杰尼睿雅靓颜定妆粉','￥350.00','新品'),(3,'1_n_06660_180x180(1).jpg','OPI','OPI可可白茶滋润护手乳50ML惠选套','￥118.00','新品'),(4,'1_n_06660_180x180(2).jpg','OPI','OPI可可白茶温润护手精华乳60ml惠选','￥218.00','新品'),(5,'1_n_06660_180x180(3).jpg','OPI','OPI可可白茶滋润保湿喷雾112ml惠选套','￥138.00','新品'),(6,'1_n_06660_180x180(4).jpg','OPI','OPI可可白茶角质软化嫩滑膏（足部）','￥178.00','新品'),(7,'1_n_06660_180x180(5).jpg','OPI','OPI可可白茶滋养护理膜118ml惠选套','￥138.00','新品'),(8,'1_n_06660_180x180(6).jpg','ALGENIST','贝玲妃甜心翘佳人诞糕礼盒','￥170.00','新品'),(9,'1_n_06270_180x180.jpg','BENEFIT','贝玲妃睫出精英诞糕礼盒','￥348.00','新品'),(10,'1_n_06652_180x180.jpg','BENEFIT','贝玲妃反孔精英超值套装','￥285.00','新品');
/*!40000 ALTER TABLE `cz_xm` ENABLE KEYS */;

#
# Structure for table "dujia"
#

DROP TABLE IF EXISTS `dujia`;
CREATE TABLE `dujia` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "dujia"
#

/*!40000 ALTER TABLE `dujia` DISABLE KEYS */;
INSERT INTO `dujia` VALUES (1,'1_n_06660_180x180.jpg','ReFa','黎珐 多功能波光美容仪套装','￥1790.00','新品',''),(2,'1_n_06660_180x180(1).jpg','YAMAN','雅萌RF射频再生美颜仪（沙龙版）...','￥3999.00','新品',''),(3,'1_n_06652_180x180.jpg','MENARDSP','SARANARI眼霜BC套装','￥1200.00','新品','独家'),(4,'1_n_06649_180x180.jpg','LANCASTER','蓝嘉斯汀美肌“定格”套装','￥1078.00','新品','独家'),(5,'1_n_06649_180x180(1).jpg','LANCASTER','蓝嘉斯汀水粉限量套装','￥380.00','新品','独家'),(6,'1_n_06643_180x180.jpg','MENARDSP','倩雅晶润精华霜套装','￥580.00','新品','独家'),(7,'1_n_06627_180x180.jpg','WEI','蔚蓝之美膜法肌秘甄选面膜套装','￥670.00','新品','独家'),(8,'1_n_06628_180x180.jpg','PETERTHOMASTOTH','彼得罗夫膜法狂欢超值套装','￥1068.00','新品','独家'),(9,'1_n_06620_180x180.jpg','NUXE','欧树保湿防护套装','￥410.00','新品','独家'),(10,'1_n_06620_180x180(1).jpg','NUXE','欧树金油滋养套装','￥290.00','新品','独家');
/*!40000 ALTER TABLE `dujia` ENABLE KEYS */;

#
# Structure for table "gj_exclu"
#

DROP TABLE IF EXISTS `gj_exclu`;
CREATE TABLE `gj_exclu` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "gj_exclu"
#

/*!40000 ALTER TABLE `gj_exclu` DISABLE KEYS */;
INSERT INTO `gj_exclu` VALUES (1,'11_n_06477_180x180.jpg','SEPHORACOLLECTION','丝芙兰便携空瓶套装','￥109.00','独家','新品'),(2,'11_n_06606_180x180.jpg','SEPHORACOLLECTION','丝芙兰美国队长随身香水喷雾器','￥129.00','独家','新品'),(3,'11_n_06584_180x180.jpg','SEPHORACOLLECTION','丝芙兰漫威英雄彩妆刷套装','￥399.00','独家','新品'),(4,'11_n_06264_180x180.jpg','beautyblender','美妆蛋便携硅胶保护胶囊','￥100.00','独家','新品'),(5,'11_n_06307_180x180.jpg','beautyblender','美妆蛋璀璨蓝宝石化妆海绵','￥168.00','独家','新品'),(6,'11_n_06228_180x180.jpg','SEPHORACOLLECTION','丝芙兰省水化妆棉','￥39.00','独家','新品'),(7,'11_n_06660_180x180.jpg','SEPHORACOLLECTION','丝芙兰原色亲肌化妆棉','￥39.00','独家','新品'),(8,'11_n_06228_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰双头棉棒','￥29.00','独家','新品'),(9,'11_n_06273_180x180.jpg','beautyblender','美妆蛋双倍宠爱限量套组','￥250.00','独家',NULL),(10,'11_n_05980_180x180.jpg','SEPHORACOLLECTION','丝芙兰免洗化妆刷清洁海绵','￥39.00','独家',NULL);
/*!40000 ALTER TABLE `gj_exclu` ENABLE KEYS */;

#
# Structure for table "gj_hot"
#

DROP TABLE IF EXISTS `gj_hot`;
CREATE TABLE `gj_hot` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "gj_hot"
#

/*!40000 ALTER TABLE `gj_hot` DISABLE KEYS */;
INSERT INTO `gj_hot` VALUES (1,'11_n_05878_180x180.jpg','SEPHORACOLLECTION','丝芙兰化妆棉','￥19.00',NULL,'独家'),(2,'11_n_05859_180x180.jpg','SEPHORACOLLECTION','丝芙兰柔肤化妆棉','￥39.00',NULL,'独家'),(3,'11_n_06178_180x180.jpg','SEPHORACOLLECTION','丝芙兰超薄化妆棉','￥29.00',NULL,'独家'),(4,'11_n_05492_180x180.jpg','SEPHORACOLLECTION','丝芙兰口袋式多效化妆棉','￥17.50',NULL,'独家'),(5,'11_n_06193_180x180.jpg','SEPHORACOLLECTION','丝芙兰玩趣甜粉美妆套刷','￥199.00',NULL,'独家'),(6,'11_n_05486_180x180.jpg','SEPHORACOLLECTION','丝芙兰压缩面膜纸','￥29.00',NULL,'独家'),(7,'11_n_06228_180x180.jpg','SEPHORACOLLECTION','丝芙兰省水化妆棉','￥39.00','新品','独家'),(8,'11_n_05506_180x180.jpg','SEPHORACOLLECTION','丝芙兰多用化妆棉巾','￥39.00',NULL,'独家'),(9,'11_n_05902_180x180.jpg','beautyblender','美妆蛋香槟泡泡化妆海绵','￥168.00',NULL,'独家'),(10,'11_n_05884_180x180.jpg','MAKEUPFOREVER','玫珂菲明星挚爱彩妆盘','￥20.00',NULL,'');
/*!40000 ALTER TABLE `gj_hot` ENABLE KEYS */;

#
# Structure for table "gj_what"
#

DROP TABLE IF EXISTS `gj_what`;
CREATE TABLE `gj_what` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "gj_what"
#

/*!40000 ALTER TABLE `gj_what` DISABLE KEYS */;
INSERT INTO `gj_what` VALUES (1,'11_n_06664_180x180.jpg','TWEEZERMAN','薇之魅微迷你眉镊套装','￥178.00','新品'),(2,'11_n_06663_180x180.jpg','SEPHORACOLLECTION','丝芙兰原色亲肌化妆棉10件惠选套装','￥195.00','新品'),(3,'11_n_06663_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰柔肤化妆棉10件惠选套装','￥195.00','新品'),(4,'11_n_06663_180x180(2).jpg','SEPHORACOLLECTION','丝芙兰多用化妆棉巾10件惠选套装','￥195.00','新品'),(5,'11_n_06628_180x180.jpg','SEPHORACOLLECTION','丝芙兰化妆刷清洗喷雾','￥109.00','新品'),(6,'11_n_06655_180x180.jpg','SEPHORACOLLECTION','丝芙兰钻石形粉底刷','￥379.00','新品'),(7,'11_n_06628_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰可伸缩便携唇刷','￥109.00','新品'),(8,'11_n_06617_180x180.jpg','beautyblender','美妆蛋彩虹糖果套装','￥540.00','新品'),(9,'11_n_06617_180x180(1).jpg','beautyblender','美妆蛋甜蜜宠爱套装','￥335.00','新品'),(10,'11_n_06617_180x180(2).jpg','beautyblender','美妆蛋甜蜜惊喜套盒','￥168.00','新品');
/*!40000 ALTER TABLE `gj_what` ENABLE KEYS */;

#
# Structure for table "mf_exclu"
#

DROP TABLE IF EXISTS `mf_exclu`;
CREATE TABLE `mf_exclu` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "mf_exclu"
#

/*!40000 ALTER TABLE `mf_exclu` DISABLE KEYS */;
INSERT INTO `mf_exclu` VALUES (1,'31_n_06337_180x180.jpg','SEPHORACOLLECTION','丝芙兰椰子免洗护发素','￥79.00','新品','独家'),(2,'31_n_06337_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰椰汁头发干洗喷雾','￥59.00','新品','独家'),(3,'31_n_06337_180x180(2).jpg','SEPHORACOLLECTION','丝芙兰绿茶头发干洗喷雾','￥59.00','新品','独家'),(4,'31_n_06262_180x180(1).jpg','PERCYANDREED','佩妍丽奇迹夜间焕活修复乳 150 ML','￥188.00','新品','独家'),(5,'31_n_06460_180x180.jpg','PERCYANDREED','佩妍丽滋润保湿套装','￥148.00','新品','独家'),(6,'31_n_06249_180x180.jpg','PERCYANDREED','佩妍丽滋润保湿护发素','￥50.00~￥138.00','新品','独家'),(7,'131_n_06262_180x180.jpg','PERCYANDREED','佩妍丽定型喷雾','￥50.00~￥118.00','新品','独家'),(8,'131_n_06254_180x180.jpg','PERCYANDREED','佩妍丽滋润保湿洗发露','￥50.00~￥138.00','新品','独家'),(9,'131_n_06328_180x180.jpg','PERCYANDREED','佩妍丽亮泽护发素','￥50.00~￥138.00','新品','独家'),(10,'31_n_06285_180x180.jpg','PERCYANDREED','佩妍丽亮泽洗发露','￥50.00~￥138.00','新品','独家');
/*!40000 ALTER TABLE `mf_exclu` ENABLE KEYS */;

#
# Structure for table "mf_hot"
#

DROP TABLE IF EXISTS `mf_hot`;
CREATE TABLE `mf_hot` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  `zx` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "mf_hot"
#

/*!40000 ALTER TABLE `mf_hot` DISABLE KEYS */;
INSERT INTO `mf_hot` VALUES (1,'31_n_06193_180x180.jpg','PERCYANDREED','佩妍丽丰盈洗发露','￥50.00~￥138.00',NULL,'独家',NULL),(2,'31_n_05820_180x180.jpg','PERCYANDREED','佩妍丽丰盈蓬松喷雾','￥50.00~￥128.00',NULL,'独家',NULL),(3,'131_n_06254_180x180.jpg','PERCYANDREED','佩妍丽滋润保湿洗发露','￥50.00~￥138.00',NULL,'独家',NULL),(4,'31_n_06550_180x180.jpg','PERCYANDREED','佩妍丽丰盈套装','￥148.00',NULL,'独家',NULL),(5,'131_n_05878_180x180.jpg','PERCYANDREED','佩妍丽免洗发喷雾','￥50.00~￥118.00',NULL,'独家',NULL),(6,'131_n_06262_180x180.jpg','PERCYANDREED','佩妍丽定型喷雾','￥50.00~￥118.00',NULL,'独家',NULL),(7,'31_n_06285_180x180.jpg','PERCYANDREED','佩妍丽亮泽洗发露','￥50.00~￥138.00',NULL,'独家',NULL),(8,'31_n_06567_180x180.jpg','SEBASTIAN','塞巴斯汀刚劲啫喱惠选套装','￥278.00','新品',NULL,'尊享'),(9,'131_n_06328_180x180.jpg','PERCYANDREED','佩妍丽亮泽护发素','￥50.00~￥138.00',NULL,'独家',NULL),(10,'31_n_06045_180x180.jpg','PERCYANDREED','佩妍丽丰盈精华露（细软发质）','￥58.00~￥128.00',NULL,'独家',NULL);
/*!40000 ALTER TABLE `mf_hot` ENABLE KEYS */;

#
# Structure for table "mf_what"
#

DROP TABLE IF EXISTS `mf_what`;
CREATE TABLE `mf_what` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "mf_what"
#

/*!40000 ALTER TABLE `mf_what` DISABLE KEYS */;
INSERT INTO `mf_what` VALUES (1,'31_n_06663_180x180.jpg','SP','德研丝女王节限量礼盒套装','￥696.00','新品'),(2,'31_n_06663_180x180(1).jpg','SP','德研丝秀发焕能角蛋白养护洁发乳&护发','￥696.00','新品'),(3,'31_n_06602_180x180.jpg','SEBASTIAN','塞巴斯汀酷型啫喱','￥278.00','新品'),(4,'31_n_06602_180x180(1).jpg','SEBASTIAN','塞巴斯汀柔护造型凝胶','￥139.00~￥298.00','新品'),(5,'31_n_06602_180x180(2).jpg','SEBASTIAN','Sebastian塞巴斯汀量感造型喷雾','￥298.00','新品'),(6,'31_n_06602_180x180(3).jpg','WELLA','德研丝晒后修护洁发乳','￥98.00~￥298.00','新品'),(7,'31_n_06602_180x180(4).jpg','WELLA','德研丝晒后修护护发乳','￥98.00~￥398.00','新品'),(8,'31_n_06602_180x180(5).jpg','WELLA','德研丝晒后修护霜','￥338.00','新品'),(9,'31_n_06602_180x180(6).jpg','WELLA','德研丝顺柔防毛躁护发乳','￥398.00','新品'),(10,'31_n_06602_180x180(7).jpg','WELLA','德研丝顺柔防毛躁发膜','￥698.00','新品');
/*!40000 ALTER TABLE `mf_what` ENABLE KEYS */;

#
# Structure for table "ns_exclu"
#

DROP TABLE IF EXISTS `ns_exclu`;
CREATE TABLE `ns_exclu` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  `zx` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "ns_exclu"
#

/*!40000 ALTER TABLE `ns_exclu` DISABLE KEYS */;
INSERT INTO `ns_exclu` VALUES (1,'11_n_06231_180x180.jpg','DTRT','杜比丽夫男士晶睿补水乳液惠选套装','￥255.00','新品','独家','尊享'),(2,'211_n_06307_180x180.jpg','DTRT','杜比丽夫男士温和洁面乳惠选套装','￥179.00','新品','独家','尊享'),(3,'11_n_06233_180x180.jpg','DTRT','杜比丽夫男士多效合一精华素惠选套装','￥360.00','新品','独家','尊享'),(4,'11_n_06221_180x180.jpg','DTRT','杜比丽夫多效合一游戏版限量套装','￥568.00','新品','独家','尊享'),(5,'211_n_06307_180x180.jpg','DTRT','DTRT面部清洁惠选套装','￥200.00','新品','独家','尊享'),(6,'11_n_06033_180x180(1).jpg','DTRT','DTRT面部护理经典套装','￥324.00','新品','独家','尊享'),(7,'11_n_05862_180x180.jpg','DTRT','杜比丽夫男士多效合一精华素','￥180.00~￥360.00','新品','独家','尊享'),(8,'11_n_05486_180x180(1).jpg','DTRT','杜比丽夫男士抗皱营养霜','￥330.00','新品','独家','尊享'),(9,'11_n_05486_180x180.jpg','DTRT','杜比丽夫男士清爽须后水','￥220.00','新品','独家','尊享'),(10,'11_n_06178_180x180(2).jpg','DTRT','杜比丽夫男士温和洁面乳','￥179.00','新品','独家','尊享');
/*!40000 ALTER TABLE `ns_exclu` ENABLE KEYS */;

#
# Structure for table "ns_hot"
#

DROP TABLE IF EXISTS `ns_hot`;
CREATE TABLE `ns_hot` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  `zx` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "ns_hot"
#

/*!40000 ALTER TABLE `ns_hot` DISABLE KEYS */;
INSERT INTO `ns_hot` VALUES (1,'11_n_06491_180x180.jpg','SHISEIDO','资生堂男士洗面膏','￥180.00','新品',NULL,NULL),(2,'11_n_05914_180x180.jpg','LABSERIES','朗仕多功能洁面乳','￥195.00~￥299.00',NULL,NULL,NULL),(3,'11_n_06244_180x180.jpg','LABSERIES','朗仕俊范多效保养乳液','￥228.00',NULL,NULL,NULL),(4,'211_n_06307_180x180.jpg','DTRT','杜比丽夫男士温和洁面乳惠选套装','￥179.00','新品','独家','尊享'),(5,'211_n_06178_180x180.jpg','SK-II','SK-II男士焕活保湿洁面霜','￥440.00',NULL,NULL,NULL),(6,'11_n_06143_180x180.jpg','LABSERIES','朗仕俊范多效润唇护理棒','￥120.00',NULL,NULL,NULL),(7,'11_n_06545_180x180.jpg','BIOTHERM','碧欧泉男士水动力保湿乳限量版(中性)','￥480.00','新品',NULL,'尊享'),(8,'211_n_05486_180x180.jpg','DTRT','杜比丽夫男士清爽须后水','￥220.00',NULL,'独家','尊享'),(9,'11_n_06545_180x180(1).jpg','BIOTHERM','碧欧泉男士新水动力爽肤水惠选套装','￥260.00','新品',NULL,'尊享'),(10,'11_n_06178_180x180(1).jpg','LABSERIES','朗仕男用青春抗皱水凝面霜','￥520.00',NULL,NULL,NULL);
/*!40000 ALTER TABLE `ns_hot` ENABLE KEYS */;

#
# Structure for table "ns_what"
#

DROP TABLE IF EXISTS `ns_what`;
CREATE TABLE `ns_what` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "ns_what"
#

/*!40000 ALTER TABLE `ns_what` DISABLE KEYS */;
INSERT INTO `ns_what` VALUES (1,'11_n_06684_180x180.jpg','LABSERIES','朗仕俊范多效保湿凝胶惠选套装','￥278.00','新品'),(2,'11_n_06686_180x180.jpg','LABSERIES','朗仕保湿修护爽肤水（蓝宝瓶）惠选','￥260.00','新品'),(3,'11_n_06684_180x180(1).jpg','LABSERIES','朗仕男用多功能洁面乳惠选套装','￥195.00','新品'),(4,'11_n_06675_180x180.jpg','LABSERIES','LAB SERIES朗仕锋范精选礼盒','￥1700.00','新品'),(5,'11_n_06674_180x180.jpg','LABSERIES','朗仕\"蓝”朋友面膜暖心套装','￥245.00','新品'),(6,'11_n_06684_180x180(2).jpg','LABSERIES','朗仕控油净透收敛水惠选套装','￥230.00','新品'),(7,'11_n_06674_180x180(1).jpg','LABSERIES','朗仕控油净透洁面膏惠选套装','￥260.00','新品'),(8,'11_n_06674_180x180(2).jpg','LABSERIES','朗仕经典护肤惠选套装','￥683.00','新品'),(9,'211_n_06617_180x180.jpg','BIOTHERM','碧欧泉男士新亮肤清透爽肤水','￥390.00','新品'),(10,'11_n_06620_180x180.jpg','CLARINS','娇韵诗男士净爽磨砂洁面膏','￥240.00','新品');
/*!40000 ALTER TABLE `ns_what` ENABLE KEYS */;

#
# Structure for table "rexiao"
#

DROP TABLE IF EXISTS `rexiao`;
CREATE TABLE `rexiao` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  `zx` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "rexiao"
#

/*!40000 ALTER TABLE `rexiao` DISABLE KEYS */;
INSERT INTO `rexiao` VALUES (1,'1_n_05476_180x180.jpg','CAUDALIE','欧缇丽葡萄水保湿舒缓喷雾','￥60.60~￥130.00','',NULL,NULL),(2,'1_n_05902_180x180.jpg','SEPHORACOLLECTION','丝芙兰牛油果保湿滋养蚕丝面膜','￥20.00~￥204.00','','独家',NULL),(3,'1_n_06655_180x180.jpg','RsFa','ReFa经典焕颜美容仪套装','￥1690.00','新品',NULL,NULL),(4,'1_n_06554_180x180.jpg','WEI','蔚蓝之美净透盈亮精选面膜套装（','￥99.00','新品','独家',NULL),(5,'1_n_06318_180x180.jpg','SEPHORACOLLECTION','丝芙兰柔和面部眼部卸妆水','￥25.00！119.00','新品','独家',NULL),(6,'1_n_06633_180x180.jpg','CAUDALIE','欧丽提葡萄水保湿舒缓喷雾双支装','￥260.00','新品',NULL,NULL),(7,'1_n_05914_180x180.jpg','SEPHORACOLLECTION','丝芙兰海藻补水弹润蚕丝面膜','￥20.00~85.00',NULL,'独家',NULL),(8,'1_n_06280_180x180.jpg','SEPHORACOLLECTION','丝芙兰柔和面部眼部卸妆水惠选套装','￥119.00','新品','独家','尊享'),(9,'1_n_06247_180x180.jpg','SEPHORACOLLECTION','丝芙兰柠檬籽透亮元气霜50ml','￥180.00',NULL,'独家',NULL),(10,'1_n_06307_180x180.jpg','SK-ll','SK-ll PITERA经典体验套装','￥690.00','新品',NULL,NULL);
/*!40000 ALTER TABLE `rexiao` ENABLE KEYS */;

#
# Structure for table "ximpin"
#

DROP TABLE IF EXISTS `ximpin`;
CREATE TABLE `ximpin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "ximpin"
#

/*!40000 ALTER TABLE `ximpin` DISABLE KEYS */;
INSERT INTO `ximpin` VALUES (1,'1_n_06620_180x180(2).jpg','CAUDALIE','欧提丽赋颜肌活眼霜套装','￥260.00','新品'),(2,'1_n_06655_180x180(1).jpg','GUERLAIN','娇兰帝皇蜂姿水水润组合惠选套装','￥1690.00','新品'),(3,'1_n_06655_180x180(2).jpg','GUERLAIN','娇兰帝皇蜂姿水紧致修护双宝套装','￥2550.00','新品'),(4,'1_n_06660_180x180(2).jpg','SEPHORACOLLECTION','丝芙兰牛油果滋养保湿早安面膜买..','￥79.00','新品'),(5,'1_n_06660_180x180(3).jpg','SEPHORACOLLECTION','丝芙兰薏仁亮颜凝润早安面膜买一..','￥79.00','新品'),(6,'1_n_06660_180x180(4).jpg','SEPHORACOLLECTION','丝芙兰人参紧致醒肤早安面膜买一..','￥79.00','新品'),(7,'1_n_06660_180x180(5).jpg','SEPHORACOLLECTION','丝芙兰莲花水润舒颜早安面膜买一..','￥79.00','新品'),(8,'1_n_06660_180x180(6).jpg','SEPHORACOLLECTION','丝芙兰竹炭清洁鼻膜买一惠选套装','￥16.00','新品'),(9,'1_n_06660_180x180(7).jpg','SEPHORACOLLECTION','丝芙兰绿茶舒缓清新蚕丝眼膜5片装','￥75.00','新品'),(10,'1_n_06660_180x180(8).jpg','SEPHORACOLLECTION','丝芙兰兰花青春焕活蚕丝眼膜5片装','￥75.00','新品');
/*!40000 ALTER TABLE `ximpin` ENABLE KEYS */;

#
# Structure for table "xs_ecclu"
#

DROP TABLE IF EXISTS `xs_ecclu`;
CREATE TABLE `xs_ecclu` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  `zx` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "xs_ecclu"
#

/*!40000 ALTER TABLE `xs_ecclu` DISABLE KEYS */;
INSERT INTO `xs_ecclu` VALUES (1,'121_n_06599_180x180.jpg','BVLGARI','宝格丽罗马之夜佳人尊享礼盒','￥1000.00','新品','独家','尊享'),(2,'121_n_06628_180x180.jpg','KENZO','凯卓花样年华气垫香氛','￥400.00','新品','独家',NULL),(3,'121_n_06569_180x180.jpg','BVLGARI','宝格丽罗马之夜女士香水','￥665.00~￥1000.00','新品','独家',NULL),(4,'121_n_06346_180x180.jpg','GIVENCHY','纪梵希纯净淡香水','￥740.00','新品','独家',NULL),(5,'121_n_06524_180x180.jpg','TIFFANY&Co.','蒂芙尼女士香氛节日礼盒II','￥1130.00',NULL,'独家',NULL),(6,'121_n_06328_180x180.jpg','KENZO','凯卓纯净之水男士香氛礼盒','￥580.00','新品','独家',NULL),(7,'121_n_06580_180x180(1).jpg','MIUMIU','缪缪滢蓝女士香氛节日礼盒 18','￥1130.00','新品','独家',NULL),(8,'121_n_06437_180x180.jpg','MIUMIU','缪缪女士香氛节日礼盒I 18','￥850.00','新品','独家',NULL),(9,'121_n_05850_180x180.jpg','LOEWE','罗意威001男款淡香水','￥590.00~￥850.00','新品','独家',NULL),(10,'121_n_06178_180x180.jpg','LOEWE','罗意威001女款淡香水','￥430.00~￥850.00','新品','独家',NULL);
/*!40000 ALTER TABLE `xs_ecclu` ENABLE KEYS */;

#
# Structure for table "xs_loeve"
#

DROP TABLE IF EXISTS `xs_loeve`;
CREATE TABLE `xs_loeve` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dujia` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "xs_loeve"
#

/*!40000 ALTER TABLE `xs_loeve` DISABLE KEYS */;
INSERT INTO `xs_loeve` VALUES (1,'121_n_05850_180x180.jpg','LOEWE','罗意威001男款淡香水','￥590.00~￥850.00','新品','独家'),(2,'121_n_06178_180x180.jpg','LOEWE','罗意威001女款淡香水','￥430.00~￥850.00','新品','独家'),(3,'121_n_05465_180x180.jpg','DIOR','克丽丝汀迪奥迪奥小姐花漾淡香水','￥540.00~￥1100.00','新品','独家'),(4,'121_n_06273_180x180.jpg','DIOR','克丽丝汀迪奥迪奥小姐随行香氛系列','￥380.00~￥450.00','新品',NULL),(5,'121_n_05850_180x180.jpg','LOEWE','罗意威001男款香水','￥640.00~￥940.00',NULL,'独家'),(6,'121_n_06178_180x180.jpg','LOEWE','罗意威001女款香水','￥470.00~￥940.00',NULL,'独家'),(7,'121_n_06580_180x180.jpg','YSL','圣罗兰黑色奥飘茗女士香水','￥770.00~￥1090.00','新品',NULL),(8,'121_n_06233_180x180.jpg','MIUMIU','缪缪粉漾女士香水','￥620.00~￥1080.00','新品','独家'),(9,'121_n_05486_180x180.jpg','BALENCIAGA','巴黎世家至真女士香氛','￥640.00~￥1070.00',NULL,'独家'),(10,'121_n_06524_180x180.jpg','TIFFANY&Co.','蒂芙尼女士香氛节日礼盒II','￥1130.00','','独家');
/*!40000 ALTER TABLE `xs_loeve` ENABLE KEYS */;

#
# Structure for table "xs_what"
#

DROP TABLE IF EXISTS `xs_what`;
CREATE TABLE `xs_what` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  `zx` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "xs_what"
#

/*!40000 ALTER TABLE `xs_what` DISABLE KEYS */;
INSERT INTO `xs_what` VALUES (1,'121_n_06675_180x180.jpg','CHLOE','蔻依恋旅女士香氛','￥660.00~￥880.00','新品',NULL,NULL),(2,'121_n_06606_180x180.jpg','PRADA','普拉达绅士淑女对香套装','￥1670.00','新品',NULL,NULL),(3,'121_n_06599_180x180.jpg','BVLGARI','宝格丽罗马之夜佳人尊享礼盒','￥1000.00','新品','独家','尊享'),(4,'121_n_06591_180x180.jpg','GUCCI','古驰绚丽栀子香型女性淡香水','￥840.00','新品',NULL,NULL),(5,'121_n_06628_180x180.jpg','KENZO','凯卓花样年华气垫香氛','￥400.00','新品','独家',NULL),(6,'121_n_06599_180x180(1).jpg','PRADA','普拉达蔚蓝绅士淡香水','￥690.00','新品',NULL,NULL),(7,'121_n_06599_180x180(2).jpg','PRADA','普拉达缨粉淑女淡香水','￥980.00','新品',NULL,NULL),(8,'121_n_06569_180x180.jpg','BVLGARI','宝格丽罗马之夜女士香水','￥665.00~￥1000.00','新品',NULL,NULL),(9,'121_n_06485_180x180.jpg','ACQUADIPARMA','帕尔玛之水克罗尼亚纯粹古龙沐浴啫喱','￥390.00','新品','独家',NULL),(10,'121_n_06580_180x180(2).jpg','ACQUADIPARMA','帕尔玛之水克罗尼亚纯粹古龙水','￥520.00~￥1180.00','新品',NULL,NULL);
/*!40000 ALTER TABLE `xs_what` ENABLE KEYS */;

#
# Structure for table "xy_exclu"
#

DROP TABLE IF EXISTS `xy_exclu`;
CREATE TABLE `xy_exclu` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  `zx` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "xy_exclu"
#

/*!40000 ALTER TABLE `xy_exclu` DISABLE KEYS */;
INSERT INTO `xy_exclu` VALUES (1,'31_n_06655_180x180.jpg','WEI','蔚蓝之美冬日邂逅限量手霜套装','￥190.00','新品','独家','尊享'),(2,'31_n_06254_180x180.jpg','SEPHORACOLLECTION','丝芙兰蓝藻沐浴啫喱两件装套装','￥94.80','新品','独家','尊享'),(3,'31_n_06328_180x180.jpg','SEPHORACOLLECTION','丝芙兰棉花花香沐浴啫喱两件装套装','￥94.80','新品','独家','尊享'),(4,'31_n_06221_180x180.jpg','SEPHORACOLLECTION','丝芙兰牛油果滋养手膜','￥26.00','新品','独家','尊享'),(5,'31_n_06225_180x180.jpg','DTRT','杜比丽夫男士清爽沐浴露','￥168.00','新品','独家','尊享'),(6,'31_n_06262_180x180.jpg','SEPHORACOLLECTION','丝芙兰薰衣草护理脚膜','￥26.00','新品','独家','尊享'),(7,'31_n_06244_180x180.jpg','KENZO_KI','凯卓感性米香梦幻美足按摩香脂','￥300.00','新品','独家','尊享'),(8,'31_n_06254_180x180(1).jpg','KENZO_KI','凯卓感性米香去角质按摩沐浴霜','￥430.00','新品','独家','尊享'),(9,'31_n_05978_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰杏仁护甲手霜','￥39.00','新品','独家','尊享'),(10,'31_n_05978_180x180.jpg','SEPHORACOLLECTION','丝芙兰柑橘护甲手霜','￥39.00','新品','独家','尊享');
/*!40000 ALTER TABLE `xy_exclu` ENABLE KEYS */;

#
# Structure for table "xy_hot"
#

DROP TABLE IF EXISTS `xy_hot`;
CREATE TABLE `xy_hot` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "xy_hot"
#

/*!40000 ALTER TABLE `xy_hot` DISABLE KEYS */;
INSERT INTO `xy_hot` VALUES (1,'31_n_05930_180x180.jpg','SEPHORACOLLECTION','丝芙兰保湿身体乳液','￥39.50','新品','独家'),(2,'31_n_05500_180x180.jpg','SEPHORACOLLECTION','丝芙兰滋润沐浴液(胶囊)','￥5.00','新品','独家'),(3,'31_n_05500_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰润手霜','￥24.50','新品','独家'),(4,'31_n_06221_180x180.jpg','SEPHORACOLLECTION','丝芙兰牛油果滋养手膜','￥26.00','新品','独家'),(5,'31_n_05878_180x180.jpg','SEPHORACOLLECTION','丝芙兰滋养绵密身体霜','￥44.50','新品','独家'),(6,'31_n_05500_180x180(2).jpg','SEPHORACOLLECTION','丝芙兰泡泡浴块','￥5.00','新品','独家'),(7,'31_n_06262_180x180.jpg','SEPHORACOLLECTION','丝芙兰薰衣草护理脚膜','￥26.00','新品','独家'),(8,'31_n_05500_180x180(3).jpg','SEPHORACOLLECTION','丝芙兰沐浴啫喱','￥39.50','新品','独家'),(9,'31_n_05668_180x180.jpg','NUXE','欧树槐花蜜特润滋养护手霜','￥80.00','新品','独家'),(10,'31_n_05978_180x180.jpg','SEPHORACOLLECTION','丝芙兰柑橘护甲手霜','￥39.00','新品','独家');
/*!40000 ALTER TABLE `xy_hot` ENABLE KEYS */;

#
# Structure for table "xy_what"
#

DROP TABLE IF EXISTS `xy_what`;
CREATE TABLE `xy_what` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `xinpin` varchar(255) DEFAULT NULL,
  `dj` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "xy_what"
#

/*!40000 ALTER TABLE `xy_what` DISABLE KEYS */;
INSERT INTO `xy_what` VALUES (1,'31_n_06690_180x180.jpg','SEPHORACOLLECTION','丝芙兰身体沐浴三部曲甜蜜心跳惠选','￥200.00','新品',NULL),(2,'31_n_06660_180x180.jpg','SEPHORACOLLECTION','丝芙兰牛油果滋养手膜买一送一惠选套','￥26.00','新品',NULL),(3,'31_n_06660_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰薰衣草护理脚膜买一送一惠选','￥26.00','新品',NULL),(4,'31_n_06635_180x180.jpg','Fresh','馥蕾诗滋润护手霜礼盒（18节日限定）','￥190.00','新品',NULL),(5,'31_n_06655_180x180.jpg','WEI','蔚蓝之美冬日邂逅限量手霜套装','￥190.00','新品','独家'),(6,'31_n_06628_180x180.jpg','SEPHORACOLLECTION','丝芙兰精巧泡泡浴块','￥10.00','新品',NULL),(7,'31_n_06628_180x180(1).jpg','SEPHORACOLLECTION','丝芙兰滋润沐浴啫喱','￥10.00','新品',NULL),(8,'31_n_06628_180x180(2).jpg','SEPHORACOLLECTION','丝芙兰香发香体喷雾','￥79.00','新品',NULL),(9,'31_n_06628_180x180(3).jpg','SEPHORACOLLECTION','丝芙兰温和泡沫洗手液','￥59.00','新品',NULL),(10,'31_n_06628_180x180(4).jpg','SEPHORACOLLECTION','丝芙兰保湿清新身体乳','￥79.00','新品',NULL);
/*!40000 ALTER TABLE `xy_what` ENABLE KEYS */;
