<template>
  <section id="contact" class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-8">Find Me On Social Media</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="instagram-page">
          <a href="https://www.instagram.com/saheb.shorok" target="_blank">
            <img src="@/assets/images/instagrampage.png" />
          </a>
        </div>
        <div class="grid grid-cols-1 gap-8 social-links-wrapper text-center">
          <p class="email">shorok@email.com</p>
          <a class="phone" href="tel:00971528776788">+971 52 877 6788</a>
          <div class="social-links">
            <a href="https://www.instagram.com/shorokalateky" target="blank">
              <Icon name="skill-icons:instagram" size="72" />
            </a>
            <a href="https://www.facebook.com/shorok.alateky" target="blank">
              <Icon name="devicon:facebook" size="72" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-links-wrapper {
  align-items: center;
  .social-links {
    display: flex;
    justify-content: center;
  }
  .email, .phone {
    margin: 0;
    font-size: 32px;
  }
  a {
    display: inline-block;
    transition: 0.2s ease;
    text-align: center;
    margin: 0px 30px;
    &:hover {
      transform: scale(1.1);
    }
  }
}
.instagram-page {
  img {
    border-radius: 0.5rem;
    box-shadow: 0px 10px 15px rgba(0,0,0,.5);
  }
}
</style>