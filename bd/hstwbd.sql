-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema hstw
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hstw
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hstw` DEFAULT CHARACTER SET latin1 ;
USE `hstw` ;

-- -----------------------------------------------------
-- Table `hstw`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`clientes` (
  `id_cliente` INT(11) NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `curp` VARCHAR(20) NOT NULL,
  `rfc` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE INDEX `id_cliente_UNIQUE` (`id_cliente`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`buro_credito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`buro_credito` (
  `id_buro_credito` INT(11) NOT NULL AUTO_INCREMENT,
  `fecha_registro` DATE NOT NULL,
  `clientes_id_cliente` INT(11) NOT NULL,
  PRIMARY KEY (`id_buro_credito`),
  UNIQUE INDEX `id_buro_credito_UNIQUE` (`id_buro_credito`),
  INDEX `fk_buro_credito_clientes1_idx` (`clientes_id_cliente`),
  CONSTRAINT `fk_buro_credito_clientes1`
    FOREIGN KEY (`clientes_id_cliente`)
    REFERENCES `hstw`.`clientes` (`id_cliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`direcciones` (
  `id_direccion` INT(11) NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(45) NOT NULL,
  `num_interior` INT(11) NULL DEFAULT NULL,
  `num_exterior` INT(11) NOT NULL,
  `entre_calles` VARCHAR(45) NOT NULL,
  `codigo_postal` INT(11) NOT NULL,
  `colonia` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `clientes_id_cliente` INT(11) NOT NULL,
  PRIMARY KEY (`id_direccion`),
  UNIQUE INDEX `id_direccion_UNIQUE` (`id_direccion`),
  INDEX `fk_direcciones_clientes1_idx` (`clientes_id_cliente`),
  CONSTRAINT `fk_direcciones_clientes1`
    FOREIGN KEY (`clientes_id_cliente`)
    REFERENCES `hstw`.`clientes` (`id_cliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`clientes_has_direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`clientes_has_direcciones` (
  `id_cliente` INT(11) NOT NULL,
  `id_direccion` INT(11) NOT NULL,
  INDEX `clientes_has_direcciones_clientes_id_cliente_fk` (`id_cliente`),
  INDEX `clientes_has_direcciones_direcciones_id_direccion_fk` (`id_direccion`),
  CONSTRAINT `clientes_has_direcciones_clientes_id_cliente_fk`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `hstw`.`clientes` (`id_cliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `clientes_has_direcciones_direcciones_id_direccion_fk`
    FOREIGN KEY (`id_direccion`)
    REFERENCES `hstw`.`direcciones` (`id_direccion`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`instituciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`instituciones` (
  `id_institucion` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_institucion`),
  UNIQUE INDEX `id_institucion_UNIQUE` (`id_institucion`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`clientes_has_instituciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`clientes_has_instituciones` (
  `id_cliente` INT(11) NOT NULL,
  `id_institucion` INT(11) NOT NULL,
  `comportamiento` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  INDEX `id_cliente_idx` (`id_cliente`),
  INDEX `id_instituciones_idx` (`id_institucion`),
  CONSTRAINT `id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `hstw`.`clientes` (`id_cliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `id_instituciones`
    FOREIGN KEY (`id_institucion`)
    REFERENCES `hstw`.`instituciones` (`id_institucion`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`consultas_buro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`consultas_buro` (
  `folio` INT(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` INT(11) NOT NULL,
  PRIMARY KEY (`folio`),
  UNIQUE INDEX `folio_UNIQUE` (`folio`),
  INDEX `id_cliente_fk_idx` (`id_cliente`),
  CONSTRAINT `id_cliente_fk`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `hstw`.`clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 50
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`migrations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`migrations` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` VARCHAR(255) NOT NULL,
  `batch` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `hstw`.`prestamos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`prestamos` (
  `id_prestamo` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `monto` DOUBLE NOT NULL,
  `tipo_pago` VARCHAR(45) NOT NULL,
  `tasa_interes` DOUBLE NOT NULL,
  `interes` DOUBLE NOT NULL,
  `tiempo_pago` VARCHAR(45) NOT NULL,
  `clientes_id_cliente` INT(11) NOT NULL,
  PRIMARY KEY (`id_prestamo`),
  INDEX `fk_prestamos_clientes1_idx` (`clientes_id_cliente`),
  CONSTRAINT `fk_prestamos_clientes1`
    FOREIGN KEY (`clientes_id_cliente`)
    REFERENCES `hstw`.`clientes` (`id_cliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`pagos` (
  `id_pago` INT(11) NOT NULL,
  `date_time` DATETIME NOT NULL,
  `cuota` DOUBLE NOT NULL,
  `capital_amortizado` DOUBLE NOT NULL,
  `capital_final` VARCHAR(45) NOT NULL,
  `prestamos_id_prestamo` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id_pago`),
  INDEX `fk_pagos_prestamos1_idx` (`prestamos_id_prestamo`),
  CONSTRAINT `fk_pagos_prestamos1`
    FOREIGN KEY (`prestamos_id_prestamo`)
    REFERENCES `hstw`.`prestamos` (`id_prestamo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`password_resets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`password_resets` (
  `email` VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  INDEX `password_resets_email_index` (`email`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `hstw`.`tarjetas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`tarjetas` (
  `id_tarjeta` INT(11) NOT NULL AUTO_INCREMENT,
  `clientes_id_cliente` INT(11) NOT NULL,
  `fecha_vencimiento` DATE NOT NULL,
  `tipo_tarjeta` VARCHAR(45) NOT NULL,
  `compania_servicio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_tarjeta`),
  INDEX `fk_tarjetas_debito_clientes1_idx` (`clientes_id_cliente`),
  CONSTRAINT `fk_tarjetas_debito_clientes1`
    FOREIGN KEY (`clientes_id_cliente`)
    REFERENCES `hstw`.`clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hstw`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hstw`.`users` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `email_verified_at` TIMESTAMP NULL DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  `remember_token` VARCHAR(100) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `users_email_unique` (`email`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
