# Odin-Etch-a-Sketch 🎨

Este projeto é uma implementação simples de um Etch-a-Sketch usando HTML, CSS e JavaScript. Ele permite aos usuários desenhar em uma grade ajustável e redefinir o desenho com um botão de reset. O projeto é destinado a qualquer pessoa interessada em aprender ou praticar desenvolvimento front-end básico.

## Índice

- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Personalização](#personalização)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autores](#autores)
- [Reconhecimentos](#reconhecimentos)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```plaintext
Etch-a-Sketch/
├── src/
│   ├── index.html                 # Página inicial
│   ├── pages/                     # Pasta para futuras páginas (atualmente vazia)
│   ├── css/
│   │   └── style.css              # Arquivo de estilos personalizados
│   ├── images/                    # Pasta para imagens
│   └── js/
│       └── script.js              # Script JavaScript
└── README.md                      # Arquivo README com informações sobre o projeto
```

## Tecnologias Utilizadas

- **HTML5**: Estruturação e conteúdo das páginas.
- **CSS3**: Estilização e layout responsivo do site.
- **Google Fonts**: Fontes customizadas para uma estética moderna.
- **JavaScript**: Para funcionalidades e interatividade.

## Funcionalidades

- Desenhe em uma grade ajustável.
- Alteração dinâmica do tamanho da grade.
- Redefinir o desenho com o botão de reset.
- Animações suaves ao passar o mouse sobre os quadrados da grade.

## Como Usar

Instruções passo a passo sobre como configurar e executar o projeto localmente.

```sh
# Clone este repositório
git clone https://github.com/usuario/projeto.git

# Entre no diretório do projeto
cd Etch-a-Sketch

# Abra o arquivo index.html no navegador
```

## Personalização

Para alterar as cores e estilos, edite o arquivo `style.css` localizado em `src/css/`.

```css
:root {
  --primary-color: #2600ff;
  --secondary-color: #ff0000;
  --background-color: #f4f4f4;
  --game-bg-color: #c7c3dd;
  --text-color: #000;
  --border-radius-game: 2rem;
  --border-radius-button: 5%;
  --border-radius-reset: 50%;
  --button-size: 4rem;
}
```

## Contribuição

Explique como outras pessoas podem contribuir para o projeto.

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Autores

- **Erick Araujo** - _Trabalho inicial_ - [Seu GitHub](https://github.com/iErickAraujo)

## Reconhecimentos

- Inspirações, agradecimentos especiais, etc.
