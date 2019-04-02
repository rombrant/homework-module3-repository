<template lang="pug">
  .app 
    header.header.admin__header
      .admin__panel
        .admin__panel-avatar
          img(src='../images/content/user.jpg').avatar.admin__avatar
        span.admin__title Roman Safin
        span.admin__description Панель администрирования
      .admin__btn
        a.admin__btn-link Выйти
    nav.nav__works
      ul.works__list
        -
          var works = ['обо мне', 'работы', 'отзывы']
        each work in works
          li.works__list-item
            a.works__list-item-link #{work}
    
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
            img(src='../images/content/slider-1.jpg').tusk__item-img
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
            img(src='../images/content/slider-2.jpg').tusk__item-img
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
            img(src='../images/content/slider-3.jpg').tusk__item-img
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
            img(src='../images/content/slider-4.jpg').tusk__item-img
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
            img(src='../images/content/slider-5.jpg').tusk__item-img
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
            img(src='../images/content/vladimir.jpg').tusk__item-img
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
            img(src='../images/content/vladimir.jpg').tusk__item-img
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
            img(src='../images/content/vladimir.jpg').tusk__item-img
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
            img(src='../images/content/vladimir.jpg').tusk__item-img
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import '../styles/blocks/*.pcss';
</style>