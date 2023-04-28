create database HOTEL;
use HOTEL;

CREATE TABLE Clientes (
  id INT NOT NULL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  telefono VARCHAR(20) NOT NULL
);

CREATE TABLE Habitaciones (
  id INT NOT NULL PRIMARY KEY,
  numero INT NOT NULL,
  tipo VARCHAR(20) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  disponible BOOLEAN NOT NULL
);

CREATE TABLE Reservas (
  id INT NOT NULL PRIMARY KEY,
  fecha_entrada DATE NOT NULL,
  fecha_salida DATE NOT NULL,
  id_cliente INT NOT NULL,
  id_habitacion INT NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES Clientes(id),
  FOREIGN KEY (id_habitacion) REFERENCES Habitaciones(id)
);

/*Habitacion disponible*/
SELECT * FROM Habitaciones
WHERE disponible = true;

/*reserva por id de cada cliente*/
SELECT * FROM Reservas
WHERE cliente_id = 3;

/*Reserva por un cliente */
SELECT Reservas.id, Reservas.fecha_entrada, Reservas.fecha_salida, Habitaciones.numero, Habitaciones.tipo, Habitaciones.precio
FROM Reservas
INNER JOIN Habitaciones ON Reservas.id_habitacion = Habitaciones.id;

INSERT INTO Clientes (id, nombre, direccion, telefono)
VALUES (1, 'Juan Pérez', 'Calle Falsa 123', '555-1234'),
       (2, 'María Gómez', 'Avenida Siempreviva 456', '555-5678'),
       (3, 'Pedro Martínez', 'Plaza Mayor 789', '555-9012');

INSERT INTO Habitaciones (id, numero, tipo, precio, disponible)
VALUES (1, 101, 'individual', 50.00, TRUE),
       (2, 102, 'doble', 75.00, TRUE),
       (3, 103, 'doble', 75.00, FALSE),
       (4, 201, 'triple', 100.00, TRUE),
       (5, 202, 'triple', 100.00, TRUE),
       (6, 203, 'triple', 100.00, FALSE);

INSERT INTO Reservas (id, fecha_entrada, fecha_salida, id_cliente, id_habitacion)
VALUES (1, '2023-05-01', '2023-05-05', 1, 1),
       (2, '2023-05-02', '2023-05-04', 2, 2),
       (3, '2023-05-03', '2023-05-06', 1, 3),
       (4, '2023-05-04', '2023-05-07', 3, 6),
       (5, '2023-05-05', '2023-05-07', 2, 5),
       (6, '2023-05-06', '2023-05-08', 3, 4);



