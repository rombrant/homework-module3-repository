<template lang="pug">
.app 
    header.header.admin__header
      .admin__panel
        .admin__panel-avatar
          img(src='../../images/content/user.jpg').avatar.admin__avatar
        span.admin__title Roman Safin
        span.admin__description Панель администрирования
      .admin__btn
        a.admin__btn-link Выйти
    nav.nav__works
      ul.works__list
        -
          var works = [
                        {
                          name:'обо мне',
                          link:'/skills'
                        },{
                          name:'работы', 
                          link:'/works'
                        }, 
                        {
                          name:'отзывы', 
                          link:'/reviews'
                        }
                      ]
        each work in works
          li.works__list-item
            router-link(to=`/administrator`+`${work.link}`).works__list-item-link #{work.name}
    .active__block
      router-view
</template>

<script>


</script>

<style lang="pcss">

</style>