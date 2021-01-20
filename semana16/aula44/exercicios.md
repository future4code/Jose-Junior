## a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUE (002, 'Gloria Pires', 1200000, '1963-08-23', 'female');
```

## b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

# o erro se deu por que tentamos incluir um novo dado usando um primary ja existente na nassa tabela.

``` 
-- falvava colocar os nomes das colunas a serem adicionadas.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

```
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Veronica",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
