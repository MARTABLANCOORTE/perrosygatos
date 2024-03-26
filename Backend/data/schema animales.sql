CREATE TABLE `animales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `edad` varchar(45) NOT NULL,
  `castrado` varchar(45) NOT NULL,
  `tamaño` varchar(45) NOT NULL,
  `compatiblePerros` varchar(45) NOT NULL,
  `compatibleGatos` varchar(45) NOT NULL,
  `compatibleNiños` varchar(45) NOT NULL,
  `comentarios` varchar(1000) NOT NULL,
  `imagen` longblob NOT NULL,
  `imagen1` longblob,
  `imagen2` longblob,
  `imagen3` longblob,
  `adopcion` varchar(45) NOT NULL,
  `acogida` varchar(45) NOT NULL,
  `perdido` varchar(45) NOT NULL,
  `provincia` varchar(45) NOT NULL,
  `raza` varchar(255) NOT NULL,
  `fkIdUser` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IdUsuarios_idx` (`fkIdUser`),
  CONSTRAINT `IdUsuarios` FOREIGN KEY (`fkIdUser`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)

SELECT * FROM perrosygatos_db.animales;