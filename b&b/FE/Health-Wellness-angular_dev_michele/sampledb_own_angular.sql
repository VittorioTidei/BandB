-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versione server:              8.0.16 - MySQL Community Server - GPL
-- S.O. server:                  Win64
-- HeidiSQL Versione:            12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dump della struttura del database sampledb_own_angular
CREATE DATABASE IF NOT EXISTS `sampledb_own_angular` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sampledb_own_angular`;

-- Dump della struttura di tabella sampledb_own_angular.avatar
CREATE TABLE IF NOT EXISTS `avatar` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `data` longblob NOT NULL,
  `filename` varchar(255) NOT NULL,
  `filetype` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.avatars
CREATE TABLE IF NOT EXISTS `avatars` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `data` longblob NOT NULL,
  `filename` varchar(255) NOT NULL,
  `filetype` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.carts
CREATE TABLE IF NOT EXISTS `carts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb5o626f86h46m4s7ms6ginnop` (`user_id`),
  CONSTRAINT `FKb5o626f86h46m4s7ms6ginnop` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.carts_products_cart_list
CREATE TABLE IF NOT EXISTS `carts_products_cart_list` (
  `cart_id` bigint(20) NOT NULL,
  `products_cart_list_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_b5guge50si8gpxp2v94gg3r51` (`products_cart_list_id`),
  KEY `FKe5696kn7devws3dj0uadu0q8b` (`cart_id`),
  CONSTRAINT `FK429q3fr14qnpvfms5s014ns3b` FOREIGN KEY (`products_cart_list_id`) REFERENCES `products_cart_list` (`id`),
  CONSTRAINT `FKe5696kn7devws3dj0uadu0q8b` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.centers
CREATE TABLE IF NOT EXISTS `centers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `city_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKne2htfmstlquywnjmnxemgqrv` (`city_id`),
  KEY `FK73norooj6brlyapi2qea4a3en` (`user_id`),
  CONSTRAINT `FK73norooj6brlyapi2qea4a3en` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKne2htfmstlquywnjmnxemgqrv` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.city
CREATE TABLE IF NOT EXISTS `city` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7905 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `total_price` float NOT NULL,
  `cart_id` bigint(20) DEFAULT NULL,
  `center_id` bigint(20) DEFAULT NULL,
  `payment_type_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK594fgx8wpklcf3t41jq3grhlh` (`cart_id`),
  KEY `FKdpagaw5gy6a138p82onrii5fb` (`center_id`),
  KEY `FKduuwd6jwb8wjco3ux6xf779w0` (`payment_type_id`),
  KEY `FK32ql8ubntj5uh44ph9659tiih` (`user_id`),
  CONSTRAINT `FK32ql8ubntj5uh44ph9659tiih` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK594fgx8wpklcf3t41jq3grhlh` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  CONSTRAINT `FKdpagaw5gy6a138p82onrii5fb` FOREIGN KEY (`center_id`) REFERENCES `centers` (`id`),
  CONSTRAINT `FKduuwd6jwb8wjco3ux6xf779w0` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.payment_type
CREATE TABLE IF NOT EXISTS `payment_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `data` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` date DEFAULT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` float NOT NULL,
  `end_discount_date` date DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `start_discount_date` date DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `center_id` bigint(20) DEFAULT NULL,
  `treatment_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKic2898popcf7uth1j60ou5s58` (`center_id`),
  KEY `FKiiwce6ow5gbjdtnh4erccju0e` (`treatment_id`),
  CONSTRAINT `FKic2898popcf7uth1j60ou5s58` FOREIGN KEY (`center_id`) REFERENCES `centers` (`id`),
  CONSTRAINT `FKiiwce6ow5gbjdtnh4erccju0e` FOREIGN KEY (`treatment_id`) REFERENCES `treatments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.products_cart_list
CREATE TABLE IF NOT EXISTS `products_cart_list` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` date DEFAULT NULL,
  `qty` int(11) NOT NULL,
  `updated_at` date DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `cart_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrovym6ipf2lpanvds3fadsa64` (`product_id`),
  KEY `FKso4u2y64xnrgj6kumotvfbgpj` (`cart_id`),
  CONSTRAINT `FKrovym6ipf2lpanvds3fadsa64` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FKso4u2y64xnrgj6kumotvfbgpj` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.products_order_list
CREATE TABLE IF NOT EXISTS `products_order_list` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` date DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` float NOT NULL,
  `end_discount_date` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  `price_purchase` float NOT NULL,
  `qty` int(11) NOT NULL,
  `start_discount_date` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `center_id` bigint(20) DEFAULT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhc6opa8t10ium21mj0jconyn4` (`center_id`),
  KEY `FK1gx9guayggiggts4p34cleev5` (`order_id`),
  KEY `FKs4memkh3eay4jdtlmtvj782cx` (`product_id`),
  CONSTRAINT `FK1gx9guayggiggts4p34cleev5` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FKhc6opa8t10ium21mj0jconyn4` FOREIGN KEY (`center_id`) REFERENCES `centers` (`id`),
  CONSTRAINT `FKs4memkh3eay4jdtlmtvj782cx` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.treatments
CREATE TABLE IF NOT EXISTS `treatments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9a32doadywn1thl45v0rrdhct` (`category_id`),
  CONSTRAINT `FK9a32doadywn1thl45v0rrdhct` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella sampledb_own_angular.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `avatar` blob,
  `birthday_date` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `usertype` int(11) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `city_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkpqrx37esphstf2tqxbt89avn` (`city_id`),
  CONSTRAINT `FKkpqrx37esphstf2tqxbt89avn` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- L’esportazione dei dati non era selezionata.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
