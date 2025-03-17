<template>
  <section id="services" class="py-10 bg-gray-900">
    <div class="container mx-auto px-6">
      <Icon name="hugeicons:body-part-muscle" size="62" class="d-block m-auto" />
      <h2 class="text-4xl font-bold text-center mb-8">What I Do</h2>
      <swiper-container 
        class="px-30"
        :slides-per-view="1" 
        :speed="500"
        :loop="true" 
        :space-between="30"
        :css-mode="true"
        :breakpoints="{
          768: {
            slidesPerView: 3,
          },
        }"
        :autoplay="{
          delay: 2000,
        }"
      >
        <swiper-slide>
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-bold mb-4">Personal Training</h3>
            <p class="text-lg">One-on-one sessions tailored to your fitness level and goals.</p>
            <!-- <img src="@/assets/images/services-fitness-instructor.jpg" class="rounded-lg mt-20" /> -->
            <video autoplay muted loop class="rounded-lg mt-20">
              <source src="@/assets/images/personal-training.webm" type="video/mp4">
            </video>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-bold mb-4">Nutrition Plans</h3>
            <p class="text-lg">Customized meal plans to fuel your body and optimize results.</p>
            <img src="@/assets/images/services-nutrition.jpg" class="rounded-lg mt-20" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-bold mb-4">Online Coaching</h3>
            <p class="text-lg">Online virtual personalized coaching for clients worldwide.</p>
            <img src="@/assets/images/services-online-coaching.jpg" class="rounded-lg mt-20" />
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-bold mb-4">Aerobics</h3>
            <p class="text-lg">Get fit, have fun, and dance your way to a healthier you.</p>
            <img src="@/assets/images/services-aerobic.jpg" class="rounded-lg mt-20" />
          </div>
        </swiper-slide> -->
        <swiper-slide>
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-bold mb-4">Body Combat</h3>
            <p class="text-lg">Unleash your inner warrior, torch calories, and build strength.</p>
            <!-- <img src="@/assets/images/services-body-combat.jpg" class="rounded-lg mt-20" /> -->
            <video autoplay muted loop class="rounded-lg mt-20">
              <source src="@/assets/images/services-body-combat.webm" type="video/mp4">
            </video>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      </div>
    </div>
  </section>
</template>