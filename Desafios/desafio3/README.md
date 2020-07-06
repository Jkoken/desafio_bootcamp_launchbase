# Desafios - Série 3

## Desafio 3 - 1
* Nesse desafio deve-se criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html da Série 2 dos Desafios (no caso, 2 - 3), implementar um arquivo padrão `layout.njk` para reaproveitamento de código (utilizando o `Nunjucks`) e a criação de um arquivo para servir de página de erro 404.

```
server.use(function(req, res) {
  res.status(404).render("not-found");
});
```


## Desafio 3 - 2
* Nesse desafio deve-se atualizar os arquivos com as informações dos cursos e descrições de forma dinâmica com o `Nunjucks`.



## Desafio 3 - 3
* Nesse desafio deve-se criar uma página de descrição de cada curso que deve ser chamada ao clicar no card específico.
* A rota também será a `/courses`, porém o `id` do curso será passado via `route params` (`/courses/id_do_curso`), Utilizando o `req.params` para recuperar o `id` fornecido na rota.

```
server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  return res.send(`O id fornecido na rota é: ${id}`);
});
```
