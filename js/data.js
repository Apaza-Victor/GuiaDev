const DOCS_DATA = {
  categories: [
  {
    "id": "db",
    "title": "Base de Datos",
    "icon": "fa-solid fa-database",
    "color": "#f59e0b",
    "subcategories": [
      {
        "id": "oracle",
        "title": "Oracle",
        "icon": "fa-solid fa-database",
        "lessons": [
          {
            "id": "oracle-intro",
            "title": "1. Introducción a Oracle",
            "content": "Aprende los fundamentos de Oracle Database y su configuración inicial",
            "sections": [
              "¿Qué es Oracle Database?",
              "Ediciones de Oracle y limitaciones de Oracle XE",
              "Arquitectura básica: instancia y base de datos",
              "Herramientas principales: SQL*Plus, SQL Developer"
            ],
            "contentFile": "content/db/oracle/oracle-intro.html"
          },
          {
            "id": "oracle-tipos",
            "title": "2. Tipos de Datos en Oracle",
            "content": "Conoce los diferentes tipos de datos disponibles en Oracle Database",
            "sections": [
              "Introducción a los tipos de datos",
              "Tipos numéricos (NUMBER, FLOAT, etc.)",
              "Tipos de caracteres (CHAR, VARCHAR2, CLOB)",
              "Tipos de fecha y hora (DATE, TIMESTAMP)",
              "Tipos binarios (RAW, BLOB, BFILE)",
              "Tipos especiales (ROWID, UROWID)",
              "Resumen y mejores prácticas"
            ],
            "contentFile": "content/db/oracle/oracle-tipos.html"
          },
          {
            "id": "oracle-restricciones",
            "title": "3. Restricciones (Constraints)",
            "content": "Aprende sobre las restricciones para mantener la integridad de datos en Oracle",
            "sections": [
              "Introducción a las restricciones",
              "PRIMARY KEY (Clave Primaria)",
              "FOREIGN KEY (Clave Foránea)",
              "UNIQUE (Restricción de Unicidad)",
              "CHECK (Restricción de Comprobación)",
              "NOT NULL (No Nulo)",
              "Ejemplos de combinación de restricciones",
              "Gestión de restricciones",
              "Mejores prácticas"
            ],
            "contentFile": "content/db/oracle/oracle-restricciones.html"
          },
          {
            "id": "oracle-ddl",
            "title": "4. DDL (Data Definition Language)",
            "content": "Aprende a definir y modificar estructuras de datos en Oracle",
            "sections": [
              "Introducción al DDL",
              "CREATE - Creación de objetos",
              "ALTER - Modificación de objetos",
              "DROP - Eliminación de objetos",
              "TRUNCATE - Vaciado rápido de tablas",
              "Mejores prácticas para DDL",
              "Consulta del diccionario de datos"
            ],
            "contentFile": "content/db/oracle/oracle-ddl.html"
          },
          {
            "id": "oracle-dml",
            "title": "5. DML (Data Manipulation Language)",
            "content": "Aprende a manipular datos en Oracle Database",
            "sections": [
              "Introducción al DML",
              "INSERT - Inserción de registros",
              "UPDATE - Actualización de datos",
              "DELETE - Eliminación de registros",
              "MERGE - Operaciones de upsert",
              "Consultas básicas con SELECT",
              "Transacciones en DML",
              "Mejores prácticas para DML"
            ],
            "contentFile": "content/db/oracle/oracle-dml.html"
          },
          {
            "id": "oracle-dcl",
            "title": "6. DCL (Data Control Language)",
            "content": "Aprende a gestionar permisos y control de acceso en Oracle",
            "sections": [
              "Introducción al DCL",
              "GRANT - Asignación de privilegios",
              "REVOKE - Revocación de privilegios",
              "Creación y uso de roles",
              "Seguridad y buenas prácticas",
              "Consulta del diccionario de datos para seguridad"
            ],
            "contentFile": "content/db/oracle/oracle-dcl.html"
          },
          {
            "id": "oracle-tcl",
            "title": "7. TCL (Transaction Control Language)",
            "content": "Aprende a gestionar transacciones en Oracle Database",
            "sections": [
              "Introducción al TCL",
              "COMMIT - Confirmación de transacciones",
              "ROLLBACK - Reversión de cambios",
              "SAVEPOINT - Puntos de guardado intermedios",
              "Manejo de transacciones en Oracle XE",
              "Niveles de aislamiento de transacciones",
              "Transacciones distribuidas",
              "Mejores prácticas para transacciones"
            ],
            "contentFile": "content/db/oracle/oracle-tcl.html"
          },
          {
            "id": "oracle-usuarios",
            "title": "8. Administración de Usuarios, Permisos y Roles",
            "content": "Aprende a gestionar usuarios y sus privilegios en Oracle Database",
            "sections": [
              "Introducción a la administración de usuarios",
              "Creación y gestión de usuarios",
              "Configuración de contraseñas y cuotas",
              "Asignación de privilegios de sistema y de objeto",
              "Creación y administración de roles",
              "Buenas prácticas de seguridad en Oracle"
            ],
            "contentFile": "content/db/oracle/oracle-usuarios.html"
          },
          {
            "id": "oracle-funciones",
            "title": "9. Funciones Oracle",
            "content": "Aprende las funciones de Oracle Database",
            "sections": [
              "Introducción a las funciones de Oracle",
              "Funciones de cadenas",
              "Funciones numéricas",
              "Funciones de fecha y hora",
              "Funciones de conversión",
              "Funciones de grupo (agregación)",
              "Funciones analíticas",
              "Conclusión"
            ],
            "contentFile": "content/db/oracle/oracle-funciones.html"
          },
          {
            "id": "oracle-procesamientos-funciones-vistas",
            "title": "10. Procesamientos, Funciones y Vistas",
            "content": "Aprende a desarrollar procedimientos almacenados, funciones y vistas en Oracle",
            "sections": [
              "Introducción a los objetos de programación en Oracle",
              "Procedimientos almacenados",
              "Funciones almacenadas",
              "Vistas",
              "Ejemplos prácticos de modularización",
              "Conclusión"
            ],
            "contentFile": "content/db/oracle/oracle-procesamientos-funciones-vistas.html"
          },
          {
            "id": "oracle-plsql",
            "title": "11. Programación con PL/SQL",
            "content": "Aprende a desarrollar procedimientos y funciones con PL/SQL en Oracle",
            "sections": [
              "Introducción a PL/SQL",
              "Variables y estructuras de control",
              "Manejo de excepciones",
              "Cursores explícitos e implícitos",
              "Paquetes en PL/SQL",
              "Resumen"
            ],
            "contentFile": "content/db/oracle/oracle-plsql.html"
          },
          {
            "id": "oracle-objetos",
            "title": "12. Triggers, secuencias, índices y otros objetos avanzados",
            "content": "Aprende sobre triggers, secuencias, índices y otros objetos avanzados en Oracle",
            "sections": [
              "Secuencias",
              "Triggers (disparadores)"
            ],
            "contentFile": "content/db/oracle/oracle-objetos.html"
          }
        ]
      },
      {
        "id": "mysql",
        "title": "MySQL",
        "icon": "fa-solid fa-server",
        "lessons": [
          {
            "id": "mysql-intro",
            "title": "1. Introducción a MySQL",
            "content": "MySQL es el sistema de bases de datos open source más popular del mundo.",
            "sections": [
              "¿Qué es MySQL?",
              "Instalación",
              "MySQL Workbench"
            ],
            "contentFile": "content/db/mysql/mysql-intro.html"
          },
          {
            "id": "mysql-tipos-datos",
            "title": "2. Tipos de datos en MySQL",
            "content": "Domina los tipos numéricos, de texto, fecha y especiales de MySQL para diseñar tablas correctas desde el inicio.",
            "sections": [
              "Tipos numéricos",
              "Tipos de texto",
              "Fecha y hora",
              "Ejemplo integral"
            ],
            "contentFile": "content/db/mysql/mysql-tipos-datos.html"
          },
          {
            "id": "mysql-ddl",
            "title": "3. Creación y modificación de tablas (DDL)",
            "content": "Crea bases de datos y tablas, altera estructuras y aprende cuándo usar TRUNCATE, DELETE o DROP.",
            "sections": [
              "Crear base de datos",
              "CREATE TABLE",
              "ALTER TABLE",
              "Vaciar y eliminar"
            ],
            "contentFile": "content/db/mysql/mysql-ddl.html"
          },
          {
            "id": "mysql-restricciones",
            "title": "4. Restricciones (Constraints)",
            "content": "Garantiza la integridad de tus datos con PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, DEFAULT y CHECK.",
            "sections": [
              "PRIMARY KEY y AUTO_INCREMENT",
              "FOREIGN KEY",
              "UNIQUE, NOT NULL, DEFAULT y CHECK",
              "Restricciones con nombre"
            ],
            "contentFile": "content/db/mysql/mysql-restricciones.html"
          },
          {
            "id": "mysql-dml",
            "title": "5. Insertar, actualizar y eliminar (DML)",
            "content": "Manipula datos con INSERT, UPDATE y DELETE, incluyendo inserción múltiple y UPDATE con JOIN.",
            "sections": [
              "INSERT",
              "UPDATE",
              "DELETE",
              "INSERT ... SELECT"
            ],
            "contentFile": "content/db/mysql/mysql-dml.html"
          },
          {
            "id": "mysql-select",
            "title": "6. Consultas SELECT",
            "content": "Filtra, ordena y pagina datos con WHERE, LIKE, IN, BETWEEN, ORDER BY, LIMIT y DISTINCT.",
            "sections": [
              "SELECT básico y alias",
              "Filtrar con WHERE",
              "Ordenar y paginar",
              "DISTINCT y combinaciones"
            ],
            "contentFile": "content/db/mysql/mysql-select.html"
          },
          {
            "id": "mysql-joins",
            "title": "7. JOINS en MySQL",
            "content": "Combina tablas relacionadas con INNER JOIN, LEFT JOIN, RIGHT JOIN, CROSS JOIN y auto-join.",
            "sections": [
              "INNER JOIN",
              "LEFT y RIGHT JOIN",
              "CROSS JOIN y auto-join",
              "Más de dos tablas"
            ],
            "contentFile": "content/db/mysql/mysql-joins.html"
          },
          {
            "id": "mysql-agregacion",
            "title": "8. Agregación y agrupamiento",
            "content": "Resume información con COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING y GROUP_CONCAT.",
            "sections": [
              "Funciones de agregación",
              "GROUP BY",
              "HAVING vs WHERE",
              "GROUP_CONCAT y WITH ROLLUP"
            ],
            "contentFile": "content/db/mysql/mysql-agregacion.html"
          },
          {
            "id": "mysql-vistas-rutinas",
            "title": "9. Vistas, procedimientos y triggers",
            "content": "Encapsula consultas en vistas, automatiza lógica con procedimientos almacenados y reacciona a cambios con triggers.",
            "sections": [
              "Vistas (VIEW)",
              "Procedimientos almacenados",
              "Funciones almacenadas",
              "Triggers"
            ],
            "contentFile": "content/db/mysql/mysql-vistas-rutinas.html"
          }
        ]
      },
      {
        "id": "sqlserver",
        "title": "SQL Server",
        "icon": "fa-brands fa-microsoft",
        "lessons": [
          {
            "id": "sqlserver-introduccion",
            "title": "1. Introducción a SQL Server",
            "content": "Qué es SQL Server, sus ediciones, herramientas oficiales y qué hace diferente a T-SQL del SQL estándar.",
            "sections": [
              "¿Qué es SQL Server?",
              "Ediciones",
              "Herramientas de trabajo",
              "Instancias y bases de datos"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-introduccion.html"
          },
          {
            "id": "sqlserver-instalacion",
            "title": "2. Instalación y primeros pasos",
            "content": "Instala SQL Server Express/Developer y SSMS paso a paso, crea tu primera base de datos y ejecuta tus primeras consultas.",
            "sections": [
              "Paso 1: instalar el motor",
              "Paso 2: instalar SSMS",
              "Paso 3: primera base de datos",
              "Verificar el entorno"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-instalacion.html"
          },
          {
            "id": "sqlserver-tipos-datos",
            "title": "3. Tipos de datos",
            "content": "Tipos numéricos exactos, cadenas Unicode NVARCHAR, fechas DATETIME2 y tipos especiales como UNIQUEIDENTIFIER.",
            "sections": [
              "Numéricos exactos",
              "Cadenas: CHAR, VARCHAR y NVARCHAR",
              "Fecha y hora",
              "Otros tipos útiles"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-tipos-datos.html"
          },
          {
            "id": "sqlserver-ddl",
            "title": "4. DDL: bases de datos y tablas",
            "content": "Crea y modifica bases de datos, tablas y esquemas; aprende TRUNCATE vs DELETE y el rol del esquema dbo.",
            "sections": [
              "Crear y eliminar bases de datos",
              "Esquemas (schemas)",
              "CREATE y ALTER TABLE",
              "TRUNCATE vs DELETE vs DROP"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-ddl.html"
          },
          {
            "id": "sqlserver-restricciones",
            "title": "5. Restricciones (Constraints)",
            "content": "PRIMARY KEY con IDENTITY, FOREIGN KEY con acciones referenciales, UNIQUE, CHECK y DEFAULT.",
            "sections": [
              "PRIMARY KEY + IDENTITY",
              "FOREIGN KEY y acciones referenciales",
              "UNIQUE, CHECK y NOT NULL",
              "Administrar restricciones"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-restricciones.html"
          },
          {
            "id": "sqlserver-consultas-basicas",
            "title": "6. Consultas básicas (SELECT)",
            "content": "TOP en lugar de LIMIT, filtrado con WHERE/LIKE/IN, paginación OFFSET-FETCH y DISTINCT.",
            "sections": [
              "SELECT y alias",
              "TOP: el LIMIT de SQL Server",
              "Filtrar con WHERE",
              "Paginación OFFSET-FETCH",
              "DISTINCT"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-consultas-basicas.html"
          },
          {
            "id": "sqlserver-joins",
            "title": "7. JOINS",
            "content": "INNER, LEFT, RIGHT, FULL OUTER, CROSS y auto-join con ejemplos progresivos.",
            "sections": [
              "INNER JOIN",
              "LEFT / RIGHT / FULL OUTER",
              "CROSS JOIN y auto-join",
              "Varias tablas encadenadas"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-joins.html"
          },
          {
            "id": "sqlserver-agregacion-grupos",
            "title": "8. Agregación y agrupamiento",
            "content": "COUNT/SUM/AVG/MIN/MAX, GROUP BY, HAVING, ROLLUP y GROUPING SETS.",
            "sections": [
              "Funciones de agregación",
              "GROUP BY y HAVING",
              "ROLLUP y GROUPING SETS",
              "Agregaciones con CASE"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-agregacion-grupos.html"
          },
          {
            "id": "sqlserver-subconsultas-ctes",
            "title": "9. Subconsultas y CTEs",
            "content": "Subconsultas escalares, EXISTS, correlacionadas, CTEs simples y recursivas con WITH.",
            "sections": [
              "Subconsultas escalares y con IN",
              "EXISTS y subconsultas correlacionadas",
              "CTE: Common Table Expressions",
              "CTE recursiva (jerarquías)"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-subconsultas-ctes.html"
          },
          {
            "id": "sqlserver-dml",
            "title": "10. DML: INSERT, UPDATE, DELETE y MERGE",
            "content": "Inserción múltiple, UPDATE con FROM/JOIN, cláusula OUTPUT y sincronización con MERGE.",
            "sections": [
              "INSERT",
              "UPDATE con FROM y JOIN",
              "DELETE y OUTPUT",
              "MERGE: upsert en una sentencia"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-dml.html"
          },
          {
            "id": "sqlserver-vistas-funciones",
            "title": "11. Vistas y funciones",
            "content": "Vistas normales e indexadas, funciones escalares, de tabla inline y multientencia.",
            "sections": [
              "Vistas",
              "Función escalar",
              "Función de tabla inline (TVF)"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-vistas-funciones.html"
          },
          {
            "id": "sqlserver-procedimientos-triggers",
            "title": "12. Procedimientos almacenados y triggers",
            "content": "Procedimientos con parámetros de entrada/salida, lógica condicional y triggers DML con inserted/deleted.",
            "sections": [
              "Procedimiento básico",
              "Parámetros OUTPUT y lógica",
              "Triggers DML"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-procedimientos-triggers.html"
          },
          {
            "id": "sqlserver-transacciones-errores",
            "title": "13. Transacciones y manejo de errores",
            "content": "ACID en la práctica: BEGIN/COMMIT/ROLLBACK, TRY...CATCH, XACT_ABORT y funciones ERROR_*.",
            "sections": [
              "Transacción básica",
              "TRY...CATCH",
              "XACT_ABORT y verificación"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-transacciones-errores.html"
          },
          {
            "id": "sqlserver-indices-rendimiento",
            "title": "14. Índices y rendimiento",
            "content": "Clustered vs nonclustered, índices con INCLUDE y filtrados, estadísticas y lectura de planes de ejecución.",
            "sections": [
              "Clustered vs Nonclustered",
              "Índices con INCLUDE y filtrados",
              "Medir antes de optimizar",
              "Mantenimiento"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-indices-rendimiento.html"
          },
          {
            "id": "sqlserver-seguridad",
            "title": "15. Seguridad: logins, usuarios y permisos",
            "content": "Autenticación vs autorización: logins a nivel servidor, usuarios por base, roles fijos y GRANT/DENY.",
            "sections": [
              "Login vs Usuario",
              "Roles fijos de base de datos",
              "GRANT, DENY y REVOKE",
              "Buenas prácticas"
            ],
            "contentFile": "content/db/sqlserver/sqlserver-seguridad.html"
          }
        ]
      }
    ]
  },
  {
    "id": "git",
    "title": "Control de Versiones",
    "icon": "fa-solid fa-code-branch",
    "color": "#3b82f6",
    "subcategories": [
      {
        "id": "github",
        "title": "GitHub",
        "icon": "fa-brands fa-git-alt",
        "lessons": [
          {
            "id": "git-intro",
            "title": "1. Introducción a Git y GitHub",
            "content": "Conceptos fundamentales de Git y GitHub, ventajas del control de versiones y flujo de trabajo básico",
            "sections": [
              "¿Qué es Git?",
              "¿Qué es GitHub?",
              "Ventajas del control de versiones",
              "Flujo de trabajo general en Git",
              "Conceptos clave que debes recordar",
              "Flujos de trabajo comunes",
              "Mejores prácticas desde el inicio",
              "Resumen"
            ],
            "contentFile": "content/git/github/git-intro.html"
          },
          {
            "id": "git-config",
            "title": "2. Configuración inicial",
            "content": "Aprende a configurar Git y GitHub desde cero para comenzar a trabajar con control de versiones",
            "sections": [
              "Crear una cuenta en GitHub",
              "Verificar correo y perfil",
              "Instalar Git en Windows, Linux y Mac",
              "Configurar Git por primera vez",
              "Limpiar credenciales anteriores (opcional)",
              "Autenticación con GitHub: Token Personal de Acceso (PAT)",
              "Conexión por HTTPS y SSH",
              "Probar conexión con GitHub",
              "Configuración adicional recomendada",
              "Verificación final",
              "Resumen"
            ],
            "contentFile": "content/git/github/git-config.html"
          },
          {
            "id": "git-fundamentos",
            "title": "3. Fundamentos de Git",
            "content": "Aprende los comandos básicos de Git, estados de archivos, commits y manejo del historial",
            "sections": [
              "Crear un repositorio local (git init)",
              "Estados de un archivo: working, staging, committed",
              "Agregar y confirmar cambios (git add, git commit)",
              "Consultar historial de commits (git log)",
              "Ignorar archivos con .gitignore",
              "Ejemplo práctico completo",
              "Comandos de ayuda y solución de problemas",
              "Resumen"
            ],
            "contentFile": "content/git/github/git-fundamentos.html"
          },
          {
            "id": "git-remotos",
            "title": "4. Repositorios remotos",
            "content": "Aprende a trabajar con repositorios remotos, clonar, conectar repositorios locales y sincronizar cambios",
            "sections": [
              "Crear repositorio en GitHub",
              "Clonar repositorio (git clone)",
              "Conectar repositorio local con remoto (git remote add)",
              "Subir cambios (git push)",
              "Descargar cambios (git pull, git fetch)",
              "Ejemplo práctico completo",
              "Trabajar con múltiples colaboradores",
              "Configuración avanzada de remotos",
              "Solución de problemas comunes",
              "Resumen"
            ],
            "contentFile": "content/git/github/git-remotos.html"
          },
          {
            "id": "git-ramas",
            "title": "5. Ramas en Git",
            "content": "Aprende a trabajar con ramas, crear flujos de desarrollo paralelo y fusionar cambios de manera eficiente",
            "sections": [
              "¿Qué es una rama?",
              "Crear, cambiar y eliminar ramas",
              "Fusionar ramas (git merge)",
              "Resolver conflictos de fusión",
              "Flujo típico con ramas: main, dev, feature",
              "Ejemplos prácticos completos",
              "Comandos avanzados con ramas",
              "Mejores prácticas con ramas",
              "Resumen"
            ],
            "contentFile": "content/git/github/git-ramas.html"
          },
          {
            "id": "git-colaborativo",
            "title": "6. Trabajo colaborativo",
            "content": "Aprende a trabajar en equipo con forks, pull requests y mejores prácticas de colaboración en GitHub",
            "sections": [
              "¿Qué es un fork?",
              "Crear un fork y trabajar en él",
              "Pull requests y revisión de código",
              "Buenas prácticas de colaboración",
              "Flujos de trabajo colaborativos",
              "Herramientas y automatización",
              "Ejemplo práctico: Contribuir a proyecto open source",
              "Resumen"
            ],
            "contentFile": "content/git/github/git-colaborativo.html"
          },
          {
            "id": "git-flujo",
            "title": "7. Flujo básico",
            "content": "Aprende el flujo básico de Git.",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/git/github/git-flujo.html"
          }
        ]
      }
    ]
  },
  {
    "id": "lenguajes",
    "title": "Lenguajes de Programación",
    "icon": "fa-solid fa-laptop-code",
    "color": "#8b5cf6",
    "subcategories": [
      {
        "id": "sql",
        "title": "SQL",
        "icon": "fa-solid fa-table",
        "lessons": [
          {
            "id": "sql-introduccion",
            "title": "1. Introducción a SQL",
            "content": "Aprende los fundamentos de SQL, diferencias entre motores y configuración inicial",
            "sections": [
              "1.1. ¿Qué es SQL?",
              "1.2. Diferencias entre MySQL, Oracle y otros motores",
              "1.3. Instalación y configuración (MySQL Workbench, Oracle SQL Developer)",
              "1.4. Conexión y ejecución de consultas en ambos motores"
            ],
            "contentFile": "content/lenguajes/sql/sql-introduccion.html"
          },
          {
            "id": "sql-fundamentos",
            "title": "2. Fundamentos de SQL (DDL)",
            "content": "Aprende sobre la sintaxis básica, tipos de datos y operaciones de definición de datos en SQL",
            "sections": [
              "2.1. Sintaxis básica de SQL",
              "2.2. Tipos de datos en MySQL y Oracle",
              "2.3. Crear y eliminar bases de datos (CREATE DATABASE, DROP DATABASE) (MySQL)",
              "2.4. Crear y modificar esquemas (Oracle)",
              "2.5. Crear y modificar tablas (CREATE TABLE, ALTER TABLE)",
              "2.6. Eliminar tablas (DROP TABLE)",
              "2.7. Vaciar tablas (TRUNCATE TABLE)",
              "2.8. Restricciones (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK)",
              "Conclusión"
            ],
            "contentFile": "content/lenguajes/sql/sql-fundamentos.html"
          },
          {
            "id": "sql-manipulacion",
            "title": "3. Manipulación de Datos (DML)",
            "content": "Aprende a insertar, consultar, actualizar y eliminar datos en bases de datos SQL",
            "sections": [
              "3.1. Insertar registros (INSERT)",
              "3.2. Consultar datos (SELECT)",
              "3.3. Filtrar resultados (WHERE)",
              "3.4. Ordenar resultados (ORDER BY)",
              "3.5. Limitar resultados (LIMIT en MySQL, ROWNUM en Oracle)",
              "3.6. Actualizar registros (UPDATE)",
              "3.7. Eliminar registros (DELETE)"
            ],
            "contentFile": "content/lenguajes/sql/sql-manipulacion.html"
          },
          {
            "id": "sql-consultas-avanzadas",
            "title": "4. Consultas Avanzadas",
            "content": "Aprende a utilizar funciones de agregación, agrupaciones y consultas combinadas en SQL",
            "sections": [
              "4.1. Funciones de agregación (SUM, AVG, COUNT, MAX, MIN)",
              "4.2. Agrupar datos (GROUP BY)",
              "4.3. Filtrar grupos (HAVING)",
              "4.4. Subconsultas (Subqueries)",
              "4.5. Consultas combinadas (UNION, INTERSECT, MINUS/EXCEPT)",
              "4.6. Joins (INNER, LEFT, RIGHT, FULL)",
              "4.7. Joins cruzados (CROSS JOIN)"
            ],
            "contentFile": "content/lenguajes/sql/sql-consultas-avanzadas.html"
          },
          {
            "id": "sql-vistas-procedimientos",
            "title": "5. Vistas, Procedimientos y Funciones",
            "content": "Aprende a crear y utilizar vistas, procedimientos almacenados y funciones en SQL",
            "sections": [
              "5.1. Crear vistas (CREATE VIEW)",
              "5.2. Actualizar vistas (CREATE OR REPLACE VIEW)",
              "5.3. Procedimientos almacenados (CREATE PROCEDURE)",
              "5.4. Funciones definidas por el usuario (CREATE FUNCTION)",
              "5.5. Paquetes en Oracle (CREATE PACKAGE)",
              "5.6. Ejemplos prácticos en ambos motores"
            ],
            "contentFile": "content/lenguajes/sql/sql-vistas-procedimientos.html"
          },
          {
            "id": "sql-seguridad-control",
            "title": "6. Seguridad y Control de Accesos (DCL)",
            "content": "Aprende a gestionar usuarios, permisos y roles en bases de datos SQL",
            "sections": [
              "6.1. Crear usuarios (CREATE USER)",
              "6.2. Conceder permisos (GRANT)",
              "6.3. Revocar permisos (REVOKE)",
              "6.4. Roles y gestión de privilegios",
              "6.5. Diferencias en MySQL y Oracle",
              "Conclusión"
            ],
            "contentFile": "content/lenguajes/sql/sql-seguridad-control.html"
          },
          {
            "id": "sql-transacciones",
            "title": "7. Gestión de Transacciones (TCL)",
            "content": "Aprende a gestionar transacciones, commits y rollbacks en bases de datos SQL",
            "sections": [
              "7.1. Concepto de transacción",
              "7.2. Iniciar transacciones (BEGIN, START TRANSACTION)",
              "7.3. Confirmar cambios (COMMIT)",
              "7.4. Deshacer cambios (ROLLBACK)",
              "7.5. Puntos de guardado (SAVEPOINT, RELEASE SAVEPOINT)",
              "7.6. Control de concurrencia y bloqueos",
              "Conclusión"
            ],
            "contentFile": "content/lenguajes/sql/sql-transacciones.html"
          },
          {
            "id": "sql-optimizacion",
            "title": "8. Optimización y Buenas Prácticas",
            "content": "Aprende a optimizar consultas, crear índices y aplicar buenas prácticas en SQL",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/lenguajes/sql/sql-optimizacion.html"
          }
        ]
      },
      {
        "id": "php",
        "title": "PHP",
        "icon": "fa-brands fa-php",
        "lessons": [
          {
            "id": "php-introduccion",
            "title": "1. Introducción a PHP",
            "content": "Conoce qué es PHP, su historia, instalación y cómo crear tu primer script",
            "sections": [
              "¿Qué es PHP?",
              "Historia y versiones",
              "Instalación (XAMPP, Laragon)",
              "Primer script en PHP",
              "Recursos adicionales"
            ],
            "contentFile": "content/lenguajes/php/php-introduccion.html"
          },
          {
            "id": "php-sintaxis-basica",
            "title": "2. Sintaxis básica",
            "content": "Aprende sobre variables, constantes, tipos de datos, operadores y comentarios en PHP",
            "sections": [
              "Variables y Constantes",
              "Tipos de Datos",
              "Operadores",
              "Comentarios"
            ],
            "contentFile": "content/lenguajes/php/php-sintaxis-basica.html"
          },
          {
            "id": "php-control-flujo",
            "title": "3. Control de flujo",
            "content": "Aprende sobre condicionales, bucles y cómo incluir archivos en PHP",
            "sections": [
              "Condicionales",
              "Bucles",
              "Incluir Archivos"
            ],
            "contentFile": "content/lenguajes/php/php-control-flujo.html"
          },
          {
            "id": "php-funciones",
            "title": "4. Funciones",
            "content": "Aprende a definir y utilizar funciones, parámetros, retorno y funciones anónimas en PHP",
            "sections": [
              "Definición de Funciones",
              "Parámetros y Retorno",
              "Funciones Predefinidas",
              "Funciones Anónimas"
            ],
            "contentFile": "content/lenguajes/php/php-funciones.html"
          },
          {
            "id": "php-arreglos-strings",
            "title": "5. Arreglos y strings",
            "content": "Aprende sobre arreglos indexados y asociativos, funciones para arrays y manipulación de cadenas en PHP",
            "sections": [
              "Arreglos (Arrays)",
              "Funciones para Arrays",
              "Manipulación de Cadenas (Strings)"
            ],
            "contentFile": "content/lenguajes/php/php-arreglos-strings.html"
          },
          {
            "id": "php-formularios-http",
            "title": "6. Formularios y métodos HTTP",
            "content": "Aprende sobre formularios con GET y POST, validación de datos y variables superglobales en PHP",
            "sections": [
              "Formularios con GET y POST",
              "Validación de Datos",
              "Variables Superglobales en PHP",
              "Resumen"
            ],
            "contentFile": "content/lenguajes/php/php-formularios-http.html"
          },
          {
            "id": "php-manejo-archivos",
            "title": "7. Manejo de archivos",
            "content": "Aprende a leer, escribir y manipular archivos y directorios en PHP",
            "sections": [
              "Leer y Escribir Archivos",
              "Subir Archivos",
              "Funciones de Sistema de Archivos",
              "Resumen"
            ],
            "contentFile": "content/lenguajes/php/php-manejo-archivos.html"
          },
          {
            "id": "php-base-datos",
            "title": "8. Base de datos (MySQL)",
            "content": "Aprende a conectar PHP con MySQL, realizar consultas y manejar resultados",
            "sections": [
              "Conexión con PDO",
              "Consultas Básicas: SELECT, INSERT, UPDATE, DELETE",
              "Consultas Preparadas",
              "Ejemplo Completo: CRUD con PDO",
              "Resumen"
            ],
            "contentFile": "content/lenguajes/php/php-base-datos.html"
          },
          {
            "id": "php-poo",
            "title": "9. Programación orientada a objetos",
            "content": "Aprende sobre clases, objetos, herencia, interfaces y traits en PHP",
            "sections": [
              "Clases y Objetos",
              "Propiedades y Métodos",
              "Encapsulamiento, Herencia y Polimorfismo",
              "Autoload y Namespaces",
              "Resumen y Mejores Prácticas"
            ],
            "contentFile": "content/lenguajes/php/php-poo.html"
          },
          {
            "id": "php-sesiones-cookies",
            "title": "10. Manejo de sesiones y cookies",
            "content": "Aprende a gestionar sesiones de usuario y cookies para mantener estados en PHP",
            "sections": [
              "Sesiones en PHP",
              "Cookies en PHP",
              "Comparación entre Sesiones y Cookies",
              "Mejores prácticas",
              "Conclusión"
            ],
            "contentFile": "content/lenguajes/php/php-sesiones-cookies.html"
          },
          {
            "id": "php-errores-excepciones",
            "title": "11. Manejo de errores y excepciones",
            "content": "Aprende a manejar errores y excepciones en PHP de forma efectiva",
            "sections": [
              "¿Qué es un Error y qué es una Excepción?",
              "Tipos Comunes de Errores en PHP",
              "Uso de try, catch y finally",
              "Lanzar Excepciones Manualmente con throw",
              "Buenas Prácticas",
              "Resumen"
            ],
            "contentFile": "content/lenguajes/php/php-errores-excepciones.html"
          },
          {
            "id": "php-ajax-php",
            "title": "12. AJAX",
            "content": "Aprende a usar AJAX con PHP",
            "sections": [
              "¿Qué es AJAX y para qué se usa?",
              "Uso Básico de fetch() para Peticiones GET",
              "Enviar Datos al Servidor con Peticiones POST",
              "Procesar Respuestas JSON desde PHP",
              "Ejemplo Práctico Completo: Formulario de Contacto con AJAX",
              "Buenas Prácticas y Consejos",
              "Resumen"
            ],
            "contentFile": "content/lenguajes/php/php-ajax-php.html"
          },
          {
            "id": "php-buenas-practicas",
            "title": "13. Buenas prácticas",
            "content": "Aprende sobre seguridad, optimización y estándares de codificación en PHP",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/lenguajes/php/php-buenas-practicas.html"
          }
        ]
      },
      {
        "id": "java",
        "title": "Java",
        "icon": "fa-solid fa-mug-hot",
        "lessons": [
          {
            "id": "java-intro",
            "title": "1. Introducción a Java",
            "content": "Conoce qué es Java, sus características, instalación y cómo crear tu primer programa",
            "sections": [
              "¿Qué es Java?",
              "Características principales",
              "Instalación del JDK y configuración del entorno",
              "Tu primer programa: \"Hola Mundo\""
            ],
            "contentFile": "content/lenguajes/java/java-intro.html"
          },
          {
            "id": "java-types",
            "title": "2. Tipos de Datos y Variables",
            "content": "Aprende sobre tipos de datos primitivos, variables, constantes, conversión de tipos y ámbito de variables en Java",
            "sections": [
              "Tipos de datos en Java",
              "Resumen"
            ],
            "contentFile": "content/lenguajes/java/java-types.html"
          },
          {
            "id": "java-operators",
            "title": "3. Operadores en Java",
            "content": "Aprende sobre operadores aritméticos, relacionales, lógicos, de asignación y unarios en Java",
            "sections": [
              "2.2.1 Operadores aritméticos",
              "2.2.2 Operadores relacionales",
              "2.2.3 Operadores lógicos",
              "2.2.4 Operadores de asignación",
              "2.2.5 Operadores unarios y de incremento/decremento"
            ],
            "contentFile": "content/lenguajes/java/java-operators.html"
          },
          {
            "id": "java-io",
            "title": "4. Entrada y Salida en Consola",
            "content": "Aprende sobre la clase Scanner, lectura de datos desde consola, escritura de datos y formateo de salida en Java",
            "sections": [
              "2.3.1 Uso de la clase Scanner",
              "2.3.2 Lectura de datos desde consola",
              "2.3.3 Escritura de datos en consola",
              "2.3.4 Formateo de salida (printf, println)"
            ],
            "contentFile": "content/lenguajes/java/java-io.html"
          },
          {
            "id": "java-control",
            "title": "5. Estructuras de Control",
            "content": "Aprende sobre sentencias condicionales, bucles y control de flujo en Java",
            "sections": [
              "Sentencias condicionales (if, else, switch)",
              "Bucles (for, while, do-while)",
              "Control de flujo (break, continue, return)"
            ],
            "contentFile": "content/lenguajes/java/java-control.html"
          },
          {
            "id": "java-oop",
            "title": "6. Programación Orientada a Objetos",
            "content": "Aprende sobre clases, objetos, encapsulamiento, herencia, polimorfismo, abstracción e interfaces en Java",
            "sections": [
              "Clases y objetos",
              "Métodos y atributos",
              "Encapsulamiento",
              "Herencia",
              "Polimorfismo",
              "Abstracción",
              "Interfaces"
            ],
            "contentFile": "content/lenguajes/java/java-oop.html"
          },
          {
            "id": "java-arrays-collections",
            "title": "7. Manejo de Arreglos y Colecciones",
            "content": "Aprende sobre arreglos simples y multidimensionales, ArrayList, LinkedList, HashMap, HashSet y Generics en Java",
            "sections": [
              "Arreglos (simples y multidimensionales)",
              "ArrayList y LinkedList",
              "HashMap y HashSet",
              "Generics en colecciones",
              "Resumen"
            ],
            "contentFile": "content/lenguajes/java/java-arrays-collections.html"
          },
          {
            "id": "java-exceptions",
            "title": "8. Manejo de Excepciones",
            "content": "Aprende sobre excepciones, bloques try-catch-finally, lanzamiento y propagación de excepciones en Java",
            "sections": [
              "¿Qué son las excepciones?",
              "try, catch, finally",
              "Lanzamiento y propagación de excepciones",
              "Crear excepciones personalizadas",
              "Mejores prácticas en el manejo de excepciones",
              "Resumen"
            ],
            "contentFile": "content/lenguajes/java/java-exceptions.html"
          },
          {
            "id": "java-files",
            "title": "9. Entrada y Salida de Archivos",
            "content": "Aprende sobre lectura y escritura de archivos de texto, archivos binarios y serialización de objetos en Java",
            "sections": [
              "Lectura y escritura de archivos de texto",
              "Archivos binarios",
              "Manejo de BufferedReader y FileWriter",
              "Serialización de objetos",
              "Conclusión"
            ],
            "contentFile": "content/lenguajes/java/java-files.html"
          },
          {
            "id": "java-jdbc",
            "title": "10. Acceso a Bases de Datos con JDBC",
            "content": "Aprende sobre conexión a bases de datos, consultas, actualizaciones y transacciones con JDBC en Java",
            "sections": [
              "Introducción a JDBC",
              "Conexión a bases de datos",
              "Ejecutar consultas y actualizaciones"
            ],
            "contentFile": "content/lenguajes/java/java-jdbc.html"
          },
          {
            "id": "java-best-practices",
            "title": "11. Buenas Prácticas y Herramientas",
            "content": "Aprende sobre IDEs, organización del código, JavaDoc, pruebas unitarias y gestión de dependencias en Java",
            "sections": [
              "IDEs recomendados",
              "Organización del código",
              "Documentación con JavaDoc",
              "Pruebas unitarias con JUnit",
              "Gestión de dependencias"
            ],
            "contentFile": "content/lenguajes/java/java-best-practices.html"
          }
        ]
      },
      {
        "id": "python",
        "title": "Python",
        "icon": "fa-brands fa-python",
        "lessons": [
          {
            "id": "py-intro",
            "title": "1. Introducción a Python",
            "content": "¿Qué es Python y qué lo hace especial? Aplicaciones reales, instalación y primeros pasos en programación",
            "sections": [
              "<i class=\"fa-brands fa-python\"></i> 1.1 ¿Qué es Python y qué lo hace especial?",
              "<i class=\"fa-solid fa-earth-americas\"></i> 1.2 Aplicaciones reales de Python en el mundo",
              "<i class=\"fa-solid fa-laptop-code\"></i> 1.3 ¿Qué se necesita para programar? Hardware y mentalidad",
              "<i class=\"fa-solid fa-gear\"></i> 1.4 Instalación de Python y configuración del entorno",
              "<i class=\"fa-solid fa-print\"></i> 1.5 Primeros pasos: imprimir tu primer mensaje (print)",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 1.6 Comentarios y buenas prácticas desde el inicio",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-intro.html"
          },
          {
            "id": "py-variables",
            "title": "2. Variables y Tipos de Datos",
            "content": "¿Qué es una variable? Tipos de datos en Python, reglas de nomenclatura y conversión de tipos",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> 2.1 ¿Qué es una variable y cómo se crea?",
              "<i class=\"fa-solid fa-bullseye\"></i> 2.2 Tipos de datos: texto, números y booleanos",
              "<i class=\"fa-solid fa-clipboard-list\"></i> 2.3 Reglas para nombrar variables correctamente",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> 2.4 Función type() y comprobación de tipos",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 2.5 Conversiones entre tipos (int(), str(), float(), etc.)",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-variables.html"
          },
          {
            "id": "py-operators",
            "title": "3. Operadores y Expresiones",
            "content": "Operadores aritméticos, de comparación, lógicos y de asignación en Python",
            "sections": [
              "<i class=\"fa-solid fa-plus\"></i> 3.1 Operadores aritméticos: suma, resta, división, módulo",
              "<i class=\"fa-solid fa-scale-balanced\"></i> 3.2 Operadores de comparación",
              "<i class=\"fa-solid fa-shuffle\"></i> 3.3 Operadores lógicos: and, or, not",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 3.4 Operadores de asignación compuesta: +=, -=, *=, etc.",
              "<i class=\"fa-solid fa-dumbbell\"></i> 3.5 Ejercicios de práctica con operadores",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-operators.html"
          },
          {
            "id": "py-io",
            "title": "4. Entrada y Salida de Datos",
            "content": "Captura de datos con input(), mostrar resultados con print() y formateo con f-strings",
            "sections": [
              "<i class=\"fa-solid fa-keyboard\"></i> 4.1 La función input() para capturar datos del usuario",
              "<i class=\"fa-solid fa-print\"></i> 4.2 Mostrar resultados con print() y f-strings",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 4.3 Formateo de texto con variables (f\"\", format())",
              "<i class=\"fa-solid fa-circle-check\"></i> 4.4 Validación básica de entradas (ejemplo: edad, nombre)",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-io.html"
          },
          {
            "id": "py-condicionales",
            "title": "5. Control de Flujo Condicionales",
            "content": "Toma de decisiones en Python con if, elif, else y operadores relacionales",
            "sections": [
              "<i class=\"fa-solid fa-circle-question\"></i> 5.1 Qué es una decisión en programación",
              "<i class=\"fa-solid fa-shuffle\"></i> 5.2 Uso de if, elif, else con ejemplos sencillos",
              "<i class=\"fa-solid fa-scale-balanced\"></i> 5.3 Operadores relacionales aplicados a condiciones",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 5.4 Anidamiento de condiciones",
              "<i class=\"fa-solid fa-dumbbell\"></i> 5.5 Ejercicios guiados: validar edad, comparar números",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-condicionales.html"
          },
          {
            "id": "py-bucles",
            "title": "6. Control de Flujo Bucles",
            "content": "Repetición de tareas con while y for, uso de break, continue y pass",
            "sections": [
              "<i class=\"fa-solid fa-repeat\"></i> 6.1 ¿Qué es un bucle y por qué es útil?",
              "<i class=\"fa-solid fa-hourglass-half\"></i> 6.2 Bucle while: repetir mientras sea verdadero",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 6.3 Bucle for: recorrer listas y rangos",
              "<i class=\"fa-solid fa-bolt\"></i> 6.4 Instrucciones break, continue y pass",
              "<i class=\"fa-solid fa-dumbbell\"></i> 6.5 Práctica: contar, sumar y generar listas",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-bucles.html"
          },
          {
            "id": "py-lists",
            "title": "7. Listas y Colecciones de Datos",
            "content": "Listas, tuplas, sets y diccionarios en Python. Métodos y operaciones básicas",
            "sections": [
              "<i class=\"fa-solid fa-clipboard-list\"></i> 7.1 ¿Qué es una lista y cómo se crea?",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> 7.2 Acceso por índice, modificación y recorrido",
              "<i class=\"fa-solid fa-screwdriver-wrench\"></i> 7.3 Métodos comunes: append(), remove(), sort(), len()",
              "<i class=\"fa-solid fa-layer-group\"></i> 7.4 Introducción a tuplas, sets y diccionarios (nivel básico)",
              "<i class=\"fa-solid fa-scale-balanced\"></i> 7.5 Comparación entre listas, tuplas y conjuntos",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-lists.html"
          },
          {
            "id": "py-functions",
            "title": "8. Funciones en Python",
            "content": "Definición de funciones con def, parámetros, argumentos y valores de retorno",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> 8.1 ¿Qué es una función y para qué sirve?",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 8.2 Cómo definir funciones con def",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 8.3 Parámetros, argumentos y valores de retorno",
              "<i class=\"fa-solid fa-gear\"></i> 8.4 Funciones con valores por defecto",
              "<i class=\"fa-solid fa-ruler-combined\"></i> 8.5 Buenas prácticas al nombrar funciones",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-functions.html"
          },
          {
            "id": "py-modules",
            "title": "9. Módulos y Librerías Básicas",
            "content": "Uso de import, librerías estándar (math, random, datetime) e instalación con pip",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> 9.1 ¿Qué es un módulo? ¿Y una librería?",
              "<i class=\"fa-solid fa-download\"></i> 9.2 Uso de import y from ... import",
              "<i class=\"fa-solid fa-book-bookmark\"></i> 9.3 Librerías estándar: math, random, datetime",
              "<i class=\"fa-solid fa-box\"></i> 9.4 Instalación de librerías externas con pip",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-modules.html"
          },
          {
            "id": "py-strings",
            "title": "10. Manejo de Cadenas de Texto",
            "content": "Operaciones con strings, métodos de cadenas, búsqueda y manipulación de texto",
            "sections": [
              "<i class=\"fa-solid fa-pen-to-square\"></i> 10.1 Qué es una cadena (str)",
              "<i class=\"fa-solid fa-wrench\"></i> 10.2 Operaciones básicas: concatenación, repetición, longitud",
              "<i class=\"fa-solid fa-font\"></i> 10.3 Métodos de cadenas: lower(), upper(), replace()",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> 10.4 Búsqueda de texto: in, find(), startswith()",
              "<i class=\"fa-solid fa-scissors\"></i> 10.5 Manipulación de texto con split() y join()",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-strings.html"
          },
          {
            "id": "py-oop",
            "title": "11. Programación Orientada a Objetos",
            "content": "Clases, objetos, atributos, métodos, herencia y encapsulamiento en Python",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> 11.1 ¿Qué es la POO y por qué se usa?",
              "<i class=\"fa-solid fa-helmet-safety\"></i> 11.2 Crear clases y objetos en Python",
              "<i class=\"fa-solid fa-chart-column\"></i> 11.3 Propiedades (atributos) y comportamientos (métodos)",
              "<i class=\"fa-solid fa-clapperboard\"></i> 11.4 El método __init__() y su función",
              "<i class=\"fa-solid fa-lock\"></i> 11.5 Encapsulamiento y uso de self",
              "$1 $1 <i class=\"fa-solid fa-child\"></i> 11.6 Herencia y clases hijas",
              "<i class=\"fa-solid fa-gear\"></i> 11.7 Métodos especiales: __str__(), __len__(), etc.",
              "<i class=\"fa-solid fa-ruler-combined\"></i> 11.8 Buenas prácticas al diseñar clases",
              "<i class=\"fa-solid fa-bullseye\"></i> Resumen de la lección"
            ],
            "contentFile": "content/lenguajes/python/py-oop.html"
          }
        ]
      },
      {
        "id": "html",
        "title": "HTML",
        "icon": "fa-brands fa-html5",
        "lessons": [
          {
            "id": "html-intro",
            "title": "1. Introducción a HTML",
            "content": "¿Qué es HTML? Historia, estructura básica y relación con CSS y JavaScript",
            "sections": [
              "<i class=\"fa-solid fa-earth-americas\"></i> ¿Qué es HTML y para qué sirve?",
              "<i class=\"fa-solid fa-scroll\"></i> Historia Breve",
              "<i class=\"fa-solid fa-helmet-safety\"></i> Estructura Básica",
              "<i class=\"fa-solid fa-link\"></i> Relación con CSS y JavaScript",
              "<i class=\"fa-solid fa-thumbtack\"></i> Versiones de HTML",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/html/html-intro.html"
          },
          {
            "id": "html-basic",
            "title": "2. Elementos Básicos de HTML",
            "content": "Etiquetas, sintaxis, semántica, comentarios y anidamiento correcto",
            "sections": [
              "<i class=\"fa-solid fa-tag\"></i> Etiquetas y su Sintaxis",
              "<i class=\"fa-solid fa-bullseye\"></i> Etiquetas Semánticas vs No Semánticas",
              "<i class=\"fa-solid fa-comment\"></i> Comentarios en HTML",
              "<i class=\"fa-solid fa-bullseye\"></i> Anidamiento Correcto de Etiquetas",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/html/html-basic.html"
          },
          {
            "id": "html-cabecera-documento",
            "title": "3. Cabecera del Documento",
            "content": "Etiqueta head, title, meta tags, importación de estilos y scripts",
            "sections": [
              "<i class=\"fa-solid fa-brain\"></i> Uso de la Etiqueta ``",
              "<i class=\"fa-solid fa-file-lines\"></i> Etiqueta ``",
              "<i class=\"fa-solid fa-tag\"></i> Etiquetas ``",
              "<i class=\"fa-solid fa-palette\"></i> Importación de Hojas de Estilo",
              "<i class=\"fa-solid fa-bolt\"></i> Importación de Scripts",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/html/html-cabecera-documento.html"
          },
          {
            "id": "html-contenido-cuerpo",
            "title": "4. Contenido del Cuerpo",
            "content": "Etiquetas de texto, formato, listas, citas y abreviaciones",
            "sections": [
              "<i class=\"fa-solid fa-pen-to-square\"></i> Etiquetas de Texto",
              "<i class=\"fa-solid fa-palette\"></i> Etiquetas de Formato",
              "<i class=\"fa-solid fa-clipboard-list\"></i> Listas",
              "<i class=\"fa-solid fa-comment\"></i> Citas y Abreviaciones",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/html/html-contenido-cuerpo.html"
          },
          {
            "id": "html-enlaces-imagenes",
            "title": "5. Enlaces e Imágenes",
            "content": "Etiqueta a, img, rutas relativas y absolutas, imágenes como enlaces",
            "sections": [
              "<i class=\"fa-solid fa-link\"></i> Etiqueta `` - Enlaces",
              "<i class=\"fa-solid fa-folder-open\"></i> Rutas Relativas vs Absolutas",
              "<i class=\"fa-solid fa-image\"></i> Etiqueta `` - Imágenes",
              "$1 <i class=\"fa-solid fa-image\"></i> Imágenes como Enlaces",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/html/html-enlaces-imagenes.html"
          },
          {
            "id": "html-tablas",
            "title": "6. Tablas en HTML",
            "content": "Estructura de tablas, thead, tbody, tfoot, colspan y rowspan",
            "sections": [
              "<i class=\"fa-solid fa-clipboard-list\"></i> Estructura Básica de una Tabla",
              "<i class=\"fa-solid fa-layer-group\"></i> Agrupación de Contenido",
              "<i class=\"fa-solid fa-shuffle\"></i> Atributos colspan y rowspan",
              "<i class=\"fa-solid fa-palette\"></i> Estilos Recomendados para Tablas",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/html/html-tablas.html"
          },
          {
            "id": "html-forms",
            "title": "7. Formularios y Controles",
            "content": "Estructura de formularios, inputs, textarea, select, botones y validaciones HTML5",
            "sections": [
              "<i class=\"fa-solid fa-clipboard-list\"></i> Estructura Básica del ``",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Campos de Entrada ``",
              "<i class=\"fa-solid fa-file-lines\"></i> Textarea y Select",
              "<i class=\"fa-solid fa-circle-dot\"></i> Botones",
              "<i class=\"fa-solid fa-circle-check\"></i> Validaciones HTML5",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/html/html-forms.html"
          },
          {
            "id": "html-multimedia",
            "title": "8. Multimedia en HTML",
            "content": "Etiquetas audio, video, atributos y integración de contenido externo",
            "sections": [
              "<i class=\"fa-solid fa-music\"></i> Etiqueta ``",
              "<i class=\"fa-solid fa-video\"></i> Etiqueta ``",
              "<i class=\"fa-solid fa-gear\"></i> Atributos Comunes de Multimedia",
              "<i class=\"fa-solid fa-earth-americas\"></i> Integración de Contenido Externo",
              "<i class=\"fa-solid fa-bullseye\"></i> Mejores Prácticas",
              "<i class=\"fa-solid fa-universal-access\"></i> Consideraciones de Accesibilidad",
              "<i class=\"fa-solid fa-chart-column\"></i> Comparación: Nativo vs. Externo",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos Pasos",
              "<i class=\"fa-solid fa-book-bookmark\"></i> Recursos Adicionales"
            ],
            "contentFile": "content/lenguajes/html/html-multimedia.html"
          },
          {
            "id": "html-etiquetas-semanticas",
            "title": "9. Etiquetas Semánticas",
            "content": "Semántica web, header, main, footer, section, article, aside, nav y beneficios SEO",
            "sections": [
              "<i class=\"fa-solid fa-book-open\"></i> Introducción a la Semántica Web",
              "<i class=\"fa-solid fa-bullseye\"></i> Contenedores Semánticos Principales",
              "<i class=\"fa-solid fa-palette\"></i> Ejemplo Completo de Estructura Semántica",
              "<i class=\"fa-solid fa-rocket\"></i> Beneficios para SEO y Accesibilidad",
              "<i class=\"fa-solid fa-chart-column\"></i> Tabla Comparativa de Elementos Semánticos",
              "<i class=\"fa-solid fa-circle-check\"></i> Mejores Prácticas",
              "<i class=\"fa-solid fa-bullseye\"></i> Checklist de HTML Semántico",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos Pasos",
              "<i class=\"fa-solid fa-book-bookmark\"></i> Recursos Adicionales"
            ],
            "contentFile": "content/lenguajes/html/html-etiquetas-semanticas.html"
          },
          {
            "id": "html-estructura-avanzada",
            "title": "10. Estructura Avanzada",
            "content": "Organización modular, anclas, navegación interna, fuentes externas e íconos",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> Organización Modular de Contenido",
              "<i class=\"fa-solid fa-anchor\"></i> Anclas y Navegación Interna",
              "<i class=\"fa-solid fa-font\"></i> Importación de Fuentes Externas",
              "<i class=\"fa-solid fa-palette\"></i> Integración de Íconos",
              "<i class=\"fa-solid fa-palette\"></i> Ejemplo Completo Integrado",
              "<i class=\"fa-solid fa-circle-check\"></i> Mejores Prácticas",
              "<i class=\"fa-solid fa-bullseye\"></i> Checklist de Estructura Avanzada",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos Pasos",
              "<i class=\"fa-solid fa-book-bookmark\"></i> Recursos Adicionales"
            ],
            "contentFile": "content/lenguajes/html/html-estructura-avanzada.html"
          }
        ]
      },
      {
        "id": "css",
        "title": "CSS",
        "icon": "fa-brands fa-css3-alt",
        "lessons": [
          {
            "id": "css-intro",
            "title": "1. Introducción a CSS",
            "content": "¿Qué es CSS y para qué sirve? Cómo se integra CSS en HTML y anatomía de una regla CSS",
            "sections": [
              "¿Qué es CSS y para qué sirve?",
              "Cómo se integra CSS en HTML",
              "Anatomía de una regla CSS",
              "Comentarios en CSS",
              "Buenas prácticas iniciales",
              "Resumen"
            ],
            "contentFile": "content/lenguajes/css/css-intro.html"
          },
          {
            "id": "css-selectores-especificidad",
            "title": "2. Selectores y Especificidad",
            "content": "Selectores básicos, combinados, de atributos, pseudoclases, pseudoelementos y especificidad en CSS",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> Selectores básicos",
              "<i class=\"fa-solid fa-link\"></i> Selectores combinados",
              "<i class=\"fa-solid fa-clipboard-list\"></i> Selectores de atributos",
              "<i class=\"fa-solid fa-palette\"></i> Pseudoclases",
              "<i class=\"fa-solid fa-wand-magic-sparkles\"></i> Pseudoelementos",
              "<i class=\"fa-solid fa-bullseye\"></i> Especificidad y orden de aplicación",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/lenguajes/css/css-selectores-especificidad.html"
          },
          {
            "id": "css-colores-unidades",
            "title": "3. Colores y Unidades",
            "content": "Sistemas de color, transparencias, unidades absolutas y relativas, y variables CSS",
            "sections": [
              "<i class=\"fa-solid fa-palette\"></i> Sistemas de color en CSS",
              "<i class=\"fa-solid fa-droplet\"></i> Transparencias y opacidad",
              "<i class=\"fa-solid fa-ruler\"></i> Unidades en CSS",
              "<i class=\"fa-solid fa-palette\"></i> Variables CSS (Custom Properties)",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/lenguajes/css/css-colores-unidades.html"
          },
          {
            "id": "css-tipografia-texto",
            "title": "4. Tipografía y Texto",
            "content": "Propiedades de fuente, espaciado, alineación, decoración y uso de fuentes personalizadas",
            "sections": [
              "<i class=\"fa-solid fa-font\"></i> Propiedad `font-family` y tipos de fuente",
              "<i class=\"fa-solid fa-ruler\"></i> Tamaño, peso y estilo de fuente",
              "<i class=\"fa-solid fa-ruler-combined\"></i> Espaciado del texto",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Alineación y decoración del texto",
              "<i class=\"fa-solid fa-earth-americas\"></i> Fuentes personalizadas",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/lenguajes/css/css-tipografia-texto.html"
          },
          {
            "id": "css-modelo-caja",
            "title": "5. Cajas y Modelo de Caja",
            "content": "Propiedades width, height, padding, border, margin y box-sizing en CSS",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> ¿Qué es el Box Model?",
              "<i class=\"fa-solid fa-ruler-combined\"></i> Propiedades de dimensión",
              "<i class=\"fa-solid fa-palette\"></i> Padding (Relleno interno)",
              "<i class=\"fa-solid fa-square\"></i> Border (Borde)",
              "<i class=\"fa-solid fa-ruler\"></i> Margin (Margen externo)",
              "<i class=\"fa-solid fa-gear\"></i> Box-sizing: content-box vs border-box",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> Visualización con DevTools",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/lenguajes/css/css-modelo-caja.html"
          },
          {
            "id": "css-posicionamiento-display",
            "title": "6. Posicionamiento y Display",
            "content": "Propiedad display, position, z-index, overflow y visibilidad en CSS",
            "sections": [
              "<i class=\"fa-solid fa-tv\"></i> Propiedad `display`",
              "<i class=\"fa-solid fa-location-dot\"></i> Propiedad `position`",
              "<i class=\"fa-solid fa-list-ol\"></i> Propiedad `z-index`",
              "<i class=\"fa-solid fa-droplet\"></i> Propiedad `overflow`",
              "<i class=\"fa-solid fa-eye\"></i> Visibilidad y opacidad",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/lenguajes/css/css-posicionamiento-display.html"
          },
          {
            "id": "css-flexbox",
            "title": "7. Flexbox",
            "content": "Display flex, ejes, justify-content, align-items, flex-grow, flex-shrink y order",
            "sections": [
              "<i class=\"fa-solid fa-rocket\"></i> Introducción a Flexbox",
              "<i class=\"fa-solid fa-ruler-combined\"></i> Ejes en Flexbox",
              "<i class=\"fa-solid fa-bullseye\"></i> Alineación en el Eje Principal",
              "<i class=\"fa-solid fa-arrow-up\"></i> Alineación en el Eje Secundario",
              "<i class=\"fa-solid fa-box\"></i> Alineación de Múltiples Líneas",
              "<i class=\"fa-solid fa-wrench\"></i> Propiedades de los Flex Items",
              "<i class=\"fa-solid fa-ruler\"></i> Tamaño Flexible de Items",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> Orden y Reordenamiento",
              "<i class=\"fa-solid fa-palette\"></i> Ejemplos Prácticos Completos",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/lenguajes/css/css-flexbox.html"
          },
          {
            "id": "css-grid",
            "title": "8. Grid Layout",
            "content": "Display grid, grid-template, gap, áreas de grid, minmax, auto-fit y auto-fill",
            "sections": [
              "<i class=\"fa-solid fa-palette\"></i> Introducción a Grid",
              "<i class=\"fa-solid fa-ruler-combined\"></i> Grid Template - Definir filas y columnas",
              "<i class=\"fa-solid fa-ruler\"></i> Gap - Espaciado entre elementos",
              "<i class=\"fa-solid fa-bullseye\"></i> Alineación en Grid",
              "<i class=\"fa-solid fa-map\"></i> Áreas de Grid (grid-template-areas)",
              "<i class=\"fa-solid fa-wrench\"></i> Funciones Avanzadas de Grid",
              "<i class=\"fa-solid fa-shuffle\"></i> Combinar Grid y Flexbox",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/css/css-grid.html"
          },
          {
            "id": "css-estilos-avanzados",
            "title": "9. Estilos Avanzados",
            "content": "Bordes redondeados, sombras, degradados, imágenes de fondo y filtros visuales",
            "sections": [
              "<i class=\"fa-solid fa-square\"></i> Bordes Redondeados (border-radius)",
              "<i class=\"fa-solid fa-moon\"></i> Sombras (box-shadow)",
              "<i class=\"fa-solid fa-rainbow\"></i> Degradados (Gradients)",
              "<i class=\"fa-solid fa-image\"></i> Imágenes de Fondo (background)",
              "<i class=\"fa-solid fa-masks-theater\"></i> Filtros Visuales (filter)",
              "<i class=\"fa-solid fa-window-maximize\"></i> Efecto Blur con Transparencia (backdrop-filter)",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/css/css-estilos-avanzados.html"
          },
          {
            "id": "css-transiciones-animaciones",
            "title": "10. Transiciones y Animaciones",
            "content": "Transition, animation, @keyframes y estados dinámicos con hover, active y focus",
            "sections": [
              "<i class=\"fa-solid fa-arrows-rotate\"></i> Transiciones (transition)",
              "<i class=\"fa-solid fa-clapperboard\"></i> Animaciones (@keyframes)",
              "<i class=\"fa-solid fa-infinity\"></i> Animaciones Infinitas y por Pasos",
              "<i class=\"fa-solid fa-bullseye\"></i> Estados Dinámicos (hover, active, focus)",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/css/css-transiciones-animaciones.html"
          },
          {
            "id": "css-responsive-design",
            "title": "11. Responsive Design y Media Queries",
            "content": "Diseño responsivo, @media, breakpoints, diseño fluido y Mobile First",
            "sections": [
              "<i class=\"fa-solid fa-mobile-screen\"></i> Introducción al Responsive Design",
              "<i class=\"fa-solid fa-bullseye\"></i> Media Queries (@media)",
              "<i class=\"fa-solid fa-ruler\"></i> Breakpoints Estándar",
              "<i class=\"fa-solid fa-droplet\"></i> Diseño Fluido",
              "<i class=\"fa-solid fa-mobile-screen\"></i> Mobile First",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen",
              "<i class=\"fa-solid fa-rocket\"></i> Próximos pasos"
            ],
            "contentFile": "content/lenguajes/css/css-responsive-design.html"
          }
        ]
      },
      {
        "id": "javascript",
        "title": "JavaScript",
        "icon": "fa-brands fa-js",
        "lessons": [
          {
            "id": "js-intro",
            "title": "1. Introducción a JavaScript",
            "content": "Conoce los fundamentos de JavaScript, su historia y cómo funciona.",
            "sections": [
              "¿Qué es JavaScript?",
              "Historia del lenguaje",
              "Dónde y cómo se ejecuta",
              "Características principales",
              "Herramientas necesarias",
              "Tu primer programa",
              "Recursos adicionales"
            ],
            "contentFile": "content/lenguajes/javascript/js-intro.html"
          },
          {
            "id": "js-syntax",
            "title": "2. Sintaxis y estructura básica",
            "content": "Aprende la sintaxis fundamental y las reglas básicas de JavaScript.",
            "sections": [
              "Comentarios Básico",
              "Instrucciones y bloques de código",
              "Reglas de nombres y estilo",
              "Palabras reservadas",
              "Sensibilidad a mayúsculas/minúsculas",
              "Indentación y formato",
              "Buenas prácticas",
              "Herramientas de formato"
            ],
            "contentFile": "content/lenguajes/javascript/js-syntax.html"
          },
          {
            "id": "js-variables",
            "title": "3. Variables y constantes",
            "content": "Aprende cómo declarar y usar variables y constantes en JavaScript.",
            "sections": [
              "Declaración con var, let y const Importante",
              "Alcance (scope) y hoisting",
              "Hoisting",
              "Buenas prácticas al declarar",
              "Temporal Dead Zone (TDZ)",
              "Diferencias principales",
              "Ejercicios prácticos"
            ],
            "contentFile": "content/lenguajes/javascript/js-variables.html"
          },
          {
            "id": "js-types",
            "title": "4. Tipos de datos",
            "content": "Explora los diferentes tipos de datos disponibles en JavaScript.",
            "sections": [
              "Tipos primitivos Básico",
              "Tipos estructurados",
              "Verificación de tipos",
              "Conversión de tipos",
              "Valores falsy",
              "Valores truthy",
              "Coerción de tipos",
              "Mejores prácticas"
            ],
            "contentFile": "content/lenguajes/javascript/js-types.html"
          },
          {
            "id": "js-operators",
            "title": "5. Operadores",
            "content": "Conoce los diferentes tipos de operadores en JavaScript y cómo utilizarlos.",
            "sections": [
              "Operadores aritméticos Básico",
              "Operadores de comparación",
              "Operadores lógicos",
              "Operadores de asignación",
              "Operador ternario",
              "Operadores de bits",
              "Precedencia de operadores",
              "Operadores de encadenamiento opcional",
              "Mejores prácticas"
            ],
            "contentFile": "content/lenguajes/javascript/js-operators.html"
          },
          {
            "id": "js-control",
            "title": "6. Estructuras de control",
            "content": "Aprende sobre las diferentes estructuras de control en JavaScript, incluyendo condicionales, bucles y manejo de errores.",
            "sections": [
              "Condicionales Básico",
              "Bucles",
              "Control de flujo",
              "Manejo de errores",
              "Patrones comunes",
              "Mejores prácticas"
            ],
            "contentFile": "content/lenguajes/javascript/js-control.html"
          },
          {
            "id": "js-functions",
            "title": "7. Funciones",
            "content": "Aprende a crear y utilizar funciones en JavaScript, incluyendo funciones flecha, closures y más.",
            "sections": [
              "Declaración y expresión Básico",
              "Funciones flecha Moderno",
              "Parámetros por defecto y rest Avanzado",
              "Closures Avanzado",
              "IIFE (Immediately Invoked Function Expression) Avanzado",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-functions.html"
          },
          {
            "id": "js-arrays",
            "title": "8. Arrays",
            "content": "Aprende a trabajar con arrays en JavaScript, desde la creación básica hasta métodos avanzados.",
            "sections": [
              "Creación y acceso Básico",
              "Métodos básicos Importante",
              "Métodos de orden superior Avanzado",
              "Desestructuración de arrays Moderno",
              "Métodos útiles adicionales Complementario",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-arrays.html"
          },
          {
            "id": "js-objects",
            "title": "9. Objetos",
            "content": "Aprende a trabajar con objetos en JavaScript, sus propiedades, métodos y características avanzadas.",
            "sections": [
              "Declaración y acceso Básico",
              "Métodos y propiedades Importante",
              "Iteración con for...in y Object.keys() Importante",
              "Desestructuración de objetos Moderno",
              "Métodos de Object Avanzado",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-objects.html"
          },
          {
            "id": "js-strings",
            "title": "10. Cadenas de texto",
            "content": "Aprende a trabajar con cadenas de texto en JavaScript, sus métodos y características principales.",
            "sections": [
              "Métodos útiles Importante",
              "Template literals Moderno",
              "Concatenación Básico",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-strings.html"
          },
          {
            "id": "js-dom",
            "title": "11. Manipulación del DOM",
            "content": "Aprende a interactuar con el Document Object Model (DOM) usando JavaScript.",
            "sections": [
              "Selección de elementos Básico",
              "Modificación de contenido y estilos Importante",
              "Creación y eliminación de elementos Avanzado",
              "Navegación por el DOM Intermedio",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-dom.html"
          },
          {
            "id": "js-events",
            "title": "12. Eventos",
            "content": "Aprende a manejar eventos en JavaScript para crear interacciones dinámicas en tus aplicaciones web.",
            "sections": [
              "Eventos básicos Básico",
              "El objeto Event Importante",
              "Propagación de eventos Avanzado",
              "Eventos personalizados Avanzado",
              "Eventos comunes Referencia",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-events.html"
          },
          {
            "id": "js-forms",
            "title": "13. Formularios y validaciones",
            "content": "Aprende a trabajar con formularios HTML y a implementar validaciones usando JavaScript.",
            "sections": [
              "Acceso a formularios Básico",
              "Validación básica Importante",
              "Validación avanzada Avanzado",
              "Feedback visual UX",
              "Ejemplo completo Práctica",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-forms.html"
          },
          {
            "id": "js-storage",
            "title": "14. JSON y almacenamiento local",
            "content": "Aprende a trabajar con JSON y a utilizar el almacenamiento local del navegador en JavaScript.",
            "sections": [
              "JSON Básico",
              "localStorage Importante",
              "sessionStorage Alternativa",
              "Wrapper personalizado Avanzado",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-storage.html"
          },
          {
            "id": "js-async",
            "title": "15. Programación asíncrona",
            "content": "Aprende a trabajar con operaciones asíncronas en JavaScript usando callbacks, promesas y async/await.",
            "sections": [
              "Callbacks Básico",
              "Promesas Importante",
              "async/await Moderno",
              "Patrones avanzados Avanzado",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-async.html"
          },
          {
            "id": "js-oop",
            "title": "16. Clases y POO",
            "content": "Aprende sobre Programación Orientada a Objetos (POO) en JavaScript usando clases, herencia, encapsulación y más.",
            "sections": [
              "Definición de clases Básico",
              "Herencia Avanzado",
              "Getters y Setters Intermedio",
              "Métodos estáticos Avanzado",
              "Patrones de diseño Avanzado",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-oop.html"
          },
          {
            "id": "js-modules",
            "title": "17. Módulos",
            "content": "Aprende a organizar tu código JavaScript usando el sistema de módulos ES6.",
            "sections": [
              "Exportación Básico",
              "Importación Importante",
              "Agregación de módulos Avanzado"
            ],
            "contentFile": "content/lenguajes/javascript/js-modules.html"
          },
          {
            "id": "js-regex",
            "title": "18. Expresiones regulares",
            "content": "Aprende a trabajar con expresiones regulares en JavaScript para buscar y manipular texto.",
            "sections": [
              "Creación de RegExp Básico",
              "Metacaracteres Importante",
              "Métodos de RegExp Importante",
              "Grupos y referencias Avanzado",
              "Patrones comunes Referencia",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-regex.html"
          },
          {
            "id": "js-error-handling",
            "title": "19. Manejo de errores",
            "content": "Aprende a manejar errores y excepciones en JavaScript de manera efectiva.",
            "sections": [
              "Try...Catch Básico",
              "Errores personalizados Importante",
              "Manejo asíncrono Importante",
              "Patrones de manejo de errores Avanzado",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-error-handling.html"
          },
          {
            "id": "js-fetch-api",
            "title": "20. Fetch API",
            "content": "Aprende a realizar peticiones HTTP y manejar APIs RESTful usando la Fetch API de JavaScript.",
            "sections": [
              "Peticiones básicas Básico",
              "Opciones de configuración Importante",
              "Manejo de respuestas Importante",
              "Cliente API reutilizable Avanzado",
              "Interceptores y middleware Avanzado",
              "Mejores prácticas Recomendado"
            ],
            "contentFile": "content/lenguajes/javascript/js-fetch-api.html"
          }
        ]
      },
      {
        "id": "typescript",
        "title": "TypeScript",
        "icon": "fa-solid fa-shapes",
        "lessons": [
          {
            "id": "typescript-introduccion-a-typescript",
            "title": "1. Introducción a TypeScript",
            "content": "Descubre qué es TypeScript, por qué se volvió el estándar del desarrollo JavaScript moderno y cómo dar tus primeros pasos.",
            "sections": [
              "¿Qué es TypeScript?",
              "Instalación y primer programa",
              "De JavaScript a TypeScript"
            ],
            "contentFile": "content/lenguajes/typescript/typescript-introduccion-a-typescript.html"
          },
          {
            "id": "typescript-tipos-basicos",
            "title": "2. Tipos Básicos",
            "content": "Aprende los tipos primitivos, arreglos, objetos y los tipos especiales any, unknown y never.",
            "sections": [
              "Primitivos y arreglos",
              "Objetos y funciones",
              "any, unknown y never"
            ],
            "contentFile": "content/lenguajes/typescript/typescript-tipos-basicos.html"
          },
          {
            "id": "typescript-interfaces-y-type-aliases",
            "title": "3. Interfaces y Type Aliases",
            "content": "Define la forma de tus objetos con interfaces y type aliases, incluyendo opciones readonly y uniones.",
            "sections": [
              "Interfaces",
              "Type aliases y uniones",
              "Extensión e intersección"
            ],
            "contentFile": "content/lenguajes/typescript/typescript-interfaces-y-type-aliases.html"
          },
          {
            "id": "typescript-funciones-tipadas",
            "title": "4. Funciones Tipadas",
            "content": "Parámetros opcionales, valores por defecto, sobrecarga y firmas de función.",
            "sections": [
              "Parámetros y retorno",
              "Firmas de función",
              "Sobrecarga"
            ],
            "contentFile": "content/lenguajes/typescript/typescript-funciones-tipadas.html"
          },
          {
            "id": "typescript-clases-y-poo",
            "title": "5. Clases y POO",
            "content": "Clases con modificadores de acceso, implementación de interfaces y clases abstractas.",
            "sections": [
              "Clases con tipos",
              "Interfaces y abstracción"
            ],
            "contentFile": "content/lenguajes/typescript/typescript-clases-y-poo.html"
          },
          {
            "id": "typescript-genericos",
            "title": "6. Genéricos",
            "content": "Escribe código reutilizable con tipos parametrizados usando <T>.",
            "sections": [
              "Funciones genéricas",
              "Constraints con extends",
              "Genéricos en interfaces"
            ],
            "contentFile": "content/lenguajes/typescript/typescript-genericos.html"
          },
          {
            "id": "typescript-modulos-y-configuracion",
            "title": "7. Módulos y Configuración",
            "content": "Organiza tu código con módulos ES y domina el tsconfig.json esencial.",
            "sections": [
              "Import / Export",
              "tsconfig.json esencial"
            ],
            "contentFile": "content/lenguajes/typescript/typescript-modulos-y-configuracion.html"
          },
          {
            "id": "typescript-tipos-utilidades-y-narrowing",
            "title": "8. Tipos Utilidades y Narrowing",
            "content": "Partial, Pick, Omit, Record y técnicas para reducir tipos union.",
            "sections": [
              "Utility Types",
              "Narrowing"
            ],
            "contentFile": "content/lenguajes/typescript/typescript-tipos-utilidades-y-narrowing.html"
          }
        ]
      },
      {
        "id": "csharp",
        "title": "C#",
        "icon": "fa-brands fa-microsoft",
        "lessons": [
          {
            "id": "csharp-introduccion-a-c",
            "title": "1. Introducción a C#",
            "content": "Conoce C# y .NET, instala el SDK y ejecuta tu primer programa con la CLI de dotnet.",
            "sections": [
              "¿Qué es C#?",
              "Primer programa",
              "La CLI de dotnet"
            ],
            "contentFile": "content/lenguajes/csharp/csharp-introduccion-a-c.html"
          },
          {
            "id": "csharp-tipos-y-variables",
            "title": "2. Tipos y Variables",
            "content": "Tipos primitivos, var, const, interpolación de strings y conversiones.",
            "sections": [
              "Variables y tipos",
              "Strings e interpolación",
              "Conversiones"
            ],
            "contentFile": "content/lenguajes/csharp/csharp-tipos-y-variables.html"
          },
          {
            "id": "csharp-control-de-flujo",
            "title": "3. Control de Flujo",
            "content": "Condicionales, switch expressions y todos los bucles.",
            "sections": [
              "if / else",
              "Switch expression (moderno)",
              "Bucles"
            ],
            "contentFile": "content/lenguajes/csharp/csharp-control-de-flujo.html"
          },
          {
            "id": "csharp-metodos",
            "title": "4. Métodos",
            "content": "Firmas, parámetros opcionales, nombrados, ref/out y sobrecarga.",
            "sections": [
              "Definición básica",
              "ref y out",
              "Sobrecarga"
            ],
            "contentFile": "content/lenguajes/csharp/csharp-metodos.html"
          },
          {
            "id": "csharp-programacion-orientada-a-objetos",
            "title": "5. Programación Orientada a Objetos",
            "content": "Clases, propiedades, herencia, interfaces y polimorfismo en C#.",
            "sections": [
              "Clases y propiedades",
              "Herencia e interfaces",
              "Polimorfismo"
            ],
            "contentFile": "content/lenguajes/csharp/csharp-programacion-orientada-a-objetos.html"
          },
          {
            "id": "csharp-colecciones-y-linq",
            "title": "6. Colecciones y LINQ",
            "content": "Listas, diccionarios y consultas LINQ para filtrar, ordenar y transformar datos.",
            "sections": [
              "Colecciones principales",
              "LINQ básico",
              "LINQ con objetos"
            ],
            "contentFile": "content/lenguajes/csharp/csharp-colecciones-y-linq.html"
          },
          {
            "id": "csharp-excepciones-y-archivos",
            "title": "7. Excepciones y Archivos",
            "content": "Manejo robusto de errores con try/catch y lectura/escritura de archivos.",
            "sections": [
              "try / catch / finally",
              "Archivos"
            ],
            "contentFile": "content/lenguajes/csharp/csharp-excepciones-y-archivos.html"
          },
          {
            "id": "csharp-c-moderno",
            "title": "8. C# Moderno",
            "content": "Records, delegados, eventos y programación asíncrona con async/await.",
            "sections": [
              "Records (inmutables)",
              "async / await"
            ],
            "contentFile": "content/lenguajes/csharp/csharp-c-moderno.html"
          }
        ]
      },
      {
        "id": "cpp",
        "title": "C++",
        "icon": "fa-solid fa-code",
        "lessons": [
          {
            "id": "cpp-introduccion-a-c",
            "title": "1. Introducción a C++",
            "content": "Historia, compilación manual y tu primer programa con entrada y salida estándar.",
            "sections": [
              "Compilar y ejecutar",
              "Entrada del usuario"
            ],
            "contentFile": "content/lenguajes/cpp/cpp-introduccion-a-c.html"
          },
          {
            "id": "cpp-tipos-constantes-y-strings",
            "title": "2. Tipos, Constantes y Strings",
            "content": "Tipos fundamentales, const, constexpr y la clase std::string.",
            "sections": [
              "Tipos fundamentales",
              "std::string"
            ],
            "contentFile": "content/lenguajes/cpp/cpp-tipos-constantes-y-strings.html"
          },
          {
            "id": "cpp-control-de-flujo-y-funciones",
            "title": "3. Control de Flujo y Funciones",
            "content": "Condicionales, bucles, sobrecarga de funciones y paso por referencia.",
            "sections": [
              "Condicionales y bucles",
              "Funciones y referencias"
            ],
            "contentFile": "content/lenguajes/cpp/cpp-control-de-flujo-y-funciones.html"
          },
          {
            "id": "cpp-punteros-y-memoria",
            "title": "4. Punteros y Memoria",
            "content": "Punteros, referencias, gestión dinámica con new/delete y smart pointers.",
            "sections": [
              "Punteros básicos",
              "Dinámica y smart pointers"
            ],
            "contentFile": "content/lenguajes/cpp/cpp-punteros-y-memoria.html"
          },
          {
            "id": "cpp-programacion-orientada-a-objetos",
            "title": "5. Programación Orientada a Objetos",
            "content": "Clases, constructores, destructores, herencia y funciones virtuales.",
            "sections": [
              "Clases",
              "Herencia y polimorfismo"
            ],
            "contentFile": "content/lenguajes/cpp/cpp-programacion-orientada-a-objetos.html"
          },
          {
            "id": "cpp-la-stl",
            "title": "6. La STL",
            "content": "Contenedores (vector, map, set), iteradores y algoritmos estándar.",
            "sections": [
              "Contenedores",
              "Algoritmos"
            ],
            "contentFile": "content/lenguajes/cpp/cpp-la-stl.html"
          },
          {
            "id": "cpp-plantillas",
            "title": "7. Plantillas",
            "content": "Function templates y class templates para código genérico.",
            "sections": [
              "Plantillas de función",
              "Plantillas de clase"
            ],
            "contentFile": "content/lenguajes/cpp/cpp-plantillas.html"
          },
          {
            "id": "cpp-buenas-practicas",
            "title": "8. Buenas Prácticas",
            "content": "RAII, flags de compilación útiles y herramientas modernas del ecosistema.",
            "sections": [
              "RAII",
              "Compilación y herramientas"
            ],
            "contentFile": "content/lenguajes/cpp/cpp-buenas-practicas.html"
          }
        ]
      },
      {
        "id": "go",
        "title": "Go",
        "icon": "fa-solid fa-bolt",
        "lessons": [
          {
            "id": "go-introduccion-a-go",
            "title": "1. Introducción a Go",
            "content": "Filosofía de Go, instalación, módulos y tu primer programa.",
            "sections": [
              "¿Por qué Go?",
              "Primer programa"
            ],
            "contentFile": "content/lenguajes/go/go-introduccion-a-go.html"
          },
          {
            "id": "go-variables-y-tipos",
            "title": "2. Variables y Tipos",
            "content": "Declaración corta, tipos básicos, zero values y constantes.",
            "sections": [
              "Declaración",
              "Tipos básicos"
            ],
            "contentFile": "content/lenguajes/go/go-variables-y-tipos.html"
          },
          {
            "id": "go-control-de-flujo",
            "title": "3. Control de Flujo",
            "content": "if con inicializador, el único bucle for y switch sin fallthrough.",
            "sections": [
              "if y for",
              "switch"
            ],
            "contentFile": "content/lenguajes/go/go-control-de-flujo.html"
          },
          {
            "id": "go-funciones-y-errores",
            "title": "4. Funciones y Errores",
            "content": "Múltiples retornos, el patrón error, defer y funciones variádicas.",
            "sections": [
              "Múltiples retornos y error",
              "defer y variádicas"
            ],
            "contentFile": "content/lenguajes/go/go-funciones-y-errores.html"
          },
          {
            "id": "go-structs-y-metodos",
            "title": "5. Structs y Métodos",
            "content": "Structs, métodos con receptor y composición en lugar de herencia.",
            "sections": [
              "Structs",
              "Métodos y composición"
            ],
            "contentFile": "content/lenguajes/go/go-structs-y-metodos.html"
          },
          {
            "id": "go-interfaces",
            "title": "6. Interfaces",
            "content": "Interfaces implícitas, el patrón error y composición de interfaces.",
            "sections": [
              "Implementación implícita",
              "Interfaces estándar"
            ],
            "contentFile": "content/lenguajes/go/go-interfaces.html"
          },
          {
            "id": "go-concurrencia",
            "title": "7. Concurrencia",
            "content": "Goroutines, channels, select y sincronización con WaitGroup.",
            "sections": [
              "Goroutines y channels",
              "select y WaitGroup"
            ],
            "contentFile": "content/lenguajes/go/go-concurrencia.html"
          },
          {
            "id": "go-proyectos-y-tests",
            "title": "8. Proyectos y Tests",
            "content": "Paquetes, testing nativo y herramientas de calidad incluidas.",
            "sections": [
              "Tests nativos",
              "Herramientas"
            ],
            "contentFile": "content/lenguajes/go/go-proyectos-y-tests.html"
          }
        ]
      },
      {
        "id": "rust",
        "title": "Rust",
        "icon": "fa-solid fa-gears",
        "lessons": [
          {
            "id": "rust-introduccion-a-rust",
            "title": "1. Introducción a Rust",
            "content": "Conoce Rust, instala las herramientas con rustup y crea tu primer proyecto con Cargo.",
            "sections": [
              "¿Por qué Rust?",
              "Primer proyecto",
              "Variables y mutabilidad"
            ],
            "contentFile": "content/lenguajes/rust/rust-introduccion-a-rust.html"
          },
          {
            "id": "rust-ownership-y-borrowing",
            "title": "2. Ownership y Borrowing",
            "content": "El sistema de propiedad de Rust: move semantics, referencias y slices.",
            "sections": [
              "Ownership",
              "Referencias (borrowing)",
              "Slices"
            ],
            "contentFile": "content/lenguajes/rust/rust-ownership-y-borrowing.html"
          },
          {
            "id": "rust-tipos-y-structs",
            "title": "3. Tipos y Structs",
            "content": "Tipos escalares, compuestos, structs y métodos con impl.",
            "sections": [
              "Tipos",
              "Structs y métodos"
            ],
            "contentFile": "content/lenguajes/rust/rust-tipos-y-structs.html"
          },
          {
            "id": "rust-enums-y-pattern-matching",
            "title": "4. Enums y Pattern Matching",
            "content": "Enums con datos, Option para ausencia y match exhaustivo.",
            "sections": [
              "Enums con datos",
              "Option: sin null"
            ],
            "contentFile": "content/lenguajes/rust/rust-enums-y-pattern-matching.html"
          },
          {
            "id": "rust-colecciones",
            "title": "5. Colecciones",
            "content": "Vec, String y HashMap: las tres colecciones más usadas.",
            "sections": [
              "Vector",
              "HashMap"
            ],
            "contentFile": "content/lenguajes/rust/rust-colecciones.html"
          },
          {
            "id": "rust-manejo-de-errores",
            "title": "6. Manejo de Errores",
            "content": "Result, el operador ? y cuándo usar panic.",
            "sections": [
              "Result<T, E>",
              "El operador ?"
            ],
            "contentFile": "content/lenguajes/rust/rust-manejo-de-errores.html"
          },
          {
            "id": "rust-traits-y-genericos",
            "title": "7. Traits y Genéricos",
            "content": "Traits como interfaces, métodos por defecto y funciones genéricas con bounds.",
            "sections": [
              "Traits",
              "Genéricos con bounds"
            ],
            "contentFile": "content/lenguajes/rust/rust-traits-y-genericos.html"
          },
          {
            "id": "rust-cargo-y-proyectos",
            "title": "8. Cargo y Proyectos",
            "content": "Cargo.toml, dependencias de crates.io, tests y builds de producción.",
            "sections": [
              "Cargo.toml",
              "Tests y build"
            ],
            "contentFile": "content/lenguajes/rust/rust-cargo-y-proyectos.html"
          }
        ]
      },
      {
        "id": "kotlin",
        "title": "Kotlin",
        "icon": "fa-solid fa-mobile-screen",
        "lessons": [
          {
            "id": "kotlin-introduccion-a-kotlin",
            "title": "1. Introducción a Kotlin",
            "content": "Kotlin en la JVM: val/var, funciones y tu primer programa.",
            "sections": [
              "¿Qué es Kotlin?",
              "Primer programa",
              "val y var"
            ],
            "contentFile": "content/lenguajes/kotlin/kotlin-introduccion-a-kotlin.html"
          },
          {
            "id": "kotlin-tipos-y-null-safety",
            "title": "2. Tipos y Null-Safety",
            "content": "Tipos básicos y el sistema anti-null más famoso de Kotlin.",
            "sections": [
              "Tipos básicos",
              "Null-safety"
            ],
            "contentFile": "content/lenguajes/kotlin/kotlin-tipos-y-null-safety.html"
          },
          {
            "id": "kotlin-control-de-flujo",
            "title": "3. Control de Flujo",
            "content": "if como expresión, when (el switch mejorado) y bucles con ranges.",
            "sections": [
              "if expresión y when",
              "Bucles y ranges"
            ],
            "contentFile": "content/lenguajes/kotlin/kotlin-control-de-flujo.html"
          },
          {
            "id": "kotlin-funciones-avanzadas",
            "title": "4. Funciones Avanzadas",
            "content": "Argumentos por defecto, nombrados, extension functions y lambdas.",
            "sections": [
              "Default y named args",
              "Extension functions",
              "Lambdas"
            ],
            "contentFile": "content/lenguajes/kotlin/kotlin-funciones-avanzadas.html"
          },
          {
            "id": "kotlin-clases-y-data-classes",
            "title": "5. Clases y Data Classes",
            "content": "Clases concisas, data classes, sealed classes y objects.",
            "sections": [
              "Clases",
              "Data classes",
              "Sealed y object"
            ],
            "contentFile": "content/lenguajes/kotlin/kotlin-clases-y-data-classes.html"
          },
          {
            "id": "kotlin-colecciones-funcionales",
            "title": "6. Colecciones Funcionales",
            "content": "List, Set, Map inmutables/mutables y operaciones funcionales encadenadas.",
            "sections": [
              "Colecciones",
              "Operaciones funcionales"
            ],
            "contentFile": "content/lenguajes/kotlin/kotlin-colecciones-funcionales.html"
          },
          {
            "id": "kotlin-corrutinas",
            "title": "7. Corrutinas",
            "content": "Concurrencia ligera con suspend, launch y async.",
            "sections": [
              "Conceptos base"
            ],
            "contentFile": "content/lenguajes/kotlin/kotlin-corrutinas.html"
          },
          {
            "id": "kotlin-interoperabilidad-con-java",
            "title": "8. Interoperabilidad con Java",
            "content": "Cómo Kotlin convive con Java y sus casos de uso principales.",
            "sections": [
              "Interop directo",
              "Dónde se usa Kotlin"
            ],
            "contentFile": "content/lenguajes/kotlin/kotlin-interoperabilidad-con-java.html"
          }
        ]
      },
      {
        "id": "swift",
        "title": "Swift",
        "icon": "fa-brands fa-swift",
        "lessons": [
          {
            "id": "swift-introduccion-a-swift",
            "title": "1. Introducción a Swift",
            "content": "El lenguaje de Apple: constantes, variables y seguridad de tipos.",
            "sections": [
              "¿Qué es Swift?",
              "Primer programa",
              "Strings e interpolación"
            ],
            "contentFile": "content/lenguajes/swift/swift-introduccion-a-swift.html"
          },
          {
            "id": "swift-optionals",
            "title": "2. Optionals",
            "content": "El corazón de la seguridad de Swift: valores que pueden estar ausentes.",
            "sections": [
              "¿Qué es un optional?",
              "guard let y ??"
            ],
            "contentFile": "content/lenguajes/swift/swift-optionals.html"
          },
          {
            "id": "swift-control-de-flujo",
            "title": "3. Control de Flujo",
            "content": "switch potente con rangos y tuplas, bucles for-in y while.",
            "sections": [
              "Switch avanzado",
              "Bucles"
            ],
            "contentFile": "content/lenguajes/swift/swift-control-de-flujo.html"
          },
          {
            "id": "swift-funciones-y-closures",
            "title": "4. Funciones y Closures",
            "content": "Etiquetas de argumento, valores múltiples y closures.",
            "sections": [
              "Funciones",
              "Closures"
            ],
            "contentFile": "content/lenguajes/swift/swift-funciones-y-closures.html"
          },
          {
            "id": "swift-structs-y-clases",
            "title": "5. Structs y Clases",
            "content": "Value types vs reference types: la decisión fundamental en Swift.",
            "sections": [
              "Structs (value type)",
              "Clases (reference type)"
            ],
            "contentFile": "content/lenguajes/swift/swift-structs-y-clases.html"
          },
          {
            "id": "swift-protocolos-y-extensiones",
            "title": "6. Protocolos y Extensiones",
            "content": "Protocolos (interfaces) y extensiones para añadir funcionalidad.",
            "sections": [
              "Protocolos",
              "Extensiones"
            ],
            "contentFile": "content/lenguajes/swift/swift-protocolos-y-extensiones.html"
          },
          {
            "id": "swift-colecciones",
            "title": "7. Colecciones",
            "content": "Array, Set y Dictionary con sus operaciones más útiles.",
            "sections": [
              "Las tres colecciones",
              "Higher-order functions"
            ],
            "contentFile": "content/lenguajes/swift/swift-colecciones.html"
          },
          {
            "id": "swift-introduccion-a-swiftui",
            "title": "8. Introducción a SwiftUI",
            "content": "UI declarativa: tus primeras vistas con VStack, Text y Button.",
            "sections": [
              "UI declarativa",
              "Composición"
            ],
            "contentFile": "content/lenguajes/swift/swift-introduccion-a-swiftui.html"
          }
        ]
      },
      {
        "id": "bash",
        "title": "Bash",
        "icon": "fa-solid fa-terminal",
        "lessons": [
          {
            "id": "bash-introduccion-al-shell",
            "title": "1. Introducción al Shell",
            "content": "La terminal como herramienta de poder: tu primer script ejecutable.",
            "sections": [
              "Tu primer script",
              "El shebang"
            ],
            "contentFile": "content/lenguajes/bash/bash-introduccion-al-shell.html"
          },
          {
            "id": "bash-variables-y-argumentos",
            "title": "2. Variables y Argumentos",
            "content": "Asignación, comillas, sustitución de comandos y parámetros del script.",
            "sections": [
              "Variables",
              "Argumentos del script"
            ],
            "contentFile": "content/lenguajes/bash/bash-variables-y-argumentos.html"
          },
          {
            "id": "bash-condicionales",
            "title": "3. Condicionales",
            "content": "if con [[ ]], operadores numéricos/de string/archivos y case.",
            "sections": [
              "if / elif / else",
              "Operadores útiles",
              "case"
            ],
            "contentFile": "content/lenguajes/bash/bash-condicionales.html"
          },
          {
            "id": "bash-bucles",
            "title": "4. Bucles",
            "content": "for sobre listas, while con read línea a línea y control de flujo.",
            "sections": [
              "for",
              "while y until"
            ],
            "contentFile": "content/lenguajes/bash/bash-bucles.html"
          },
          {
            "id": "bash-funciones",
            "title": "5. Funciones",
            "content": "Definición, ámbito con local, códigos de salida y retorno.",
            "sections": [
              "Definición y uso",
              "Exit status"
            ],
            "contentFile": "content/lenguajes/bash/bash-funciones.html"
          },
          {
            "id": "bash-pipes-y-herramientas",
            "title": "6. Pipes y Herramientas",
            "content": "Redirección, pipes y el trío grep/sed/awk para procesar texto.",
            "sections": [
              "Pipes y redirección",
              "grep, sed, awk, find"
            ],
            "contentFile": "content/lenguajes/bash/bash-pipes-y-herramientas.html"
          }
        ]
      }
    ]
  },
  {
    "id": "frameworks",
    "title": "Frameworks",
    "icon": "fa-solid fa-layer-group",
    "color": "#10b981",
    "subcategories": [
      {
        "id": "react",
        "title": "React",
        "icon": "fa-brands fa-react",
        "lessons": [
          {
            "id": "react-intro",
            "title": "01. Introducción a React",
            "content": "Qué es React, su propósito, SPA, Virtual DOM y ecosistema de herramientas",
            "sections": [
              "<i class=\"fa-solid fa-atom\"></i> 1.1 ¿Qué es React y cuál es su propósito?",
              "<i class=\"fa-solid fa-wrench\"></i> 1.2 Problemas que resuelve React",
              "<i class=\"fa-solid fa-earth-americas\"></i> 1.3 Concepto de SPA (Single Page Application)",
              "<i class=\"fa-solid fa-bolt\"></i> 1.4 Virtual DOM y cómo mejora el rendimiento",
              "<i class=\"fa-solid fa-book-bookmark\"></i> 1.5 Diferencias entre librería y framework",
              "<i class=\"fa-solid fa-screwdriver-wrench\"></i> 1.6 Ecosistema de herramientas en React",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-intro.html"
          },
          {
            "id": "react-entorno",
            "title": "02. Preparación del Entorno",
            "content": "Instalación de Node.js, npm, creación de proyecto con Vite y estructura de carpetas",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> 2.1 Instalación de Node.js y npm",
              "<i class=\"fa-solid fa-rocket\"></i> 2.2 Creación de proyecto con Vite",
              "<i class=\"fa-solid fa-folder\"></i> 2.3 Estructura de carpetas en React",
              "<i class=\"fa-solid fa-file-lines\"></i> 2.4 Archivos principales (main.jsx, App.jsx)",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-entorno.html"
          },
          {
            "id": "react-jsx",
            "title": "03. Fundamentos de React (JSX)",
            "content": "Qué es JSX, sintaxis básica, reglas importantes y uso de expresiones",
            "sections": [
              "<i class=\"fa-solid fa-brain\"></i> 3.1 ¿Qué es JSX y por qué se usa?",
              "<i class=\"fa-solid fa-signature\"></i> 3.2 Sintaxis básica de JSX",
              "<i class=\"fa-solid fa-triangle-exclamation\"></i> 3.3 Reglas importantes de JSX",
              "<i class=\"fa-solid fa-list-ol\"></i> 3.4 Uso de expresiones dentro de JSX",
              "<i class=\"fa-solid fa-key\"></i> 3.5 Uso de llaves {}",
              "<i class=\"fa-solid fa-puzzle-piece\"></i> 3.6 Fragmentos en React",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-jsx.html"
          },
          {
            "id": "react-components",
            "title": "04. Componentes en React",
            "content": "Qué es un componente, componentes funcionales, props y reutilización",
            "sections": [
              "<i class=\"fa-solid fa-puzzle-piece\"></i> 4.1 ¿Qué es un componente?",
              "<i class=\"fa-solid fa-wrench\"></i> 4.2 Componentes funcionales",
              "<i class=\"fa-solid fa-ruler-combined\"></i> 4.3 Estructura de un componente",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-components.html"
          },
          {
            "id": "react-state",
            "title": "05. Estado en React (useState)",
            "content": "Concepto de estado, hook useState, actualización correcta del estado",
            "sections": [
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 5.1 Concepto de estado (state)",
              "<i class=\"fa-solid fa-anchor\"></i> 5.2 Hook useState",
              "<i class=\"fa-solid fa-bullseye\"></i> 5.3 Inicialización del estado",
              "<i class=\"fa-solid fa-pencil\"></i> 5.4 Actualización del estado correctamente",
              "<i class=\"fa-solid fa-box\"></i> 5.5 Estado con objetos",
              "<i class=\"fa-solid fa-clipboard-list\"></i> 5.6 Estado con arrays",
              "<i class=\"fa-solid fa-circle-check\"></i> 5.7 Buenas prácticas con estado",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-state.html"
          },
          {
            "id": "react-eventos-formularios",
            "title": "06. Eventos y Formularios",
            "content": "Eventos en React, manejo de formularios, inputs controlados y validaciones",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> 6.1 Eventos en React (onClick, onChange, onSubmit)",
              "<i class=\"fa-solid fa-wrench\"></i> 6.2 Manejo de eventos personalizados",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 6.3 Inputs controlados",
              "<i class=\"fa-solid fa-clipboard-list\"></i> 6.4 Formularios básicos",
              "<i class=\"fa-solid fa-circle-check\"></i> 6.5 Validaciones simples",
              "<i class=\"fa-solid fa-ban\"></i> 6.6 Prevención de comportamiento por defecto",
              "<i class=\"fa-solid fa-list-ol\"></i> 6.7 Manejo de múltiples inputs",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-eventos-formularios.html"
          },
          {
            "id": "react-renderizado-condicional",
            "title": "07. Renderizado Condicional",
            "content": "Uso de if, operador ternario, operador lógico && y renderizado basado en estado",
            "sections": [
              "<i class=\"fa-solid fa-shuffle\"></i> 7.1 Uso de if en React",
              "<i class=\"fa-solid fa-circle-question\"></i> 7.2 Operador ternario",
              "<i class=\"fa-solid fa-plus\"></i> 7.3 Operador lógico &&",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 7.4 Renderizado basado en estado",
              "<i class=\"fa-solid fa-eye\"></i> 7.5 Mostrar/ocultar componentes",
              "<i class=\"fa-solid fa-palette\"></i> 7.6 Renderizado dinámico en UI",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-renderizado-condicional.html"
          },
          {
            "id": "react-listas-keys",
            "title": "08. Listas y Keys",
            "content": "Uso de map() para renderizar listas, importancia de las keys y buenas prácticas",
            "sections": [
              "<i class=\"fa-solid fa-clipboard-list\"></i> 8.1 Uso de map() para renderizar listas",
              "<i class=\"fa-solid fa-key\"></i> 8.2 Importancia de las keys",
              "<i class=\"fa-solid fa-triangle-exclamation\"></i> 8.3 Keys únicas y errores comunes",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 8.4 Renderizado dinámico de datos",
              "<i class=\"fa-solid fa-trash-can\"></i> 8.5 Eliminación de elementos en listas",
              "<i class=\"fa-solid fa-pencil\"></i> 8.6 Actualización de listas",
              "<i class=\"fa-solid fa-circle-check\"></i> 8.7 Buenas prácticas en listas",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-listas-keys.html"
          },
          {
            "id": "react-hooks",
            "title": "09. Hooks en React",
            "content": "Introducción a los Hooks, useEffect, useRef y reglas de los Hooks",
            "sections": [
              "<i class=\"fa-solid fa-anchor\"></i> 9.1 Introducción a los Hooks",
              "<i class=\"fa-solid fa-bolt\"></i> 9.2 useEffect - Efectos secundarios",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 9.3 useEffect - Fetch de datos",
              "<i class=\"fa-solid fa-broom\"></i> 9.4 useEffect - Cleanup (limpieza)",
              "<i class=\"fa-solid fa-thumbtack\"></i> 9.5 useRef - Referencias",
              "<i class=\"fa-solid fa-ruler\"></i> 9.6 Reglas de los Hooks",
              "<i class=\"fa-solid fa-wrench\"></i> 9.7 Hooks personalizados",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-hooks.html"
          },
          {
            "id": "react-consumo-apis",
            "title": "10. Consumo de APIs",
            "content": "Uso de fetch y axios, manejo de estados de carga y errores",
            "sections": [
              "<i class=\"fa-solid fa-earth-americas\"></i> 10.1 Introducción al consumo de APIs",
              "<i class=\"fa-solid fa-satellite-dish\"></i> 10.2 Uso de fetch",
              "<i class=\"fa-solid fa-box\"></i> 10.3 Uso de Axios",
              "<i class=\"fa-solid fa-hourglass-half\"></i> 10.4 Estados de carga",
              "<i class=\"fa-solid fa-xmark\"></i> 10.5 Manejo de errores",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 10.6 CRUD completo",
              "<i class=\"fa-solid fa-gear\"></i> 10.7 Configuración de Axios",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-consumo-apis.html"
          },
          {
            "id": "react-react-router",
            "title": "11. Navegación con React Router",
            "content": "Navegación en React, rutas, parámetros y navegación programática",
            "sections": [
              "<i class=\"fa-solid fa-compass\"></i> 11.1 Introducción a React Router",
              "<i class=\"fa-solid fa-road\"></i> 11.2 Definición de rutas",
              "<i class=\"fa-solid fa-link\"></i> 11.3 Navegación con Link y NavLink",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 11.4 Parámetros de ruta",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> 11.5 Query parameters",
              "<i class=\"fa-solid fa-rocket\"></i> 11.6 Navegación programática",
              "<i class=\"fa-solid fa-folder-open\"></i> 11.7 Rutas anidadas",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-react-router.html"
          },
          {
            "id": "react-formularios-avanzados",
            "title": "12. Formularios Avanzados",
            "content": "Validación con librerías, React Hook Form y manejo de errores",
            "sections": [
              "<i class=\"fa-solid fa-pen-to-square\"></i> 12.1 Limitaciones de formularios básicos",
              "<i class=\"fa-solid fa-box\"></i> 12.2 React Hook Form",
              "<i class=\"fa-solid fa-circle-check\"></i> 12.3 Validación personalizada",
              "<i class=\"fa-solid fa-bullseye\"></i> 12.4 Yup para validación de esquemas",
              "<i class=\"fa-solid fa-wrench\"></i> 12.5 Funciones útiles de React Hook Form",
              "<i class=\"fa-solid fa-palette\"></i> 12.6 Componentes de input reutilizables",
              "<i class=\"fa-solid fa-clipboard-list\"></i> 12.7 Formulario completo",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-formularios-avanzados.html"
          },
          {
            "id": "react-estado-global",
            "title": "13. Estado Global",
            "content": "Context API, useContext y patrones de estado global",
            "sections": [
              "<i class=\"fa-solid fa-earth-americas\"></i> 13.1 Problema del prop drilling",
              "<i class=\"fa-solid fa-bullseye\"></i> 13.2 Context API básico",
              "<i class=\"fa-solid fa-user\"></i> 13.3 Context de autenticación",
              "<i class=\"fa-solid fa-cart-shopping\"></i> 13.4 Context de carrito de compras",
              "<i class=\"fa-solid fa-link\"></i> 13.5 Múltiples Contexts",
              "<i class=\"fa-solid fa-bolt\"></i> 13.6 Optimización de Context",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-estado-global.html"
          },
          {
            "id": "react-estilos",
            "title": "14. Estilos en React",
            "content": "CSS en React, CSS Modules, styled-components y Tailwind CSS",
            "sections": [
              "<i class=\"fa-solid fa-palette\"></i> 14.1 Formas de aplicar estilos en React",
              "<i class=\"fa-solid fa-file-lines\"></i> 14.2 CSS tradicional",
              "<i class=\"fa-solid fa-paintbrush\"></i> 14.5 styled-components",
              "<i class=\"fa-solid fa-water\"></i> 14.6 Tailwind CSS",
              "<i class=\"fa-solid fa-chart-column\"></i> 14.7 Comparación de métodos",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-estilos.html"
          },
          {
            "id": "react-testing",
            "title": "15. Testing en React",
            "content": "Introducción a testing, Jest, React Testing Library y buenas prácticas",
            "sections": [
              "<i class=\"fa-solid fa-flask\"></i> 15.1 Introducción al testing",
              "<i class=\"fa-solid fa-gear\"></i> 15.2 Configuración con Vitest",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> 15.4 Queries de Testing Library",
              "<i class=\"fa-solid fa-computer-mouse\"></i> 15.5 Eventos de usuario",
              "<i class=\"fa-solid fa-hourglass-half\"></i> 15.6 Tests asíncronos",
              "<i class=\"fa-solid fa-masks-theater\"></i> 15.7 Mocks",
              "<i class=\"fa-solid fa-circle-check\"></i> 15.8 Buenas prácticas",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/react/react-testing.html"
          },
          {
            "id": "react-hooks-resumen",
            "title": "16. Hooks Principales",
            "content": "Referencia rápida de todos los Hooks de React y cuándo usarlos",
            "sections": [
              "<i class=\"fa-solid fa-book-bookmark\"></i> 16.1 Tabla de referencia rápida",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 16.2 useState",
              "<i class=\"fa-solid fa-bolt\"></i> 16.3 useEffect",
              "<i class=\"fa-solid fa-earth-americas\"></i> 16.4 useContext",
              "<i class=\"fa-solid fa-thumbtack\"></i> 16.5 useRef",
              "<i class=\"fa-solid fa-calculator\"></i> 16.6 useMemo",
              "<i class=\"fa-solid fa-link\"></i> 16.7 useCallback",
              "<i class=\"fa-solid fa-sliders\"></i> 16.8 useReducer",
              "<i class=\"fa-solid fa-palette\"></i> 16.9 Otros Hooks",
              "<i class=\"fa-solid fa-screwdriver-wrench\"></i> 16.10 Hooks personalizados",
              "<i class=\"fa-solid fa-clipboard-list\"></i> 16.11 Reglas de los Hooks",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen final"
            ],
            "contentFile": "content/frameworks/react/react-hooks-resumen.html"
          }
        ]
      },
      {
        "id": "astro",
        "title": "Astro",
        "icon": "fa-solid fa-rocket",
        "lessons": [
          {
            "id": "astro-01-introduccion",
            "title": "01. Introducción a Astro",
            "content": "Qué es Astro y por qué es revolucionario",
            "sections": [
              "Qué es Astro y por qué es revolucionario",
              "Arquitectura de islas e hibridación con otros frameworks",
              "Instalación del entorno y creación del primer proyecto"
            ],
            "contentFile": "content/frameworks/astro/astro-01-introduccion.html"
          },
          {
            "id": "astro-02-estructura-proyecto",
            "title": "02. Estructura del Proyecto",
            "content": "Carpetas principales, archivos .astro y sistema de rutas",
            "sections": [
              "Carpetas principales: src, public, pages y components",
              "Archivos .astro y cómo funcionan",
              "Sistema de rutas y navegación en Astro"
            ],
            "contentFile": "content/frameworks/astro/astro-02-estructura-proyecto.html"
          },
          {
            "id": "astro-03-creacion-paginas",
            "title": "03. Creación de Páginas",
            "content": "Páginas estáticas, rutas dinámicas y layouts",
            "sections": [
              "Creando páginas estáticas",
              "Rutas dinámicas y parámetros (slug, id, etc.)",
              "Uso de layouts para plantillas globales"
            ],
            "contentFile": "content/frameworks/astro/astro-03-creacion-paginas.html"
          },
          {
            "id": "astro-04-componentes",
            "title": "04. Componentes en Astro",
            "content": "Creación de componentes reutilizables, props, slots e interactividad",
            "sections": [
              "Creación de componentes reutilizables",
              "Comunicación con props y slots",
              "Interactividad y eventos en componentes"
            ],
            "contentFile": "content/frameworks/astro/astro-04-componentes.html"
          },
          {
            "id": "astro-05-estilos-diseno",
            "title": "05. Estilos y Diseño",
            "content": "Estilos globales y locales, Tailwind CSS, Sass y diseño responsivo",
            "sections": [
              "Estilos globales y locales",
              "Uso de Tailwind CSS y Sass en Astro",
              "Diseño responsivo y dark mode"
            ],
            "contentFile": "content/frameworks/astro/astro-05-estilos-diseno.html"
          },
          {
            "id": "astro-06-integracion-frameworks",
            "title": "06. Integración con Frameworks",
            "content": "Usar React, Vue y Svelte dentro de Astro, componentes híbridos e islas interactivas",
            "sections": [
              "Cómo usar React, Vue y Svelte dentro de Astro",
              "Componentes híbridos e islas interactivas",
              "Control de carga parcial y optimización"
            ],
            "contentFile": "content/frameworks/astro/astro-06-integracion-frameworks.html"
          },
          {
            "id": "astro-07-contenido-dinamico",
            "title": "07. Contenido Dinámico",
            "content": "Markdown, MDX, colecciones de contenido y consumo de APIs",
            "sections": [
              "Uso de Markdown y MDX",
              "Colecciones de contenido (content collections)",
              "Consumo de APIs y archivos JSON"
            ],
            "contentFile": "content/frameworks/astro/astro-07-contenido-dinamico.html"
          },
          {
            "id": "astro-08-seo-metadatos",
            "title": "08. SEO y Metadatos",
            "content": "Títulos dinámicos, etiquetas meta, Open Graph, sitemap y robots.txt",
            "sections": [
              "Creación de títulos y descripciones dinámicas",
              "Etiquetas meta y Open Graph",
              "Sitemap, robots.txt y buenas prácticas SEO"
            ],
            "contentFile": "content/frameworks/astro/astro-08-seo-metadatos.html"
          },
          {
            "id": "astro-09-optimizaciones-rendimiento",
            "title": "09. Optimizaciones de Rendimiento",
            "content": "Lazy loading, importación inteligente, compresión de imágenes y análisis con Lighthouse",
            "sections": [
              "Lazy loading e importación inteligente",
              "Compresión y optimización de imágenes",
              "Análisis de rendimiento con Lighthouse"
            ],
            "contentFile": "content/frameworks/astro/astro-09-optimizaciones-rendimiento.html"
          },
          {
            "id": "astro-10-configuracion-avanzada",
            "title": "10. Configuración Avanzada",
            "content": "Configuración de astro.config.mjs, integraciones y adaptadores oficiales",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/astro/astro-10-configuracion-avanzada.html"
          },
          {
            "id": "astro-11-integraciones-externas",
            "title": "11. Integraciones Externas",
            "content": "Plugins Remark y Rehype, analíticas, scripts externos y CMS",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/astro/astro-11-integraciones-externas.html"
          },
          {
            "id": "astro-12-despliegue-produccion",
            "title": "12. Despliegue y Producción",
            "content": "Compilación con astro build, adaptadores para Netlify, Vercel y Cloudflare",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/astro/astro-12-despliegue-produccion.html"
          }
        ]
      },
      {
        "id": "vue",
        "title": "Vue 3",
        "icon": "fa-brands fa-vuejs",
        "lessons": [
          {
            "id": "vue-intro",
            "title": "01. Introducción a Vue 3",
            "content": "¿Qué es Vue? Diferencias con Vue 2 y ventajas de la Composition API",
            "sections": [
              "¿Qué es Vue?",
              "Diferencias con Vue 2",
              "Ventajas de la Composition API"
            ],
            "contentFile": "content/frameworks/vue/vue-intro.html"
          },
          {
            "id": "vue-components",
            "title": "02. Estructura del Componente",
            "content": "Template, script setup, style, tipado con lang=\"ts\" e importación y uso de componentes",
            "sections": [
              "Estructura de un Componente Vue 3",
              "Template",
              "Script Setup",
              "Style",
              "Tipado con lang=\"ts\"",
              "Importación y uso de componentes"
            ],
            "contentFile": "content/frameworks/vue/vue-components.html"
          },
          {
            "id": "vue-reactivity",
            "title": "03. Reactividad",
            "content": "ref(), reactive(), readonly(), shallowRef(), shallowReactive(), toRef(), toRefs(), unref(), isRef(), isReactive(), isReadonly()",
            "sections": [
              "Sistema de Reactividad en Vue 3",
              "ref()",
              "reactive()",
              "readonly()",
              "shallowRef() y shallowReactive()",
              "toRef() y toRefs()",
              "unref()",
              "Funciones de verificación: isRef(), isReactive(), isReadonly()",
              "Tabla comparativa de APIs de reactividad"
            ],
            "contentFile": "content/frameworks/vue/vue-reactivity.html"
          },
          {
            "id": "vue-props-events",
            "title": "04. Props y Eventos",
            "content": "defineProps(), defineEmits(), tipado de props, eventos personalizados, validación y valores por defecto",
            "sections": [
              "Comunicación entre Componentes en Vue 3",
              "defineProps()",
              "Tipado de props con TypeScript",
              "Validación y valores por defecto",
              "defineEmits()",
              "Tipado de eventos con TypeScript",
              "Eventos personalizados",
              "v-on y @ - Eventos más usados$1 <i class=\"fa-solid fa-film\"></i>"
            ],
            "contentFile": "content/frameworks/vue/vue-props-events.html"
          },
          {
            "id": "vue-computed-watchers",
            "title": "05. Computadas y Observadores",
            "content": "computed(), watch(), watchEffect() y diferencias entre watch y watchEffect",
            "sections": [
              "Propiedades computadas con `computed()`",
              "Observadores con `watch()`",
              "Observadores con `watchEffect()`",
              "Diferencias entre `watch` y `watchEffect`"
            ],
            "contentFile": "content/frameworks/vue/vue-computed-watchers.html"
          },
          {
            "id": "vue-lifecycle",
            "title": "06. Ciclo de Vida",
            "content": "onMounted(), onUpdated(), onUnmounted(), onBeforeMount(), onBeforeUpdate(), onBeforeUnmount()",
            "sections": [
              "Hooks del Ciclo de Vida en Vue",
              "Diagrama del Ciclo de Vida",
              "`onBeforeMount()`",
              "`onMounted()`",
              "`onBeforeUpdate()`",
              "`onUpdated()`",
              "`onBeforeUnmount()`",
              "`onUnmounted()`",
              "Ejemplo Completo",
              "Tabla Comparativa"
            ],
            "contentFile": "content/frameworks/vue/vue-lifecycle.html"
          },
          {
            "id": "vue-methods-functions",
            "title": "07. Métodos y Funciones",
            "content": "Declaración de funciones dentro de setup() y buenas prácticas con funciones internas",
            "sections": [
              "Declaración de funciones dentro de `setup()`",
              "Buenas prácticas con funciones internas",
              "Resumen de buenas prácticas"
            ],
            "contentFile": "content/frameworks/vue/vue-methods-functions.html"
          },
          {
            "id": "vue-forms-models",
            "title": "08. Formularios y Modelos",
            "content": "v-model con Composition API, v-model personalizado con modelValue y validación básica",
            "sections": [
              "v-model con Composition API",
              "v-model personalizado con modelValue",
              "Validación básica"
            ],
            "contentFile": "content/frameworks/vue/vue-forms-models.html"
          },
          {
            "id": "vue-directives-bindings",
            "title": "09. Directivas y Bindings",
            "content": "v-if, v-else, v-show, v-for y claves únicas, v-on para eventos, v-bind para atributos y directivas personalizadas",
            "sections": [
              "Directivas condicionales: v-if, v-else, v-show",
              "v-for y claves únicas",
              "v-bind y : - Los más usados $1 <i class=\"fa-solid fa-film\"></i>",
              "Directivas personalizadas"
            ],
            "contentFile": "content/frameworks/vue/vue-directives-bindings.html"
          },
          {
            "id": "vue-slots",
            "title": "10. Slots",
            "content": "Slot básico, v-slot y sintaxis abreviada, slots nombrados y pasar datos a los slots",
            "sections": [
              "Slot básico",
              "v-slot y sintaxis abreviada",
              "Slots nombrados (#header, #footer)",
              "Pasar datos a los slots (scoped slots)",
              "Casos de uso comunes para slots"
            ],
            "contentFile": "content/frameworks/vue/vue-slots.html"
          },
          {
            "id": "vue-component-communication",
            "title": "11. Comunicación entre Componentes",
            "content": "Envío de datos con props, comunicación hijo <i class=\"fa-solid fa-arrow-right\"></i> padre con emits, comunicación entre hermanos y provide e inject",
            "sections": [
              "Envío de datos con props",
              "Comunicación hijo <i class=\"fa-solid fa-arrow-right\"></i> padre con emits",
              "Comunicación entre hermanos (a través del padre)",
              "provide e injec"
            ],
            "contentFile": "content/frameworks/vue/vue-component-communication.html"
          },
          {
            "id": "vue-styles-css",
            "title": "12. Estilos y CSS",
            "content": "Scoped styles, estilos globales, uso de Tailwind CSS y @apply en archivos CSS",
            "sections": [
              "Estilos en Vue 3 con Composition API",
              "Scoped Styles",
              "Estilos Globales",
              "Directiva @apply en archivos CSS"
            ],
            "contentFile": "content/frameworks/vue/vue-styles-css.html"
          },
          {
            "id": "vue-composables",
            "title": "13. Composables",
            "content": "¿Qué es un composable? useX() funciones reutilizables, carpeta composables/ y uso de ref, watch, computed dentro de composables",
            "sections": [
              "¿Qué es un Composable?",
              "useX() - Funciones Reutilizables",
              "Carpeta composables/",
              "Uso de ref, watch, computed dentro de composables"
            ],
            "contentFile": "content/frameworks/vue/vue-composables.html"
          },
          {
            "id": "vue-transitions-animations",
            "title": "14. Transiciones y Animaciones",
            "content": "<transition>, <transition-group>, hooks de animación y transiciones con clases de Tailwind",
            "sections": [
              "Componente ``",
              "Componente ``",
              "Hooks de animación",
              "Transiciones con clases de Tailwind"
            ],
            "contentFile": "content/frameworks/vue/vue-transitions-animations.html"
          },
          {
            "id": "vue-vue-router",
            "title": "15. Vue Router con Composition API",
            "content": "Configuración de rutas, navegación dinámica, useRouter() y useRoute(), rutas hijas y dinámicas",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/vue/vue-vue-router.html"
          },
          {
            "id": "vue-pinia",
            "title": "16. Pinia (Reemplazo de Vuex)",
            "content": "Instalar y configurar Pinia, defineStore(), uso de storeToRefs(), acceso a getters y acciones, compartir estado entre componentes",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/vue/vue-pinia.html"
          },
          {
            "id": "vue-api-fetch",
            "title": "17. Manejo de APIs y Fetch",
            "content": "fetch y axios en setup(), estado loading, data, error y peticiones reactivas con watch",
            "sections": [
              "Fetch y Axios en setup()",
              "Estado loading, data, error",
              "Peticiones reactivas con watch",
              "Buenas Prácticas"
            ],
            "contentFile": "content/frameworks/vue/vue-api-fetch.html"
          },
          {
            "id": "vue-levantar-proyecto-vue-supabase",
            "title": "18. levantar un proyecto astro tailwind vue supabase",
            "content": "Guía completa para crear un proyecto con Astro, TailwindCSS, Vue y Supabase desde cero",
            "sections": [
              "<i class=\"fa-solid fa-puzzle-piece\"></i> 1. Crear el Proyecto Astro",
              "<i class=\"fa-solid fa-palette\"></i> 2. Instalar TailwindCSS",
              "<i class=\"fa-solid fa-image\"></i> 3. Instalar Vue",
              "<i class=\"fa-solid fa-book-bookmark\"></i> Recursos Adicionales",
              "<i class=\"fa-solid fa-bullseye\"></i> Próximos Pasos"
            ],
            "contentFile": "content/frameworks/vue/vue-levantar-proyecto-vue-supabase.html"
          }
        ]
      },
      {
        "id": "java-swing",
        "title": "Java Swing",
        "icon": "fa-solid fa-window-restore",
        "lessons": [
          {
            "id": "swing-introduccion",
            "title": "1. Introducción a Java y Java Swing",
            "content": "Fundamentos de Java y conceptos básicos de Java Swing",
            "sections": [
              "¿Qué es Java y cómo funciona?",
              "Instalación del JDK y entorno (NetBeans o IntelliJ)",
              "Primer programa con main en Java",
              "¿Qué es Java Swing?",
              "Diferencias entre AWT y Swing",
              "Estructura básica de una ventana (JFrame)"
            ],
            "contentFile": "content/frameworks/java-swing/swing-introduccion.html"
          },
          {
            "id": "swing-componentes-basicos",
            "title": "2. Componentes Básicos de Swing",
            "content": "Aprende a usar los componentes fundamentales de Java Swing",
            "sections": [
              "JLabel, JTextField, JButton",
              "JCheckBox, JRadioButton, ButtonGroup",
              "JComboBox, JList",
              "JTextArea, JScrollPane",
              "Manejadores de eventos con ActionListener",
              "Ejemplo completo: Formulario de registro",
              "Resumen"
            ],
            "contentFile": "content/frameworks/java-swing/swing-componentes-basicos.html"
          },
          {
            "id": "swing-organizacion-interfaces",
            "title": "3. Organización de Interfaces",
            "content": "Aprende a organizar componentes usando layouts y paneles en Java Swing",
            "sections": [
              "Layouts: FlowLayout, BorderLayout, GridLayout",
              "Paneles (JPanel) y organización visual",
              "Ventanas secundarias (JDialog, JOptionPane)",
              "Diseño con GroupLayout y BoxLayout",
              "Ejemplo completo: Aplicación con múltiples layouts",
              "Resumen"
            ],
            "contentFile": "content/frameworks/java-swing/swing-organizacion-interfaces.html"
          },
          {
            "id": "swing-tablas-modelos",
            "title": "4. Tablas y Modelos Personalizados",
            "content": "Aprende a trabajar con JTable y DefaultTableModel en Java Swing",
            "sections": [
              "Uso de JTable",
              "DefaultTableModel y cómo cargar datos",
              "Selección de filas y celdas",
              "Eventos con tablas (ListSelectionListener)",
              "Resumen"
            ],
            "contentFile": "content/frameworks/java-swing/swing-tablas-modelos.html"
          },
          {
            "id": "swing-crud-bd",
            "title": "5. CRUD con Base de Datos",
            "content": "Aprende a conectar Java Swing con bases de datos usando JDBC",
            "sections": [
              "Conexión a MySQL/Oracle con JDBC",
              "Arquitectura en 3 Capas",
              "Capa de Acceso a Datos (DAO Pattern)",
              "Capa de Lógica de Negocio (Service Layer)",
              "Capa de Presentación Refactorizada",
              "Configuración y Uso de la Arquitectura",
              "Beneficios de la Arquitectura en 3 Capas",
              "Validaciones y manejo de errores",
              "Resumen",
              "Arquitectura en 4 Capas con CRUD Completo",
              "Resumen de la Arquitectura Implementada"
            ],
            "contentFile": "content/frameworks/java-swing/swing-crud-bd.html"
          },
          {
            "id": "swing-patrones-arquitecturas",
            "title": "6. Patrones de Diseño y Arquitecturas",
            "content": "Aprende a implementar MVC, arquitectura por capas y patrones como Singleton y DAO",
            "sections": [
              "Arquitectura MVC (Modelo - Vista - Controlador)",
              "Arquitectura por Capas (3 capas)",
              "Patrón Singleton",
              "Patrón DAO (Data Access Object)",
              "Aplicación principal integrando todos los patrones",
              "Resumen"
            ],
            "contentFile": "content/frameworks/java-swing/swing-patrones-arquitecturas.html"
          }
        ]
      },
      {
        "id": "alpine",
        "title": "Alpine.js",
        "icon": "fa-solid fa-mountain",
        "lessons": [
          {
            "id": "alpine-introduction",
            "title": "01. Introducción a Alpine.js",
            "content": "Breve introducción a Alpine.js y sus características principales.",
            "sections": [
              "¿Por qué usar Alpine.js?",
              "Filosofía",
              "¿Cuándo usar Alpine.js?",
              "Ejemplo básico",
              "Recursos oficiales"
            ],
            "contentFile": "content/frameworks/alpine/alpine-introduction.html"
          },
          {
            "id": "alpine-installation",
            "title": "02. Instalación y configuración",
            "content": "Cómo instalar y configurar Alpine.js en tu proyecto.",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/alpine/alpine-installation.html"
          },
          {
            "id": "alpine-syntax",
            "title": "03. Sintaxis básica y directivas",
            "content": "Aprende la sintaxis básica y las directivas principales de Alpine.js.",
            "sections": [
              "Principales directivas de Alpine.js",
              "Otras directivas útiles de Alpine.js"
            ],
            "contentFile": "content/frameworks/alpine/alpine-syntax.html"
          },
          {
            "id": "alpine-reactivity",
            "title": "04. Reactividad y estado",
            "content": "Cómo funciona la reactividad y el manejo de estado en Alpine.js.",
            "sections": [
              "¿Cómo funciona la reactividad en Alpine.js?"
            ],
            "contentFile": "content/frameworks/alpine/alpine-reactivity.html"
          },
          {
            "id": "alpine-events",
            "title": "05. Eventos y manejo de acciones",
            "content": "Manejo de eventos y acciones en Alpine.js.",
            "sections": [
              "Escuchando eventos con x-on y @",
              "Modificadores de eventos",
              "Eventos personalizados",
              "Escuchar eventos globales",
              "Ejemplo avanzado: teclas y combinación de teclas",
              "Delegación de eventos",
              "Eventos en componentes anidados",
              "Acceso al objeto $event",
              "Eventos con parámetros dinámicos",
              "Eventos asíncronos",
              "Ejemplo completo: lista interactiva",
              "Eventos en formularios y validación",
              "Eventos de foco y blur",
              "Eventos de mouse avanzados",
              "Eventos de scroll y resize",
              "Eventos personalizados con detalles complejos",
              "Control de propagación y orden de eventos"
            ],
            "contentFile": "content/frameworks/alpine/alpine-events.html"
          },
          {
            "id": "alpine-lifecycle",
            "title": "06. Ciclo de vida",
            "content": "Hooks y ciclo de vida de los componentes en Alpine.js.",
            "sections": [
              "Hooks y ciclo de vida en Alpine.js",
              "6. x-cloak",
              "7. x-teleport",
              "8. x-id",
              "9. x-effect avanzado",
              "10. $nextTick"
            ],
            "contentFile": "content/frameworks/alpine/alpine-lifecycle.html"
          },
          {
            "id": "alpine-components",
            "title": "07. Componentes y scopes",
            "content": "Organización de componentes y scopes en Alpine.js.",
            "sections": [
              "¿Qué es un componente en Alpine.js?",
              "Anidación de componentes y scopes",
              "Comunicación entre componentes",
              "Acceso a elementos con x-ref y $refs",
              "Scope de datos y aislamiento"
            ],
            "contentFile": "content/frameworks/alpine/alpine-components.html"
          },
          {
            "id": "alpine-plugins",
            "title": "08. Plugins y extensiones",
            "content": "Uso de plugins y extensiones en Alpine.js.",
            "sections": [
              "¿Qué es un plugin en Alpine.js?",
              "Instalación de plugins",
              "Uso de un plugin (ejemplo: persistencia)",
              "Ejemplo: Alpine.js con plugin de máscaras (mask)",
              "Ejemplo: Alpine.js con plugin de intersección (intersect)",
              "Ejemplo: Alpine.js con plugin de colapso (collapse)",
              "Plugins populares para Alpine.js",
              "Cómo crear tu propio plugin",
              "Buenas prácticas al usar plugins",
              "Recursos útiles"
            ],
            "contentFile": "content/frameworks/alpine/alpine-plugins.html"
          },
          {
            "id": "alpine-integrations",
            "title": "09. Integración con otras librerías",
            "content": "Cómo integrar Alpine.js con otras librerías y frameworks.",
            "sections": [
              "Integración con Tailwind CSS",
              "Integración con Laravel Blade",
              "Integración con Livewire",
              "Integración con frameworks de UI (ejemplo: Bootstrap)",
              "Integración con librerías de animación (ejemplo: AOS)",
              "Buenas prácticas de integración"
            ],
            "contentFile": "content/frameworks/alpine/alpine-integrations.html"
          },
          {
            "id": "alpine-examples",
            "title": "10. Casos de uso y ejemplos",
            "content": "Ejemplos prácticos de Alpine.js en acción.",
            "sections": [
              "Ejemplo 1: Menú desplegable",
              "Ejemplo 2: Modal simple",
              "Ejemplo 3: Tabs dinámicas",
              "Ejemplo 4: Acordeón",
              "Ejemplo 5: To-do list interactiva"
            ],
            "contentFile": "content/frameworks/alpine/alpine-examples.html"
          }
        ]
      },
      {
        "id": "laravel",
        "title": "Laravel",
        "icon": "fa-solid fa-wind",
        "lessons": [
          {
            "id": "laravel-intro",
            "title": "1. Introducción a Laravel",
            "content": "Introducción a Laravel, requisitos del sistema, arquitectura MVC y filosofía de desarrollo",
            "sections": [
              "¿Qué es Laravel?",
              "Requisitos del sistema",
              "Arquitectura MVC",
              "Filosofía de desarrollo y ventajas"
            ],
            "contentFile": "content/frameworks/laravel/laravel-intro.html"
          },
          {
            "id": "laravel-installation",
            "title": "2. Instalación y Configuración",
            "content": "Aprende a instalar Laravel vía Composer, configurar el entorno y entender la estructura de carpetas",
            "sections": [
              "Instalar Laravel vía Composer",
              "Configurar .env",
              "Estructura básica de carpetas",
              "Servidor local con Artisan",
              "Configuración de idiomas y zona horaria",
              "Próximos pasos"
            ],
            "contentFile": "content/frameworks/laravel/laravel-installation.html"
          },
          {
            "id": "laravel-routes",
            "title": "3. Rutas (Routing)",
            "content": "Aprende a definir rutas, parámetros, agrupación y redirecciones en Laravel",
            "sections": [
              "Archivos de rutas principales",
              "Definir rutas básicas",
              "Rutas con parámetros",
              "Rutas nombradas",
              "Agrupación de rutas",
              "Redirecciones y respuestas personalizadas",
              "Conclusión"
            ],
            "contentFile": "content/frameworks/laravel/laravel-routes.html"
          },
          {
            "id": "laravel-controllers",
            "title": "4. Controladores",
            "content": "Aprende a crear y utilizar controladores, métodos y controladores resource en Laravel",
            "sections": [
              "Crear un controlador (make:controller)",
              "Métodos dentro del controlador",
              "Controladores resource (--resource)",
              "Inyección de dependencias",
              "Conclusión"
            ],
            "contentFile": "content/frameworks/laravel/laravel-controllers.html"
          },
          {
            "id": "laravel-models",
            "title": "5. Modelos",
            "content": "Aprende a crear y gestionar modelos en Laravel",
            "sections": [
              "¿Qué es un Modelo en Laravel?",
              "Crear un Modelo con Artisan (make:model)",
              "Ubicación y Convención de Nombres de Modelos",
              "Asignación Masiva: $fillable y $guarded",
              "Configuración de la Tabla Manual ($table)",
              "Uso de Claves Primarias Personalizadas ($primaryKey)",
              "Activar o Desactivar Timestamps ($timestamps)",
              "Definir Casts de Atributos ($casts)",
              "Accesores y Mutadores",
              "Scopes Locales y Globales",
              "Eventos del Modelo",
              "Métodos Útiles de Modelo",
              "Relaciones entre Modelos",
              "Clases Base y Traits"
            ],
            "contentFile": "content/frameworks/laravel/laravel-models.html"
          },
          {
            "id": "laravel-blade",
            "title": "6. Vistas con Blade",
            "content": "Aprende a utilizar el motor de plantillas Blade, directivas, componentes y layouts",
            "sections": [
              "Creación de vistas y componentes",
              "Sintaxis Blade básica",
              "Herencia de plantillas",
              "Componentes y layouts",
              "Uso de stacks (@push, @stack)",
              "Inyección de servicios en vistas (@inject)",
              "Conclusión"
            ],
            "contentFile": "content/frameworks/laravel/laravel-blade.html"
          },
          {
            "id": "laravel-eloquent",
            "title": "7. Eloquent ORM",
            "content": "Aprende a utilizar Eloquent ORM para modelos, consultas, relaciones y más",
            "sections": [
              "Consultas básicas y avanzadas",
              "Creación y actualización de registros",
              "Creando registros",
              "Instanciando un modelo",
              "Actualizando registros",
              "Eliminando registros",
              "Relaciones en Eloquent",
              "Mutadores y Accesores",
              "Scopes",
              "API Resources",
              "Paginación"
            ],
            "contentFile": "content/frameworks/laravel/laravel-eloquent.html"
          },
          {
            "id": "laravel-forms-validation",
            "title": "8. Formularios y Validación",
            "content": "Aprende a crear formularios, validar datos y mostrar errores en Laravel",
            "sections": [
              "Crear formularios con Blade",
              "Validaciones en controladores",
              "Validación con FormRequest",
              "Mostrar errores en vistas",
              "Validaciones personalizadas",
              "Conclusión"
            ],
            "contentFile": "content/frameworks/laravel/laravel-forms-validation.html"
          },
          {
            "id": "laravel-auth",
            "title": "9. Autenticación y Autorización",
            "content": "Aprende a implementar autenticación, autorización, políticas y gates en Laravel",
            "sections": [
              "Laravel Breeze, Jetstream y Fortify",
              "Registro, login y logout",
              "Middleware auth, guest y can",
              "Políticas (make:policy)",
              "Gates (Gate::define)",
              "Combinando Políticas y Gates",
              "Conclusión"
            ],
            "contentFile": "content/frameworks/laravel/laravel-auth.html"
          },
          {
            "id": "laravel-migrations-database",
            "title": "10. Migraciones y Base de Datos",
            "content": "Aprende a crear migraciones, seeders, factories y trabajar con bases de datos en Laravel",
            "sections": [
              "Crear y ejecutar migraciones",
              "Seeders y factories",
              "Query Builder vs Eloquent",
              "Tinker: REPL de Laravel",
              "Conclusión"
            ],
            "contentFile": "content/frameworks/laravel/laravel-migrations-database.html"
          },
          {
            "id": "laravel-relationships",
            "title": "11. Relaciones y Claves Foráneas",
            "content": "Aprende a gestionar relaciones y claves foráneas en Laravel",
            "sections": [
              "Sintaxis Básica de Claves Foráneas (foreign)",
              "Relación Uno a Uno en Migraciones",
              "Relación Uno a Muchos en Migraciones",
              "Relación Muchos a Muchos en Migraciones (Tablas Pivote)",
              "Relaciones con onDelete y onUpdate",
              "Definir Claves Foráneas con foreignId()",
              "Uso de constrained() para relaciones automáticas",
              "Eliminar Claves Foráneas (dropForeign)",
              "Mejores Prácticas"
            ],
            "contentFile": "content/frameworks/laravel/laravel-relationships.html"
          },
          {
            "id": "laravel-factories-seeders",
            "title": "12. Factories y Seeders",
            "content": "Aprende a crear factories y seeders en Laravel",
            "sections": [
              "Seeders en Laravel",
              "Factories en Laravel",
              "Mejores prácticas",
              "Ejemplo completo",
              "Conclusión"
            ],
            "contentFile": "content/frameworks/laravel/laravel-factories-seeders.html"
          },
          {
            "id": "laravel-api-rest",
            "title": "13. API REST y JSON",
            "content": "Aprende a crear APIs RESTful, respuestas JSON y autenticación API en Laravel",
            "sections": [
              "Rutas API y controladores tipo apiResource",
              "Respuestas JSON",
              "Middleware API",
              "Autenticación con Sanctum o Passport",
              "Conclusión"
            ],
            "contentFile": "content/frameworks/laravel/laravel-api-rest.html"
          },
          {
            "id": "laravel-storage-uploads",
            "title": "14. Archivos, Storage y Uploads",
            "content": "Aprende a gestionar archivos, subir archivos y configurar almacenamiento en Laravel",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/laravel/laravel-storage-uploads.html"
          },
          {
            "id": "laravel-events-listeners",
            "title": "15. Eventos, Listeners y Observers",
            "content": "Aprende a crear y utilizar eventos, listeners y observers en Laravel",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/laravel/laravel-events-listeners.html"
          },
          {
            "id": "laravel-jobs-queues",
            "title": "16. Jobs, Queues y Workers",
            "content": "Aprende a crear y gestionar jobs, colas y workers en Laravel",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/laravel/laravel-jobs-queues.html"
          },
          {
            "id": "laravel-notifications-mail",
            "title": "17. Notificaciones y Correos",
            "content": "Aprende a enviar notificaciones y correos electrónicos en Laravel",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/laravel/laravel-notifications-mail.html"
          }
        ]
      },
      {
        "id": "inertia",
        "title": "Inertia",
        "icon": "fa-solid fa-shuffle",
        "lessons": [
          {
            "id": "inertia-introduction",
            "title": "1. Introducción a Inertia.js",
            "content": "Aprende qué es Inertia.js, cómo funciona y sus ventajas frente a otras soluciones SPA",
            "sections": [
              "¿Qué es Inertia.js y cómo funciona?",
              "Arquitectura tipo SPA con backend tradicional",
              "Ventajas frente a otras soluciones SPA",
              "¿Cuándo usar Inertia.js?"
            ],
            "contentFile": "content/frameworks/inertia/inertia-introduction.html"
          },
          {
            "id": "inertia-installation",
            "title": "2. Instalación y configuración inicial",
            "content": "Aprende a instalar y configurar Inertia.js con Laravel y Vue 3",
            "sections": [
              "Requisitos previos: Laravel y Vue 3",
              "Instalación de paquetes de Inertia (Laravel Adapter y Vue Adapter)",
              "Configuración del middleware HandleInertiaRequests",
              "Configuración de app.js en Vue y Laravel",
              "Compilar y probar",
              "Estructura de directorios recomendada"
            ],
            "contentFile": "content/frameworks/inertia/inertia-installation.html"
          },
          {
            "id": "inertia-routes-controllers",
            "title": "3. Rutas y controladores en Laravel",
            "content": "Aprende a trabajar con rutas y controladores de Laravel en aplicaciones Inertia.js",
            "sections": [
              "Rutas web con Route::inertia()",
              "Rutas tipo resource con Inertia",
              "Controladores que retornan Inertia::render()",
              "Paso de props desde Laravel a Vue",
              "COMPONENTES EN VUE 3 CON COMPOSITION API"
            ],
            "contentFile": "content/frameworks/inertia/inertia-routes-controllers.html"
          },
          {
            "id": "inertia-vue-components",
            "title": "4. Componentes en Vue 3",
            "content": "Aprende a crear y utilizar componentes Vue 3 en aplicaciones Inertia.js",
            "sections": [
              "Creación de componentes de páginas (Pages)",
              "Reutilización de componentes base (Botones, Inputs, etc.)",
              "Manejo de Props en Vue",
              "Eventos personalizados con emit"
            ],
            "contentFile": "content/frameworks/inertia/inertia-vue-components.html"
          },
          {
            "id": "inertia-layouts",
            "title": "5. Layouts y estructura de páginas",
            "content": "Aprende a crear y gestionar layouts para tus aplicaciones Inertia.js",
            "sections": [
              "Creación de layout principal",
              "Layouts anidados y dinámicos",
              "Slots y contenido dinámico en layouts",
              "Cambio de layout por página"
            ],
            "contentFile": "content/frameworks/inertia/inertia-layouts.html"
          },
          {
            "id": "inertia-navigation",
            "title": "6. Navegación entre páginas",
            "content": "Aprende a implementar navegación SPA con Inertia.js",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/inertia/inertia-navigation.html"
          },
          {
            "id": "inertia-forms",
            "title": "7. Formularios y useForm",
            "content": "Aprende a trabajar con formularios y el hook useForm en Inertia.js",
            "sections": [
              "useForm: definición y uso básico",
              "Validación y errores del lado del servidor",
              "Reset de formularios y estados"
            ],
            "contentFile": "content/frameworks/inertia/inertia-forms.html"
          },
          {
            "id": "inertia-responses-redirects",
            "title": "8. Manejo de respuestas y redirecciones",
            "content": "Aprende a manejar respuestas y redirecciones en aplicaciones Inertia.js",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/inertia/inertia-responses-redirects.html"
          },
          {
            "id": "inertia-shared-props",
            "title": "9. Props compartidas (Shared Props)",
            "content": "Aprende a utilizar props compartidas en aplicaciones Inertia.js",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/inertia/inertia-shared-props.html"
          },
          {
            "id": "inertia-lazy-loading",
            "title": "10. Carga diferida y Lazy Loading",
            "content": "Aprende a implementar carga diferida y lazy loading en aplicaciones Inertia.js",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/inertia/inertia-lazy-loading.html"
          },
          {
            "id": "inertia-middleware-auth",
            "title": "11. Middlewares y autenticación",
            "content": "Aprende a implementar middlewares y autenticación en aplicaciones Inertia.js",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/inertia/inertia-middleware-auth.html"
          },
          {
            "id": "inertia-integrations",
            "title": "12. Integración con otras librerías",
            "content": "Aprende a integrar Inertia.js con otras librerías y frameworks",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/inertia/inertia-integrations.html"
          }
        ]
      },
      {
        "id": "fastapi",
        "title": "FastAPI",
        "icon": "fa-solid fa-bolt",
        "lessons": [
          {
            "id": "fastapi-introduccion",
            "title": "01. Introducción a FastAPI",
            "content": "Qué es FastAPI, para qué se utiliza, diferencias con Flask y Django, ventajas y casos de uso",
            "sections": [
              "<i class=\"fa-solid fa-bolt\"></i> 1.1 Qué es FastAPI",
              "<i class=\"fa-solid fa-bullseye\"></i> 1.2 Para qué se utiliza FastAPI",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 1.3 Diferencias entre FastAPI, Flask y Django",
              "<i class=\"fa-solid fa-rocket\"></i> 1.4 Ventajas de FastAPI",
              "<i class=\"fa-solid fa-briefcase\"></i> 1.5 Casos de uso en aplicaciones reales",
              "<i class=\"fa-solid fa-helmet-safety\"></i> 1.6 Arquitectura básica de una API REST",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-introduccion.html"
          },
          {
            "id": "fastapi-instalacion",
            "title": "02. Instalación y configuración del entorno",
            "content": "Instalación de FastAPI y Uvicorn, crear el primer proyecto y ejecutar el servidor de desarrollo",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> 2.1 Instalación de FastAPI",
              "<i class=\"fa-solid fa-crown\"></i> 2.2 Instalación de Uvicorn (servidor ASGI)",
              "<i class=\"fa-solid fa-certificate\"></i> 2.3 Crear el primer proyecto FastAPI",
              "<i class=\"fa-solid fa-folder\"></i> 2.4 Estructura mínima de un proyecto",
              "<i class=\"fa-solid fa-play\"></i> 2.5 Ejecutar el servidor de desarrollo",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 2.6 Uso de recarga automática (reload)",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-instalacion.html"
          },
          {
            "id": "fastapi-primera-api",
            "title": "03. Creación de la primera API",
            "content": "Crear la aplicación con FastAPI(), definir rutas básicas, endpoints GET y respuestas JSON",
            "sections": [
              "<i class=\"fa-solid fa-rocket\"></i> 3.1 Crear la aplicación con FastAPI()",
              "<i class=\"fa-solid fa-road\"></i> 3.2 Definir rutas básicas",
              "<i class=\"fa-solid fa-download\"></i> 3.3 Endpoint con método GET",
              "<i class=\"fa-solid fa-upload\"></i> 3.4 Respuestas simples en formato JSON",
              "<i class=\"fa-solid fa-palette\"></i> 3.5 Uso del decorador @app.get()",
              "<i class=\"fa-solid fa-earth-americas\"></i> 3.6 Probar la API desde el navegador",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-primera-api.html"
          },
          {
            "id": "fastapi-metodos-http",
            "title": "04. Métodos HTTP en FastAPI",
            "content": "Métodos GET, POST, PUT, DELETE, PATCH y buenas prácticas en APIs REST",
            "sections": [
              "<i class=\"fa-solid fa-download\"></i> 4.1 Método GET",
              "<i class=\"fa-solid fa-upload\"></i> 4.2 Método POST",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 4.3 Método PUT",
              "<i class=\"fa-solid fa-trash-can\"></i> 4.4 Método DELETE",
              "<i class=\"fa-solid fa-pencil\"></i> 4.5 Método PATCH",
              "<i class=\"fa-solid fa-circle-check\"></i> 4.6 Buenas prácticas en APIs REST",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-metodos-http.html"
          },
          {
            "id": "fastapi-parametros-rutas",
            "title": "05. Parámetros en las rutas",
            "content": "Path parameters, query parameters, tipado, validación automática y parámetros opcionales",
            "sections": [
              "<i class=\"fa-solid fa-road\"></i> 5.1 Path Parameters",
              "<i class=\"fa-solid fa-tag\"></i> 5.2 Tipado de parámetros",
              "<i class=\"fa-solid fa-circle-check\"></i> 5.3 Validación automática de datos",
              "<i class=\"fa-solid fa-circle-question\"></i> 5.4 Query Parameters",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 5.5 Parámetros opcionales",
              "<i class=\"fa-solid fa-shuffle\"></i> 5.6 Uso de múltiples parámetros",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-parametros-rutas.html"
          },
          {
            "id": "fastapi-pydantic",
            "title": "06. Validación de datos con Pydantic",
            "content": "Qué es Pydantic, creación de modelos de datos, validación automática y tipos soportados",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> 6.1 Qué es Pydantic",
              "<i class=\"fa-solid fa-helmet-safety\"></i> 6.2 Creación de modelos de datos",
              "<i class=\"fa-solid fa-circle-check\"></i> 6.3 Validación automática de datos",
              "<i class=\"fa-solid fa-font\"></i> 6.4 Tipos de datos soportados",
              "<i class=\"fa-solid fa-circle-question\"></i> 6.5 Campos obligatorios y opcionales",
              "<i class=\"fa-solid fa-lightbulb\"></i> 6.6 Ejemplo de modelos para APIs",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-pydantic.html"
          },
          {
            "id": "fastapi-request-body",
            "title": "07. Envío y recepción de datos (Request Body)",
            "content": "Qué es el Request Body, uso de modelos Pydantic en POST, manejo de datos JSON",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> 7.1 Qué es el Request Body",
              "<i class=\"fa-solid fa-helmet-safety\"></i> 7.2 Uso de modelos Pydantic en POST",
              "<i class=\"fa-solid fa-circle-check\"></i> 7.3 Validación de datos enviados",
              "<i class=\"fa-solid fa-clipboard-list\"></i> 7.4 Manejo de datos JSON",
              "<i class=\"fa-solid fa-upload\"></i> 7.5 Respuestas estructuradas",
              "<i class=\"fa-solid fa-lightbulb\"></i> 7.6 Ejemplo de creación de registros",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-request-body.html"
          },
          {
            "id": "fastapi-documentacion",
            "title": "08. Documentación automática de FastAPI",
            "content": "Swagger UI, ReDoc, acceso a la documentación automática y mejoras en la documentación",
            "sections": [
              "<i class=\"fa-solid fa-book-bookmark\"></i> 8.1 Swagger UI",
              "<i class=\"fa-solid fa-book-open\"></i> 8.2 ReDoc",
              "<i class=\"fa-solid fa-link\"></i> 8.3 Cómo acceder a la documentación automática",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 8.4 Descripción de endpoints",
              "<i class=\"fa-solid fa-lightbulb\"></i> 8.5 Agregar ejemplos a los modelos",
              "<i class=\"fa-solid fa-palette\"></i> 8.6 Mejorar la documentación de la API",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-documentacion.html"
          },
          {
            "id": "fastapi-organizacion-proyectos",
            "title": "09. Organización de proyectos FastAPI",
            "content": "Estructura profesional de carpetas, separación de rutas y modelos, uso de routers",
            "sections": [
              "<i class=\"fa-solid fa-folder\"></i> 9.1 Estructura profesional de carpetas",
              "<i class=\"fa-solid fa-road\"></i> 9.2 Separación de rutas",
              "<i class=\"fa-solid fa-box\"></i> 9.3 Separación de modelos",
              "<i class=\"fa-solid fa-shuffle\"></i> 9.4 Uso de routers",
              "<i class=\"fa-solid fa-puzzle-piece\"></i> 9.5 Modularización de la aplicación",
              "<i class=\"fa-solid fa-circle-check\"></i> 9.6 Buenas prácticas en proyectos grandes",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-organizacion-proyectos.html"
          },
          {
            "id": "fastapi-base-datos",
            "title": "10. Conexión con base de datos",
            "content": "Conexión con SQLite y PostgreSQL, uso de SQLAlchemy, operaciones CRUD con base de datos",
            "sections": [
              "<i class=\"fa-solid fa-box-archive\"></i> 10.1 Introducción a bases de datos con FastAPI",
              "<i class=\"fa-solid fa-plug\"></i> 10.2 Conexión con SQLite",
              "<i class=\"fa-solid fa-database\"></i> 10.3 Conexión con PostgreSQL",
              "<i class=\"fa-solid fa-chart-column\"></i> 10.4 Modelos SQLAlchemy",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 10.5 Operaciones CRUD",
              "<i class=\"fa-solid fa-lightbulb\"></i> 10.6 Ejemplo completo de API con base de datos"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-base-datos.html"
          },
          {
            "id": "fastapi-autenticacion-seguridad",
            "title": "11. Autenticación y seguridad",
            "content": "Autenticación en APIs, tokens JWT, OAuth2, protección de rutas y manejo de contraseñas",
            "sections": [
              "<i class=\"fa-solid fa-user-lock\"></i> 11.1 Introducción a la autenticación en APIs",
              "<i class=\"fa-solid fa-key\"></i> 11.2 Tokens JWT",
              "<i class=\"fa-solid fa-shield-halved\"></i> 11.3 OAuth2 con FastAPI",
              "<i class=\"fa-solid fa-person-digging\"></i> 11.4 Protección de rutas",
              "<i class=\"fa-solid fa-lock\"></i> 11.5 Manejo seguro de contraseñas",
              "<i class=\"fa-solid fa-lightbulb\"></i> 11.6 Ejemplo completo de autenticación",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Resumen"
            ],
            "contentFile": "content/frameworks/fastapi/fastapi-autenticacion-seguridad.html"
          }
        ]
      },
      {
        "id": "spring",
        "title": "Java Spring",
        "icon": "fa-solid fa-leaf",
        "lessons": [
          {
            "id": "spring-intro",
            "title": "01. Introducción al Ecosistema Spring",
            "content": "Qué es Spring Framework, su historia, arquitectura y ventajas frente a otros frameworks",
            "sections": [
              "<i class=\"fa-solid fa-seedling\"></i> 1.1 ¿Qué es Spring Framework?",
              "<i class=\"fa-solid fa-scroll\"></i> 1.2 Historia y Evolución de Spring",
              "<i class=\"fa-solid fa-wrench\"></i> 1.3 Problemas que Resuelve Spring",
              "<i class=\"fa-solid fa-helmet-safety\"></i> 1.4 Arquitectura General del Framework",
              "<i class=\"fa-solid fa-bolt\"></i> 1.5 Diferencia entre Spring Framework y Spring Boot",
              "<i class=\"fa-solid fa-earth-americas\"></i> 1.6 Ecosistema Completo de Spring",
              "<i class=\"fa-solid fa-building\"></i> 1.7 Casos Reales de Uso Empresarial",
              "<i class=\"fa-solid fa-circle-check\"></i> 1.8 Ventajas Frente a Otros Frameworks"
            ],
            "contentFile": "content/frameworks/spring/spring-intro.html"
          },
          {
            "id": "spring-configuracion-entorno",
            "title": "02. Configuración del Entorno",
            "content": "Instalación de JDK, IntelliJ IDEA, Spring Initializr y gestión de dependencias con Maven/Gradle",
            "sections": [
              "<i class=\"fa-solid fa-mug-hot\"></i> 2.1 Instalación de JDK",
              "<i class=\"fa-solid fa-gear\"></i> 2.2 Configuración de Variables de Entorno",
              "<i class=\"fa-solid fa-laptop-code\"></i> 2.3 Uso de IntelliJ IDEA para Spring",
              "<i class=\"fa-solid fa-rocket\"></i> 2.4 Creación de Proyectos con Spring Initializr",
              "<i class=\"fa-solid fa-folder\"></i> 2.5 Estructura de Carpetas en Spring Boot",
              "<i class=\"fa-solid fa-box\"></i> 2.6 Gestión de Dependencias con Maven",
              "<i class=\"fa-solid fa-database\"></i> 2.7 Gestión de Dependencias con Gradle",
              "<i class=\"fa-solid fa-play\"></i> 2.8 Ejecución de Proyectos Spring"
            ],
            "contentFile": "content/frameworks/spring/spring-configuracion-entorno.html"
          },
          {
            "id": "spring-spring-core",
            "title": "03. Fundamentos de Spring Core",
            "content": "IoC, inyección de dependencias, contenedor de Spring y configuración con anotaciones",
            "sections": [
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 3.1 Concepto de IoC (Inversion of Control)",
              "<i class=\"fa-solid fa-syringe\"></i> 3.2 Inyección de Dependencias (DI)",
              "<i class=\"fa-solid fa-wrench\"></i> 3.3 Tipos de Inyección",
              "<i class=\"fa-solid fa-box\"></i> 3.4 Contenedor de Spring",
              "<i class=\"fa-solid fa-industry\"></i> 3.5 BeanFactory vs ApplicationContext",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 3.6 Ciclo de Vida de los Beans",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 3.7 Configuración XML vs Java",
              "<i class=\"fa-solid fa-tag\"></i> 3.8 Configuración Basada en Anotaciones"
            ],
            "contentFile": "content/frameworks/spring/spring-spring-core.html"
          },
          {
            "id": "spring-beans-anotaciones",
            "title": "04. Gestión de Beans y Anotaciones",
            "content": "\"@Component, @Service, @Repository, @Autowired, @Scope, ciclo de vida y profiles\"",
            "sections": [
              "<i class=\"fa-solid fa-tag\"></i> 4.1 @Component, @Service, @Repository, @Controller",
              "<i class=\"fa-solid fa-link\"></i> 4.2 @Autowired y Resolución de Dependencias",
              "<i class=\"fa-solid fa-bullseye\"></i> 4.3 @Qualifier y @Primary",
              "<i class=\"fa-solid fa-box\"></i> 4.4 @Scope (singleton, prototype, request, session)",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 4.5 Inicialización y Destrucción de Beans",
              "<i class=\"fa-solid fa-tag\"></i> 4.6 @PostConstruct y @PreDestroy",
              "<i class=\"fa-solid fa-earth-americas\"></i> 4.7 Profiles (@Profile)",
              "<i class=\"fa-solid fa-gear\"></i> 4.8 Configuración Condicional de Beans"
            ],
            "contentFile": "content/frameworks/spring/spring-beans-anotaciones.html"
          },
          {
            "id": "spring-boot",
            "title": "05. Spring Boot en Profundidad",
            "content": "Auto-configuración, starters, properties, perfiles, logs y DevTools",
            "sections": [
              "<i class=\"fa-solid fa-bolt\"></i> 5.1 Auto-configuración",
              "<i class=\"fa-solid fa-box\"></i> 5.2 Starter Dependencies",
              "<i class=\"fa-solid fa-gear\"></i> 5.3 application.properties vs application.yml",
              "<i class=\"fa-solid fa-wrench\"></i> 5.4 Configuración Externa",
              "<i class=\"fa-solid fa-earth-americas\"></i> 5.5 Manejo de Perfiles (dev, prod)",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 5.6 Logs en Spring Boot",
              "<i class=\"fa-solid fa-fire\"></i> 5.7 DevTools y Hot Reload",
              "<i class=\"fa-solid fa-rocket\"></i> 5.8 Personalización del Arranque"
            ],
            "contentFile": "content/frameworks/spring/spring-boot.html"
          },
          {
            "id": "spring-apis-rest",
            "title": "06. APIs REST con Spring Web",
            "content": "\"@RestController, @RequestMapping, manejo de parámetros, serialización JSON y buenas prácticas REST\"",
            "sections": [
              "<i class=\"fa-solid fa-earth-americas\"></i> 6.1 Arquitectura REST",
              "<i class=\"fa-solid fa-gamepad\"></i> 6.2 @RestController y @Controller",
              "<i class=\"fa-solid fa-map\"></i> 6.3 @RequestMapping y Derivados",
              "<i class=\"fa-solid fa-download\"></i> 6.4 Manejo de Parámetros (Path, Query, Body)",
              "<i class=\"fa-solid fa-upload\"></i> 6.5 Serialización JSON con Jackson",
              "<i class=\"fa-solid fa-envelope\"></i> 6.6 Manejo de Respuestas HTTP",
              "<i class=\"fa-solid fa-list-ol\"></i> 6.7 Versionado de APIs",
              "<i class=\"fa-solid fa-circle-check\"></i> 6.8 Buenas Prácticas REST"
            ],
            "contentFile": "content/frameworks/spring/spring-apis-rest.html"
          },
          {
            "id": "spring-excepciones-validaciones",
            "title": "07. Excepciones y Validaciones",
            "content": "\"@ExceptionHandler, @ControllerAdvice, Bean Validation, validadores personalizados\"",
            "sections": [
              "<i class=\"fa-solid fa-triangle-exclamation\"></i> 7.1 Manejo de Excepciones en Spring",
              "<i class=\"fa-solid fa-bullseye\"></i> 7.2 @ExceptionHandler",
              "<i class=\"fa-solid fa-earth-americas\"></i> 7.3 @ControllerAdvice",
              "<i class=\"fa-solid fa-shield-halved\"></i> 7.4 Manejo Global de Errores",
              "<i class=\"fa-solid fa-circle-check\"></i> 7.5 Validaciones con @Valid",
              "<i class=\"fa-solid fa-clipboard-list\"></i> 7.6 Bean Validation",
              "<i class=\"fa-solid fa-wrench\"></i> 7.7 Validadores Personalizados",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 7.8 Estructura de Errores REST"
            ],
            "contentFile": "content/frameworks/spring/spring-excepciones-validaciones.html"
          },
          {
            "id": "spring-spring-data-jpa",
            "title": "08. Spring Data JPA",
            "content": "Configuración de base de datos, entidades, repositorios, métodos derivados y consultas personalizadas",
            "sections": [
              "<i class=\"fa-solid fa-book-bookmark\"></i> 8.1 Introducción a Spring Data",
              "<i class=\"fa-solid fa-gear\"></i> 8.2 Configuración de Base de Datos",
              "<i class=\"fa-solid fa-landmark\"></i> 8.3 Creación de Entidades",
              "<i class=\"fa-solid fa-box\"></i> 8.4 Uso de Repositorios",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> 8.5 Métodos Derivados",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 8.6 Consultas Personalizadas",
              "<i class=\"fa-solid fa-link\"></i> 8.7 Relaciones entre Entidades",
              "<i class=\"fa-solid fa-box-archive\"></i> 8.8 Integración con Base de Datos"
            ],
            "contentFile": "content/frameworks/spring/spring-spring-data-jpa.html"
          },
          {
            "id": "spring-hibernate",
            "title": "09. Hibernate en Spring",
            "content": "Integración con Spring, Lazy vs Eager Loading, caché, optimización y problema N+1",
            "sections": [
              "<i class=\"fa-solid fa-database\"></i> 9.1 ¿Qué es Hibernate?",
              "<i class=\"fa-solid fa-link\"></i> 9.2 Integración con Spring",
              "<i class=\"fa-solid fa-hourglass-half\"></i> 9.3 Lazy vs Eager Loading",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 9.4 Ciclo de Vida de Entidades",
              "<i class=\"fa-solid fa-floppy-disk\"></i> 9.5 Caché de Primer Nivel",
              "<i class=\"fa-solid fa-box-archive\"></i> 9.6 Caché de Segundo Nivel",
              "<i class=\"fa-solid fa-bolt\"></i> 9.7 Optimización de Consultas",
              "<i class=\"fa-solid fa-list-ol\"></i> 9.8 Problema N+1"
            ],
            "contentFile": "content/frameworks/spring/spring-hibernate.html"
          },
          {
            "id": "spring-transacciones",
            "title": "10. Transacciones en Spring",
            "content": "\"@Transactional, propagación, aislamiento, rollback y transacciones distribuidas\"",
            "sections": [
              "<i class=\"fa-solid fa-coins\"></i> 10.1 Concepto de Transacciones",
              "<i class=\"fa-solid fa-tag\"></i> 10.2 @Transactional",
              "<i class=\"fa-solid fa-shuffle\"></i> 10.3 Propagación de Transacciones",
              "<i class=\"fa-solid fa-lock\"></i> 10.4 Aislamiento de Transacciones",
              "<i class=\"fa-solid fa-arrow-rotate-left\"></i> 10.5 Rollback Automático",
              "<i class=\"fa-solid fa-triangle-exclamation\"></i> 10.6 Manejo de Errores en Transacciones",
              "<i class=\"fa-solid fa-earth-americas\"></i> 10.7 Transacciones Distribuidas"
            ],
            "contentFile": "content/frameworks/spring/spring-transacciones.html"
          },
          {
            "id": "spring-spring-security",
            "title": "11. Spring Security",
            "content": "Autenticación, autorización, filtros de seguridad, JWT y OAuth2",
            "sections": [
              "<i class=\"fa-solid fa-user-lock\"></i> 11.1 Introducción a Spring Security",
              "<i class=\"fa-solid fa-key\"></i> 11.2 Autenticación",
              "<i class=\"fa-solid fa-shield-halved\"></i> 11.3 Autorización",
              "<i class=\"fa-solid fa-link\"></i> 11.4 Filtros de Seguridad",
              "<i class=\"fa-solid fa-ticket\"></i> 11.5 JWT (JSON Web Tokens)",
              "<i class=\"fa-solid fa-earth-americas\"></i> 11.6 OAuth2",
              "<i class=\"fa-solid fa-shield-halved\"></i> 11.7 Protección CSRF y CORS",
              "<i class=\"fa-solid fa-lock\"></i> 11.8 Configuración Completa para APIs REST"
            ],
            "contentFile": "content/frameworks/spring/spring-spring-security.html"
          },
          {
            "id": "spring-aop",
            "title": "12. Programación Orientada a Aspectos",
            "content": "Conceptos de AOP, aspectos, JoinPoints, tipos de Advice y casos de uso reales",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> 12.1 ¿Qué es AOP?",
              "<i class=\"fa-solid fa-book-bookmark\"></i> 12.2 Conceptos Fundamentales",
              "<i class=\"fa-solid fa-wrench\"></i> 12.3 Configuración de AOP",
              "<i class=\"fa-solid fa-bullseye\"></i> 12.4 Pointcut Expressions",
              "<i class=\"fa-solid fa-bullhorn\"></i> 12.5 Tipos de Advice",
              "<i class=\"fa-solid fa-screwdriver-wrench\"></i> 12.6 JoinPoint y ProceedingJoinPoint",
              "<i class=\"fa-solid fa-chart-column\"></i> 12.7 Casos de Uso Reales",
              "<i class=\"fa-solid fa-triangle-exclamation\"></i> 12.8 Limitaciones y Buenas Prácticas"
            ],
            "contentFile": "content/frameworks/spring/spring-aop.html"
          },
          {
            "id": "spring-testing",
            "title": "13. Testing en Spring",
            "content": "Pruebas unitarias, integración, Mockito, @SpringBootTest y buenas prácticas",
            "sections": [
              "<i class=\"fa-solid fa-flask\"></i> 13.1 Introducción al Testing",
              "<i class=\"fa-solid fa-masks-theater\"></i> 13.3 Mockito",
              "<i class=\"fa-solid fa-link\"></i> 13.4 @SpringBootTest",
              "<i class=\"fa-solid fa-earth-americas\"></i> 13.5 @WebMvcTest",
              "<i class=\"fa-solid fa-box-archive\"></i> 13.6 @DataJpaTest",
              "<i class=\"fa-solid fa-lock\"></i> 13.7 Test de Seguridad",
              "<i class=\"fa-solid fa-circle-check\"></i> 13.8 Buenas Prácticas"
            ],
            "contentFile": "content/frameworks/spring/spring-testing.html"
          },
          {
            "id": "spring-archivos",
            "title": "14. Manejo de Archivos",
            "content": "Subida, descarga, Multipart, almacenamiento local y streaming de archivos",
            "sections": [
              "<i class=\"fa-solid fa-folder\"></i> 14.1 Configuración de Multipart",
              "<i class=\"fa-solid fa-arrow-up\"></i> 14.2 Subida de Archivos",
              "<i class=\"fa-solid fa-arrow-down\"></i> 14.3 Descarga de Archivos",
              "<i class=\"fa-solid fa-circle-check\"></i> 14.4 Validación de Archivos",
              "<i class=\"fa-solid fa-folder-open\"></i> 14.5 Almacenamiento Local",
              "<i class=\"fa-solid fa-water\"></i> 14.6 Streaming de Archivos",
              "<i class=\"fa-solid fa-image\"></i> 14.7 Procesamiento de Imágenes",
              "<i class=\"fa-solid fa-cloud\"></i> 14.8 Almacenamiento en la Nube (S3)"
            ],
            "contentFile": "content/frameworks/spring/spring-archivos.html"
          },
          {
            "id": "spring-microservicios",
            "title": "15. Comunicación entre Microservicios",
            "content": "REST vs mensajería, Feign Client, balanceo de carga, Service Discovery y Circuit Breaker",
            "sections": [
              "<i class=\"fa-solid fa-helmet-safety\"></i> 15.1 Arquitectura de Microservicios",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 15.2 Comunicación Síncrona (REST)",
              "<i class=\"fa-solid fa-feather\"></i> 15.3 Feign Client",
              "<i class=\"fa-solid fa-scale-balanced\"></i> 15.4 Balanceo de Carga",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> 15.5 Service Discovery",
              "<i class=\"fa-solid fa-plug\"></i> 15.6 Circuit Breaker",
              "<i class=\"fa-solid fa-envelope\"></i> 15.7 Comunicación Asíncrona",
              "<i class=\"fa-solid fa-chart-column\"></i> 15.8 Patrones de Comunicación"
            ],
            "contentFile": "content/frameworks/spring/spring-microservicios.html"
          },
          {
            "id": "spring-spring-cloud",
            "title": "16. Spring Cloud",
            "content": "Config Server, Eureka Server, API Gateway, Resilience4j y arquitectura de microservicios",
            "sections": [
              "<i class=\"fa-solid fa-cloud\"></i> 16.1 Introducción a Spring Cloud",
              "<i class=\"fa-solid fa-gear\"></i> 16.2 Config Server",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> 16.3 Eureka Server",
              "<i class=\"fa-solid fa-door-open\"></i> 16.4 API Gateway",
              "<i class=\"fa-solid fa-shield-halved\"></i> 16.5 Resilience4j",
              "<i class=\"fa-solid fa-chart-column\"></i> 16.6 Observabilidad",
              "<i class=\"fa-solid fa-landmark\"></i> 16.7 Arquitectura Completa",
              "<i class=\"fa-solid fa-circle-check\"></i> 16.8 Buenas Prácticas"
            ],
            "contentFile": "content/frameworks/spring/spring-spring-cloud.html"
          },
          {
            "id": "spring-mensajeria",
            "title": "17. Mensajería en Spring",
            "content": "RabbitMQ, Kafka, productores y consumidores, eventos asincrónicos",
            "sections": [
              "<i class=\"fa-solid fa-envelope\"></i> 17.1 Introducción a la Mensajería",
              "<i class=\"fa-solid fa-paw\"></i> 17.2 RabbitMQ",
              "<i class=\"fa-solid fa-dove\"></i> 17.3 Apache Kafka",
              "<i class=\"fa-solid fa-bullseye\"></i> 17.4 Eventos de Dominio",
              "<i class=\"fa-solid fa-chart-column\"></i> 17.5 Patrones de Mensajería"
            ],
            "contentFile": "content/frameworks/spring/spring-mensajeria.html"
          },
          {
            "id": "spring-documentacion-apis",
            "title": "18. Documentación de APIs",
            "content": "Swagger, OpenAPI, documentación automática y buenas prácticas",
            "sections": [
              "<i class=\"fa-solid fa-book-open\"></i> 18.1 Introducción a OpenAPI",
              "<i class=\"fa-solid fa-wrench\"></i> 18.2 SpringDoc OpenAPI",
              "<i class=\"fa-solid fa-tag\"></i> 18.3 Anotaciones de Documentación",
              "<i class=\"fa-solid fa-user-lock\"></i> 18.4 Documentar Seguridad",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 18.5 Ejemplos y Respuestas",
              "<i class=\"fa-solid fa-palette\"></i> 18.6 Personalización de Swagger UI",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 18.7 Versionado de APIs",
              "<i class=\"fa-solid fa-upload\"></i> 18.8 Exportar y Generar Clientes"
            ],
            "contentFile": "content/frameworks/spring/spring-documentacion-apis.html"
          },
          {
            "id": "spring-performance",
            "title": "19. Performance y Optimización",
            "content": "Profiling, optimización de consultas, cacheo con Spring y Redis",
            "sections": [
              "<i class=\"fa-solid fa-bolt\"></i> 19.1 Introducción al Performance",
              "<i class=\"fa-solid fa-chart-column\"></i> 19.2 Profiling y Métricas",
              "<i class=\"fa-solid fa-box-archive\"></i> 19.3 Optimización de Consultas",
              "<i class=\"fa-solid fa-floppy-disk\"></i> 19.4 Caché con Spring",
              "<i class=\"fa-solid fa-circle\"></i> 19.5 Caché con Redis",
              "<i class=\"fa-solid fa-plug\"></i> 19.6 Pool de Conexiones",
              "<i class=\"fa-solid fa-bolt\"></i> 19.7 Procesamiento Asíncrono",
              "<i class=\"fa-solid fa-chart-line\"></i> 19.8 Buenas Prácticas"
            ],
            "contentFile": "content/frameworks/spring/spring-performance.html"
          },
          {
            "id": "spring-docker-despliegue",
            "title": "20. Docker y Despliegue",
            "content": "Dockerfile, Docker Compose, despliegue en servidores y CI/CD",
            "sections": [
              "<i class=\"fa-brands fa-docker\"></i> 20.1 Docker Básico",
              "<i class=\"fa-brands fa-github\"></i> 20.2 Docker Compose",
              "<i class=\"fa-solid fa-rocket\"></i> 20.3 CI/CD con GitHub Actions",
              "<i class=\"fa-solid fa-yin-yang\"></i> 20.4 Kubernetes",
              "<i class=\"fa-solid fa-earth-americas\"></i> 20.5 Despliegue en Cloud",
              "<i class=\"fa-solid fa-box\"></i> 20.6 Configuración de Producción",
              "<i class=\"fa-solid fa-lock\"></i> 20.7 Seguridad en Despliegue",
              "<i class=\"fa-solid fa-chart-column\"></i> 20.8 Monitoreo en Producción"
            ],
            "contentFile": "content/frameworks/spring/spring-docker-despliegue.html"
          },
          {
            "id": "spring-arquitectura",
            "title": "21. Buenas Prácticas y Arquitectura",
            "content": "Arquitectura en capas, Clean Architecture, principios SOLID, DTOs y mantenibilidad",
            "sections": [
              "<i class=\"fa-solid fa-landmark\"></i> 21.1 Arquitectura en Capas",
              "<i class=\"fa-solid fa-cubes\"></i> 21.2 Principios SOLID",
              "<i class=\"fa-solid fa-broom\"></i> 21.3 Clean Architecture",
              "<i class=\"fa-solid fa-box\"></i> 21.4 DTOs y Mappers",
              "<i class=\"fa-solid fa-wrench\"></i> 21.5 Patrones de Diseño",
              "<i class=\"fa-solid fa-clipboard-list\"></i> 21.6 Convenciones de Código",
              "<i class=\"fa-solid fa-circle-check\"></i> 21.7 Checklist de Calidad"
            ],
            "contentFile": "content/frameworks/spring/spring-arquitectura.html"
          },
          {
            "id": "spring-seguridad-avanzada",
            "title": "22. Seguridad Avanzada",
            "content": "Protección contra ataques, CORS, CSRF, rate limiting y auditoría",
            "sections": [
              "<i class=\"fa-solid fa-shield-halved\"></i> 22.1 Protección contra Ataques Comunes",
              "<i class=\"fa-solid fa-earth-americas\"></i> 22.2 CORS (Cross-Origin Resource Sharing)",
              "<i class=\"fa-solid fa-stopwatch\"></i> 22.3 Rate Limiting",
              "<i class=\"fa-solid fa-pen-to-square\"></i> 22.4 Auditoría",
              "<i class=\"fa-solid fa-user-lock\"></i> 22.5 Encriptación de Datos",
              "<i class=\"fa-solid fa-key\"></i> 22.6 Gestión Segura de Contraseñas",
              "<i class=\"fa-solid fa-lock\"></i> 22.7 Headers de Seguridad"
            ],
            "contentFile": "content/frameworks/spring/spring-seguridad-avanzada.html"
          },
          {
            "id": "spring-integracion-frontend",
            "title": "23. Integración con Frontend",
            "content": "Consumo desde Angular y React, manejo de CORS, tokens y flujo frontend-backend",
            "sections": [
              "<i class=\"fa-solid fa-link\"></i> 23.1 Arquitectura Frontend-Backend",
              "<i class=\"fa-solid fa-atom\"></i> 23.2 Consumo desde React",
              "<i class=\"fa-brands fa-angular\"></i> 23.3 Consumo desde Angular",
              "<i class=\"fa-solid fa-user-lock\"></i> 23.4 Flujo de Autenticación JWT",
              "<i class=\"fa-solid fa-upload\"></i> 23.5 Subida de Archivos",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> 23.6 Manejo de Errores"
            ],
            "contentFile": "content/frameworks/spring/spring-integracion-frontend.html"
          },
          {
            "id": "spring-proyecto-final",
            "title": "24. Proyecto Final Profesional",
            "content": "Diseño de arquitectura, backend completo, seguridad, base de datos y deploy final",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> 24.1 Descripción del Proyecto",
              "<i class=\"fa-solid fa-folder\"></i> 24.2 Estructura del Proyecto",
              "<i class=\"fa-solid fa-box-archive\"></i> 24.3 Entidades",
              "<i class=\"fa-solid fa-user-lock\"></i> 24.4 Autenticación",
              "<i class=\"fa-solid fa-cart-shopping\"></i> 24.5 Carrito y Pedidos",
              "<i class=\"fa-solid fa-envelope\"></i> 24.6 Notificaciones",
              "<i class=\"fa-solid fa-flask\"></i> 24.7 Testing",
              "<i class=\"fa-brands fa-docker\"></i> 24.8 Docker y Deploy"
            ],
            "contentFile": "content/frameworks/spring/spring-proyecto-final.html"
          },
          {
            "id": "spring-temas-avanzados",
            "title": "25. Temas Avanzados y Expertos",
            "content": "Spring WebFlux, programación reactiva, Spring Native, GraalVM y escalabilidad avanzada",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/spring/spring-temas-avanzados.html"
          },
          {
            "id": "spring-orm",
            "title": "26. ORM en Spring (JPA + Hibernate)",
            "content": "Mapeo de entidades, relaciones, repositorios, consultas JPQL, paginación y optimización",
            "sections": [
              "Contenido"
            ],
            "contentFile": "content/frameworks/spring/spring-orm.html"
          }
        ]
      }
    ]
  },
  {
    "id": "uml",
    "title": "UML",
    "icon": "fa-solid fa-project-diagram",
    "color": "#ef4444",
    "subcategories": [
      {
        "id": "clases",
        "title": "Diag. Clases",
        "icon": "fa-solid fa-sitemap",
        "lessons": [
          {
            "id": "uml-clases-intro",
            "title": "1. Introducción al Diagrama de Clases",
            "content": "Fundamentos y conceptos básicos de los diagramas de clases UML",
            "sections": [
              "Un ejemplo muy sencillo",
              "1.1. Definición y propósito",
              "1.2. Importancia en el modelado de software",
              "1.3. Tipos de relaciones entre clases",
              "1.4. Relación con otros diagramas UML",
              "1.5. Ejemplo completo de diagrama de clases"
            ],
            "contentFile": "content/uml/clases/uml-clases-intro.html"
          },
          {
            "id": "uml-clases-elementos-basicos",
            "title": "2. Elementos Básicos de un Diagrama de Clases",
            "content": "Componentes fundamentales que conforman los diagramas de clases UML",
            "sections": [
              "2.1. Clases (atributos y métodos)",
              "2.2. Objetos vs. Clases",
              "2.3. Visibilidad (público, privado, protegido)"
            ],
            "contentFile": "content/uml/clases/uml-clases-elementos-basicos.html"
          },
          {
            "id": "uml-clases-relaciones",
            "title": "3. Relaciones Entre Clases",
            "content": "Tipos de conexiones y asociaciones entre clases en diagramas UML",
            "sections": [
              "3.1. Asociación",
              "3.2. Multiplicidad",
              "3.3. Agregación",
              "3.4. Composición",
              "3.5. Herencia (generalización)",
              "3.6. Dependencia"
            ],
            "contentFile": "content/uml/clases/uml-clases-relaciones.html"
          },
          {
            "id": "uml-clases-notacion",
            "title": "4. Notación UML para Clases",
            "content": "Símbolos y convenciones para representar clases en diagramas UML",
            "sections": [
              "4.1. Representación gráfica de una clase",
              "4.2. Representación de atributos",
              "4.3. Representación de operaciones",
              "4.4. Estereotipos y etiquetas"
            ],
            "contentFile": "content/uml/clases/uml-clases-notacion.html"
          }
        ]
      },
      {
        "id": "casos-uso",
        "title": "Diag. Casos de Uso",
        "icon": "fa-solid fa-users",
        "lessons": [
          {
            "id": "uml-cu-intro",
            "title": "1. Introducción al Diagrama de Casos de Uso",
            "content": "Definición, propósito e importancia de los diagramas de casos de uso en UML",
            "sections": [
              "Un ejemplo muy sencillo",
              "Definición y propósito",
              "1.1. Definición y propósito",
              "1.2. Importancia en el análisis de requisitos",
              "1.3. Relación con otros diagramas UML",
              "Beneficios clave de los diagramas de casos de uso"
            ],
            "contentFile": "content/uml/casos-uso/uml-cu-intro.html"
          },
          {
            "id": "uml-cu-elementos-basicos",
            "title": "2. Elementos Básicos de un Diagrama de Casos de Uso",
            "content": "Actores, casos de uso y relaciones fundamentales en los diagramas de casos de uso UML",
            "sections": [
              "2.1. Actores (usuarios y sistemas externos)",
              "2.2. Casos de uso (funcionalidades del sistema)",
              "2.3. Relaciones entre actores y casos de uso",
              "Buenas prácticas al definir elementos básicos"
            ],
            "contentFile": "content/uml/casos-uso/uml-cu-elementos-basicos.html"
          },
          {
            "id": "uml-cu-relaciones",
            "title": "3. Tipos de Relaciones en Casos de Uso",
            "content": "Asociación, inclusión, extensión y generalización en los diagramas de casos de uso UML",
            "sections": [
              "3.1. Asociación (actor–caso de uso)",
              "3.2. Inclusión («include»)",
              "3.3. Extensión («extend»)",
              "3.4. Generalización (entre actores o entre casos de uso)",
              "Comparación entre tipos de relaciones",
              "Ejemplo completo con diferentes tipos de relaciones",
              "Buenas prácticas al usar relaciones"
            ],
            "contentFile": "content/uml/casos-uso/uml-cu-relaciones.html"
          },
          {
            "id": "uml-cu-ejemplos",
            "title": "4. Ejemplos de Diagramas de Casos de Uso",
            "content": "Ejemplos prácticos de diagramas de casos de uso UML",
            "sections": [
              "4.1. Sistema de Gestión Bancaria",
              "4.2. Sistema de Comercio Electrónico",
              "4.3. Sistema de Gestión Hospitalaria",
              "4.4. Sistema de Gestión Educativa (Universidad)",
              "4.5. Sistema de Gestión de Proyectos (Metodología Ágil)",
              "4.6. Sistema de Reservas de Hotel",
              "4.7. Sistema de Biblioteca Digital",
              "4.8. Sistema de Transporte Público (Metro/Bus)",
              "4.9. Sistema de Gestión de Restaurante",
              "4.10. Sistema de Red Social",
              "4.11. Sistema de Matrícula Universitaria",
              "4.12. Sistema de Admisión Universitaria",
              "Resumen de Buenas Prácticas"
            ],
            "contentFile": "content/uml/casos-uso/uml-cu-ejemplos.html"
          }
        ]
      },
      {
        "id": "secuencia",
        "title": "Diag. Secuencia",
        "icon": "fa-solid fa-exchange-alt",
        "lessons": [
          {
            "id": "uml-sec-introduccion",
            "title": "1. Introducción al Diagrama de Secuencia",
            "content": "Definición, propósito e importancia de los diagramas de secuencia en UML",
            "sections": [
              "<i class=\"fa-solid fa-clipboard-list\"></i> Definición y propósito del diagrama de secuencia",
              "<i class=\"fa-solid fa-bullseye\"></i> Importancia del diagrama de secuencia en el modelado UML",
              "<i class=\"fa-solid fa-link\"></i> Relación del diagrama de secuencia con otros diagramas UML",
              "<i class=\"fa-solid fa-star\"></i> Ejemplos sencillos"
            ],
            "contentFile": "content/uml/secuencia/uml-sec-introduccion.html"
          },
          {
            "id": "uml-sec-elementos-basicos",
            "title": "2. Elementos Básicos de un Diagrama de Secuencia",
            "content": "Objetos, líneas de vida, mensajes y activaciones en los diagramas de secuencia UML",
            "sections": [
              "<i class=\"fa-solid fa-puzzle-piece\"></i> Elementos constitutivos del diagrama de secuencia",
              "<i class=\"fa-solid fa-user\"></i> Actores",
              "<i class=\"fa-solid fa-box\"></i> Objetos",
              "<i class=\"fa-solid fa-stopwatch\"></i> Línea de vida (Lifeline)",
              "<i class=\"fa-solid fa-comment\"></i> Mensajes",
              "<i class=\"fa-solid fa-bolt\"></i> Activaciones",
              "<i class=\"fa-solid fa-shuffle\"></i> Fragmentos de interacción",
              "<i class=\"fa-solid fa-chart-column\"></i> Otros elementos relevantes"
            ],
            "contentFile": "content/uml/secuencia/uml-sec-elementos-basicos.html"
          },
          {
            "id": "uml-sec-tipos-mensajes",
            "title": "3. Tipos de Mensajes en un Diagrama de Secuencia",
            "content": "Mensajes síncronos, asíncronos, de retorno, y operaciones de creación y destrucción en UML",
            "sections": [
              "<i class=\"fa-solid fa-comment\"></i> Clasificación de mensajes en diagramas de secuencia",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> Mensajes síncronos",
              "<i class=\"fa-solid fa-bolt\"></i> Mensajes asíncronos",
              "<i class=\"fa-solid fa-arrow-rotate-left\"></i> Mensajes de retorno",
              "<i class=\"fa-solid fa-certificate\"></i> Mensajes de creación",
              "<i class=\"fa-solid fa-trash-can\"></i> Mensajes de destrucción",
              "<i class=\"fa-solid fa-chart-column\"></i> Comparativa de tipos de mensajes"
            ],
            "contentFile": "content/uml/secuencia/uml-sec-tipos-mensajes.html"
          },
          {
            "id": "uml-sec-ejemplos",
            "title": "4. Ejemplos de Diagramas de Secuencia",
            "content": "Ejemplos completos de diagramas de secuencia UML con diferentes procesos y sistemas",
            "sections": [
              "4.1. Sistema de Autenticación de Usuario",
              "4.2. Proceso de Compra en Línea",
              "4.3. Sistema de Reserva de Citas Médicas",
              "4.4. Sistema de Transferencia Bancaria",
              "4.5. Sistema de Gestión de Biblioteca",
              "4.6. Sistema de Registro de Estudiantes",
              "4.7. Sistema de Pedidos de Restaurante",
              "4.8. Sistema de Control de Acceso"
            ],
            "contentFile": "content/uml/secuencia/uml-sec-ejemplos.html"
          }
        ]
      },
      {
        "id": "actividades",
        "title": "Diag. Actividades",
        "icon": "fa-solid fa-stream",
        "lessons": [
          {
            "id": "uml-act-introduccion",
            "title": "1. Introducción al Diagrama de Actividades",
            "content": "Definición, propósito e importancia de los diagramas de actividades en UML",
            "sections": [
              "<i class=\"fa-solid fa-chart-column\"></i> Definición y propósito del diagrama de actividades UML",
              "<i class=\"fa-solid fa-key\"></i> Importancia del diagrama de actividades en el modelado de procesos",
              "<i class=\"fa-solid fa-link\"></i> Relación con otros diagramas UML",
              "<i class=\"fa-solid fa-pen-to-square\"></i> Ejemplos ilustrativos",
              "<i class=\"fa-solid fa-bullseye\"></i> Conclusión"
            ],
            "contentFile": "content/uml/actividades/uml-act-introduccion.html"
          },
          {
            "id": "uml-act-elementos-basicos",
            "title": "2. Elementos Básicos de un Diagrama de Actividades",
            "content": "Componentes fundamentales que conforman un diagrama de actividades en UML",
            "sections": [
              "2.1. Nodos de acción",
              "2.2. Nodos inicial y final",
              "2.3. Decisiones y fusiones",
              "2.4. Bifurcaciones y uniones",
              "2.5. Particiones (Swimlanes)",
              "2.6. Señales y eventos",
              "2.7. Notas y comentarios"
            ],
            "contentFile": "content/uml/actividades/uml-act-elementos-basicos.html"
          },
          {
            "id": "uml-act-ejemplos",
            "title": "3. Ejemplos de Diagramas de Actividades",
            "content": "Ejemplos completos de diagramas de actividades UML con diferentes procesos y sistemas",
            "sections": [
              "3.1. Proceso de Compra en Línea",
              "3.2. Proceso de Admisión Universitaria",
              "3.3. Proceso de Atención Médica en Hospital",
              "3.4. Proceso de Desarrollo de Software (Metodología Ágil)",
              "3.5. Proceso de Solicitud de Préstamo Bancario",
              "3.6. Proceso de Gestión de Incidentes IT"
            ],
            "contentFile": "content/uml/actividades/uml-act-ejemplos.html"
          }
        ]
      },
      {
        "id": "componentes",
        "title": "Diag. Componentes",
        "icon": "fa-solid fa-cubes",
        "lessons": [
          {
            "id": "uml-comp-introduccion",
            "title": "1. Introducción al Diagrama de Componentes",
            "content": "Conceptos fundamentales y propósito de los diagramas de componentes UML",
            "sections": [
              "1.1. ¿Qué son los diagramas de componentes?",
              "1.2. Propósito y beneficios",
              "1.3. Cuándo usar diagramas de componentes",
              "1.4. Relación con otros diagramas UML",
              "1.5. Niveles de abstracción"
            ],
            "contentFile": "content/uml/componentes/uml-comp-introduccion.html"
          },
          {
            "id": "uml-comp-elementos-basicos",
            "title": "2. Elementos Básicos de un Diagrama de Componentes",
            "content": "Componentes, interfaces, puertos y otros elementos fundamentales en UML",
            "sections": [
              "2.1. Componentes",
              "2.2. Interfaces",
              "2.3. Puertos",
              "2.4. Paquetes",
              "2.5. Conectores",
              "2.6. Artefactos",
              "2.7. Nodos",
              "2.8. Ejemplo integrado"
            ],
            "contentFile": "content/uml/componentes/uml-comp-elementos-basicos.html"
          },
          {
            "id": "uml-comp-relaciones",
            "title": "3. Tipos de Relaciones en un Diagrama de Componentes",
            "content": "Tipos de conexiones y dependencias entre componentes en UML",
            "sections": [
              "3.1. Dependencias",
              "3.2. Realización de interfaces",
              "3.3. Composición y agregación",
              "3.4. Asociaciones",
              "3.5. Conectores de ensamblaje",
              "3.6. Delegación",
              "3.7. Relaciones de herencia",
              "3.8. Ejemplo completo de relaciones",
              "3.9. Mejores prácticas para relaciones"
            ],
            "contentFile": "content/uml/componentes/uml-comp-relaciones.html"
          },
          {
            "id": "uml-comp-notacion",
            "title": "4. Notación UML para Diagramas de Componentes",
            "content": "Sintaxis y convenciones específicas de PlantUML para diagramas de componentes",
            "sections": [
              "4.1. Sintaxis básica de componentes",
              "4.2. Definición de interfaces",
              "4.3. Paquetes y agrupación",
              "4.4. Tipos de relaciones y conectores",
              "4.5. Puertos y conectores",
              "4.6. Nodos y artefactos",
              "4.7. Notas y documentación",
              "4.8. Colores y estilos",
              "4.9. Ejemplo completo con notación avanzada",
              "4.10. Mejores prácticas de notación"
            ],
            "contentFile": "content/uml/componentes/uml-comp-notacion.html"
          }
        ]
      },
      {
        "id": "despliegue",
        "title": "Diag. Despliegue",
        "icon": "fa-solid fa-server",
        "lessons": [
          {
            "id": "uml-desp-introduccion",
            "title": "1. Introducción al Diagrama de Despliegue",
            "content": "Conceptos fundamentales y propósito de los diagramas de despliegue UML",
            "sections": [
              "1.1. ¿Qué son los diagramas de despliegue?",
              "1.2. Propósito y beneficios",
              "1.3. Cuándo usar diagramas de despliegue",
              "1.4. Relación con otros diagramas UML",
              "1.5. Niveles de abstracción",
              "1.6. Elementos clave"
            ],
            "contentFile": "content/uml/despliegue/uml-desp-introduccion.html"
          },
          {
            "id": "uml-desp-elementos-basicos",
            "title": "2. Elementos Básicos de un Diagrama de Despliegue",
            "content": "Nodos, artefactos, componentes y otros elementos fundamentales en UML",
            "sections": [
              "2.1. Nodos",
              "2.2. Artefactos",
              "2.3. Componentes desplegables",
              "2.4. Especificaciones de despliegue",
              "2.5. Dispositivos y procesadores",
              "2.6. Conexiones de comunicación",
              "2.7. Estereotipos y etiquetas",
              "2.8. Ejemplo integrado"
            ],
            "contentFile": "content/uml/despliegue/uml-desp-elementos-basicos.html"
          },
          {
            "id": "uml-desp-relaciones",
            "title": "3. Tipos de Relaciones en un Diagrama de Despliegue",
            "content": "Tipos de conexiones y comunicaciones entre nodos en UML",
            "sections": [
              "3.1. Conexiones de comunicación",
              "3.2. Dependencias de despliegue",
              "3.3. Relaciones de contenimiento",
              "3.4. Asociaciones de red",
              "3.5. Relaciones de replicación",
              "3.6. Conexiones de balanceador de carga",
              "3.7. Relaciones de monitoreo",
              "3.8. Ejemplo completo de relaciones",
              "3.9. Mejores prácticas para relaciones"
            ],
            "contentFile": "content/uml/despliegue/uml-desp-relaciones.html"
          },
          {
            "id": "uml-desp-notacion",
            "title": "4. Notación UML para Diagramas de Despliegue",
            "content": "Sintaxis y convenciones específicas de PlantUML para diagramas de despliegue",
            "sections": [
              "4.1. Sintaxis básica de nodos",
              "4.2. Definición de artefactos",
              "4.3. Componentes en nodos",
              "4.4. Especificaciones de despliegue",
              "4.5. Conexiones y protocolos",
              "4.6. Dispositivos y procesadores",
              "4.7. Agrupación con paquetes",
              "4.8. Notas y documentación",
              "4.9. Ejemplo completo con notación avanzada",
              "4.10. Mejores prácticas de notación"
            ],
            "contentFile": "content/uml/despliegue/uml-desp-notacion.html"
          }
        ]
      },
      {
        "id": "entidad-relacion",
        "title": "Diag. Entidad-Relación",
        "icon": "fa-solid fa-key",
        "lessons": [
          {
            "id": "uml-er-introduccion",
            "title": "1. Introducción al Diagrama de Entidad-Relación",
            "content": "Conceptos fundamentales y propósito de los diagramas entidad-relación en el diseño de bases de datos",
            "sections": [
              "1.1. ¿Qué son los diagramas entidad-relación?",
              "1.2. Niveles de modelado de datos",
              "1.3. Beneficios de usar diagramas ER",
              "1.4. Elementos fundamentales",
              "1.5. Ejemplo práctico: Sistema de biblioteca",
              "1.6. Herramientas y notaciones"
            ],
            "contentFile": "content/uml/entidad-relacion/uml-er-introduccion.html"
          },
          {
            "id": "uml-er-elementos-basicos",
            "title": "2. Elementos Básicos de un Diagrama de Entidad-Relación",
            "content": "Entidades, atributos, claves y tipos de datos en diagramas entidad-relación",
            "sections": [
              "2.1. Entidades",
              "2.2. Atributos",
              "2.3. Claves",
              "2.4. Tipos de datos",
              "2.5. Restricciones y validaciones",
              "2.6. Índices y optimización",
              "2.7. Ejemplo integrado: Sistema de gestión hospitalaria"
            ],
            "contentFile": "content/uml/entidad-relacion/uml-er-elementos-basicos.html"
          },
          {
            "id": "uml-er-relaciones",
            "title": "3. Tipos de Relaciones en un Diagrama de Entidad-Relación",
            "content": "Tipos de relaciones, cardinalidad e integridad referencial en diagramas entidad-relación",
            "sections": [
              "3.1. Conceptos fundamentales de relaciones",
              "3.2. Tipos de cardinalidad",
              "3.3. Participación en relaciones",
              "3.4. Integridad referencial",
              "3.5. Relaciones especiales",
              "3.6. Patrones de relaciones comunes",
              "3.7. Normalización y relaciones",
              "3.8. Ejemplo completo: Sistema de gestión académica"
            ],
            "contentFile": "content/uml/entidad-relacion/uml-er-relaciones.html"
          },
          {
            "id": "uml-er-notacion",
            "title": "4. Notación UML para Diagramas de Entidad-Relación",
            "content": "Sintaxis específica de UML para crear diagramas entidad-relación efectivos",
            "sections": [
              "4.1. Sintaxis básica de entidades",
              "4.2. Tipos de datos y restricciones",
              "4.3. Relaciones y cardinalidad",
              "4.4. Temas y estilos",
              "4.5. Ejemplo completo: E-commerce",
              "4.6. Mejores prácticas"
            ],
            "contentFile": "content/uml/entidad-relacion/uml-er-notacion.html"
          }
        ]
      }
    ]
  },
  {
    "id": "is",
    "title": "Ingeniería de Software",
    "icon": "fa-solid fa-book",
    "color": "#06b6d4",
    "subcategories": [
      {
        "id": "fundamentos",
        "title": "Fundamentos",
        "icon": "fa-solid fa-graduation-cap",
        "lessons": [
          {
            "id": "is-concepto",
            "title": "1 Concepto y Propósito",
            "content": "Definición general, objetivos principales e importancia en la industria tecnológica",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> Definición General",
              "<i class=\"fa-solid fa-bullseye\"></i> Objetivos Principales",
              "<i class=\"fa-solid fa-earth-americas\"></i> Importancia en la Industria Tecnológica",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/fundamentos/is-concepto.html"
          },
          {
            "id": "is-alcance",
            "title": "2 Alcance de la Ingeniería de Software",
            "content": "Áreas de aplicación, relación con otras disciplinas y rol del ingeniero de software",
            "sections": [
              "<i class=\"fa-solid fa-earth-americas\"></i> Áreas de Aplicación",
              "<i class=\"fa-solid fa-link\"></i> Relación con Otras Disciplinas",
              "$1 <i class=\"fa-solid fa-laptop-code\"></i> Rol del Ingeniero de Software",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/fundamentos/is-alcance.html"
          },
          {
            "id": "is-diferencia-programar-ingeniar",
            "title": "3 Diferencia entre Programación e Ingeniería de Software",
            "content": "Enfoque técnico vs. sistemático, trabajo individual vs. en equipo, y producción de código vs. gestión del proceso",
            "sections": [
              "<i class=\"fa-solid fa-scale-balanced\"></i> Enfoque Técnico vs. Enfoque Sistemático",
              "<i class=\"fa-solid fa-user\"></i> Trabajo Individual vs. Trabajo en Equipo",
              "<i class=\"fa-solid fa-laptop-code\"></i> Producción de Código vs. Gestión del Proceso",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/fundamentos/is-diferencia-programar-ingeniar.html"
          },
          {
            "id": "is-desafios-desarrollo",
            "title": "4 Principales Desafíos del Desarrollo de Software",
            "content": "Complejidad de sistemas, cambios en requerimientos, limitaciones de tiempo y costo, y comunicación en equipos",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> Introducción",
              "<i class=\"fa-solid fa-puzzle-piece\"></i> Complejidad de los Sistemas",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> Cambios en Requerimientos",
              "<i class=\"fa-solid fa-stopwatch\"></i> Limitaciones de Tiempo y Costo",
              "<i class=\"fa-solid fa-users\"></i> Comunicación en Equipos",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/fundamentos/is-desafios-desarrollo.html"
          }
        ]
      },
      {
        "id": "requerimientos",
        "title": "Requerimientos",
        "icon": "fa-solid fa-clipboard-list",
        "lessons": [
          {
            "id": "req-concepto",
            "title": "1 Concepto y Propósito",
            "content": "Definición general, objetivo dentro del desarrollo de software e importancia en el éxito del proyecto",
            "sections": [
              "<i class=\"fa-solid fa-clipboard-list\"></i> Definición General",
              "<i class=\"fa-solid fa-bullseye\"></i> Objetivo dentro del Desarrollo de Software",
              "<i class=\"fa-solid fa-trophy\"></i> Importancia en el Éxito del Proyecto",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/requerimientos/req-concepto.html"
          },
          {
            "id": "req-tipos-requerimientos",
            "title": "2 Tipos de Requerimientos",
            "content": "Requerimientos funcionales y requerimientos no funcionales",
            "sections": [
              "<i class=\"fa-solid fa-chart-column\"></i> Clasificación de Requerimientos",
              "<i class=\"fa-solid fa-gear\"></i> Requerimientos Funcionales",
              "<i class=\"fa-solid fa-wand-magic-sparkles\"></i> Requerimientos No Funcionales",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> Relación entre Requerimientos Funcionales y No Funcionales",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/requerimientos/req-tipos-requerimientos.html"
          },
          {
            "id": "req-captura-requerimientos",
            "title": "3 Captura de Requerimientos",
            "content": "Entrevistas y reuniones con el cliente, cuestionarios y observación, prototipos y casos de uso",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> Introducción a la Captura de Requerimientos",
              "<i class=\"fa-solid fa-comment\"></i> Entrevistas y Reuniones con el Cliente",
              "<i class=\"fa-solid fa-clipboard-list\"></i> Cuestionarios y Observación",
              "<i class=\"fa-solid fa-palette\"></i> Prototipos y Casos de Uso",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/requerimientos/req-captura-requerimientos.html"
          },
          {
            "id": "req-analisis-priorizacion",
            "title": "4 Análisis y Priorización",
            "content": "Clasificación por importancia o urgencia, resolución de conflictos y validación con el cliente",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> Introducción al Análisis y Priorización",
              "<i class=\"fa-solid fa-chart-column\"></i> Clasificación por Importancia o Urgencia",
              "<i class=\"fa-solid fa-scale-balanced\"></i> Resolución de Conflictos",
              "<i class=\"fa-solid fa-circle-check\"></i> Validación con el Cliente",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/requerimientos/req-analisis-priorizacion.html"
          },
          {
            "id": "req-documentacion",
            "title": "5 Documentación de Requerimientos",
            "content": "Especificación de requerimientos (SRS), versionado y trazabilidad, control de cambios",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> Introducción",
              "<i class=\"fa-solid fa-file-lines\"></i> Especificación de Requerimientos de Software (SRS)",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> Versionado y Trazabilidad",
              "<i class=\"fa-solid fa-arrows-rotate\"></i> Control de Cambios",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/requerimientos/req-documentacion.html"
          }
        ]
      },
      {
        "id": "ciclo-vida",
        "title": "Ciclo de Vida",
        "icon": "fa-solid fa-sync-alt",
        "lessons": [
          {
            "id": "ciclo-concepto-general",
            "title": "1 Concepto General del Ciclo de Vida",
            "content": "Propósito del ciclo de vida, etapas principales del desarrollo, importancia en la planificación del proyecto",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> Introducción al Ciclo de Vida del Software",
              "<i class=\"fa-solid fa-bullseye\"></i> Propósito del Ciclo de Vida",
              "<i class=\"fa-solid fa-chart-column\"></i> Etapas Principales del Desarrollo",
              "<i class=\"fa-solid fa-bullseye\"></i> Importancia en la Planificación del Proyecto",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/ciclo-vida/ciclo-concepto-general.html"
          },
          {
            "id": "ciclo-fases-principales",
            "title": "2 Fases del Ciclo de Vida del Software",
            "content": "Análisis, diseño, desarrollo, pruebas, implementación y mantenimiento",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> Introducción a las Fases del Ciclo de Vida",
              "<i class=\"fa-solid fa-clipboard-list\"></i> Fase 1: Análisis",
              "<i class=\"fa-solid fa-palette\"></i> Fase 2: Diseño",
              "<i class=\"fa-solid fa-laptop-code\"></i> Fase 3: Desarrollo",
              "<i class=\"fa-solid fa-flask\"></i> Fase 4: Pruebas",
              "<i class=\"fa-solid fa-rocket\"></i> Fase 5: Implementación",
              "<i class=\"fa-solid fa-wrench\"></i> Fase 6: Mantenimiento",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/ciclo-vida/ciclo-fases-principales.html"
          },
          {
            "id": "ciclo-modelos-desarrollo",
            "title": "3 Modelos de Desarrollo de Software",
            "content": "Modelo tradicional (Cascada), metodologías ágiles (SCRUM), diferencias y aplicación práctica",
            "sections": [
              "<i class=\"fa-solid fa-bullseye\"></i> Introducción a los Modelos de Desarrollo",
              "<i class=\"fa-solid fa-water\"></i> Modelo Tradicional: Cascada (Waterfall)",
              "<i class=\"fa-solid fa-bolt\"></i> Metodologías Ágiles: SCRUM",
              "<i class=\"fa-solid fa-scale-balanced\"></i> Diferencias y Aplicación Práctica",
              "<i class=\"fa-solid fa-graduation-cap\"></i> Resumen"
            ],
            "contentFile": "content/is/ciclo-vida/ciclo-modelos-desarrollo.html"
          }
        ]
      }
    ]
  },
  {
    "id": "utilities",
    "title": "Utilidades",
    "icon": "fa-solid fa-puzzle-piece",
    "color": "#f97316",
    "subcategories": [
      {
        "id": "librerias",
        "title": "Librerías",
        "icon": "fa-solid fa-palette",
        "lessons": [
          {
            "id": "lib-tailwind",
            "title": "tailwindcss",
            "content": "Guía completa de Tailwind CSS - Framework de utilidades CSS first",
            "sections": [
              "Instalación Paso 1",
              "Configuración Paso 2",
              "Integración Paso 3",
              "Comandos de Desarrollo Paso 4",
              "Optimización para Producción Paso 5",
              "Mejores Prácticas Recomendado"
            ],
            "contentFile": "content/utilities/librerias/lib-tailwind.html"
          },
          {
            "id": "lib-bootstrap-icons",
            "title": "bootstrap icons",
            "content": "Guía de integración y configuración de Bootstrap Icons en tu proyecto",
            "sections": [
              "Instalación Paso 1",
              "Integración Paso 2",
              "Métodos de Uso Paso 3",
              "JavaScript Vanilla",
              "Personalización Paso 5",
              "Mejores Prácticas Recomendado"
            ],
            "contentFile": "content/utilities/librerias/lib-bootstrap-icons.html"
          },
          {
            "id": "lib-bootstrap",
            "title": "bootstrap",
            "content": "Guía de integración y configuración de Bootstrap en tu proyecto",
            "sections": [
              "Instalación Paso 1",
              "Integración Paso 2",
              "Personalización Paso 3",
              "Configuración de Componentes Paso 4",
              "Optimización para Producción Paso 5",
              "Grid System Fundamental",
              "Mejores Prácticas Recomendado"
            ],
            "contentFile": "content/utilities/librerias/lib-bootstrap.html"
          },
          {
            "id": "lib-bulma",
            "title": "bulma",
            "content": "Guía de integración y configuración de Bulma CSS en tu proyecto",
            "sections": [
              "Instalación Paso 1",
              "Integración Básica Paso 2",
              "Personalización con SASS Paso 3",
              "Componentes Principales Paso 4",
              "Optimización Paso 5",
              "Mejores Prácticas Recomendado"
            ],
            "contentFile": "content/utilities/librerias/lib-bulma.html"
          },
          {
            "id": "lib-fontawesome",
            "title": "fontawesome",
            "content": "Guía de integración y configuración de Font Awesome en tu proyecto",
            "sections": [
              "Instalación Paso 1",
              "Integración Paso 2"
            ],
            "contentFile": "content/utilities/librerias/lib-fontawesome.html"
          },
          {
            "id": "lib-sweetalert",
            "title": "sweetalert",
            "content": "Guía de integración y configuración de SweetAlert2 en tu proyecto",
            "sections": [
              "Instalación Paso 1",
              "Integración Básica Paso 2",
              "Tipos de Alertas Paso 3",
              "Personalización Paso 4",
              "Funciones Avanzadas Paso 5",
              "Mejores Prácticas Recomendado"
            ],
            "contentFile": "content/utilities/librerias/lib-sweetalert.html"
          },
          {
            "id": "lib-animations",
            "title": "animations",
            "content": "Guía de animaciones CSS y librerías de animación populares",
            "sections": [
              "Animaciones Básicas CSS Paso 1",
              "Animate.css Paso 2",
              "GSAP (GreenSock) Paso 3",
              "Framer Motion (React) Paso 4",
              "Optimización y Rendimiento Paso 5",
              "Mejores Prácticas Recomendado"
            ],
            "contentFile": "content/utilities/librerias/lib-animations.html"
          },
          {
            "id": "lib-tailwindcss-animations",
            "title": "tailwindcss animations",
            "content": "Guía de animaciones y transiciones con Tailwind CSS",
            "sections": [
              "Configuración Inicial Paso 1",
              "Transiciones Básicas Paso 2",
              "Animaciones Predefinidas Paso 3",
              "Animaciones Personalizadas Paso 4",
              "Interacciones y Estados Paso 5",
              "Optimización y Rendimiento Paso 6",
              "Mejores Prácticas Recomendado"
            ],
            "contentFile": "content/utilities/librerias/lib-tailwindcss-animations.html"
          },
          {
            "id": "lib-tailwindcss-animations-plugin",
            "title": "plugin tailwindcss animations",
            "content": "Guía del plugin de animaciones @midudev/tailwind-animations",
            "sections": [
              "Instalación Paso 1",
              "Configuración Paso 2",
              "Uso Básico Paso 3",
              "Animaciones Avanzadas Paso 4",
              "Mejores Prácticas Recomendado"
            ],
            "contentFile": "content/utilities/librerias/lib-tailwindcss-animations-plugin.html"
          }
        ]
      },
      {
        "id": "ziggy",
        "title": "Ziggy",
        "icon": "fa-solid fa-route",
        "lessons": [
          {
            "id": "ziggy-introduction",
            "title": "01. Introducción a Ziggy.js",
            "content": "Aprende qué es Ziggy.js y sus ventajas en Laravel",
            "sections": [
              "¿Qué es Ziggy y para qué sirve?",
              "Ventajas de usar Ziggy con Laravel y Vue",
              "Comparación con otras soluciones"
            ],
            "contentFile": "content/utilities/ziggy/ziggy-introduction.html"
          },
          {
            "id": "ziggy-installation",
            "title": "02. Instalación y configuración básica",
            "content": "Aprende a instalar y configurar Ziggy.js en tu proyecto Laravel",
            "sections": [
              "Instalación con NPM o Yarn",
              "Publicación del archivo ziggy.php",
              "Agregar Ziggy a vite.config.js o webpack.mix.js",
              "Incluir Ziggy en la vista Blade principal",
              "Verificación de la instalación",
              "Resumen de instalación"
            ],
            "contentFile": "content/utilities/ziggy/ziggy-installation.html"
          },
          {
            "id": "ziggy-basic-usage",
            "title": "03. Uso básico en JavaScript puro",
            "content": "Aprende a utilizar Ziggy.js para generar rutas en JavaScript puro",
            "sections": [
              "Importar rutas con import route from 'ziggy-js'",
              "Acceder a rutas con route('nombre.ruta')",
              "Generar URLs con parámetros",
              "Manejo de rutas con segmentos opcionales y comodines",
              "Ejemplos prácticos"
            ],
            "contentFile": "content/utilities/ziggy/ziggy-basic-usage.html"
          },
          {
            "id": "ziggy-vue-integration",
            "title": "04. Uso de Ziggy en Vue 3",
            "content": "Aprende a integrar y utilizar Ziggy.js con aplicaciones Vue 3",
            "sections": [
              "Integración en componentes Vue",
              "Uso dentro de la Composition API",
              "Acceso a Ziggy en scripts ``",
              "Cómo pasar Ziggy con provide/inject si se necesita globalmente",
              "Integración con Vue Router",
              "Ejemplos prácticos con Vue 3 y Ziggy"
            ],
            "contentFile": "content/utilities/ziggy/ziggy-vue-integration.html"
          },
          {
            "id": "ziggy-configuration",
            "title": "05. Configuración avanzada",
            "content": "Aprende a personalizar y configurar Ziggy.js de manera avanzada",
            "sections": [
              "Personalización del archivo ziggy.php",
              "Selección de rutas específicas para exportar",
              "Añadir middleware o grupos de rutas según el entorno",
              "Configuración para entornos multilingües",
              "Personalización avanzada del objeto Ziggy",
              "Resumen de configuración avanzada"
            ],
            "contentFile": "content/utilities/ziggy/ziggy-configuration.html"
          },
          {
            "id": "ziggy-api-rest",
            "title": "06. Interacción con rutas y API REST",
            "content": "Aprende a utilizar Ziggy.js con APIs REST y peticiones HTTP",
            "sections": [
              "Generando rutas para peticiones HTTP",
              "Uso de Ziggy en formularios y acciones",
              "Compatibilidad con rutas tipo API Resource",
              "Manejo de rutas en formularios Inertia.js"
            ],
            "contentFile": "content/utilities/ziggy/ziggy-api-rest.html"
          }
        ]
      },
      {
        "id": "npm",
        "title": "NPM",
        "icon": "fa-brands fa-npm",
        "lessons": [
          {
            "id": "npm-guia-esencial",
            "title": "Guía Esencial",
            "content": "Todo lo que necesitas saber sobre NPM, el gestor de paquetes de Node.js",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> 1. ¿Qué es NPM?",
              "<i class=\"fa-solid fa-rocket\"></i> 2. Instalación y Configuración",
              "<i class=\"fa-solid fa-folder\"></i> 3. Inicializar un Proyecto",
              "<i class=\"fa-solid fa-download\"></i> 4. Instalar Paquetes",
              "<i class=\"fa-solid fa-trash-can\"></i> 5. Desinstalar y Actualizar Paquetes",
              "<i class=\"fa-solid fa-scroll\"></i> 6. Scripts de NPM",
              "<i class=\"fa-solid fa-palette\"></i> 7. Crear Proyectos con Frameworks",
              "<i class=\"fa-solid fa-magnifying-glass\"></i> 8. Buscar e Inspeccionar Paquetes",
              "<i class=\"fa-solid fa-lock\"></i> 9. package-lock.json",
              "<i class=\"fa-solid fa-broom\"></i> 10. Limpiar y Solucionar Problemas",
              "<i class=\"fa-solid fa-chart-column\"></i> 11. Versionado Semántico",
              "<i class=\"fa-solid fa-clipboard-list\"></i> Comandos Esenciales - Resumen"
            ],
            "contentFile": "content/utilities/npm/npm-guia-esencial.html"
          }
        ]
      },
      {
        "id": "pnpm",
        "title": "PNPM",
        "icon": "fa-solid fa-box",
        "lessons": [
          {
            "id": "pnpm-guia-esencial",
            "title": "Guía Esencial",
            "content": "Todo lo que necesitas saber sobre PNPM, el gestor de paquetes rápido y eficiente",
            "sections": [
              "<i class=\"fa-solid fa-box\"></i> 1. ¿Qué es PNPM?",
              "<i class=\"fa-solid fa-rocket\"></i> 2. Instalación",
              "<i class=\"fa-solid fa-folder\"></i> 3. Inicializar un Proyecto",
              "<i class=\"fa-solid fa-download\"></i> 4. Instalar Paquetes",
              "<i class=\"fa-solid fa-trash-can\"></i> 5. Desinstalar y Actualizar",
              "<i class=\"fa-solid fa-scroll\"></i> 6. Ejecutar Scripts",
              "<i class=\"fa-solid fa-store\"></i> 7. El Almacén Global (Store)",
              "<i class=\"fa-solid fa-folder-open\"></i> 8. Estructura de node_modules",
              "<i class=\"fa-solid fa-wrench\"></i> 9. Workspaces (Monorepos)",
              "<i class=\"fa-solid fa-broom\"></i> 10. Mantenimiento y Limpieza",
              "<i class=\"fa-solid fa-bolt\"></i> 11. PNPM vs NPM - Comparación",
              "<i class=\"fa-solid fa-clipboard-list\"></i> Comandos Esenciales - Resumen"
            ],
            "contentFile": "content/utilities/pnpm/pnpm-guia-esencial.html"
          }
        ]
      }
    ]
  },
  {
    "id": "entrevistas",
    "title": "Entrevistas Laborales",
    "icon": "fa-solid fa-comments",
    "color": "#ec4899",
    "subcategories": [
      {
        "id": "javascript",
        "title": "JavaScript",
        "icon": "fa-brands fa-js",
        "lessons": [
          {
            "id": "js-top-10",
            "title": "Top 10 Preguntas Esenciales",
            "content": "Las 10 preguntas más importantes y frecuentes en entrevistas de JavaScript",
            "sections": [
              "Las 10 Preguntas Más Importantes de JavaScript",
              "1. ¿Cuál es la diferencia entre `var`, `let` y `const`?",
              "2. ¿Qué es un Closure?",
              "3. ¿Cuál es la diferencia entre `==` y `===`?",
              "4. ¿Qué es el Event Loop?",
              "5. ¿Cuál es la diferencia entre `null` y `undefined`?",
              "6. ¿Qué son las Promises y async/await?",
              "7. ¿Qué es el Hoisting?",
              "8. ¿Cuál es la diferencia entre Arrow Functions y funciones normales?",
              "9. ¿Qué es el Spread Operator y Rest Parameters?",
              "10. ¿Qué son los métodos de Array más usados?"
            ],
            "contentFile": "content/entrevistas/javascript/js-top-10.html"
          },
          {
            "id": "js-top-50",
            "title": "Top 50 Preguntas Frecuentes",
            "content": "Las 50 preguntas más frecuentes en entrevistas técnicas de JavaScript",
            "sections": [
              "Las 50 Preguntas Más Frecuentes de JavaScript",
              "1. ¿Qué es JavaScript?",
              "2. ¿Cuáles son los tipos de datos en JavaScript?",
              "3. ¿Qué es el DOM?",
              "4. ¿Qué es el BOM?",
              "5. ¿Cómo se declara una variable?",
              "6. ¿Qué es el scope?",
              "7. ¿Qué es una función de primera clase?",
              "8. ¿Qué es una función pura?",
              "9. ¿Qué es una IIFE?",
              "10. ¿Qué es el strict mode?",
              "11. ¿Qué es NaN?",
              "12. ¿Cómo verificar si una variable es un array?",
              "13. ¿Qué es type coercion?",
              "14. ¿Qué son los template literals?",
              "15. ¿Qué es destructuring?",
              "16. ¿Qué es `this`?",
              "17. ¿Qué son call, apply y bind?",
              "18. ¿Qué es el prototype?",
              "19. ¿Qué es la herencia prototípica?",
              "20. ¿Qué es Object.freeze vs Object.seal?",
              "21. ¿Cómo clonar un objeto?",
              "22. ¿Qué es el optional chaining?",
              "23. ¿Qué es el nullish coalescing?",
              "24. ¿Qué son los getters y setters?",
              "25. ¿Qué es un Symbol?",
              "26. ¿Qué es un Map vs Object?",
              "27. ¿Qué es un Set?",
              "28. ¿Qué es un WeakMap y WeakSet?",
              "29. ¿Qué es un Proxy?",
              "30. ¿Qué es Reflect?",
              "31. ¿Qué es un callback?",
              "32. ¿Qué es callback hell?",
              "33. ¿Cuáles son los estados de una Promise?",
              "34. ¿Qué es Promise.all?",
              "35. ¿Qué es Promise.race?",
              "36. ¿Qué es Promise.allSettled?",
              "37. ¿Qué es Promise.any?",
              "38. ¿Cómo manejar errores en async/await?",
              "39. ¿Qué son los microtasks y macrotasks?",
              "40. ¿Qué es un generator?",
              "41. ¿Cómo seleccionar elementos del DOM?",
              "42. ¿Qué es event bubbling y capturing?",
              "43. ¿Qué es event delegation?",
              "44. ¿Cuál es la diferencia entre preventDefault y stopPropagation?",
              "45. ¿Qué es el localStorage y sessionStorage?",
              "46. ¿Qué es debounce?",
              "47. ¿Qué es throttle?",
              "48. ¿Qué es el Fetch API?",
              "49. ¿Qué son los módulos en JavaScript?",
              "50. ¿Qué es el patrón módulo revelador?"
            ],
            "contentFile": "content/entrevistas/javascript/js-top-50.html"
          },
          {
            "id": "js-top-100",
            "title": "Top 100 Preguntas Completas",
            "content": "Las 100 preguntas más completas para dominar entrevistas de JavaScript",
            "sections": [
              "Las 100 Preguntas Completas de JavaScript",
              "Patrones y Arquitectura (51-65)",
              "Performance y Optimización (66-80)",
              "Seguridad y Buenas Prácticas (81-90)",
              "ES2020+ Features (91-100)"
            ],
            "contentFile": "content/entrevistas/javascript/js-top-100.html"
          }
        ]
      },
      {
        "id": "react",
        "title": "React",
        "icon": "fa-brands fa-react",
        "lessons": [
          {
            "id": "react-top-10",
            "title": "Top 10 Preguntas Esenciales",
            "content": "Las 10 preguntas más importantes y frecuentes en entrevistas de React",
            "sections": [
              "Las 10 Preguntas Más Importantes de React",
              "1. ¿Qué es React y cuáles son sus características principales?",
              "2. ¿Cuál es la diferencia entre componentes funcionales y de clase?",
              "3. ¿Qué es el estado (state) y las props?",
              "4. ¿Qué es useState y cómo funciona?",
              "5. ¿Qué es useEffect y cuándo se usa?",
              "6. ¿Qué es el Virtual DOM y cómo funciona?",
              "7. ¿Qué son las keys y por qué son importantes?",
              "8. ¿Qué es el lifting state up?",
              "9. ¿Cuál es la diferencia entre controlled y uncontrolled components?",
              "10. ¿Cómo manejar eventos en React?"
            ],
            "contentFile": "content/entrevistas/react/react-top-10.html"
          },
          {
            "id": "react-top-50",
            "title": "Top 50 Preguntas Frecuentes",
            "content": "Las 50 preguntas más frecuentes en entrevistas técnicas de React",
            "sections": [
              "Las 50 Preguntas Más Frecuentes de React",
              "1. ¿Qué es JSX?",
              "2. ¿Por qué usamos className en vez de class?",
              "3. ¿Qué son los Fragments?",
              "4. ¿Qué es el renderizado condicional?",
              "5. ¿Cómo renderizar listas?",
              "6. ¿Qué es prop drilling y cómo evitarlo?",
              "7. ¿Qué es Context API?",
              "8. ¿Cuándo usar Context vs Redux?",
              "9. ¿Qué es useRef?",
              "10. ¿Qué es useCallback?",
              "11. ¿Qué es useMemo?",
              "12. ¿Cuál es la diferencia entre useMemo y useCallback?",
              "13. ¿Qué es React.memo?",
              "14. ¿Qué es useReducer?",
              "15. ¿Cuándo usar useState vs useReducer?",
              "16. ¿Cuál es el ciclo de vida de un componente?",
              "17. ¿Por qué useEffect se ejecuta dos veces en desarrollo?",
              "18. ¿Cómo hacer fetch de datos correctamente?",
              "19. ¿Qué es useLayoutEffect?",
              "20. ¿Cómo evitar memory leaks en useEffect?",
              "21. ¿Qué son los custom hooks?",
              "22. ¿Cuáles son las reglas de los Hooks?",
              "23. ¿Qué es useId?",
              "24. ¿Qué es useTransition?",
              "25. ¿Qué es useDeferredValue?",
              "26. ¿Qué es el patrón Container/Presentational?",
              "27. ¿Qué es el patrón Compound Components?",
              "28. ¿Qué es el patrón Render Props?",
              "29. ¿Qué son los Higher-Order Components (HOC)?",
              "30. ¿Cuándo usar HOC vs Custom Hooks?",
              "31. ¿Qué es forwardRef?",
              "32. ¿Qué es useImperativeHandle?",
              "33. ¿Qué es Suspense?",
              "34. ¿Qué son los Error Boundaries?",
              "35. ¿Qué es React.lazy?",
              "36. ¿Cómo configurar React Router?",
              "37. ¿Cómo obtener parámetros de la URL?",
              "38. ¿Cómo hacer navegación programática?",
              "39. ¿Cómo proteger rutas?",
              "40. ¿Qué son las rutas anidadas?",
              "41. ¿Cómo testear componentes con React Testing Library?",
              "42. ¿Cómo testear hooks personalizados?",
              "43. ¿Cómo mockear fetch en tests?",
              "44. ¿Qué es snapshot testing?",
              "45. ¿Cómo testear Context?",
              "46. ¿Cómo identificar problemas de performance?",
              "47. ¿Qué causa re-renders innecesarios?",
              "48. ¿Cómo optimizar listas grandes?",
              "49. ¿Qué es React Concurrent Mode?",
              "50. ¿Cómo hacer code splitting efectivo?"
            ],
            "contentFile": "content/entrevistas/react/react-top-50.html"
          },
          {
            "id": "react-top-100",
            "title": "Top 100 Preguntas Completas",
            "content": "Las 100 preguntas más completas para dominar entrevistas de React",
            "sections": [
              "Las 100 Preguntas Completas de React",
              "Estado Global y Gestión de Estado (51-65)",
              "React 18+ Features (66-80)",
              "Frameworks y Herramientas (81-90)",
              "Preguntas de Arquitectura (91-100)"
            ],
            "contentFile": "content/entrevistas/react/react-top-100.html"
          }
        ]
      },
      {
        "id": "java",
        "title": "Java",
        "icon": "fa-solid fa-mug-hot",
        "lessons": [
          {
            "id": "java-top-10",
            "title": "Top 10 Preguntas Esenciales",
            "content": "Las 10 preguntas más importantes y frecuentes en entrevistas de Java",
            "sections": [
              "Las 10 Preguntas Más Importantes de Java",
              "1. ¿Cuáles son los pilares de la Programación Orientada a Objetos?",
              "2. ¿Cuál es la diferencia entre `==` y `.equals()`?",
              "3. ¿Qué es el String Pool?",
              "4. ¿Cuál es la diferencia entre ArrayList y LinkedList?",
              "5. ¿Cuál es la diferencia entre Interface y Abstract Class?",
              "6. ¿Qué es el manejo de excepciones en Java?",
              "7. ¿Qué son los modificadores de acceso?",
              "8. ¿Qué es la palabra clave `final`?",
              "9. ¿Qué es el método `hashCode()` y por qué es importante?",
              "10. ¿Qué es el Garbage Collector?"
            ],
            "contentFile": "content/entrevistas/java/java-top-10.html"
          },
          {
            "id": "java-top-50",
            "title": "Top 50 Preguntas Frecuentes",
            "content": "Las 50 preguntas más frecuentes en entrevistas técnicas de Java",
            "sections": [
              "Las 50 Preguntas Más Frecuentes de Java",
              "1. ¿Qué es la JVM, JRE y JDK?",
              "2. ¿Qué es bytecode?",
              "3. ¿Cuáles son los tipos de datos primitivos?",
              "4. ¿Qué es autoboxing y unboxing?",
              "5. ¿Qué es el operador ternario?",
              "6. ¿Qué es un constructor?",
              "7. ¿Qué es `this` y `super`?",
              "8. ¿Qué es sobrecarga (overloading) vs sobrescritura (overriding)?",
              "9. ¿Qué es `static`?",
              "10. ¿Qué es `volatile`?",
              "11. ¿Qué es `transient`?",
              "12. ¿Qué es `synchronized`?",
              "13. ¿Qué es un Singleton?",
              "14. ¿Qué es inmutabilidad?",
              "15. ¿Cuál es la diferencia entre String, StringBuilder y StringBuffer?",
              "16. ¿Cuál es la jerarquía de Collections?",
              "17. ¿Cuál es la diferencia entre HashMap y Hashtable?",
              "18. ¿Cómo funciona HashMap internamente?",
              "19. ¿Qué es un TreeMap?",
              "20. ¿Cuál es la diferencia entre HashSet y TreeSet?",
              "21. ¿Qué es un Iterator?",
              "22. ¿Qué es fail-fast vs fail-safe?",
              "23. ¿Qué es Comparable vs Comparator?",
              "24. ¿Qué es un PriorityQueue?",
              "25. ¿Qué es un Deque?",
              "26. ¿Cómo crear un Thread?",
              "27. ¿Cuál es la diferencia entre start() y run()?",
              "28. ¿Qué son los estados de un Thread?",
              "29. ¿Qué es wait(), notify() y notifyAll()?",
              "30. ¿Qué es un deadlock?",
              "31. ¿Qué es ExecutorService?",
              "32. ¿Cuáles son los tipos de ExecutorService?",
              "33. ¿Qué es CompletableFuture?",
              "34. ¿Qué es un Lock vs synchronized?",
              "35. ¿Qué son las clases Atomic?",
              "36. ¿Qué es una expresión Lambda?",
              "37. ¿Qué es una interfaz funcional?",
              "38. ¿Qué es Method Reference?",
              "39. ¿Qué es Stream API?",
              "40. ¿Cuál es la diferencia entre map() y flatMap()?",
              "41. ¿Qué es reduce()?",
              "42. ¿Qué son los Collectors?",
              "43. ¿Qué es Optional?",
              "44. ¿Qué es un parallel stream?",
              "45. ¿Cuál es la diferencia entre Stream y Collection?",
              "JDBC y Base de Datos (46-50)",
              "46. ¿Qué es JDBC?",
              "47. ¿Qué es PreparedStatement?",
              "48. ¿Qué es una transacción en JDBC?",
              "49. ¿Qué es un Connection Pool?",
              "50. ¿Qué es el patrón DAO?"
            ],
            "contentFile": "content/entrevistas/java/java-top-50.html"
          },
          {
            "id": "java-top-100",
            "title": "Top 100 Preguntas Completas",
            "content": "Las 100 preguntas más completas para dominar entrevistas de Java",
            "sections": [
              "Las 100 Preguntas Completas de Java",
              "Java 8+ Features (51-65)",
              "Patrones de Diseño (66-80)",
              "Testing y Buenas Prácticas (81-90)",
              "Preguntas de Arquitectura (91-100)"
            ],
            "contentFile": "content/entrevistas/java/java-top-100.html"
          }
        ]
      },
      {
        "id": "ent-spring",
        "title": "Spring",
        "icon": "fa-solid fa-leaf",
        "lessons": [
          {
            "id": "ent-spring-top-10",
            "title": "Top 10 Preguntas Esenciales",
            "content": "Las 10 preguntas más importantes y frecuentes en entrevistas de Spring Framework",
            "sections": [
              "Las 10 Preguntas Más Importantes de Spring",
              "1. ¿Qué es Spring Framework y cuáles son sus módulos principales?",
              "2. ¿Qué es Inversión de Control (IoC) y Dependency Injection (DI)?",
              "3. ¿Qué es un Bean en Spring?",
              "4. ¿Cuáles son los scopes de un Bean?",
              "5. ¿Qué es Spring Boot y qué ventajas ofrece?",
              "6. ¿Cómo crear un REST Controller en Spring?",
              "7. ¿Qué es Spring Data JPA?",
              "8. ¿Qué es @Transactional?",
              "9. ¿Qué es Spring Security?",
              "10. ¿Cómo manejar excepciones en Spring?"
            ],
            "contentFile": "content/entrevistas/ent-spring/ent-spring-top-10.html"
          },
          {
            "id": "ent-spring-top-50",
            "title": "Top 50 Preguntas Frecuentes",
            "content": "Las 50 preguntas más frecuentes en entrevistas técnicas de Spring Framework",
            "sections": [
              "Las 50 Preguntas Más Frecuentes de Spring",
              "Spring Core (1-15)",
              "Spring MVC (16-25)",
              "Spring Data (26-35)",
              "Spring Security (36-45)",
              "Testing (46-50)"
            ],
            "contentFile": "content/entrevistas/ent-spring/ent-spring-top-50.html"
          },
          {
            "id": "ent-spring-top-100",
            "title": "Top 100 Preguntas Completas",
            "content": "Las 100 preguntas más completas para dominar entrevistas de Spring Framework",
            "sections": [
              "Las 100 Preguntas Completas de Spring",
              "Spring Boot Avanzado (51-65)",
              "Spring Cloud (66-80)",
              "Arquitectura y Mejores Prácticas (81-100)"
            ],
            "contentFile": "content/entrevistas/ent-spring/ent-spring-top-100.html"
          }
        ]
      },
      {
        "id": "typescript",
        "title": "TypeScript",
        "icon": "fa-solid fa-file-code",
        "lessons": [
          {
            "id": "ts-top-10",
            "title": "Top 10 Preguntas Esenciales",
            "content": "Las 10 preguntas más importantes y frecuentes en entrevistas de TypeScript",
            "sections": [
              "Las 10 Preguntas Más Importantes de TypeScript",
              "1. ¿Qué es TypeScript y qué ventajas ofrece sobre JavaScript?",
              "2. ¿Qué es el sistema de tipos de TypeScript? Tipos básicos",
              "3. ¿Qué son las Interfaces y los Type Aliases? ¿Cuándo usar cada uno?",
              "4. ¿Qué son los Generics (Genéricos) en TypeScript?",
              "5. ¿Qué son los Union Types e Intersection Types?",
              "6. ¿Qué es Type Narrowing (reducción de tipos)?",
              "7. ¿Qué son los Decoradores en TypeScript?",
              "8. ¿Qué son los Utility Types de TypeScript?",
              "9. ¿Qué es el tsconfig.json y cuáles son sus opciones más importantes?",
              "10. ¿Qué son los Enums y cuándo usarlos?"
            ],
            "contentFile": "content/entrevistas/typescript/ts-top-10.html"
          },
          {
            "id": "ts-top-20",
            "title": "Top 20 Preguntas Frecuentes",
            "content": "Las 20 preguntas más frecuentes en entrevistas de TypeScript para desarrolladores intermedios",
            "sections": [
              "Las 20 Preguntas Más Frecuentes de TypeScript",
              "1. ¿Qué es TypeScript y qué ventajas ofrece sobre JavaScript?",
              "2. ¿Qué son los tipos básicos y la inferencia de tipos?",
              "3. ¿Cuándo usar interface vs type?",
              "4. ¿Cómo funcionan los Generics?",
              "5. ¿Qué son los Union Types e Intersection Types?",
              "6. ¿Qué es Type Narrowing?",
              "7. ¿Qué son los Utility Types más importantes?",
              "8. ¿Cómo funcionan los Enums?",
              "9. ¿Qué son los Decoradores?",
              "10. ¿Cómo funciona el tsconfig.json?",
              "11. ¿Qué son los Mapped Types?",
              "12. ¿Qué son los Conditional Types?",
              "13. ¿Qué son los Template Literal Types?",
              "14. ¿Cómo tipar funciones y callbacks en TypeScript?",
              "15. ¿Cómo funcionan las clases en TypeScript?",
              "16. ¿Qué son los Namespaces y Módulos?",
              "17. ¿Cómo usar TypeScript con APIs asíncronas?",
              "18. ¿Qué son los Declaration Files (.d.ts)?",
              "19. ¿Cómo hacer Type Assertions y cuándo usarlas?",
              "20. ¿Cómo integrar TypeScript en un proyecto real?"
            ],
            "contentFile": "content/entrevistas/typescript/ts-top-20.html"
          },
          {
            "id": "ts-top-50",
            "title": "Top 50 Preguntas Completas",
            "content": "Las 50 preguntas más completas para entrevistas de TypeScript de nivel avanzado",
            "sections": [
              "Las 50 Preguntas Completas de TypeScript",
              "1. ¿Qué es TypeScript y qué ventajas ofrece?",
              "2. ¿Cuáles son los tipos primitivos de TypeScript?",
              "3. ¿Qué es la inferencia de tipos?",
              "4. ¿Qué diferencia hay entre any y unknown?",
              "5. ¿Qué es never?",
              "6. ¿Interface vs Type Alias?",
              "7. ¿Qué son los Generics?",
              "8. ¿Qué son los Union Types?",
              "9. ¿Qué son los Intersection Types?",
              "10. ¿Qué es Type Narrowing?",
              "11. ¿Qué son los Utility Types principales?",
              "12. ¿Qué son los Mapped Types?",
              "13. ¿Qué son los Conditional Types?",
              "14. ¿Qué son los Template Literal Types?",
              "15. ¿Cómo funcionan los Decoradores?",
              "16. ¿Qué son los keyof y typeof operators?",
              "17. ¿Qué es el tipo infer?",
              "18. ¿Qué son los Index Signature types?",
              "19. ¿Cómo tipar correctamente funciones y callbacks?",
              "20. ¿Cómo funcionan las clases en TypeScript?",
              "21. ¿Qué es el Structural Typing (duck typing)?",
              "22. ¿Qué son los Readonly y const assertions?",
              "23. ¿Qué es el Optional Chaining y Nullish Coalescing con tipos?",
              "24. ¿Cómo funcionan los módulos en TypeScript?",
              "25. ¿Qué son los Declaration Files y @types?",
              "26. ¿Cómo manejar errores de forma tipada?",
              "27. ¿Qué son los Mixins en TypeScript?",
              "28. ¿Qué son los Branded Types?",
              "29. ¿Cómo usar TypeScript con React?",
              "30. ¿Cómo usar TypeScript con Node.js / Express?",
              "31. ¿Qué son los Abstract Classes?",
              "32. ¿Qué son los Symbol y unique symbol?",
              "33. ¿Cómo configurar paths y aliases en tsconfig?",
              "34. ¿Qué es el strict mode y qué activa?",
              "35. ¿Cómo hacer Discriminated Unions avanzados?",
              "36. ¿Qué son los Variadic Tuple Types?",
              "37. ¿Cómo hacer validación en runtime con TypeScript?",
              "38. ¿Qué es el patrón Builder en TypeScript?",
              "39. ¿Cómo funcionan los Iterators y Generators en TypeScript?",
              "40. ¿Qué es el patrón Repository con TypeScript?",
              "41. ¿Cómo tipar correctamente el estado de Redux?",
              "42. ¿Qué son los Proxy Types y cómo usarlos?",
              "43. ¿Cómo usar TypeScript con bases de datos (TypeORM/Prisma)?",
              "44. ¿Qué son los Weak Types y Exact Types?",
              "45. ¿Cómo hacer testing con TypeScript?",
              "46. ¿Qué es el satisfies operator?",
              "47. ¿Qué son los Accessor decorators y Auto-accessors?",
              "48. ¿Cómo optimizar el rendimiento de compilación de TypeScript?",
              "49. ¿Cómo migrar un proyecto de JavaScript a TypeScript?",
              "50. ¿Cuáles son las mejores prácticas de TypeScript en producción?"
            ],
            "contentFile": "content/entrevistas/typescript/ts-top-50.html"
          }
        ]
      }
    ]
  },
  {
    "id": "ingles",
    "title": "Inglés",
    "icon": "fa-solid fa-language",
    "color": "#84cc16",
    "subcategories": [
      {
        "id": "basico",
        "title": "Básico (A1-A2)",
        "icon": "fa-solid fa-seedling",
        "lessons": [
          {
            "id": "ing-fundamentos-sonido",
            "title": "01. Fundamentos del Sonido y Comprensión",
            "content": "Reconocimiento de sonidos, connected speech, reducciones y entonación básica",
            "sections": [
              "Módulo 1: Sonido del Inglés Real",
              "Módulo 2: Escucha Inicial Guiada"
            ],
            "contentFile": "content/ingles/basico/ing-fundamentos-sonido.html"
          },
          {
            "id": "ing-comunicacion-basica",
            "title": "02. Comunicación Básica Inmediata",
            "content": "Saludos, expresiones esenciales y presentaciones personales",
            "sections": [
              "Módulo 3: Saludos y Expresiones Esenciales",
              "Módulo 4: Presentaciones Personales"
            ],
            "contentFile": "content/ingles/basico/ing-comunicacion-basica.html"
          },
          {
            "id": "ing-estructura-base",
            "title": "03. Estructura Base del Idioma",
            "content": "Pronombres personales y verbo BE en uso práctico",
            "sections": [
              "Módulo 5: Pronombres Personales",
              "Módulo 6: Verbo BE (Uso Práctico)"
            ],
            "contentFile": "content/ingles/basico/ing-estructura-base.html"
          },
          {
            "id": "ing-vocabulario-esencial",
            "title": "04. Vocabulario Esencial",
            "content": "Vocabulario núcleo y verbos más frecuentes del inglés",
            "sections": [
              "Módulo 7: Vocabulario Núcleo",
              "Módulo 8: Verbos Más Frecuentes"
            ],
            "contentFile": "content/ingles/basico/ing-vocabulario-esencial.html"
          },
          {
            "id": "ing-chunks-frases",
            "title": "05. Chunks y Frases Reales",
            "content": "Frases funcionales, expresiones naturales y colocaciones básicas",
            "sections": [
              "Módulo 9: Frases Funcionales",
              "Módulo 10: Expresiones Naturales",
              "Módulo 11: Colocaciones Básicas"
            ],
            "contentFile": "content/ingles/basico/ing-chunks-frases.html"
          },
          {
            "id": "ing-preguntas-respuestas",
            "title": "06. Preguntas y Respuestas",
            "content": "Preguntas WH, preguntas cerradas y respuestas naturales",
            "sections": [
              "Módulo 12: Preguntas WH",
              "Módulo 13: Preguntas Cerradas (Yes/No)",
              "Módulo 14: Respuestas Naturales"
            ],
            "contentFile": "content/ingles/basico/ing-preguntas-respuestas.html"
          },
          {
            "id": "ing-comunicacion-contexto",
            "title": "07. Comunicación en Contexto",
            "content": "Rutina diaria, compras, restaurante y direcciones",
            "sections": [
              "Módulo 15: Rutina Diaria",
              "Módulo 16: Compras y Dinero",
              "Módulo 17: Comida y Restaurante",
              "Módulo 18: Direcciones y Lugares"
            ],
            "contentFile": "content/ingles/basico/ing-comunicacion-contexto.html"
          },
          {
            "id": "ing-listening-progresivo",
            "title": "08. Listening Progresivo",
            "content": "Comprensión básica, específica y técnica de shadowing",
            "sections": [
              "Módulo 19: Comprensión Básica",
              "Módulo 20: Comprensión Específica",
              "Módulo 21: Repetición y Shadowing"
            ],
            "contentFile": "content/ingles/basico/ing-listening-progresivo.html"
          },
          {
            "id": "ing-speaking-guiado",
            "title": "09. Speaking Guiado",
            "content": "Repetición controlada, sustitución, mini diálogos y producción libre",
            "sections": [
              "Módulo 22: Repetición Controlada",
              "Módulo 23: Sustitución de Palabras",
              "Módulo 24: Mini Diálogos",
              "Módulo 25: Producción Libre Básica"
            ],
            "contentFile": "content/ingles/basico/ing-speaking-guiado.html"
          },
          {
            "id": "ing-frases-no-literales",
            "title": "10. Frases No Literales",
            "content": "Expresiones comunes y phrasal verbs básicos",
            "sections": [
              "Módulo 26: Expresiones Comunes",
              "Módulo 27: Phrasal Verbs Básicos"
            ],
            "contentFile": "content/ingles/basico/ing-frases-no-literales.html"
          },
          {
            "id": "ing-consolidacion",
            "title": "11. Consolidación del Aprendizaje",
            "content": "Recuperación activa y repetición espaciada",
            "sections": [
              "Módulo 28: Recuperación Activa",
              "Módulo 29: Repetición Espaciada"
            ],
            "contentFile": "content/ingles/basico/ing-consolidacion.html"
          },
          {
            "id": "ing-produccion-final",
            "title": "12. Producción Final",
            "content": "Presentaciones básicas, roleplays y evaluación funcional",
            "sections": [
              "Módulo 30: Presentaciones Básicas",
              "Módulo 31: Roleplays Completos",
              "Módulo 32: Evaluación Funcional",
              "<i class=\"fa-solid fa-chart-column\"></i> Resumen del Nivel Básico"
            ],
            "contentFile": "content/ingles/basico/ing-produccion-final.html"
          }
        ]
      }
    ]
  },
  {
    "id": "recursos",
    "title": "Recursos",
    "icon": "fa-solid fa-box-open",
    "color": "#14b8a6",
    "order": 1,
    "subcategories": [
      {
        "id": "docs-oficiales",
        "title": "Documentación Oficial",
        "icon": "fa-solid fa-book-open",
        "lessons": [
          {
            "id": "rec-docs-lenguajes",
            "title": "Documentación de Lenguajes",
            "content": "Enlaces directos a la documentación oficial de los lenguajes más usados.",
            "sections": [
              "Lenguajes Web y Generales"
            ],
            "contentFile": "content/recursos/docs-oficiales/rec-docs-lenguajes.html"
          },
          {
            "id": "rec-docs-frameworks",
            "title": "Documentación de Frameworks",
            "content": "Documentación oficial de los frameworks y librerías más populares.",
            "sections": [
              "Frontend y Backend"
            ],
            "contentFile": "content/recursos/docs-oficiales/rec-docs-frameworks.html"
          }
        ]
      },
      {
        "id": "herramientas",
        "title": "Herramientas",
        "icon": "fa-solid fa-screwdriver-wrench",
        "lessons": [
          {
            "id": "rec-tools-editores",
            "title": "Editores, Terminal y Git",
            "content": "Herramientas esenciales para escribir código, usar la terminal y controlar versiones.",
            "sections": [
              "Editores e IDEs",
              "Terminal, Git y colaboración"
            ],
            "contentFile": "content/recursos/herramientas/rec-tools-editores.html"
          },
          {
            "id": "rec-tools-dev",
            "title": "Bases de Datos, APIs y Diseño",
            "content": "Clientes de BD, pruebas de APIs, diagramas y recursos de diseño.",
            "sections": [
              "Bases de Datos y APIs",
              "Diagramas y Diseño"
            ],
            "contentFile": "content/recursos/herramientas/rec-tools-dev.html"
          }
        ]
      },
      {
        "id": "practica",
        "title": "Práctica",
        "icon": "fa-solid fa-dumbbell",
        "lessons": [
          {
            "id": "rec-practica-ejercicios",
            "title": "Ejercicios de Programación",
            "content": "Plataformas para practicar algoritmos, katas y retos de código.",
            "sections": [
              "Retos y Algoritmos"
            ],
            "contentFile": "content/recursos/practica/rec-practica-ejercicios.html"
          },
          {
            "id": "rec-practica-proyectos",
            "title": "Proyectos e Ideas",
            "content": "Ideas y plataformas para construir proyectos reales y armar tu portafolio.",
            "sections": [
              "Construye para aprender"
            ],
            "contentFile": "content/recursos/practica/rec-practica-proyectos.html"
          }
        ]
      },
      {
        "id": "comunidades",
        "title": "Comunidades",
        "icon": "fa-solid fa-users",
        "lessons": [
          {
            "id": "rec-comunidades-foros",
            "title": "Foros y Preguntas",
            "content": "Dónde preguntar dudas técnicas y encontrar respuestas confiables.",
            "sections": [
              "Pregunta bien, encuentra rápido"
            ],
            "contentFile": "content/recursos/comunidades/rec-comunidades-foros.html"
          },
          {
            "id": "rec-comunidades-blogs",
            "title": "Blogs, Noticias y YouTube",
            "content": "Mantente al día con blogs técnicos, newsletters y canales recomendados.",
            "sections": [
              "Lee y mira contenido de calidad"
            ],
            "contentFile": "content/recursos/comunidades/rec-comunidades-blogs.html"
          }
        ]
      }
    ]
  }
]
};

const STATS = {
  "lessons": "408",
  "languages": "7",
  "frameworks": "9",
  "diagrams": "27"
};
