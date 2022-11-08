### EXERCICIO 1
a) VARCHAR: Delimita o numero maximo de caracteres que podem ser utilizados.
PRIMARI KEY: chave unica na tabela.
NOT NULL: o valor tem que ser obrigatoriamente preenchido.
DATE: represeta a data.

b) SHOW DATABASES: retorna o nome da base de dados.
SHOW TABLES: retorna as tebelas criadas.

c) Retorna o tipo de dados de cada linha.

### EXERCICIO 2

a) A query é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Gloria Pires",
    1200000,
    "1963-08-23",
    "female"
    );
```
b) Ao tentar criar o novo usuario com o mesmo id, retorna o erro 1062, que mostra que o valor da chave primaria esta duplicado.
c) Estava faltando o campo "gender"
d) Estava faltando o campo "name"
e) A data de nascimento nao estava entre aspas.

### EXERCICIO 3
a) A query é:
```
SELECT * FROM Actor WHERE gender = "female";
```
b) A query é:
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```
c) A query é:
```
SELECT * from Actor WHERE gender = "invalid";
```
d) A query é:
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```
e) Ao executar o comando retornou a atriz e nao gerou nenhum erro.

### EXERCICIO 4

a) Encontrar usuarios que começem com a letra A ou J e com salario maior que 300000.
b) A query é:
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```
c) A query é:
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```
d) A query é:
```
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
```
### Exercicio 5
a) O tipo TEXT é uma string de tamanho máximo 65.535 caracteres.
A query é:
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)
```
b) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```
c) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```
d) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona flor e seus dois maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```
e) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```
### EXERCICIO 6
a) A query é:
```
SELECT id, title, rating FROM Movie WHERE id = "004";
```
b) A query é:
```
SELECT * FROM Movie WHERE title = "Deus é Brasileiro";
```
c) A query é:
```
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
```
### EXERCICIO 7
a) A query é:
```
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```
b) A query é:
```
SELECT * FROM Movie
WHERE title LIKE "%dois%" OR
      synopsis LIKE "%animada%";
```
c) A query é:
```
SELECT * FROM Movie
WHERE release_Date < "2020-05-04"
```
d) A query é:
```
SELECT * FROM Movie
WHERE release_Date < "2020-05-04" AND 
      (title LIKE "%voce%" OR
      synopsis LIKE "%confusões%") AND rating > 7;
```






