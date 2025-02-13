-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2025 at 08:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `storemember`
--

-- --------------------------------------------------------

--
-- Table structure for table `memberheader`
--

CREATE TABLE `memberheader` (
  `CustomerID` int(11) NOT NULL,
  `CustomerName` varchar(100) NOT NULL,
  `CustomerPhone` varchar(15) NOT NULL,
  `CustomerEmail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `memberheader`
--

INSERT INTO `memberheader` (`CustomerID`, `CustomerName`, `CustomerPhone`, `CustomerEmail`) VALUES
(5, 'Flavia Louis', '082254711612', 'flavialouis77@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `memberheader`
--
ALTER TABLE `memberheader`
  ADD PRIMARY KEY (`CustomerID`),
  ADD UNIQUE KEY `CustomerPhone` (`CustomerPhone`),
  ADD UNIQUE KEY `CustomerEmail` (`CustomerEmail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `memberheader`
--
ALTER TABLE `memberheader`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
