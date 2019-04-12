-- MySQL dump 10.13  Distrib 8.0.15, for Linux (x86_64)
--
-- Host: localhost    Database: smartHouse
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `action`
--

DROP TABLE IF EXISTS `action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `macro_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL,
  `value` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `device_id` (`device_id`),
  KEY `macro_id` (`macro_id`),
  CONSTRAINT `action_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `device` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `action_ibfk_2` FOREIGN KEY (`macro_id`) REFERENCES `macro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action`
--

LOCK TABLES `action` WRITE;
/*!40000 ALTER TABLE `action` DISABLE KEYS */;
INSERT INTO `action` VALUES (1,2,333,'12'),(2,3,333,'12'),(4,5,333,'12'),(5,5,334,'close'),(6,5,335,'off'),(7,13,333,'12'),(8,13,334,'close'),(9,13,335,'off');
/*!40000 ALTER TABLE `action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `device` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `value` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `room_id` (`room_id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `device_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `device_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `device_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=556 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` VALUES (331,121,1,'Входная дверь','close'),(332,121,2,'Свет','on'),(333,121,5,'Температура','10'),(334,122,4,'Окно','close'),(335,122,2,'Свет','on'),(336,122,5,'Температура','22'),(337,123,4,'Левое окно','open'),(338,123,4,'Правое окно','open'),(339,123,2,'Левый свет','off'),(340,123,2,'Правый свет','off'),(341,123,5,'Температура на улице','17'),(342,124,4,'Окно','close'),(343,124,3,'Светильник','on'),(344,124,2,'Свет','off'),(345,124,6,'Термостат','10'),(346,125,1,'Входная дверь','close'),(347,125,2,'Свет','on'),(348,125,5,'Температура','20'),(349,126,4,'Окно','close'),(350,126,2,'Свет','on'),(351,126,5,'Температура','22'),(352,127,4,'Левое окно','open'),(353,127,4,'Правое окно','open'),(354,127,2,'Левый свет','off'),(355,127,2,'Правый свет','off'),(356,127,5,'Температура на улице','17'),(357,128,4,'Окно','close'),(358,128,3,'Светильник','on'),(359,128,2,'Свет','off'),(360,128,6,'Термостат','20'),(361,129,1,'Входная дверь','close'),(362,129,2,'Свет','on'),(363,129,5,'Температура','20'),(364,130,4,'Окно','close'),(365,130,2,'Свет','on'),(366,130,5,'Температура','22'),(367,131,4,'Левое окно','open'),(368,131,4,'Правое окно','open'),(369,131,2,'Левый свет','off'),(370,131,2,'Правый свет','off'),(371,131,5,'Температура на улице','17'),(372,132,4,'Окно','close'),(373,132,3,'Светильник','on'),(374,132,2,'Свет','off'),(375,132,6,'Термостат','20'),(376,133,1,'Входная дверь','close'),(377,133,2,'Свет','on'),(378,133,5,'Температура','20'),(379,134,4,'Окно','close'),(380,134,2,'Свет','on'),(381,134,5,'Температура','22'),(382,135,4,'Левое окно','open'),(383,135,4,'Правое окно','open'),(384,135,2,'Левый свет','off'),(385,135,2,'Правый свет','off'),(386,135,5,'Температура на улице','17'),(387,136,4,'Окно','close'),(388,136,3,'Светильник','on'),(389,136,2,'Свет','off'),(390,136,6,'Термостат','20'),(391,137,1,'Входная дверь','close'),(392,137,2,'Свет','on'),(393,137,5,'Температура','20'),(394,138,4,'Окно','close'),(395,138,2,'Свет','on'),(396,138,5,'Температура','22'),(397,139,4,'Левое окно','open'),(398,139,4,'Правое окно','open'),(399,139,2,'Левый свет','off'),(400,139,2,'Правый свет','off'),(401,139,5,'Температура на улице','17'),(402,140,4,'Окно','close'),(403,140,3,'Светильник','on'),(404,140,2,'Свет','off'),(405,140,6,'Термостат','20'),(406,141,1,'Входная дверь','close'),(407,141,2,'Свет','on'),(408,141,5,'Температура','20'),(409,142,4,'Окно','close'),(410,142,2,'Свет','on'),(411,142,5,'Температура','22'),(412,143,4,'Левое окно','open'),(413,143,4,'Правое окно','open'),(414,143,2,'Левый свет','off'),(415,143,2,'Правый свет','off'),(416,143,5,'Температура на улице','17'),(417,144,4,'Окно','close'),(418,144,3,'Светильник','on'),(419,144,2,'Свет','off'),(420,144,6,'Термостат','20'),(421,145,1,'Входная дверь','close'),(422,145,2,'Свет','on'),(423,145,5,'Температура','20'),(424,146,4,'Окно','close'),(425,146,2,'Свет','on'),(426,146,5,'Температура','22'),(427,147,4,'Левое окно','open'),(428,147,4,'Правое окно','open'),(429,147,2,'Левый свет','off'),(430,147,2,'Правый свет','off'),(431,147,5,'Температура на улице','17'),(432,148,4,'Окно','close'),(433,148,3,'Светильник','on'),(434,148,2,'Свет','off'),(435,148,6,'Термостат','20'),(436,149,1,'Входная дверь','close'),(437,149,2,'Свет','on'),(438,149,5,'Температура','20'),(439,150,4,'Окно','close'),(440,150,2,'Свет','on'),(441,150,5,'Температура','22'),(442,151,4,'Левое окно','open'),(443,151,4,'Правое окно','open'),(444,151,2,'Левый свет','off'),(445,151,2,'Правый свет','off'),(446,151,5,'Температура на улице','17'),(447,152,4,'Окно','close'),(448,152,3,'Светильник','on'),(449,152,2,'Свет','off'),(450,152,6,'Термостат','20'),(451,153,1,'Входная дверь','close'),(452,153,2,'Свет','on'),(453,153,5,'Температура','20'),(454,154,4,'Окно','close'),(455,154,2,'Свет','on'),(456,154,5,'Температура','22'),(457,155,4,'Левое окно','open'),(458,155,4,'Правое окно','open'),(459,155,2,'Левый свет','off'),(460,155,2,'Правый свет','off'),(461,155,5,'Температура на улице','17'),(462,156,4,'Окно','close'),(463,156,3,'Светильник','on'),(464,156,2,'Свет','off'),(465,156,6,'Термостат','20'),(466,157,1,'Входная дверь','close'),(467,157,2,'Свет','on'),(468,157,5,'Температура','20'),(469,158,4,'Окно','close'),(470,158,2,'Свет','on'),(471,158,5,'Температура','22'),(472,159,4,'Левое окно','open'),(473,159,4,'Правое окно','open'),(474,159,2,'Левый свет','off'),(475,159,2,'Правый свет','off'),(476,159,5,'Температура на улице','17'),(477,160,4,'Окно','close'),(478,160,3,'Светильник','on'),(479,160,2,'Свет','off'),(480,160,6,'Термостат','20'),(481,161,1,'Входная дверь','close'),(482,161,2,'Свет','on'),(483,161,5,'Температура','20'),(484,162,4,'Окно','close'),(485,162,2,'Свет','on'),(486,162,5,'Температура','22'),(487,163,4,'Левое окно','open'),(488,163,4,'Правое окно','open'),(489,163,2,'Левый свет','off'),(490,163,2,'Правый свет','off'),(491,163,5,'Температура на улице','17'),(492,164,4,'Окно','close'),(493,164,3,'Светильник','on'),(494,164,2,'Свет','off'),(495,164,6,'Термостат','20'),(496,165,1,'Входная дверь','close'),(497,165,2,'Свет','on'),(498,165,5,'Температура','20'),(499,166,4,'Окно','close'),(500,166,2,'Свет','on'),(501,166,5,'Температура','22'),(502,167,4,'Левое окно','open'),(503,167,4,'Правое окно','open'),(504,167,2,'Левый свет','off'),(505,167,2,'Правый свет','off'),(506,167,5,'Температура на улице','17'),(507,168,4,'Окно','close'),(508,168,3,'Светильник','on'),(509,168,2,'Свет','off'),(510,168,6,'Термостат','20'),(511,169,1,'Входная дверь','close'),(512,169,2,'Свет','on'),(513,169,5,'Температура','20'),(514,170,4,'Окно','close'),(515,170,2,'Свет','on'),(516,170,5,'Температура','22'),(517,171,4,'Левое окно','open'),(518,171,4,'Правое окно','open'),(519,171,2,'Левый свет','off'),(520,171,2,'Правый свет','off'),(521,171,5,'Температура на улице','17'),(522,172,4,'Окно','close'),(523,172,3,'Светильник','on'),(524,172,2,'Свет','off'),(525,172,6,'Термостат','20'),(526,173,1,'Входная дверь','close'),(527,173,2,'Свет','on'),(528,173,5,'Температура','20'),(529,174,4,'Окно','close'),(530,174,2,'Свет','on'),(531,174,5,'Температура','22'),(532,175,4,'Левое окно','open'),(533,175,4,'Правое окно','open'),(534,175,2,'Левый свет','off'),(535,175,2,'Правый свет','off'),(536,175,5,'Температура на улице','17'),(537,176,4,'Окно','close'),(538,176,3,'Светильник','on'),(539,176,2,'Свет','off'),(540,176,6,'Термостат','20'),(541,177,1,'Входная дверь','close'),(542,177,2,'Свет','on'),(543,177,5,'Температура','20'),(544,178,4,'Окно','close'),(545,178,2,'Свет','on'),(546,178,5,'Температура','22'),(547,179,4,'Левое окно','open'),(548,179,4,'Правое окно','open'),(549,179,2,'Левый свет','off'),(550,179,2,'Правый свет','off'),(551,179,5,'Температура на улице','17'),(552,180,4,'Окно','close'),(553,180,3,'Светильник','on'),(554,180,2,'Свет','off'),(555,180,6,'Термостат','20');
/*!40000 ALTER TABLE `device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_type`
--

DROP TABLE IF EXISTS `device_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `device_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_type`
--

LOCK TABLES `device_type` WRITE;
/*!40000 ALTER TABLE `device_type` DISABLE KEYS */;
INSERT INTO `device_type` VALUES (1,'Электронный замок'),(2,'Люстра'),(3,'Светильник'),(4,'Электрокарниз'),(5,'Датчик температуры'),(6,'Термостат');
/*!40000 ALTER TABLE `device_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `macro`
--

DROP TABLE IF EXISTS `macro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `macro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `macro_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `macro`
--

LOCK TABLES `macro` WRITE;
/*!40000 ALTER TABLE `macro` DISABLE KEYS */;
INSERT INTO `macro` VALUES (2,'macro 1',41),(3,'macro 1',41),(5,'macro 1',41),(6,'macro 1',41),(7,'macro 1',42),(8,'macro 1',42),(9,'macro 1',42),(10,'macro 1',42),(11,'macro 1',42),(12,'macro 1',42),(13,'macro 1',42);
/*!40000 ALTER TABLE `macro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `photo` varchar(150) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `room_ibfk_1` (`user_id`),
  CONSTRAINT `room_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (121,'Коридор','room_Коридор.png',41),(122,'Кухня','room_Кухня.png',41),(123,'Зал','room_Зал.png',41),(124,'Спальня','room_Спальня.png',41),(125,'Коридор','room_Коридор.png',42),(126,'Кухня','room_Кухня.png',42),(127,'Зал','room_Зал.png',42),(128,'Спальня','room_Спальня.png',42),(129,'Коридор','room_Коридор.png',43),(130,'Кухня','room_Кухня.png',43),(131,'Зал','room_Зал.png',43),(132,'Спальня','room_Спальня.png',43),(133,'Коридор','room_Коридор.png',44),(134,'Кухня','room_Кухня.png',44),(135,'Зал','room_Зал.png',44),(136,'Спальня','room_Спальня.png',44),(137,'Коридор','room_Коридор.png',45),(138,'Кухня','room_Кухня.png',45),(139,'Зал','room_Зал.png',45),(140,'Спальня','room_Спальня.png',45),(141,'Коридор','room_Коридор.png',46),(142,'Кухня','room_Кухня.png',46),(143,'Зал','room_Зал.png',46),(144,'Спальня','room_Спальня.png',46),(145,'Коридор','room_Коридор.png',47),(146,'Кухня','room_Кухня.png',47),(147,'Зал','room_Зал.png',47),(148,'Спальня','room_Спальня.png',47),(149,'Коридор','room_Коридор.png',48),(150,'Кухня','room_Кухня.png',48),(151,'Зал','room_Зал.png',48),(152,'Спальня','room_Спальня.png',48),(153,'Коридор','room_Коридор.png',49),(154,'Кухня','room_Кухня.png',49),(155,'Зал','room_Зал.png',49),(156,'Спальня','room_Спальня.png',49),(157,'Коридор','room_Коридор.png',50),(158,'Кухня','room_Кухня.png',50),(159,'Зал','room_Зал.png',50),(160,'Спальня','room_Спальня.png',50),(161,'Коридор','room_Коридор.png',51),(162,'Кухня','room_Кухня.png',51),(163,'Зал','room_Зал.png',51),(164,'Спальня','room_Спальня.png',51),(165,'Коридор','room_Коридор.png',52),(166,'Кухня','room_Кухня.png',52),(167,'Зал','room_Зал.png',52),(168,'Спальня','room_Спальня.png',52),(169,'Коридор','room_Коридор.png',53),(170,'Кухня','room_Кухня.png',53),(171,'Зал','room_Зал.png',53),(172,'Спальня','room_Спальня.png',53),(173,'Коридор','room_Коридор.png',54),(174,'Кухня','room_Кухня.png',54),(175,'Зал','room_Зал.png',54),(176,'Спальня','room_Спальня.png',54),(177,'Коридор','room_Коридор.png',55),(178,'Кухня','room_Кухня.png',55),(179,'Зал','room_Зал.png',55),(180,'Спальня','room_Спальня.png',55);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `token` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (41,'user15335551863','pass','Kn-l3xYl3tvzofYek55Xl9hoonTMGCIl'),(42,'user15335551863','pass','42'),(43,'user15335551863','pass',NULL),(44,'user15335551861','pass',NULL),(45,'user15335551860','pass',NULL),(46,'user15335551864','pass',NULL),(47,'user15335551868','pass',NULL),(48,'user15335551866','pass',NULL),(49,'user15335551863','pass',NULL),(50,'user15335551864','pass',NULL),(51,'user15335551860','pass',NULL),(52,'user15335551860','pass',NULL),(53,'user15335551865','pass',NULL),(54,'user15335551865','pass',NULL),(55,'user15335551863','pass',NULL),(56,'login','pass','$2b$08$h4G14qjEwmH/xa3tTz47.e4iA'),(57,'user1','pass','$2b$08$tGNP0gxztEHopxNjzK/nO.F35'),(58,'user2','pass','$2b$08$Yb06NvCVp4Z9SjHR/.grQ.zm4'),(59,'user3','pass','$2b$08$fxcuFc7ES7/N7pQV9afKuutfX'),(60,'user4','pass',NULL),(61,'user5','pass',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-27 11:47:02
