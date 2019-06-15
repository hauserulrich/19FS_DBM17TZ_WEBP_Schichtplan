-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 13. Jun 2019 um 18:40
-- Server-Version: 10.1.23-MariaDB-9+deb9u1
-- PHP-Version: 7.0.19-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `741853_1_1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `arbeitsplatz`
--

CREATE TABLE `arbeitsplatz` (
  `id_ap` int(11) NOT NULL,
  `beschreibung` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `arbeitsplatz`
--

INSERT INTO `arbeitsplatz` (`id_ap`, `beschreibung`) VALUES
(4, 'Abwasch'),
(2, 'Bar'),
(3, 'Küche'),
(48, 'Küchenhelfer'),
(44, 'Putzen'),
(36, 'Tische'),
(51, 'Toiletten'),
(9, 'Werkbank');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mitarbeiter`
--

CREATE TABLE `mitarbeiter` (
  `id_ma` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `mitarbeiter`
--

INSERT INTO `mitarbeiter` (`id_ma`, `name`) VALUES
(148, ''),
(174, 'david'),
(163, 'Hansjakob'),
(147, 'Hansjörg'),
(42, 'Joanna'),
(120, 'Karl'),
(49, 'Lucas'),
(173, 'Marvin'),
(108, 'Meier'),
(124, 'Natalie'),
(41, 'Nicola'),
(125, 'Niculin'),
(130, 'Oliver'),
(149, 'pew'),
(40, 'Robert'),
(47, 'Sabrina'),
(146, 'Saskia'),
(172, 'Trebi'),
(169, 'Tref');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `schicht`
--

CREATE TABLE `schicht` (
  `id_sp` int(11) NOT NULL,
  `id_ma` int(11) NOT NULL,
  `id_ap` int(11) NOT NULL,
  `datum` date NOT NULL,
  `zeitvon` time NOT NULL,
  `zeitbis` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `schicht`
--

INSERT INTO `schicht` (`id_sp`, `id_ma`, `id_ap`, `datum`, `zeitvon`, `zeitbis`) VALUES
(102, 42, 3, '2019-05-15', '08:00:00', '17:00:00'),
(104, 41, 4, '2019-05-13', '09:00:00', '17:00:00'),
(105, 147, 4, '2019-05-21', '00:00:00', '07:00:00'),
(106, 124, 2, '2019-05-22', '20:00:00', '18:00:00'),
(110, 42, 4, '2019-05-20', '08:00:00', '17:00:00'),
(113, 147, 3, '2019-05-15', '08:00:00', '17:00:00'),
(114, 147, 4, '2019-05-16', '08:00:00', '17:00:00'),
(116, 147, 4, '2019-05-17', '08:00:00', '17:00:00'),
(118, 147, 4, '2019-05-18', '08:00:00', '17:00:00'),
(119, 147, 4, '2019-05-20', '08:00:00', '17:00:00'),
(120, 124, 4, '2019-05-15', '08:00:00', '17:00:00'),
(121, 174, 9, '2019-06-14', '08:00:00', '17:00:00'),
(122, 174, 9, '2019-06-14', '00:00:00', '17:00:00');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `arbeitsplatz`
--
ALTER TABLE `arbeitsplatz`
  ADD PRIMARY KEY (`id_ap`),
  ADD UNIQUE KEY `beschreibung` (`beschreibung`);

--
-- Indizes für die Tabelle `mitarbeiter`
--
ALTER TABLE `mitarbeiter`
  ADD PRIMARY KEY (`id_ma`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indizes für die Tabelle `schicht`
--
ALTER TABLE `schicht`
  ADD PRIMARY KEY (`id_sp`),
  ADD KEY `id_ma` (`id_ma`),
  ADD KEY `id_ap` (`id_ap`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `arbeitsplatz`
--
ALTER TABLE `arbeitsplatz`
  MODIFY `id_ap` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
--
-- AUTO_INCREMENT für Tabelle `mitarbeiter`
--
ALTER TABLE `mitarbeiter`
  MODIFY `id_ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;
--
-- AUTO_INCREMENT für Tabelle `schicht`
--
ALTER TABLE `schicht`
  MODIFY `id_sp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `schicht`
--
ALTER TABLE `schicht`
  ADD CONSTRAINT `schicht_ibfk_1` FOREIGN KEY (`id_ma`) REFERENCES `mitarbeiter` (`id_ma`),
  ADD CONSTRAINT `schicht_ibfk_2` FOREIGN KEY (`id_ap`) REFERENCES `arbeitsplatz` (`id_ap`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
