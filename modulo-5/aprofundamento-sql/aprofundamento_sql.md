### EXERCICIO 1
A. Apaga a coluna salario
B. Altera a coluna "gender"para "sex" e delimita os caracteres em no max 6.
C. Altera a coluna "gender" para aceitar ate 255 caracteres.
D. 
    ```
    ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
    ```
### EXERCICIO 2
A. 
    ```
    UPDATE Actor
    SET name = "Moacyr Franco"
    WHERE id = "003";
    ```
B. 
    ```
    UPDATE Actor
    SET name = "JULIANA PAES"
    WHERE id = "005";
    ```
C.
    ```
    UPDATE Actor
    SET 
    name = "Moacyr Franco",
    birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
    WHERE id = "005";
    ```
D. Não retornou erro, mas, nao houve nenhuma alterçao.

### EXERCICIO 3
A. 
    ```
    DELETE FROM Actor WHERE name = "Tony Ramos";
    ```
B. 
    ```
    DELETE FROM Actor
    WHERE
	gender = "male" AND
	salary > 1000000;
    ```
### EXERCICIO 4
A.
    ```
        SELECT MAX(salary) FROM Actor;
    ```
B. 
    ```
    SELECT MIN(salary) FROM Actor WHERE gender = "female";
    ```
C. 
    ```
    SELECT COUNT(*) FROM Actor WHERE gender = "female";
    ```
D. 
    ```
    SELECT SUM(salary) FROM Actor;
    ```
### EXERCICIO 5
A. A query filtrou por genero na tabela de atores e agrupou por tipo de genero.

B.
    ```
    SELECT id name FROM Movie
    ORDER BY id, name DESC;
    ```
C.
    ```
    SELECT * FROM Movie
    ORDER BY salary;
    ```
D.
    ```
    SELECT * FROM Movie
    ORDER BY salary DESC
    LIMIT 3;
    ```
### EXERCICIO 6

A.
    ```
    ALTER TABLE Movie ADD playing_limit_date DATE;
    ```
B.
    ```
    ALTER TABLE Movie CHANGE rating rating FLOAT;
    ```
C.
    ```
    UPDATE Movie
    SET playing_limit_date = "2020-12-31"
    WHERE id = "001";
    ```