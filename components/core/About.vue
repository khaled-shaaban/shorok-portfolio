<script setup>
const { $anime } = useNuxtApp()

const animateBox = () => {
  $anime({ targets: '#about_title', opacity: 1, translateY: 0, duration: 300, easing: 'linear' })
  $anime({ targets: '#about_content', opacity: 1, translateY: 0, duration: 600, delay: 400, easing: 'linear' })
  $anime({ targets: '#about_image', opacity: 1, duration: 1600, delay: 200, easing: 'linear' })
}

onMounted(() => {
  // Set up Intersection Observer
  const title = document.getElementById('about_title')
  const caption = document.getElementById('about_content')

  const box = document.getElementById('about')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        title.style.opacity = 0
        caption.style.opacity = 0

        title.style.transform = 'translateY(250px)'
        caption.style.transform = 'translateY(250px)'

        // Trigger the animation
        animateBox()
      }
    })
  }, {
    threshold: 0.2 // Trigger when 50% of the section is in the viewport
  })

  // Observe the section
  observer.observe(box)
})
</script>
<template>
  <section id="about" class="pt-20">
    <div class="container mx-auto px-6">
      <Icon class="d-block m-auto" name="fluent-mdl2:insights" size="62" />
      <h2 id="about_title" class="text-4xl font-bold text-center mb-8">About Me</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div id="about_image">
          <img src="@/assets/images/about-5.png" alt="Fitness Coach" class="rounded-lg shadow-lg">
        </div>
        <div id="about_content">
          <p class="text-lg mb-4">
            <Icon name="ic:round-insights" size="20" style="color:#ffb636" class="mx-2" />
            With over 10 years of experience in the fitness industry, I specialize in helping
            clients achieve their fitness goals through personalized training programs and nutrition plans.</p>
          <p class="text-lg mb-4">
            <Icon name="octicon:goal-24" size="20" style="color:#ffb636" class="mx-2" />
            My approach is rooted in science, discipline, and a passion for helping others transform
            their lives.</p>
          <p class="text-lg"> 
            <Icon name="bi:stars" size="20" style="color:#ffb636" class="mx-2" />
            Proven track record of guiding clients to achieve their fitness goals, utilizing a holistic approach
            to health and wellness. Committed to inspiring and motivating individuals to reach their full potential and cultivate a
            sustainable, healthy lifestyle.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#about_title,
#about_content {
  opacity: 0;
  transform: translateY(50px);
}
#about_image {
  opacity: 0;
}

@media (max-width: 767px) {
  #about {
    padding-bottom: 30px;
  }
}
</style>