<template lang="pug">
.container
  .active__block
    span.title__panel Блок «Отзывы»
  .container.container-editor
    span.title__panel.title__panel-editor Новый отзыв
    .container.container-editor__constructor
      .editor__upload.feedback__editor
        .editor__upload-background
          span.editor__upload-info 
          button.editor__upload-downloader Добавить фото
      .editor__description.feedback__editor
        .editor__description-title
          .editor__description-text 
            span.editor__description-text-content Имя Автора
            input.editor__description-input
          .editor__description-text 
            span.editor__description-text-content Титул Автора
            input.editor__description-input
        .editor__description-text.editor__description-text-textarea
          span.editor__description-text-content Отзыв
          textarea.editor__description-textarea
        .editor__description-controls
          button.editor__description-controls-cancel Отменить
          button.editor__description-controls-saved Сохранить
  ul.current__list.current__feedback__list
    li.current__list-tusk.admin-works.adder
      button.tusk__item.tusk__item-add-work
        span.tusk__item-add-work-title Добавить отзыв
    li.current__list-tusk.admin-works
      .tusk__item.admin-feedback
        img(src='../../images/content/vladimir.jpg').tusk__item-img
        .title
          .title-name Владимир Сабанцев
          .title-about Преподаватель лофтскул
      .tusk__item__content.tusk__item__content-works
        span.tusk__item__content-description Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .tusk__item__content-buttons
          button.tusk__item__content-buttons-editor Править
          button.tusk__item__content-buttons-remover Удалить
    li.current__list-tusk.admin-works
      .tusk__item.admin-feedback
        img(src='../../images/content/vladimir.jpg').tusk__item-img
        .title
          .title-name Владимир Сабанцев
          .title-about Преподаватель лофтскул
      .tusk__item__content.tusk__item__content-works
        span.tusk__item__content-description Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .tusk__item__content-buttons
          button.tusk__item__content-buttons-editor Править
          button.tusk__item__content-buttons-remover Удалить
    li.current__list-tusk.admin-works
      .tusk__item.admin-feedback
        img(src='../../images/content/vladimir.jpg').tusk__item-img
        .title
          .title-name Владимир Сабанцев
          .title-about Преподаватель лофтскул
      .tusk__item__content.tusk__item__content-works
        span.tusk__item__content-description Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .tusk__item__content-buttons
          button.tusk__item__content-buttons-editor Править
          button.tusk__item__content-buttons-remover Удалить
    li.current__list-tusk.admin-works
      .tusk__item.admin-feedback
        img(src='../../images/content/vladimir.jpg').tusk__item-img
        .title
          .title-name Владимир Сабанцев
          .title-about Преподаватель лофтскул
      .tusk__item__content.tusk__item__content-works
        span.tusk__item__content-description Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .tusk__item__content-buttons
          button.tusk__item__content-buttons-editor Править
          button.tusk__item__content-buttons-remover Удалить
</template>
<script>


</script>
<style lang="pcss">
</style>