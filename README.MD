# 🏎️ API de Fórmula 1 - Minimal API

Uma API REST minimalista construída com **Fastify** e **TypeScript** que fornece informações sobre times e pilotos de Fórmula 1.

## 🚀 Características

- **Fastify**: Framework web rápido e eficiente para Node.js
- **TypeScript**: Tipagem estática para maior confiabilidade do código
- **CORS habilitado**: Acesso cross-origin para integração frontend
- **Logging automático**: Logs estruturados para debugging
- **Estrutura modular**: Código organizado em módulos separados

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Minimal_api
```

2. Instale as dependências:
```bash
npm install
```

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
# Modo desenvolvimento com hot-reload
npm run start:watch

# Modo desenvolvimento simples
npm run start:dev
```

### Produção
```bash
# Build do projeto
npm run dist

# Executar versão compilada
npm run start:dist
```

## 🌐 Endpoints da API

### Times
- `GET /times` - Lista todos os times de F1
- `GET /times/:id` - Busca um time específico por ID

### Pilotos
- `GET /drivers` - Lista todos os pilotos
- `GET /drivers/:id` - Busca um piloto específico por ID

## 📊 Estrutura de Dados

### Time
```typescript
{
  id: number,
  name: string,
  members: Array<{
    id: number,
    name: string
  }>
}
```

### Piloto
```typescript
{
  id: number,
  name: string
}
```

## 🏗️ Estrutura do Projeto

```
src/
├── data/
│   ├── drivers.ts      # Dados dos pilotos
│   └── times.ts        # Dados dos times
├── server.ts           # Servidor principal
└── tsconfig.json       # Configuração TypeScript
```

## 🔧 Tecnologias Utilizadas

- **Fastify**: Framework web para Node.js
- **TypeScript**: Superset JavaScript com tipagem
- **CORS**: Middleware para Cross-Origin Resource Sharing
- **tsx**: Executor TypeScript para desenvolvimento
- **tsup**: Bundler para produção

## 📝 Scripts Disponíveis

- `npm run start:dev` - Inicia o servidor em modo desenvolvimento
- `npm run start:watch` - Inicia o servidor com hot-reload
- `npm run dist` - Compila o projeto para produção
- `npm run start:dist` - Executa a versão compilada

## 🌍 Configuração

O servidor roda na porta **3333** por padrão. Para alterar, modifique o arquivo `src/server.ts`.


## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👨‍💻 Autor

Desenvolvido com ❤️ para demonstrar uma API minimalista com Fastify e TypeScript.

---

**Status**: 🟢 Funcionando  
**Versão**: 1.0.0  
**Última atualização**: Dezembro 2024
