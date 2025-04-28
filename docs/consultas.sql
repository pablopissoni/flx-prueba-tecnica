-- En este archivo deben estar tus ejercicios de consultas sql

-- 1. Empreados ordenados alfabeticamente por nombre (descendente Z-A)
SELECT nombres from empleados ORDER BY nombres DESC;

-- 2. Muestra el 'nombre', 'puesto' y 'localidad' de los empleados de 'Soporte'
SELECT e.nombres, p.puesto, l.localidad
FROM empleados e
JOIN puestos p ON e.puesto_id = p.id
JOIN departamentos d ON e.departamento_id = d.id
JOIN localidades l ON d.localidad_id = l.id
WHERE p.puesto = 'Soporte';

-- 3. Muestro los empleados cuyo nombre termian con la letra 'o'
SELECT nombres FROM empleados WHERE nombres LIKE '%o';

-- 4. Muestro 3 campos 'nombre', 'sueldo' y 'localidad' de empleados que trabajan en Carlos Paz
SELECT e.nombres, e.sueldo, l.localidad
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id
JOIN localidades l ON d.localidad_id = l.id
WHERE l.localidad = 'Carlos Paz';

-- 5. Muestra 'nombre', 'sueldo' y 'localidad' de empleados con sueldo entre 10000 y 13000
SELECT e.nombres, e.sueldo, l.localidad
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id
JOIN localidades l ON d.localidad_id = l.id
WHERE e.sueldo BETWEEN 10000 AND 13000;

-- 6. Departamentos con mas de 5 empleados
SELECT d.denominacion, l.localidad, COUNT(e.departamento_id) AS empleados_totales
FROM DEPARTAMENTOS d
JOIN EMPLEADOS e ON d.id = e.departamento_id
JOIN LOCALIDADES l ON d.localidad_id = l.id
GROUP BY d.denominacion, l.localidad
HAVING empleados_totales > 5;

-- 7. Empleados en Córdoba con puesto de Analista o Programador
SELECT e.nombres, p.puesto 
FROM empleados e
JOIN puestos p ON e.puesto_id = p.id
JOIN departamentos d ON e.departamento_id = d.id
JOIN localidades l ON d.localidad_id = l.id
WHERE p.puesto IN ('Analista', 'Programador') AND l.localidad = 'Córdoba';

-- 8. El Sueldo medio de todos los empleados
SELECT AVG(sueldo) AS Sueldo_promedio FROM empleados;

-- 9. Monto maximo de sueldo en los empleados del departamento 10
SELECT MAX(sueldo) AS Sueldo_maximo
FROM empleados
WHERE departamento_id = 10;

-- 10. Muestro el sueldo minimo en el departamento de 'Soporte'
SELECT MIN(sueldo) AS Sueldo_minimo
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id
WHERE d.denominacion = 'Soporte';

-- 11. Suma de los sueldos por puestos
SELECT p.puesto, SUM(e.sueldo) AS Sueldo_total
FROM empleados e
JOIN puestos p ON e.puesto_id = p.id
GROUP BY p.puesto;

-- Opcional: algunas de las consultas anteriores pueden agregarse ORDER BY para ordenar los resultados Ejemplo 'ORDER BY e.nombres ASC'