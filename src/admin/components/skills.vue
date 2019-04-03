<template lang="pug">
.container
      .active__block
        span.title__panel Блок «Обо мне»
        .title__add 
          button.custom-btn +
          span Добавить группу
      ul.current__list
        li.current__list-tusk.admin-technologies
          .tusk__item.tusk__item-technologies
            .tusk__item__label
              input(placeholder="Название новой группы").tusk__item__label-input
              button.tusk__item__label-edit 
              button.tusk__item__label-close 
            .tusk__item__content
            .tusk__item__editor
              input(placeholder="Новый навык").tusk__item__editor-name
              input(placeholder="100%").tusk__item__editor-percent
              button.custom-btn +
        li.current__list-tusk.admin-technologies
          .tusk__item.tusk__item-technologies
            .tusk__item__label
              .tusk__item__label-input Workflow
              button.tusk__item__label-edit 
              button.tusk__item__label-close 
            .tusk__item__content
              .tusk__item__content-technologies
                span.tusk__item__content-skill Git
                span.tusk__item__content-percent 100%
                span.tusk__item__content-editor
                span.tusk__item__content-remover
              .tusk__item__content-technologies
                span.tusk__item__content-skill Html5
                span.tusk__item__content-percent 50%
                span.tusk__item__content-editor
                span.tusk__item__content-remover
              .tusk__item__content-technologies
                span.tusk__item__content-skill CSS3
                span.tusk__item__content-percent 90%
                span.tusk__item__content-editor
                span.tusk__item__content-remover
            .tusk__item__editor
              input(placeholder="Новый навык").tusk__item__editor-name
              input(placeholder="100%").tusk__item__editor-percent
              button.custom-btn +
        li.current__list-tusk.admin-technologies
          .tusk__item.tusk__item-technologies
            .tusk__item__label
              .tusk__item__label-input Frontend
              button.tusk__item__label-edit 
              button.tusk__item__label-close 
            .tusk__item__content
              .tusk__item__content-technologies
                span.tusk__item__content-skill Webpack
                span.tusk__item__content-percent 100%
                span.tusk__item__content-editor
                span.tusk__item__content-remover
              .tusk__item__content-technologies
                span.tusk__item__content-skill Javascript
                span.tusk__item__content-percent 80%
                span.tusk__item__content-editor
                span.tusk__item__content-remover
              .tusk__item__content-technologies
                span.tusk__item__content-skill Vue.js
                span.tusk__item__content-percent 100%
                span.tusk__item__content-editor
                span.tusk__item__content-remover
            .tusk__item__editor
              input(placeholder="Новый навык").tusk__item__editor-name
              input(placeholder="100%").tusk__item__editor-percent
              button.custom-btn +
</template>
<script>


</script>
<style lang="pcss">
</style>