<script setup>
import { useGallery } from '~/store/useGallery'

const galleryStore = useGallery()
galleryStore.fetchSections()

</script>

<template>
  <section class='gallery-nav'>
    <h1 class='gallery-nav__title'>Разделы галереи</h1>

		<Social />

		<GalleryNavigate :sections="galleryStore.sections"/>

  </section>
</template>

<style lang="scss">

.gallery-nav {
	display: flex;
	flex-direction: column;
	height: 100vh;

	.gallery-navigate {
		padding: 60px 30px 30px 30px;
		height: 70vh;
		max-height: 100vh;

		&__card {
			&.about {
				border-radius: 20px;
			}
		}
	}
	.social {
		z-index: 15;
	}

  &__title {
    @include visually-hidden;
  }
  &__links {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
  }
  &__item {
    width: 100%;
    height: 25%;
    display: flex;
    flex-grow: 1;
    text-align: start;
    padding: 1rem;
    padding-left: 20px;

    color: $white;
    font-size: 1.2rem;

    transition: $time-transition;

    &-title {
      margin-top: auto;
      margin-right: 20px;
      text-shadow: -1px -1px 2px $dark-purple;
    }
    &-arrow {
      margin-top: auto;
      margin-left: 50%;
      flex-grow: 1;
      opacity: 0;
      transform: rotate(180deg);
      text-align: end;

      @include title-shadow;
      
      transition: $accent-time-transition;
    }

    &:hover {
      height:40%;

      & .gallery-nav__item-arrow {
        opacity: 1;
        margin-left: 0;
      }
    }


  }

	@include md-desktop {
		.gallery-navigate {
			max-height: 100vh;
			padding: 60px 30px 30px 30px;
		}

	}
	@include sm-tablets {
		.gallery-navigate {
			padding: 50px 20px 20px 20px;
		}
		.social {
			margin-top: 30px;
		}
	}
	@include sm-mobile {
		.gallery-navigate {
			height: 100vh;
		}
	}
	@include ems-mobile {
		.gallery-navigate {
			&__link {
				justify-content: center;
			}
		}
	}
}
</style>