<script setup>
const { $anime } = useNuxtApp()
const device = useDevice()

const animateBox = () => {
  $anime({ targets: '#hero_title', opacity: 1, translateX: -250, duration: 300, easing: 'linear' })
  $anime({ targets: '#hero_caption', opacity: 1, translateX: -250, duration: 300, delay: 200, easing: 'linear' })
  $anime({ targets: '.hero-section', opacity: 1, duration: 1000, easing: 'linear' })
}

onMounted(() => {
  // Set up Intersection Observer
  const title = document.getElementById('hero_title')
  const caption = document.getElementById('hero_caption')

  const box = document.querySelector('.hero-section')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        title.style.opacity = 0
        caption.style.opacity = 0

        title.style.transform = 'none'
        caption.style.transform = 'none'

        // Trigger the animation
        animateBox()
      }
    })
  }, {
    threshold: 0.5 // Trigger when 50% of the section is in the viewport
  })

  if (!device.isMobile) {
    // Observe the section
    observer.observe(box)
  }
})
</script>
<template>
  <section class="h-screen flex items-center justify-center bg-cover bg-center hero-section">
    <div class="text-center">
      <h1 id="hero_title" class="text-6xl font-bold mb-4">
        Transform Your Body
      </h1>
      <p id="hero_caption" class="text-xl mb-8">Professional Fitness Coaching Tailored to Your Goals</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  background-image: url("@/assets/images/banner-2.png");
  background-size: cover;
  opacity: 0;
  @media (max-width: 767px) {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    opacity: 1;
    #hero_title, #hero_caption {
      transform: none;
      opacity: 1;
    }
  }
}

#hero_title,
#hero_caption {
  opacity: 0;
}
</style>