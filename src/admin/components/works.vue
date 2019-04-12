<template lang="pug">
.container
  .active__block
    span.title__panel Блок «Работы»
  .container.container-editor
    span.title__panel.title__panel-editor Редактирование Работы
    .container.container-editor__constructor
      .editor__upload
        .editor__upload-background
          span.editor__upload-info Перетащите или загрузите для загрузки изображения
          button.editor__upload-downloader Загрузить
      .editor__description
        .editor__description-text 
          span.editor__description-text-content Название
          input.editor__description-input
        .editor__description-text 
          span.editor__description-text-content Ссылка
          input.editor__description-input
        .editor__description-text.editor__description-text-textarea
          span.editor__description-text-content Описание
          textarea.editor__description-textarea
        .editor__description-text 
          span.editor__description-text-content Добавление тэга
          input.editor__description-input
        ul.tags.tags-editor
          span.tags-technologies Html5
          span.tags-technologies CSS3
          span.tags-technologies Javascript
        .editor__description-controls
          button.editor__description-controls-cancel Отменить
          button.editor__description-controls-saved Сохранить
  ul.current__list
    li.current__list-tusk.admin-works.adder
      button.tusk__item.tusk__item-add-work
        span.tusk__item-add-work-title Добавить работу
    li.current__list-tusk.admin-works
      .tusk__item.tusk__item-works
        img(src='../../images/content/slider-1.jpg').tusk__item-img
        ul.tags
          span.tags-technologies Html5
          span.tags-technologies CSS3
          span.tags-technologies Javascript
      .tusk__item__content.tusk__item__content-works
        span.tusk__item__content-name Сайт школы образования
        span.tusk__item__content-description Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href='#').tusk__item__content-link http://loftschool.ru
        .tusk__item__content-buttons
          button.tusk__item__content-buttons-editor Править
          button.tusk__item__content-buttons-remover Удалить
    li.current__list-tusk.admin-works
      .tusk__item.tusk__item-works
        img(src='../../images/content/slider-2.jpg').tusk__item-img
        ul.tags
          span.tags-technologies Html5
          span.tags-technologies CSS3
          span.tags-technologies Javascript
      .tusk__item__content.tusk__item__content-works
        span.tusk__item__content-name Сайт школы образования
        span.tusk__item__content-description Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href='#').tusk__item__content-link http://loftschool.ru
        .tusk__item__content-buttons
          button.tusk__item__content-buttons-editor Править
          button.tusk__item__content-buttons-remover Удалить
    li.current__list-tusk.admin-works
      .tusk__item.tusk__item-works
        img(src='../../images/content/slider-3.jpg').tusk__item-img
        ul.tags
          span.tags-technologies Html5
          span.tags-technologies CSS3
          span.tags-technologies Javascript
      .tusk__item__content.tusk__item__content-works
        span.tusk__item__content-name Сайт школы образования
        span.tusk__item__content-description Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href='#').tusk__item__content-link http://loftschool.ru
        .tusk__item__content-buttons
          button.tusk__item__content-buttons-editor Править
          button.tusk__item__content-buttons-remover Удалить
    li.current__list-tusk.admin-works
      .tusk__item.tusk__item-works
        img(src='../../images/content/slider-4.jpg').tusk__item-img
        ul.tags
          span.tags-technologies Html5
          span.tags-technologies CSS3
          span.tags-technologies Javascript
      .tusk__item__content.tusk__item__content-works
        span.tusk__item__content-name Сайт школы образования
        span.tusk__item__content-description Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href='#').tusk__item__content-link http://loftschool.ru
        .tusk__item__content-buttons
          button.tusk__item__content-buttons-editor Править
          button.tusk__item__content-buttons-remover Удалить
    li.current__list-tusk.admin-works
      .tusk__item.tusk__item-works
        img(src='../../images/content/slider-5.jpg').tusk__item-img
        ul.tags
          span.tags-technologies Html5
          span.tags-technologies CSS3
          span.tags-technologies Javascript
      .tusk__item__content.tusk__item__content-works
        span.tusk__item__content-name Сайт школы образования
        span.tusk__item__content-description Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href='#').tusk__item__content-link http://loftschool.ru
        .tusk__item__content-buttons
          button.tusk__item__content-buttons-editor Править
          button.tusk__item__content-buttons-remover Удалить
</template>
<script>


</script>
<style lang="pcss">
</style>