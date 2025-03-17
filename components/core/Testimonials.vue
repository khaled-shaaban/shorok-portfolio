<script setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
</script>
<template>
  <section id="testimonials" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <ImgComparisonSlider>
            <img slot="first" src="@/assets/images/before_1.jpg" height="476px" />
            <img slot="second" src="@/assets/images/after_1.jpeg" height="476px" />
          </ImgComparisonSlider>
          <p class="text-lg mb-4">"The best decision I ever made was hiring this coach. I've never felt better!"</p>
          <p class="text-gray-400">- Khaled</p>
        </div>
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="@/assets/images/testomonials-2.png" class="mb-3" />
          <p class="text-lg mb-4">"Working with Shorok has been life-changing! I never thought I could achieve my weight loss goals, but her guidance, support, and expertise made all the difference."</p>
          <p class="text-gray-400">- Basimah</p>
        </div>
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">          
          <img src="@/assets/images/testomonials-3.jpg" height="476px" />
          <p class="text-lg mb-4">"We only felt motivated and dedicated to the workout when we were working out with Coach Shorok! She's a true inspiration"</p>
          <p class="text-gray-400">- Haya, Moatsem, Laila</p>
        </div>
      </div>
    </div>
  </section>
</template>