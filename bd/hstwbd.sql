-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`clientes` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `curp` VARCHAR(20) NOT NULL,
  `rfc` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE INDEX `id_cliente_UNIQUE` (`id_cliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`direcciones` (
  `id_direccion` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(45) NOT NULL,
  `num_interior` INT NULL,
  `num_exterior` INT NOT NULL,
  `entre_calles` VARCHAR(45) NOT NULL,
  `codigo_postal` INT NOT NULL,
  `colonia` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `clientes_id_cliente` INT NOT NULL,
  INDEX `fk_direcciones_clientes1_idx` (`clientes_id_cliente` ASC) VISIBLE,
  PRIMARY KEY (`id_direccion`),
  UNIQUE INDEX `id_direccion_UNIQUE` (`id_direccion` ASC) VISIBLE,
  CONSTRAINT `fk_direcciones_clientes1`
    FOREIGN KEY (`clientes_id_cliente`)
    REFERENCES `mydb`.`clientes` (`id_cliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`prestamos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`prestamos` (
  `id_prestamo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `monto` DOUBLE NOT NULL,
  `tipo_pago` VARCHAR(45) NOT NULL,
  `tasa_interes` DOUBLE NOT NULL,
  `interes` DOUBLE NOT NULL,
  `tiempo_pago` VARCHAR(45) NOT NULL,
  `clientes_id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_prestamo`),
  INDEX `fk_prestamos_clientes1_idx` (`clientes_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_prestamos_clientes1`
    FOREIGN KEY (`clientes_id_cliente`)
    REFERENCES `mydb`.`clientes` (`id_cliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tarjetas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tarjetas` (
  `idtarjetas_debito` INT NOT NULL AUTO_INCREMENT,
  `clientes_id_cliente` INT NOT NULL,
  `fecha_vencimiento` DATE NOT NULL,
  `tipo_tarjeta` VARCHAR(45) NOT NULL,
  `compania_servicio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtarjetas_debito`),
  INDEX `fk_tarjetas_debito_clientes1_idx` (`clientes_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_tarjetas_debito_clientes1`
    FOREIGN KEY (`clientes_id_cliente`)
    REFERENCES `mydb`.`clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pagos` (
  `id_pago` INT NOT NULL,
  `date_time` DATETIME NOT NULL,
  `cuota` DOUBLE NOT NULL,
  `capital_amortizado` DOUBLE NOT NULL,
  `capital_final` VARCHAR(45) NOT NULL,
  `pagoscol` VARCHAR(45) NOT NULL,
  `prestamos_id_prestamo` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_pago`),
  INDEX `fk_pagos_prestamos1_idx` (`prestamos_id_prestamo` ASC) VISIBLE,
  CONSTRAINT `fk_pagos_prestamos1`
    FOREIGN KEY (`prestamos_id_prestamo`)
    REFERENCES `mydb`.`prestamos` (`id_prestamo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`buro_credito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`buro_credito` (
  `id_buro_credito` INT NOT NULL AUTO_INCREMENT,
  `fecha_registro` DATE NOT NULL,
  `comentarios` TEXT NULL,
  `clientes_id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_buro_credito`),
  INDEX `fk_buro_credito_clientes1_idx` (`clientes_id_cliente` ASC) VISIBLE,
  UNIQUE INDEX `id_buro_credito_UNIQUE` (`id_buro_credito` ASC) VISIBLE,
  CONSTRAINT `fk_buro_credito_clientes1`
    FOREIGN KEY (`clientes_id_cliente`)
    REFERENCES `mydb`.`clientes` (`id_cliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`instituciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`instituciones` (
  `id_institucion` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `comportamiento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_institucion`),
  UNIQUE INDEX `id_institucion_UNIQUE` (`id_institucion` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`clientes_has_instituciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`clientes_has_instituciones` (
  `id_cliente` INT NOT NULL,
  `id_institucion` INT NOT NULL,
  INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
  INDEX `id_instituciones_idx` (`id_institucion` ASC) VISIBLE,
  CONSTRAINT `id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `mydb`.`clientes` (`id_cliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `id_instituciones`
    FOREIGN KEY (`id_institucion`)
    REFERENCES `mydb`.`instituciones` (`id_institucion`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`clientes_has_direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`clientes_has_direcciones` (
  `id_cliente` INT NOT NULL,
  `id_direccion` INT NOT NULL,
  INDEX `id_direccion_idx` (`id_direccion` ASC) VISIBLE,
  CONSTRAINT `id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `mydb`.`clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_direccion`
    FOREIGN KEY (`id_direccion`)
    REFERENCES `mydb`.`direcciones` (`id_direccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
