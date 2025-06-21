# Composables - Gerenciamento de Imagens

## useGalleryImages

Este composable centraliza o gerenciamento de todas as imagens do site, organizadas por categorias e utilizando imagens locais da pasta `public/img`.

### Categorias Disponíveis

- **family**: Imagens para atividades familiares
- **relax**: Imagens para relaxamento e contemplação
- **fun**: Imagens para diversão e esportes
- **culinary**: Imagens gastronômicas

### Como Usar

```js
// Importar o composable
const { getAllImages, getImagesByCategory, getImageById } = useGalleryImages();

// Obter todas as imagens
const allImages = getAllImages();

// Obter imagens por categoria
const familyImages = getImagesByCategory("family");
const relaxImages = getImagesByCategory("relax");
const funImages = getImagesByCategory("fun");
const culinaryImages = getImagesByCategory("culinary");

// Obter uma imagem específica por ID
const specificImage = getImageById("family-1");
```

### Estrutura dos Dados

Cada imagem possui a seguinte estrutura:

```js
{
  id: 'unique-id',           // ID único da imagem
  image: '/img/...',         // Caminho para a imagem local
  title: 'Título',           // Título da imagem
  description: 'Descrição',  // Descrição detalhada
  category: 'Categoria',     // Categoria da imagem
  alt: 'Texto alternativo'   // Texto alternativo para acessibilidade
}
```

### Vantagens

1. **Centralização**: Todas as imagens gerenciadas em um local
2. **Eliminação de Repetição**: Sem duplicação de dados
3. **Imagens Locais**: Melhor performance e controle
4. **Organização**: Categorização clara por tipo de conteúdo
5. **Facilidade de Manutenção**: Adicionar/editar imagens em um só lugar

### Como Adicionar Novas Imagens

1. Adicione a imagem na pasta `public/img/`
2. Edite o composable `useGalleryImages.js`
3. Adicione o novo objeto na categoria apropriada
4. Use o composable nos componentes que precisam da imagem

### Exemplo de Uso em Componentes

```vue
<script setup>
// Para obter todas as imagens (carrossel)
const { getAllImages } = useGalleryImages();
const galleryImages = getAllImages();

// Para obter imagens específicas por categoria
const { getImagesByCategory } = useGalleryImages();
const familyImages = getImagesByCategory("family");

// Para seções de experiências (mais estruturado)
const { getSectionImages, openLightboxByRole } = useExperienceImages();
const familyImages = getSectionImages("family");
// Uso: familyImages.primary, familyImages.secondary, etc.
</script>
```

## useExperienceImages

Composable específico para a seção de experiências, que oferece estrutura mais organizada:

### Estrutura das Seções

Cada seção tem 4 roles de imagens:

- **primary**: Imagem principal (posição col1-top)
- **secondary**: Imagem secundária (posição col1-bottom)
- **highlight**: Imagem destaque (posição col2-top)
- **accent**: Imagem de apoio (posição col2-bottom)

### Como usar:

```vue
<template>
  <img
    :src="familyImages.primary?.image"
    :alt="familyImages.primary?.alt"
    @click="openLightboxByRole('family', 'primary')"
  />
</template>

<script setup>
const { getSectionImages, openLightboxByRole } = useExperienceImages();
const familyImages = getSectionImages("family");
</script>
```

### Vantagens:

- **Sem índices**: Não quebra ao remover imagens
- **Semântico**: Nomes descritivos (primary, secondary, etc.)
- **Flexível**: Fácil trocar posições sem quebrar o código
- **Maintível**: Alterações centralizadas
