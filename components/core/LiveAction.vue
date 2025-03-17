<script setup>
const { $anime } = useNuxtApp()
const device = useDevice()

const animateBox = () => {
  $anime({ targets: '.video', opacity: 1, duration: 500, easing: 'linear', delay: 500 })
  $anime({ targets: '#images', opacity: 1, duration: 500, easing: 'linear', delay: 700 })
  $anime({ targets: '.video-sm', opacity: 1, duration: 500, easing: 'linear', delay: 900 })
}

onMounted(() => {
  // Set up Intersection Observer
  const videos = document.querySelectorAll('.video')
  const videos_sm = document.querySelectorAll('.video-sm')
  const images = document.getElementById('images')

  const box = document.getElementById('live_action')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        videos.forEach(video => video.style.opacity = 0)
        videos_sm.forEach(video => video.style.opacity = 0)
        images.style.opacity = 0

        // Trigger the animation
        animateBox()
      }
    })
  }, {
    threshold: 0.3 // Trigger when 50% of the section is in the viewport
  })

  if (!device.isMobile) {
    // Observe the section
    observer.observe(box)
  }
})
</script>
<template>
  <section id="live_action" class="py-20">
    <div class="container mx-auto px-6">
      <Icon name="fxemoji:bolt" size="62" class="d-block m-auto" />
      <h2 class="text-4xl font-bold text-center mb-8">See Me In Action</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
        <div class="video">
          <a href="https://instagram.com" target="_blank">
            <h4>Cardio Workout</h4>
            <video autoplay muted loop>
              <source src="@/assets/images/cardio-conv.webm" type="video/mp4">
            </video>
          </a>
        </div>
        <div id="images" class="grid grid-cols-1">
          <a href="https://instagram.com" target="_blank">
            <h4>Media & Radio</h4>
            <img src="@/assets/images/media.jpg" height="100%" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <h4>Healthy Community</h4>
            <img src="@/assets/images/healthy-community.jpg" />
          </a>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <a href="https://instagram.com" target="_blank">
            <div class="video-sm">
              <h4>Virtual Training</h4>
              <video autoplay muted loop>
                <source src="@/assets/images/online-training.webm" type="video/mp4">
              </video>
            </div>
          </a>
          <a href="https://instagram.com" target="_blank">
            <div class="video-sm">
              <h4>Personal Training</h4>
              <video autoplay muted loop>
                <source src="@/assets/images/personalized-training.webm" type="video/mp4">
              </video>
            </div>
          </a>
          <a href="https://instagram.com" target="_blank">
            <div class="video-sm">
              <h4>Home Workout</h4>
              <video autoplay muted loop>
                <source src="@/assets/images/home-workout.webm" type="video/mp4">
              </video>
            </div>
          </a>
          <a href="https://instagram.com" target="_blank">
            <div class="video-sm">
              <h4>Warmup</h4>
              <video autoplay muted loop>
                <source src="@/assets/images/warmup.webm" type="video/mp4">
              </video>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video {
  height: 550px;
  display: block;
  margin: auto;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  opacity: 0;
  @media (max-width: 767px) {
    opacity: 1;
  }
  video {
    height: 100%;
    width: 100%;
  }
  h4 {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 5px 10px;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));      
  }
}
.video-sm  {
  width: 151px;
  height: 270px;
  display: block;
  margin: auto;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  opacity: 0;
  @media (max-width: 767px) {
    opacity: 1;
  }
  video {
    height: 100%;
    width: 100%;
  }
  h4 {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 5px 10px;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));      
  }
}
#images {
  opacity: 0;
  @media (max-width: 767px) {
    opacity: 1;
  }
  a {
    position: relative;
    img {
      border-radius: 0.5rem;
      width: 430px;
    }
    h4 {
      position: absolute;
      top: 0px;
      left: 0px;
      padding: 5px 10px;
      background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));      
    }
  }
  a:first-of-type {
    margin-bottom: 10px;
  }
}
</style>