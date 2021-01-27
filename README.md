
# Github Client

## Objetivo
Uma interface para a API do Github (V3) com as consultas de repositórios e favoritos do usuário.
Está aplicação segue as especificações do escopo que pode ser econtrado através deste link: https://github.com/recrutamento-compasso/api-github-interview

## Especificações Técnicas
- [X] React 17.0.1
- [X] React Router 5.2
- [X] Material UI 4.11
- [X] Hook Forms 6.11
- [X] YUP 0.29

## Teste
- [X] Jest 26.0
- [X] Stryker Mutator 4.4

## Básico

### Execução

Para executar a aplicação pode-se utilizar o gerenciadores de pacotes:

- Execução com **NPM**
- Execução com **YARN**

#### NPM

Para executar a aplicação com o **NPM**, será necessário executar o comando na pasta principal do projeto:
```
npm i
```
ou
```
npm install
```

Após o carregamento, execute o seguinte comando:
```
npm start
```

#### YARN

Para executar a aplicação com o **YARN**, será necessário executar o comando na pasta principal do projeto:
```
yarn install
```

Após o carregamento, execute o seguinte comando:
```
yarn start
```

#### Jenkins - CI/CD 
##### Guias de instalação
Guia de instalação do Docker:
```
https://www.docker.com/get-started
```

Guia de instalação do Jenkins:
```
https://www.jenkins.io/doc/book/installing/
```

Guia de integração com Jenkins e SonarQube:
```
https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-jenkins/
```

##### Execução
Para executar a aplicação com o Jenkins, será necessário primeiramente executar o **"docker-compose.yml"**, que contem uma imagem do "SonarQube" e uma do "Postgres" (servirá como base para o SonarQube). 
O arquivo pode ser encontrado na pasta principal do projeto.

Após, execute o Jenkins e crie um novo projeto do tipo **Pipeline**. 
Dentro do projeto, no menu lateral esquerdo, clique em "Configurar". Após procure o tópico **"Pipeline"** e no campo **"Definition"**, selecione a opção **"Pipeline script from SCM"** e preencha as informações requisitadas.
No campo **"Script Path"**, preencha o valor com **".jenkinsfile"**.

Após, retorne ao menu principal do projeto e execute o "Pipeline".

### Teste de Mutação

O teste de mutação pode ser executado com o comando:
```sh
stryker run
```
